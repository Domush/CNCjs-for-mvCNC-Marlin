
import ensureArray from 'ensure-array';
import * as parser from 'gcode-parser';
import Toolpath from 'gcode-toolpath';
import _ from 'lodash';
import map from 'lodash/map';
import SerialConnection from '../../lib/SerialConnection';
import EventTrigger from '../../lib/EventTrigger';
import Feeder from '../../lib/Feeder';
import Sender, { SP_TYPE_CHAR_COUNTING } from '../../lib/Sender';
import Workflow, {
    WORKFLOW_STATE_IDLE,
    WORKFLOW_STATE_PAUSED,
    WORKFLOW_STATE_RUNNING
} from '../../lib/Workflow';
import delay from '../../lib/delay';
import ensurePositiveNumber from '../../lib/ensure-positive-number';
import evaluateAssignmentExpression from '../../lib/evaluate-assignment-expression';
import logger from '../../lib/logger';
import translateExpression from '../../lib/translate-expression';
import config from '../../services/configstore';
import monitor from '../../services/monitor';
import taskRunner from '../../services/taskrunner';
import { getOutlineGcode } from '../../lib/outlineService';
import store from '../../store';
import {
    GLOBAL_OBJECTS as globalObjects,
    WRITE_SOURCE_CLIENT,
    WRITE_SOURCE_FEEDER
} from '../constants';
import GrblRunner from './GrblRunner';
import {
    GRBL,
    GRBL_ACTIVE_STATE_RUN,
    GRBL_ACTIVE_STATE_HOLD,
    GRBL_REALTIME_COMMANDS,
    GRBL_ALARMS,
    GRBL_ERRORS,
    GRBL_SETTINGS, GRBL_ACTIVE_STATE_HOME
} from './constants';
import { METRIC_UNITS } from '../../../app/constants';
import FlashingFirmware from '../../lib/Firmware/Flashing/firmwareflashing';
import ApplyFirmwareProfile from '../../lib/Firmware/Profiles/ApplyFirmwareProfile';
import { determineMachineZeroFlagSet, determineMaxMovement, getAxisMaximumLocation } from '../../lib/homing';

// % commands
const WAIT = '%wait';
const PREHOOK_COMPLETE = '%pre_complete';
const POSTHOOK_COMPLETE = '%post_complete';

const log = logger('controller:Grbl');
const noop = _.noop;

class GrblController {
    type = GRBL;

    // CNCEngine
    engine = null;

    // Sockets
    sockets = {};

    // Connection
    connection = null;

    connectionEventListener = {
        data: (data) => {
            log.silly(`< ${data}`);
            this.runner.parse('' + data);
        },
        close: (err) => {
            this.ready = false;
            if (err) {
                log.warn(`Disconnected from serial port "${this.options.port}":`, err);
            }

            this.close(err => {
                // Remove controller from store
                const port = this.options.port;
                store.unset(`controllers[${JSON.stringify(port)}]`);

                // Destroy controller
                this.destroy();
            });
        },
        error: (err) => {
            this.ready = false;
            if (err) {
                log.error(`Unexpected error while reading/writing serial port "${this.options.port}":`, err);
            }
        }
    };

    // Grbl
    controller = null;

    ready = false;

    initialized = false;

    state = {};

    settings = {};

    toolChangeContext = {};

    queryTimer = null;

    actionMask = {
        queryParserState: {
            state: false, // wait for a message containing the current G-code parser modal state
            reply: false // wait for an `ok` or `error` response
        },
        queryStatusReport: false,

        // Respond to user input
        replyParserState: false, // $G
        replyStatusReport: false // ?
    };

    actionTime = {
        queryParserState: 0,
        queryStatusReport: 0,
        senderFinishTime: 0
    };

    // Event Trigger
    event = null;

    // Feeder
    feeder = null;

    // Sender
    sender = null;

    // Shared context
    sharedContext = {};

    // Workflow
    workflow = null;

    // Homing information
    homingStarted = false;
    homingFlagSet = false;

    constructor(engine, options) {
        if (!engine) {
            throw new Error('engine must be specified');
        }
        this.engine = engine;

        const { port, baudrate, rtscts } = { ...options };
        this.options = {
            ...this.options,
            port: port,
            baudrate: baudrate,
            rtscts: rtscts
        };

        // Connection
        this.connection = new SerialConnection({
            path: port,
            baudRate: baudrate,
            rtscts: rtscts,
            writeFilter: (data) => {
                const line = data.trim();

                if (!line) {
                    return data;
                }

                { // Grbl settings: $0-$255
                    const r = line.match(/^(\$\d{1,3})=([\d\.]+)$/);
                    if (r) {
                        const name = r[1];
                        const value = Number(r[2]);
                        if ((name === '$13') && (value >= 0) && (value <= 65535)) {
                            const nextSettings = {
                                ...this.runner.settings,
                                settings: {
                                    ...this.runner.settings.settings,
                                    [name]: value ? '1' : '0'
                                }
                            };
                            this.runner.settings = nextSettings; // enforce change
                        }
                    }
                }

                return data;
            }
        });

        // Event Trigger
        this.event = new EventTrigger((event, trigger, commands) => {
            log.debug(`EventTrigger: event="${event}", trigger="${trigger}", commands="${commands}"`);
            if (trigger === 'system') {
                taskRunner.run(commands);
            } else {
                this.command('gcode', commands);
            }
        });

        // Feeder
        this.feeder = new Feeder({
            dataFilter: (line, context) => {
                // Remove comments that start with a semicolon `;`
                line = line.replace(/\s*;.*/g, '').trim();
                context = this.populateContext(context);

                if (line[0] === '%') {
                    // %wait
                    if (line === WAIT) {
                        log.debug('Wait for the planner to empty');
                        return 'G4 P0.5'; // dwell
                    }
                    if (line === PREHOOK_COMPLETE) {
                        log.debug('Finished Pre-hook');
                        this.feeder.hold({ data: '%toolchange' });
                        this.emit('toolchange:preHookComplete');
                        return '(Pre-Hook complete)';
                    }
                    if (line === POSTHOOK_COMPLETE) {
                        log.debug('Finished Post-hook, resuming program');
                        this.workflow.resume();
                        return '(Post-Hook complete)';
                    }

                    // Expression
                    // %_x=posx,_y=posy,_z=posz
                    evaluateAssignmentExpression(line.slice(1), context);
                    return '';
                }

                // line="G0 X[posx - 8] Y[ymax]"
                // > "G0 X2 Y50"
                line = translateExpression(line, context);
                const data = parser.parseLine(line, { flatten: true });
                const words = ensureArray(data.words);

                { // Program Mode: M0, M1
                    const programMode = _.intersection(words, ['M0', 'M1'])[0];
                    if (programMode === 'M0') {
                        log.debug('M0 Program Pause');
                        this.feeder.hold({ data: 'M0' }); // Hold reason
                    } else if (programMode === 'M1') {
                        log.debug('M1 Program Pause');
                        this.feeder.hold({ data: 'M1' }); // Hold reason
                    }
                }

                // More aggressive updating of spindle modals for safety
                const spindleCommand = _.intersection(words, ['M3', 'M4'])[0];
                if (spindleCommand) {
                    this.updateSpindleModal(spindleCommand);
                }

                // // M6 Tool Change
                // if (_.includes(words, 'M6')) {
                //     log.debug('M6 Tool Change');
                //     this.feeder.hold({ data: 'M6' }); // Hold reason

                //     // Surround M6 with parentheses to ignore
                //     // unsupported command error. If we nuke the whole
                //     // line, then we'll likely lose other commands that
                //     // share the line, like a T~.  This makes tool
                //     // changes complicated.
                //     line = line.replace('M6', '(M6)');
                // }

                return line;
            }
        });
        this.feeder.on('data', (line = '', context = {}) => {
            if (this.isClose()) {
                log.error(`Serial port "${this.options.port}" is not accessible`);
                return;
            }

            if (this.runner.isAlarm()) {
                this.feeder.reset();
                this.emit('workflow:state', this.workflow.state); // Propogate alarm code to UI
                log.warn('Stopped sending G-code commands in Alarm mode');
                return;
            }

            line = String(line).trim();
            if (line.length === 0) {
                return;
            }

            this.emit('serialport:write', line + '\n', {
                ...context,
                source: WRITE_SOURCE_FEEDER
            });

            this.connection.write(line + '\n');
            log.silly(`> ${line}`);
        });
        this.feeder.on('hold', noop);
        this.feeder.on('unhold', noop);

        // Sender
        this.sender = new Sender(SP_TYPE_CHAR_COUNTING, {
            // Deduct the buffer size to prevent from buffer overrun
            bufferSize: (128 - 8), // The default buffer size is 128 bytes
            dataFilter: (line, context) => {
                // Remove comments that start with a semicolon `;`
                line = line.replace(/\s*;.*/g, '').trim();
                context = this.populateContext(context);

                const { sent, received } = this.sender.state;

                if (line[0] === '%') {
                    // %wait
                    if (line === WAIT) {
                        log.debug(`Wait for the planner to empty: line=${sent + 1}, sent=${sent}, received=${received}`);
                        this.sender.hold({ data: WAIT }); // Hold reason
                        return 'G4 P0.5'; // dwell
                    }

                    // Expression
                    // %_x=posx,_y=posy,_z=posz
                    evaluateAssignmentExpression(line.slice(1), context);
                    return '';
                }

                // line="G0 X[posx - 8] Y[ymax]"
                // > "G0 X2 Y50"
                line = translateExpression(line, context);
                const data = parser.parseLine(line, { flatten: true });
                const words = ensureArray(data.words);

                { // Program Mode: M0, M1
                    const programMode = _.intersection(words, ['M0', 'M1'])[0];
                    if (programMode === 'M0') {
                        log.debug(`M0 Program Pause: line=${sent + 1}, sent=${sent}, received=${received}`);
                        // Workaround for Carbide files - prevent M0 early from pausing program
                        if (sent > 10) {
                            this.workflow.pause({ data: 'M0' });
                            this.emit('workflow:pause', { data: 'M0' });
                        }
                        return line.replace('M0', '(M0)');
                    } else if (programMode === 'M1') {
                        log.debug(`M1 Program Pause: line=${sent + 1}, sent=${sent}, received=${received}`);
                        this.workflow.pause({ data: 'M1' });
                        this.emit('workflow:pause', { data: 'M1' });
                        return line.replace('M1', '(M1)');
                    }
                }

                const machineProfile = store.get('machineProfile');
                //const preferences = store.get('preferences');

                /*if (line) {
                    const regex = /([^NGMXYZIJKFPRST%\-?\.?\d+\.?\s])/gi;
                    if (regex.test(line)) {
                        if (preferences === undefined) {
                            this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                            return line;
                        }
                        if (preferences && preferences.showLineWarnings) {
                            this.workflow.pause({ data: line });
                            this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                        } if (!preferences && !preferences.showLineWarnings) {
                            this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                        }
                    }
                }*/

                if (_.includes(words, 'G28') && !machineProfile.endstops) {
                    line = line.replace('G28', '(G28)');
                }

                // More aggressive updating of spindle modals for safety
                const spindleCommand = _.intersection(words, ['M3', 'M4'])[0];
                if (spindleCommand) {
                    this.updateSpindleModal(spindleCommand);
                }

                /* Emit event to UI for toolchange handler */
                if (_.includes(words, 'M6')) {
                    log.debug(`M6 Tool Change: line=${sent + 1}, sent=${sent}, received=${received}`);

                    const { toolChangeOption } = this.toolChangeContext;

                    // Handle specific cases for macro and pause, ignore is default and comments line out with no other action
                    if (toolChangeOption === 'Pause') {
                        this.workflow.pause({ data: 'M6' });
                        this.emit('gcode:toolChange', {
                            line: sent + 1,
                            block: line,
                            option: toolChangeOption
                        });
                    } else if (toolChangeOption === 'Code') {
                        this.workflow.pause({ data: 'M6' });
                        this.emit('toolchange:start');
                        this.runPreChangeHook(this.populateContext());
                    }

                    line = line.replace('M6', '(M6)');
                }

                return line;
            }
        });
        this.sender.on('data', (line = '', context = {}) => {
            if (this.isClose()) {
                log.error(`Serial port "${this.options.port}" is not accessible`);
                return;
            }

            // if (this.workflow.state === WORKFLOW_STATE_IDLE) {
            //     log.error(`Unexpected workflow state: ${this.workflow.state}`);
            //     return;
            // }

            line = String(line).trim();
            if (line.length === 0) {
                log.warn(`Expected non-empty line: N=${this.sender.state.sent}`);
                return;
            }

            this.emit('serialport:read', line);

            this.connection.write(line + '\n');
            log.silly(`> ${line}`);
        });
        this.sender.on('hold', noop);
        this.sender.on('unhold', noop);
        this.sender.on('start', (startTime) => {
            this.actionTime.senderFinishTime = 0;
        });

        this.sender.on('end', (finishTime) => {
            this.actionTime.senderFinishTime = finishTime;
        });

        // Workflow
        this.workflow = new Workflow();
        this.workflow.on('start', (...args) => {
            this.emit('workflow:state', this.workflow.state);
            this.sender.rewind();
        });
        this.workflow.on('stop', (...args) => {
            this.emit('workflow:state', this.workflow.state);
            this.sender.rewind();
        });
        this.workflow.on('pause', (...args) => {
            this.emit('workflow:state', this.workflow.state);

            if (args.length > 0) {
                const reason = { ...args[0] };
                this.sender.hold(reason); // Hold reason
            } else {
                this.sender.hold();
            }
        });
        this.workflow.on('resume', (...args) => {
            this.emit('workflow:state', this.workflow.state);

            // Reset feeder prior to resume program execution
            this.feeder.reset();

            // Resume program execution
            this.sender.unhold();
            this.sender.next();
        });

        // Grbl
        this.runner = new GrblRunner();

        this.runner.on('raw', noop);

        this.runner.on('status', (res) => {
            if (this.homingStarted) {
                this.homingFlagSet = determineMachineZeroFlagSet(res, this.settings);
                this.emit('homing:flag', this.homingFlagSet);
                this.homingStarted = false;
            }

            // console.log(`runner on status ${res}`);
            this.actionMask.queryStatusReport = false;

            if (this.actionMask.replyStatusReport) {
                this.actionMask.replyStatusReport = false;
                this.emit('serialport:read', res.raw);
            }

            // Check if the receive buffer is available in the status report
            const rx = Number(_.get(res, 'buf.rx', 0)) || 0;
            if (rx > 0) {
                // Do not modify the buffer size when running a G-code program
                if (this.workflow.state !== WORKFLOW_STATE_IDLE) {
                    return;
                }

                // Check if the streaming protocol is character-counting streaming protocol
                if (this.sender.sp.type !== SP_TYPE_CHAR_COUNTING) {
                    return;
                }

                // Check if the queue is empty
                if (this.sender.sp.dataLength !== 0) {
                    return;
                }

                // Deduct the receive buffer length to prevent from buffer overrun
                const bufferSize = (rx - 8); // TODO
                if (bufferSize > this.sender.sp.bufferSize) {
                    this.sender.sp.bufferSize = bufferSize;
                }
            }
        });

        this.runner.on('ok', (res) => {
            if (this.actionMask.queryParserState.reply) {
                if (this.actionMask.replyParserState) {
                    this.actionMask.replyParserState = false;
                    this.emit('serialport:read', res.raw);
                }
                this.actionMask.queryParserState.reply = false;
                return;
            }

            const { hold, sent, received } = this.sender.state;
            if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
                this.emit('serialport:read', res.raw);
                if (hold && (received + 1 >= sent)) {
                    log.debug(`Continue sending G-code: hold=${hold}, sent=${sent}, received=${received + 1}`);
                    this.sender.unhold();
                }
                this.sender.ack();
                this.sender.next();
                return;
            }

            if ((this.workflow.state === WORKFLOW_STATE_PAUSED) && (received < sent)) {
                this.emit('serialport:read', res.raw);
                if (!hold) {
                    log.error('The sender does not hold off during the paused state');
                }
                if (received + 1 >= sent) {
                    log.debug(`Stop sending G-code: hold=${hold}, sent=${sent}, received=${received + 1}`);
                }
                this.sender.ack();
                this.sender.next();
                return;
            }

            this.emit('serialport:read', res.raw);

            // Feeder
            this.feeder.ack();
            this.feeder.next();
        });

        this.runner.on('error', (res) => {
            const code = Number(res.message) || undefined;
            const error = _.find(GRBL_ERRORS, { code: code });

            if (this.workflow.state === WORKFLOW_STATE_RUNNING || this.workflow.state === WORKFLOW_STATE_PAUSED) {
                const { lines, received } = this.sender.state;
                const line = lines[received] || '';

                const preferences = store.get('preferences') || { showLineWarnings: false };
                this.emit('serialport:read', `error:${code} (${error.message})`);

                if (error) {
                    if (preferences.showLineWarnings === false) {
                        this.emit('gcode_error', error, code, line);
                        this.workflow.pause({ err: `error:${code} (${error.message})` });
                    }

                    if (preferences.showLineWarnings) {
                        this.workflow.pause({ err: `error:${code} (${error.message})` });
                        this.emit('workflow:state', this.workflow.state, { validLine: false, line: `${lines.length} ${line}` });
                        return;
                    }
                } else {
                    this.emit('serialport:read', res.raw);
                }
                this.sender.ack();
                this.sender.next();

                return;
            }

            if (error) {
                // Grbl v1.1
                this.emit('serialport:read', `error:${code} (${error.message})`);
            } else {
                // Grbl v0.9
                this.emit('serialport:read', res.raw);
            }

            // Feeder
            this.feeder.ack();
            this.feeder.next();
        });

        this.runner.on('alarm', (res) => {
            const code = Number(res.message) || undefined;
            const alarm = _.find(GRBL_ALARMS, { code: code });

            if (alarm) {
                // Grbl v1.1
                this.emit('serialport:read', `ALARM:${code} (${alarm.message})`);
                // Force propogation of current state on alarm
                this.state = this.runner.state;

                this.emit('controller:state', GRBL, this.state);
            } else {
                // Grbl v0.9
                this.emit('serialport:read', res.raw);
            }
        });

        this.runner.on('parserstate', (res) => {
            //finished searching gCode file for errors
            if (this.sender.state.finishTime > 0 && this.runner.state.status.activeState === 'Check') {
                this.command('gcode', '$c');
                this.workflow.stopTesting();
                this.emit('gcode_error_checking_file', this.sender.state, 'finished');
                return;
            }


            this.actionMask.queryParserState.state = false;
            this.actionMask.queryParserState.reply = true;

            if (this.actionMask.replyParserState) {
                this.emit('serialport:read', res.raw);
            }
        });

        this.runner.on('parameters', (res) => {
            this.emit('serialport:read', res.raw);
        });

        this.runner.on('feedback', (res) => {
            this.emit('serialport:read', res.raw);
        });

        this.runner.on('settings', (res) => {
            const setting = _.find(GRBL_SETTINGS, { setting: res.name });

            if (!res.message && setting) {
                // Grbl v1.1
                this.emit('serialport:read', `${res.name}=${res.value} (${setting.message}, ${setting.units})`);
            } else {
                // Grbl v0.9
                this.emit('serialport:read', res.raw);
            }
        });

        this.runner.on('startup', (res) => {
            this.emit('serialport:read', res.raw);

            // The startup message always prints upon startup, after a reset, or at program end.
            // Setting the initial state when Grbl has completed re-initializing all systems.
            this.clearActionValues();

            // Set ready flag to true when a startup message has arrived
            this.ready = true;

            // Clear sender - for physical buttons
            //this.sender.unload();

            if (!this.initialized) {
                this.initialized = true;

                // Initialize controller
                this.initController();
            }
        });

        this.runner.on('others', (res) => {
            this.emit('serialport:read', res.raw);
        });

        const queryStatusReport = () => {
            // Check the ready flag
            if (!(this.ready)) {
                return;
            }

            const now = new Date().getTime();

            // The status report query (?) is a realtime command, it does not consume the receive buffer.
            const lastQueryTime = this.actionTime.queryStatusReport;
            if (lastQueryTime > 0) {
                const timespan = Math.abs(now - lastQueryTime);
                const toleranceTime = 5000; // 5 seconds

                // Check if it has not been updated for a long time
                if (timespan >= toleranceTime) {
                    log.debug(`Continue status report query: timespan=${timespan}ms`);
                    this.actionMask.queryStatusReport = false;
                }
            }

            if (this.actionMask.queryStatusReport) {
                return;
            }

            if (this.isOpen()) {
                this.actionMask.queryStatusReport = true;
                this.actionTime.queryStatusReport = now;
                this.connection.write('?');
            }
        };

        const queryParserState = _.throttle(() => {
            // Check the ready flag
            if (!(this.ready)) {
                return;
            }

            const now = new Date().getTime();

            // Do not force query parser state ($G) when running a G-code program,
            // it will consume 3 bytes from the receive buffer in each time period.
            if ((this.workflow.state === WORKFLOW_STATE_IDLE) && this.runner.isIdle()) {
                const lastQueryTime = this.actionTime.queryParserState;
                if (lastQueryTime > 0) {
                    const timespan = Math.abs(now - lastQueryTime);
                    const toleranceTime = 10000; // 10 seconds

                    // Check if it has not been updated for a long time
                    if (timespan >= toleranceTime) {
                        log.debug(`Continue parser state query: timespan=${timespan}ms`);
                        this.actionMask.queryParserState.state = false;
                        this.actionMask.queryParserState.reply = false;
                    }
                }
            }

            if (this.actionMask.queryParserState.state || this.actionMask.queryParserState.reply) {
                return;
            }

            if (this.isOpen()) {
                this.actionMask.queryParserState.state = true;
                this.actionMask.queryParserState.reply = false;
                this.actionTime.queryParserState = now;
                this.connection.write('$G\n');
            }
        }, 500);

        this.queryTimer = setInterval(() => {
            if (this.isClose()) {
                // Serial port is closed
                return;
            }

            // Feeder
            if (this.feeder.peek()) {
                this.emit('feeder:status', this.feeder.toJSON());
            }

            // Sender
            if (this.sender.peek()) {
                this.emit('sender:status', this.sender.toJSON());
            }

            const zeroOffset = _.isEqual(
                this.runner.getWorkPosition(this.state),
                this.runner.getWorkPosition(this.runner.state)
            );

            // Grbl settings
            if (this.settings !== this.runner.settings) {
                this.settings = this.runner.settings;
                this.emit('controller:settings', GRBL, this.settings);
                this.emit('Grbl:settings', this.settings); // Backward compatibility
            }

            // Grbl state
            if (this.state !== this.runner.state) {
                this.state = this.runner.state;
                this.emit('controller:state', GRBL, this.state);
                this.emit('Grbl:state', this.state); // Backward compatibility
            }

            // Check the ready flag
            if (!(this.ready)) {
                return;
            }

            // ? - Status Report
            queryStatusReport();

            // $G - Parser State
            queryParserState();

            // Check if the machine has stopped movement after completion
            if (this.actionTime.senderFinishTime > 0) {
                const machineIdle = zeroOffset && this.runner.isIdle();
                const now = new Date().getTime();
                const timespan = Math.abs(now - this.actionTime.senderFinishTime);
                const toleranceTime = 500; // in milliseconds

                if (!machineIdle) {
                    // Extend the sender finish time
                    this.actionTime.senderFinishTime = now;
                } else if (timespan > toleranceTime) {
                    log.silly(`Finished sending G-code: timespan=${timespan}`);

                    this.actionTime.senderFinishTime = 0;

                    // Stop workflow
                    this.command('gcode:stop');
                }
            }
        }, 250);

        // Load file if it exists in CNC engine (AKA it was loaded before connection
    }

    async initController() {
        // $13=0 (report in mm)
        // $13=1 (report in inches)
        this.writeln('$$');

        await delay(50);
        this.event.trigger('controller:ready');
    }

    populateContext(context = {}) {
        // Machine position
        const {
            x: mposx,
            y: mposy,
            z: mposz,
            a: mposa,
            b: mposb,
            c: mposc
        } = this.runner.getMachinePosition();

        // Work position
        const {
            x: posx,
            y: posy,
            z: posz,
            a: posa,
            b: posb,
            c: posc
        } = this.runner.getWorkPosition();

        // Modal group
        const modal = this.runner.getModalGroup();

        // Tool
        const tool = this.runner.getTool();

        return Object.assign(context || {}, {
            // User-defined global variables
            global: this.sharedContext,

            // Bounding box
            xmin: Number(context.xmin) || 0,
            xmax: Number(context.xmax) || 0,
            ymin: Number(context.ymin) || 0,
            ymax: Number(context.ymax) || 0,
            zmin: Number(context.zmin) || 0,
            zmax: Number(context.zmax) || 0,

            // Machine position
            mposx: Number(mposx) || 0,
            mposy: Number(mposy) || 0,
            mposz: Number(mposz) || 0,
            mposa: Number(mposa) || 0,
            mposb: Number(mposb) || 0,
            mposc: Number(mposc) || 0,

            // Work position
            posx: Number(posx) || 0,
            posy: Number(posy) || 0,
            posz: Number(posz) || 0,
            posa: Number(posa) || 0,
            posb: Number(posb) || 0,
            posc: Number(posc) || 0,

            // Modal group
            modal: {
                motion: modal.motion,
                wcs: modal.wcs,
                plane: modal.plane,
                units: modal.units,
                distance: modal.distance,
                feedrate: modal.feedrate,
                program: modal.program,
                spindle: modal.spindle,
                // M7 and M8 may be active at the same time, but a modal group violation might occur when issuing M7 and M8 together on the same line. Using the new line character (\n) to separate lines can avoid this issue.
                coolant: ensureArray(modal.coolant).join('\n'),
            },

            // Tool
            tool: Number(tool) || 0,

            // Global objects
            ...globalObjects,
        });
    }

    clearActionValues() {
        this.actionMask.queryParserState.state = false;
        this.actionMask.queryParserState.reply = false;
        this.actionMask.queryStatusReport = false;
        this.actionMask.replyParserState = false;
        this.actionMask.replyStatusReport = false;
        this.actionTime.queryParserState = 0;
        this.actionTime.queryStatusReport = 0;
        this.actionTime.senderFinishTime = 0;
    }

    destroy() {
        if (this.queryTimer) {
            clearInterval(this.queryTimer);
            this.queryTimer = null;
        }

        if (this.runner) {
            this.runner.removeAllListeners();
            this.runner = null;
        }

        this.sockets = {};

        if (this.connection) {
            this.connection = null;
        }

        if (this.event) {
            this.event = null;
        }

        if (this.feeder) {
            this.feeder = null;
        }

        if (this.sender) {
            this.sender = null;
        }

        if (this.workflow) {
            this.workflow = null;
        }
    }

    get status() {
        return {
            port: this.options.port,
            baudrate: this.options.baudrate,
            rtscts: this.options.rtscts,
            sockets: Object.keys(this.sockets),
            ready: this.ready,
            controller: {
                type: this.type,
                settings: this.settings,
                state: this.state
            },
            feeder: this.feeder.toJSON(),
            sender: this.sender.toJSON(),
            workflow: {
                state: this.workflow.state
            }
        };
    }

    open(callback = noop) {
        const { port, baudrate } = this.options;

        // Assertion check
        if (this.isOpen()) {
            log.error(`Cannot open serial port "${port}"`);
            return;
        }

        this.connection.on('data', this.connectionEventListener.data);
        this.connection.on('close', this.connectionEventListener.close);
        this.connection.on('error', this.connectionEventListener.error);

        this.connection.open((err) => {
            if (err) {
                log.error(`Error opening serial port "${port}":`, err);
                this.emit('serialport:error', { err: err, port: port });
                callback(err); // notify error
                return;
            }

            this.emit('serialport:open', {
                port: port,
                baudrate: baudrate,
                controllerType: this.type,
                inuse: true
            });

            // Emit a change event to all connected sockets
            if (this.engine.io) {
                this.engine.io.emit('serialport:change', {
                    port: port,
                    inuse: true
                });
            }

            callback(); // register controller

            log.debug(`Connected to serial port "${port}"`);

            this.workflow.stop();

            // Clear action values
            this.clearActionValues();
        });
    }

    close(callback) {
        const { port } = this.options;

        // Assertion check
        if (!this.connection) {
            const err = `Serial port "${port}" is not available`;
            callback(new Error(err));
            return;
        }

        // Stop status query
        this.ready = false;

        // Clear initialized flag
        this.initialized = false;

        this.emit('serialport:close', {
            port: port,
            inuse: false
        });

        // Emit a change event to all connected sockets
        if (this.engine.io) {
            this.engine.io.emit('serialport:change', {
                port: port,
                inuse: false
            });
        }

        if (this.isClose()) {
            callback(null);
            return;
        }

        this.connection.removeAllListeners();
        this.connection.close(callback);
    }

    isOpen() {
        return this.connection && this.connection.isOpen;
    }

    isClose() {
        return !(this.isOpen());
    }

    loadFile(gcode, { name }) {
        log.debug(`Loading file '${name}' to controller`);
        this.command('gcode:load', name, gcode);
    }

    addConnection(socket) {
        if (!socket) {
            log.error('The socket parameter is not specified');
            return;
        }

        log.debug(`Add socket connection: id=${socket.id}`);
        this.sockets[socket.id] = socket;

        //
        // Send data to newly connected client
        //
        if (this.isOpen()) {
            socket.emit('serialport:open', {
                port: this.options.port,
                baudrate: this.options.baudrate,
                controllerType: this.type,
                inuse: true
            });
        }
        if (!_.isEmpty(this.settings)) {
            // controller settings
            socket.emit('controller:settings', GRBL, this.settings);
            socket.emit('Grbl:settings', this.settings); // Backward compatibility
        }
        if (!_.isEmpty(this.state)) {
            // controller state
            socket.emit('controller:state', GRBL, this.state);
            socket.emit('Grbl:state', this.state); // Backward compatibility
        }
        if (this.feeder) {
            // feeder status
            socket.emit('feeder:status', this.feeder.toJSON());
        }
        if (this.sender) {
            // sender status
            socket.emit('sender:status', this.sender.toJSON());
            log.info('Emitting Sender');
        }
        if (this.workflow) {
            // workflow state
            socket.emit('workflow:state', this.workflow.state);
        }
    }

    removeConnection(socket) {
        if (!socket) {
            log.error('The socket parameter is not specified');
            return;
        }

        log.debug(`Remove socket connection: id=${socket.id}`);
        this.sockets[socket.id] = undefined;
        delete this.sockets[socket.id];
    }

    emit(eventName, ...args) {
        Object.keys(this.sockets).forEach(id => {
            const socket = this.sockets[id];
            socket.emit(eventName, ...args);
        });
    }

    command(cmd, ...args) {
        const handler = {
            'flash:start': () => {
                let [port] = args;
                if (!port) {
                    this.emit('task:error', 'No port specified - make sure you connect to you device at least once before attempting flashing');
                    return;
                }
                this.close(() => {
                    FlashingFirmware(port);
                });
            },
            'flashing:success': () => {
                let [data] = args;
                this.emit('message', data);
            },
            'flashing:failed': () => {
                let [error] = args;
                this.emit('task:error', error);
            },
            'firmware:recievedProfiles': () => {
                let [files] = args;
                this.emit('task:finish', files);
            },
            'firmware:applyProfileSettings': () => {
                let [nameOfMachine, typeOfMachine, port] = args;
                ApplyFirmwareProfile(nameOfMachine, typeOfMachine, port);
            },
            'firmware:grabMachineProfile': () => {
                // let [values] = args;
                const machineProfile = store.get('machineProfile');
                this.emit('sender:status', machineProfile);
            },
            'gcode:load': () => {
                let [name, gcode, context = {}, callback = noop] = args;
                if (typeof context === 'function') {
                    callback = context;
                    context = {};
                }

                // G4 P0 or P with a very small value will empty the planner queue and then
                // respond with an ok when the dwell is complete. At that instant, there will
                // be no queued motions, as long as no more commands were sent after the G4.
                // This is the fastest way to do it without having to check the status reports.
                const dwell = '%wait ; Wait for the planner to empty';
                const ok = this.sender.load(name, gcode + '\n' + dwell, context);
                if (!ok) {
                    callback(new Error(`Invalid G-code: name=${name}`));
                    return;
                }

                //this.emit('gcode:load', name, gcode, context);
                //this.event.trigger('gcode:load');

                log.debug(`Load G-code: name="${this.sender.state.name}", size=${this.sender.state.gcode.length}, total=${this.sender.state.total}`);

                this.workflow.stop();

                callback(null, this.sender.toJSON());
            },
            'gcode:unload': () => {
                this.workflow.stop();
                this.engine.unload();

                // Sender
                this.sender.unload();

                this.emit('file:unload');
                this.event.trigger('file:unload');
            },
            'start': () => {
                log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
                this.command('gcode:start');
            },
            'gcode:start': () => {
                const [lineToStartFrom] = args;
                const totalLines = this.sender.state.total;


                if (lineToStartFrom && lineToStartFrom <= totalLines) {
                    const { lines = [] } = this.sender.state;
                    const firstHalf = lines.slice(0, lineToStartFrom);
                    let feedRate = 200;
                    let spindleRate = 0;

                    const getWordValue = (token, words) => {
                        for (let wordPair of words) {
                            const [word, value] = wordPair;
                            if (word === token) {
                                return value;
                            }
                        }
                        return 0;
                    };

                    const toolpath = new Toolpath();
                    toolpath.loadFromStringSync(firstHalf.join('\n'), (data) => {
                        const { words, line } = data;
                        if (line.includes('F')) {
                            feedRate = getWordValue('F', words);
                        }
                        if (line.includes('S')) {
                            spindleRate = getWordValue('S', words);
                        }
                    });

                    const modal = toolpath.getModal();
                    const position = toolpath.getPosition();

                    const {
                        x: xVal,
                        y: yVal,
                        z: zVal,
                    } = position;

                    const modalGCode = [];

                    // Move up and then to cut start position
                    modalGCode.push('G0 G90 G21 Z10');
                    modalGCode.push(`G0 G90 G21 X${xVal} Y${yVal}`);
                    modalGCode.push(`G0 G90 G21 Z${zVal}`);
                    // Set modals based on what's parsed so far in the file
                    modalGCode.push(`${modal.units} ${modal.distance} ${modal.arc} ${modal.feedrate} ${modal.wcs} ${modal.plane}`);
                    modalGCode.push(`F${feedRate} S${spindleRate}`);

                    this.command('gcode', modalGCode);
                }

                //Allow the prepend commands to register before resuming job
                setTimeout(() => {
                    this.event.trigger('gcode:start');

                    this.workflow.start();

                    // Feeder
                    this.feeder.reset();

                    // Sender
                    this.sender.next({ lineToStartFrom });
                }, 100);
            },
            'stop': () => {
                log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
                this.command('gcode:stop', ...args);
            },
            // @param {object} options The options object.
            // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
            'gcode:stop': async () => {
                this.event.trigger('gcode:stop');

                this.workflow.stop();

                const [options] = args;
                const { force = false } = { ...options };
                if (force) {
                    let activeState;

                    activeState = _.get(this.state, 'status.activeState', '');
                    if (activeState === GRBL_ACTIVE_STATE_RUN) {
                        this.write('!'); // hold
                    }

                    await delay(500); // delay 500ms

                    activeState = _.get(this.state, 'status.activeState', '');
                    if (activeState === GRBL_ACTIVE_STATE_HOLD) {
                        this.write('\x18'); // ^x
                    }
                }
            },
            'pause': () => {
                log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
                this.command('gcode:pause');
            },
            'gcode:pause': () => {
                this.event.trigger('gcode:pause');

                this.workflow.pause();
                this.write('!');
            },
            'resume': () => {
                log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
                this.command('gcode:resume');
            },
            'gcode:resume': () => {
                this.event.trigger('gcode:resume');

                this.write('~');
                this.workflow.resume();
            },
            'feeder:feed': () => {
                const [commands, context = {}] = args;
                this.command('gcode', commands, context);
            },
            'feeder:start': () => {
                if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
                    return;
                }
                this.write('~');
                this.feeder.unhold();
                this.feeder.next();
            },
            'feeder:stop': () => {
                this.feeder.reset();
            },
            'feedhold': () => {
                this.event.trigger('feedhold');

                this.write('!');
            },
            'cyclestart': () => {
                this.event.trigger('cyclestart');

                this.write('~');
            },
            'statusreport': () => {
                this.write('?');
            },
            'homing': () => {
                this.event.trigger('homing');
                this.homingStarted = true; // Update homing cycle as having started

                this.writeln('$H');
                this.state.status.activeState = GRBL_ACTIVE_STATE_HOME;
                this.emit('controller:state', GRBL, this.state);
            },
            'sleep': () => {
                this.event.trigger('sleep');

                this.writeln('$SLP');
            },
            'unlock': () => {
                this.writeln('$X');
            },
            'reset': () => {
                this.workflow.stop();

                this.feeder.reset();

                this.write('\x18'); // ^x
            },
            'reset:limit': () => {
                this.workflow.stop();
                this.feeder.reset();
                this.write('\x18'); // ^x
                this.writeln('$X');
            },
            // Feed Overrides
            // @param {number} value The amount of percentage increase or decrease.
            //   0: Set 100% of programmed rate.
            //  10: Increase 10%
            // -10: Decrease 10%
            //   1: Increase 1%
            //  -1: Decrease 1%
            'feedOverride': () => {
                const [value] = args;

                if (value === 0) {
                    this.write('\x90');
                } else if (value === 10) {
                    this.write('\x91');
                } else if (value === -10) {
                    this.write('\x92');
                } else if (value === 1) {
                    this.write('\x93');
                } else if (value === -1) {
                    this.write('\x94');
                }
            },
            // Spindle Speed Overrides
            // @param {number} value The amount of percentage increase or decrease.
            //   0: Set 100% of programmed spindle speed
            //  10: Increase 10%
            // -10: Decrease 10%
            //   1: Increase 1%
            //  -1: Decrease 1%
            'spindleOverride': () => {
                const [value] = args;

                if (value === 0) {
                    this.write('\x99');
                } else if (value === 10) {
                    this.write('\x9a');
                } else if (value === -10) {
                    this.write('\x9b');
                } else if (value === 1) {
                    this.write('\x9c');
                } else if (value === -1) {
                    this.write('\x9d');
                }
            },
            // Rapid Overrides
            // @param {number} value A percentage value of 25, 50, or 100. A value of zero will reset to 100%.
            // 100: Set to 100% full rapid rate.
            //  50: Set to 50% of rapid rate.
            //  25: Set to 25% of rapid rate.
            'rapidOverride': () => {
                const [value] = args;

                if (value === 0 || value === 100) {
                    this.write('\x95');
                } else if (value === 50) {
                    this.write('\x96');
                } else if (value === 25) {
                    this.write('\x97');
                }
            },
            'lasertest:on': () => {
                const [power = 0, duration = 0, maxS = 1000] = args;
                const commands = [
                    // https://github.com/gnea/grbl/wiki/Grbl-v1.1-Laser-Mode
                    // The laser will only turn on when Grbl is in a G1, G2, or G3 motion mode.
                    'G1F1 M3 S' + ensurePositiveNumber(maxS * (power / 100))
                ];
                if (duration > 0) {
                    commands.push('G4P' + ensurePositiveNumber(duration));
                    commands.push('M5 S0');
                }
                this.state.parserstate.modal.spindle = 'M3';
                this.emit('controller:state', GRBL, this.state);
                this.command('gcode', commands);
            },
            'lasertest:off': () => {
                const commands = [
                    'M5S0'
                ];
                this.command('gcode', commands);
            },
            'gcode': () => {
                const [commands, context] = args;
                const data = ensureArray(commands)
                    .join('\n')
                    .split(/\r?\n/)
                    .filter(line => {
                        if (typeof line !== 'string') {
                            return false;
                        }

                        return line.trim().length > 0;
                    });

                this.feeder.feed(data, context);

                if (!this.feeder.isPending()) {
                    this.feeder.next();
                }
            },
            'gcode:safe': () => {
                const [commands, prefUnits] = args;
                const deviceUnits = this.state.parserstate.modal.units;
                let code = [];

                if (!deviceUnits) {
                    log.error('Unable to determine device unit modal');
                    return;
                }
                // Force command in preferred units
                if (prefUnits !== deviceUnits) {
                    code.push(prefUnits);
                }
                code = code.concat(commands);
                // return modal to previous state if they were different previously
                if (prefUnits !== deviceUnits) {
                    code = code.concat(deviceUnits);
                }
                this.command('gcode', code);
            },
            'jog:start': () => {
                let [axes, feedrate = 1000, units = METRIC_UNITS] = args;
                //const JOG_COMMAND_INTERVAL = 80;
                let unitModal = (units === METRIC_UNITS) ? 'G21' : 'G20';
                let { $20, $130, $131, $132, $23 } = this.settings.settings;

                let jogFeedrate;
                if ($20 === '1') {
                    $130 = Number($130);
                    $131 = Number($131);
                    $132 = Number($132);

                    // Convert feedrate to metric if working in imperial - easier to convert feedrate and treat everything else as MM than opposite
                    if (units !== METRIC_UNITS) {
                        feedrate = (feedrate * 25.4).toFixed(2);
                        unitModal = 'G21';
                    }

                    const OFFSET = 0.1;
                    const FIXED = 2;

                    //If we are moving on the positive direction, we don't need to subtract
                    //the max travel by it as we are moving towards the zero position, but if
                    //we are moving in the negative direction we need to subtract the max travel
                    //by it to reach the maximum amount in that direction
                    const calculateAxisValue = ({ direction, position, maxTravel }) => {
                        if (position === 0) {
                            return ((maxTravel - OFFSET) * direction).toFixed(FIXED);
                        }

                        if (direction === 1) {
                            return Number(((position * direction) - OFFSET).toFixed(FIXED));
                        } else {
                            return Number(-((maxTravel - position) - OFFSET).toFixed(FIXED));
                        }
                    };


                    let { mpos } = this.state.status;
                    Object.keys(mpos).forEach((axis) => {
                        mpos[axis] = Number(mpos[axis]);
                    });

                    if (this.homingFlagSet) {
                        const [xMaxLoc, yMaxLoc] = getAxisMaximumLocation($23);

                        if (axes.X) {
                            axes.X = determineMaxMovement(Math.abs(mpos.x), axes.X, xMaxLoc, $130);
                        }
                        if (axes.Y) {
                            axes.Y = determineMaxMovement(Math.abs(mpos.y), axes.Y, yMaxLoc, $131);
                        }
                    } else {
                        if (axes.X) {
                            axes.X = calculateAxisValue({ direction: axes.X, position: Math.abs(mpos.x), maxTravel: $130 });
                        }
                        if (axes.Y) {
                            axes.Y = calculateAxisValue({ direction: axes.Y, position: Math.abs(mpos.y), maxTravel: $131 });
                        }
                    }

                    if (axes.Z) {
                        axes.Z = calculateAxisValue({ direction: axes.Z, position: Math.abs(mpos.z), maxTravel: $132 });
                    }
                } else {
                    jogFeedrate = 1000;
                    Object.keys(axes).forEach((axis) => {
                        axes[axis] *= jogFeedrate;
                    });
                }

                axes.F = feedrate;
                if (axes.Z) {
                    axes.F *= 0.8;
                    axes.F = axes.F.toFixed(3);
                }

                const jogCommand = `$J=${unitModal}G91 ` + map(axes, (value, letter) => ('' + letter.toUpperCase() + value)).join(' ');
                this.command('gcode', jogCommand);
            },
            'jog:stop': () => {
                this.feeder.reset();
                this.command('jog:cancel');
                this.feeder.reset();
            },
            'jog:cancel': () => {
                this.command('gcode', '\x85');
            },
            'macro:run': () => {
                let [id, context = {}, callback = noop] = args;
                if (typeof context === 'function') {
                    callback = context;
                    context = {};
                }

                const macros = config.get('macros');
                const macro = _.find(macros, { id: id });

                if (!macro) {
                    log.error(`Cannot find the macro: id=${id}`);
                    return;
                }

                this.event.trigger('macro:run');

                this.command('gcode', macro.content, context);
                callback(null);
            },
            'macro:load': () => {
                let [id, context = {}, callback = noop] = args;
                if (typeof context === 'function') {
                    callback = context;
                    context = {};
                }

                const macros = config.get('macros');
                const macro = _.find(macros, { id: id });

                if (!macro) {
                    log.error(`Cannot find the macro: id=${id}`);
                    return;
                }

                this.event.trigger('macro:load');

                this.command('gcode:load', macro.name, macro.content, context, callback);
            },
            'watchdir:load': () => {
                const [file, callback = noop] = args;
                const context = {}; // empty context

                monitor.readFile(file, (err, data) => {
                    if (err) {
                        callback(err);
                        return;
                    }

                    this.command('gcode:load', file, data, context, callback);
                });
            },
            'machineprofile:load': () => {
                const [machineProfile] = args;

                store.set('machineProfile', machineProfile);
            },
            'settings:updated': () => {
                const [newSettings = {}] = args;

                const currentSettings = store.get('preferences') || {};

                const updated = {
                    ...currentSettings,
                    ...newSettings,
                };

                store.set('preferences', updated);
            },
            'toolchange:context': () => {
                const [context] = args;
                this.toolChangeContext = context;
            },
            'toolchange:pre': () => {
                log.debug('Starting pre hook');
                this.runPreChangeHook();
            },
            'toolchange:post': () => {
                log.debug('starting post hook');
                this.command('feeder:start');
                this.runPostChangeHook();
            },
            'gcode:outline': () => {
                const [gcode = '', concavity = Infinity] = args;
                const toRun = getOutlineGcode(gcode, concavity);
                log.debug('Running outline');
                this.emit('outline:start');
                this.command('gcode', toRun);
            }
        }[cmd];

        if (!handler) {
            log.error(`Unknown command: ${cmd}`);
            return;
        }

        handler();
    }

    write(data, context) {
        // Assertion check
        if (this.isClose()) {
            log.error(`Serial port "${this.options.port}" is not accessible`);
            return;
        }

        const cmd = data.trim();
        this.actionMask.replyStatusReport = (cmd === '?') || this.actionMask.replyStatusReport;
        this.actionMask.replyParserState = (cmd === '$G') || this.actionMask.replyParserState;

        this.emit('serialport:write', data, {
            ...context,
            source: WRITE_SOURCE_CLIENT
        });
        this.connection.write(data);
        log.silly(`> ${data}`);
    }

    writeln(data, context) {
        if (_.includes(GRBL_REALTIME_COMMANDS, data)) {
            this.write(data, context);
        } else {
            this.write(data + '\n', context);
        }
    }

    convertGcodeToArray(gcode) {
        //Clean up lines and remove ones that are comments and headers
        const lines = gcode
            .split('\n')
            .filter(line => (line.trim().length > 0));
        return lines;
    }

    updateSpindleModal(modal) {
        this.state.parserstate.modal.spindle = modal;
        this.emit('controller:state', GRBL, this.state);
    }

    /* Runs specified code segment on M6 command before alerting the UI as to what's happened */
    runPreChangeHook() {
        const { preHook } = this.toolChangeContext || '';
        const block = this.convertGcodeToArray(preHook);
        block.push(PREHOOK_COMPLETE);

        this.command('gcode', block);
    }

    runPostChangeHook() {
        const { postHook } = this.toolChangeContext || '';
        const block = this.convertGcodeToArray(postHook);
        block.push(POSTHOOK_COMPLETE);

        this.command('gcode', block);
    }
}

export default GrblController;
