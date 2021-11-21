import ensureArray from 'ensure-array';
import * as parser from 'gcode-parser';
// import Toolpath from 'gcode-toolpath';
import _ from 'lodash';
import map from 'lodash/map';
import SerialConnection from '../../lib/SerialConnection';
import EventTrigger from '../../lib/EventTrigger';
import Feeder from '../../lib/Feeder';
import Sender, { SP_TYPE_CHAR_COUNTING } from '../../lib/Sender';
import Workflow, { WORKFLOW_STATE_IDLE, WORKFLOW_STATE_PAUSED, WORKFLOW_STATE_RUNNING } from '../../lib/Workflow';
// import delay from '../../lib/delay';
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
  WRITE_SOURCE_SERVER,
  WRITE_SOURCE_FEEDER,
  WRITE_SOURCE_SENDER,
} from '../constants';
import MarlinRunner from './MarlinRunner';
import interpret from './interpret';
import { MARLIN, QUERY_TYPE_POSITION } from './constants';
import { METRIC_UNITS } from '../../../app/constants';
import { determineMaxMovement, getAxisMaximumLocation } from '../../lib/homing';

// % commands
const WAIT = '%wait';

const log = logger('controller:Marlin');
const noop = _.noop;

class MarlinController {
  type = MARLIN;

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

      this.close((err) => {
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
    },
  };

  // Marlin
  controller = null;

  ready = false;

  initialized = false;

  state = {};

  settings = {};

  feedOverride = 100;

  spindleOverride = 100;

  history = {
    // The write source is one of the following:
    // * WRITE_SOURCE_CLIENT
    // * WRITE_SOURCE_SERVER
    // * WRITE_SOURCE_FEEDER
    // * WRITE_SOURCE_SENDER
    writeSource: null,

    writeLine: '',
  };

  // Event Trigger
  event = null;

  // Feeder
  feeder = null;

  // Sender
  sender = null;

  senderFinishTime = 0;

  // Shared context
  sharedContext = {};

  // Workflow
  workflow = null;

  // Query
  queryTimer = null;

  query = {
    // state
    type: null,
    lastQueryTime: 0,

    // action
    issue: () => {
      if (!this.query.type) {
        return;
      }

      const now = new Date().getTime();

      if (this.query.type === QUERY_TYPE_POSITION) {
        this.connection.write('M114\n', {
          source: WRITE_SOURCE_SERVER,
        });
        this.query.lastQueryTime = now;
      } else {
        log.error('Unsupported query type:', this.query.type);
      }

      this.query.type = null;
    },
  };

  // Get the current position of the steppers.
  queryPosition = (() => {
    let lastQueryTime = 0;

    return _.throttle(() => {
      // Check the ready flag
      if (!this.ready) {
        return;
      }

      const now = new Date().getTime();

      if (!this.query.type) {
        this.query.type = QUERY_TYPE_POSITION;
        lastQueryTime = now;
      } else if (lastQueryTime > 0) {
        const timespan = Math.abs(now - lastQueryTime);
        const toleranceTime = 5000; // 5 seconds

        if (timespan >= toleranceTime) {
          log.silly(`Reschedule current position query: now=${now}ms, timespan=${timespan}ms`);
          this.query.type = QUERY_TYPE_POSITION;
          lastQueryTime = now;
        }
      }
    }, 500);
  })();

  constructor(engine, options) {
    if (!engine) {
      throw Error('engine must be specified');
    }
    this.engine = engine;

    const { port, baudrate, rtscts } = options;
    this.options = {
      ...this.options,
      port: port,
      baudrate: baudrate,
      rtscts: rtscts,
    };

    // Connection
    this.connection = new SerialConnection({
      path: port,
      baudRate: baudrate,
      rtscts: rtscts,
      writeFilter: (data, context) => {
        const { source = null } = context;
        const line = data.trim();

        // Update write history
        this.history.writeSource = source;
        this.history.writeLine = line;

        if (!line) {
          return data;
        }

        const nextState = {
          ...this.runner.state,
          modal: this.runner.state.modal,
        };

        interpret(line, (cmd, params) => {
          // motion
          if (_.includes(['G0', 'G1', 'G2', 'G3', 'G38.2', 'G38.3', 'G38.4', 'G38.5', 'G80'], cmd)) {
            nextState.modal.motion = cmd;

            if (params.F !== undefined) {
              if (cmd === 'G0') {
                nextState.rapidFeedrate = params.F;
              } else {
                nextState.feedrate = params.F;
              }
            }
          }

          // wcs
          if (_.includes(['G54', 'G55', 'G56', 'G57', 'G58', 'G59'], cmd)) {
            nextState.modal.wcs = cmd;
          }

          // plane
          if (_.includes(['G17', 'G18', 'G19'], cmd)) {
            // G17: xy-plane, G18: xz-plane, G19: yz-plane
            nextState.modal.plane = cmd;
          }

          // units
          if (_.includes(['G20', 'G21'], cmd)) {
            // G20: Inches, G21: Millimeters
            nextState.modal.units = cmd;
          }

          // distance
          if (_.includes(['G90', 'G91'], cmd)) {
            // G90: Absolute, G91: Relative
            nextState.modal.distance = cmd;
          }

          // feedrate
          if (_.includes(['G93', 'G94'], cmd)) {
            // G93: Inverse time mode, G94: Units per minute
            nextState.modal.feedrate = cmd;
          }

          // program
          if (_.includes(['M0', 'M1', 'M2', 'M30'], cmd)) {
            nextState.modal.program = cmd;
          }

          // spindle or head
          if (_.includes(['M3', 'M4', 'M5'], cmd)) {
            // M3: Spindle (cw), M4: Spindle (ccw), M5: Spindle off
            nextState.modal.spindle = cmd;

            if ((cmd === 'M3' || cmd === 'M4') && params.S !== undefined) {
              nextState.spindle = params.S;
            }
          }

          // coolant
          if (_.includes(['M7', 'M8', 'M9'], cmd)) {
            const coolant = nextState.modal.coolant;

            // M7: Mist coolant, M8: Flood coolant, M9: Coolant off, [M7,M8]: Both on
            if (cmd === 'M9' || coolant === 'M9') {
              nextState.modal.coolant = cmd;
            } else {
              nextState.modal.coolant = _.uniq(ensureArray(coolant).concat(cmd)).sort();
              if (nextState.modal.coolant.length === 1) {
                nextState.modal.coolant = nextState.modal.coolant[0];
              }
            }
          }
        });

        if (!_.isEqual(this.runner.state, nextState)) {
          this.runner.state = nextState; // enforce change
        }

        return data;
      },
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
            // G4 [P<time in ms>] [S<time in sec>]
            // If both S and P are included, S takes precedence.
            return 'G4 P500'; // dwell
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

        {
          // Program Mode: M0, M1
          const programMode = _.intersection(words, ['M0', 'M1'])[0];
          if (programMode === 'M0') {
            log.debug('M0 Program Pause');
            this.workflow.pause({ data: 'M0' });
            this.emit('workflow:pause', { data: 'M0' });
            return line.replace('M0', '(M0)');
          } else if (programMode === 'M1') {
            log.debug('M1 Program Pause');
            this.workflow.pause({ data: 'M1' });
            this.emit('workflow:pause', { data: 'M1' });
            return line.replace('M1', '(M1)');
          }
        }

        // M6 Tool Change
        if (_.includes(words, 'M6')) {
          log.debug('M6 Tool Change');
          this.feeder.hold({ data: 'M6' }); // Hold reason
        }

        // More aggressive updating of spindle modals for safety
        const spindleCommand = _.intersection(words, ['M3', 'M4'])[0];
        if (spindleCommand) {
          this.updateSpindleModal(spindleCommand);
        }
        return line;
      },
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
        source: WRITE_SOURCE_FEEDER,
      });

      this.connection.write(line + '\n', {
        source: WRITE_SOURCE_FEEDER,
      });
      log.silly(`> ${line}`);
    });
    this.feeder.on('hold', noop);
    this.feeder.on('unhold', noop);

    // Sender
    this.sender = new Sender(SP_TYPE_CHAR_COUNTING, {
      //            // Deduct the buffer size to prevent from buffer overrun
      //            bufferSize: (128 - 8), // The default buffer size is 128 bytes
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

            // G4 [P<time in ms>] [S<time in sec>]
            // If both S and P are included, S takes precedence.
            return 'G4 P500'; // dwell
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

        {
          // Program Mode: M0, M1
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

        // M6 Tool Change
        if (_.includes(words, 'M6')) {
          log.debug(`M6 Tool Change: line=${sent + 1}, sent=${sent}, received=${received}`);
          this.workflow.pause({ data: 'M6' });
        }

        return line;
      },
    });
    this.sender.on('data', (line = '', context = {}) => {
      if (this.isClose()) {
        log.error(`Serial port "${this.options.port}" is not accessible`);
        return;
      }

      if (this.workflow.state === WORKFLOW_STATE_IDLE) {
        log.error(`Unexpected workflow state: ${this.workflow.state}`);
        return;
      }

      line = String(line).trim();
      if (line.length === 0) {
        log.warn(`Expected non-empty line: N=${this.sender.state.sent}`);
        return;
      }

      this.emit('serialport:read', line);

      this.connection.write(line + '\n', {
        source: WRITE_SOURCE_SENDER,
      });
      log.silly(`> ${line}`);
    });
    this.sender.on('hold', noop);
    this.sender.on('unhold', noop);
    this.sender.on('start', (startTime) => {
      this.senderFinishTime = 0;
    });
    this.sender.on('end', (finishTime) => {
      this.senderFinishTime = finishTime;
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
        const reason = args[0];
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

    // Marlin
    this.runner = new MarlinRunner();

    this.runner.on('raw', noop);

    this.runner.on('start', (res) => {
      this.emit('serialport:read', res.raw);
      // Marlin sends 'start' as the first message after
      // power-on, but not when the serial port is closed and
      // then re-opened.  Marlin has no software-initiated
      // restart, so 'start' is not dependable as a readiness
      // indicator.  Instead, we send M115 on connection open
      // to request a firmware report, whose response signals
      // Marlin readiness.  On initial power-up, Marlin might
      // miss that first M115 as it boots, so we send this
      // possibly-redundant M115 when we see 'start'.
      this.connection.write('M115\n', {
        source: WRITE_SOURCE_SERVER,
      });
    });

    this.runner.on('echo', (res) => {
      this.emit('serialport:read', res.raw);
    });

    this.runner.on('firmware', (res) => {
      this.emit('serialport:read', res.raw);
      if (!this.ready) {
        this.ready = true;
        // Initialize controller
        this.event.trigger('controller:ready');
      }
    });

    this.runner.on('pos', (res) => {
      log.silly(
        `controller.on('pos'): source=${this.history.writeSource}, line=${JSON.stringify(
          this.history.writeLine
        )}, res=${JSON.stringify(res)}`
      );

      if (_.includes([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
        this.emit('serialport:read', res.raw);
      }
    });

    this.runner.on('temperature', (res) => {
      log.silly(
        `controller.on('temperature'): source=${this.history.writeSource}, line=${JSON.stringify(
          this.history.writeLine
        )}, res=${JSON.stringify(res)}`
      );

      if (_.includes([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
        this.emit('serialport:read', res.raw);
      }
    });

    this.runner.on('ok', (res) => {
      log.silly(
        `controller.on('ok'): source=${this.history.writeSource}, line=${JSON.stringify(
          this.history.writeLine
        )}, res=${JSON.stringify(res)}`
      );

      if (res) {
        if (_.includes([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
          this.emit('serialport:read', res.raw);
        } else if (!this.history.writeSource) {
          this.emit('serialport:read', res.raw);
          log.error('"history.writeSource" should not be empty');
        }
      }

      this.history.writeSource = null;
      this.history.writeLine = '';

      // Perform preemptive query to prevent starvation
      const now = new Date().getTime();
      const timespan = Math.abs(now - this.query.lastQueryTime);
      if (this.query.type && timespan > 2000) {
        this.query.issue();
        return;
      }

      const { hold, sent, received } = this.sender.state;

      if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
        this.emit('serialport:read', res.raw);
        if (hold && received + 1 >= sent) {
          log.debug(`Continue sending G-code: hold=${hold}, sent=${sent}, received=${received + 1}`);
          this.sender.unhold();
        }
        this.sender.ack();
        this.sender.next();
        return;
      }

      if (this.workflow.state === WORKFLOW_STATE_PAUSED && received < sent) {
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

      // Feeder
      if (this.feeder.next()) {
        return;
      }

      this.query.issue();
    });

    this.runner.on('error', (res) => {
      // Sender
      if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
        const ignoreErrors = config.get('state.controller.exception.ignoreErrors');
        const pauseError = !ignoreErrors;
        const { lines, received } = this.sender.state;
        const line = lines[received] || '';

        this.emit('serialport:read', `> ${line.trim()} (line=${received + 1})`);
        this.emit('serialport:read', res.raw);

        if (pauseError) {
          this.workflow.pause({ err: res.raw });
        }

        this.sender.ack();
        this.sender.next();

        return;
      }

      this.emit('serialport:read', res.raw);

      // Feeder
      this.feeder.next();
    });

    this.runner.on('others', (res) => {
      this.emit('serialport:read', res.raw);
    });

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

      const zeroOffset = _.isEqual(this.runner.getPosition(this.state), this.runner.getPosition(this.runner.state));

      // Marlin settings
      if (this.settings !== this.runner.settings) {
        this.settings = this.runner.settings;
        this.emit('controller:settings', MARLIN, this.settings);
        this.emit('Marlin:settings', this.settings); // Backward compatibility
      }

      // Marlin state
      if (this.state !== this.runner.state) {
        this.state = this.runner.state;
        this.emit('controller:state', MARLIN, this.state);
        this.emit('Marlin:state', this.state); // Backward compatibility
      }

      // Check the ready flag
      if (!this.ready) {
        return;
      }

      // M114: Get Current Position
      this.queryPosition();

      {
        // The following criteria must be met to issue a query
        const notBusy = !this.history.writeSource;
        const senderIdle = this.sender.state.sent === this.sender.state.received;
        const feederEmpty = this.feeder.size() === 0;

        if (notBusy && senderIdle && feederEmpty) {
          this.query.issue();
        }
      }

      // Check if the machine has stopped movement after completion
      if (this.senderFinishTime > 0) {
        const machineIdle = zeroOffset;
        const now = new Date().getTime();
        const timespan = Math.abs(now - this.senderFinishTime);
        const toleranceTime = 500; // in milliseconds

        if (!machineIdle) {
          // Extend the sender finish time
          this.senderFinishTime = now;
        } else if (timespan > toleranceTime) {
          log.silly(`Finished sending G-code: timespan=${timespan}`);

          this.senderFinishTime = 0;

          // Stop workflow
          this.command('gcode:stop');
        }
      }
    }, 250);

    // Load file if it exists in CNC engine (AKA it was loaded before connection
  }

  populateContext(context) {
    // Work position
    const { x: posx, y: posy, z: posz, e: pose } = this.runner.getPosition();

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

      // Work position
      posx: Number(posx) || 0,
      posy: Number(posy) || 0,
      posz: Number(posz) || 0,
      pose: Number(pose) || 0,

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
        state: this.state,
      },
      feeder: this.feeder.toJSON(),
      sender: this.sender.toJSON(),
      workflow: {
        state: this.workflow.state,
      },
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
        inuse: true,
      });

      // Emit a change event to all connected sockets
      if (this.engine.io) {
        this.engine.io.emit('serialport:change', {
          port: port,
          inuse: true,
        });
      }

      callback(); // register controller

      log.debug(`Connected to serial port "${port}"`);

      // M115: Get firmware version and capabilities
      // The response to this will take us to the ready state
      this.connection.write('M115\n', {
        source: WRITE_SOURCE_SERVER,
      });

      this.workflow.stop();

      if (this.sender.state.gcode) {
        // Unload G-code
        this.command('unload');
      }
    });
  }

  close(callback) {
    const { port } = this.options;

    // Assertion check
    if (!this.connection) {
      const err = `Serial port "${port}" is not available`;
      callback(Error(err));
      return;
    }

    // Stop status query
    this.ready = false;

    // Clear initialized flag
    this.initialized = false;

    this.emit('serialport:close', {
      port: port,
      inuse: false,
    });

    // Emit a change event to all connected sockets
    if (this.engine.io) {
      this.engine.io.emit('serialport:change', {
        port: port,
        inuse: false,
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
    return !this.isOpen();
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
        inuse: true,
      });
    }
    if (!_.isEmpty(this.settings)) {
      // controller settings
      socket.emit('controller:settings', MARLIN, this.settings);
      socket.emit('Marlin:settings', this.settings); // Backward compatibility
    }
    if (!_.isEmpty(this.state)) {
      // controller state
      socket.emit('controller:state', MARLIN, this.state);
      socket.emit('Marlin:state', this.state); // Backward compatibility
    }
    if (this.feeder) {
      // feeder status
      socket.emit('feeder:status', this.feeder.toJSON());
    }
    if (this.sender) {
      // sender status
      socket.emit('sender:status', this.sender.toJSON());

      const { name, gcode, context } = this.sender.state;
      if (gcode) {
        socket.emit('gcode:load', name, gcode, context);
      }
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
    Object.keys(this.sockets).forEach((id) => {
      const socket = this.sockets[id];
      socket.emit(...[eventName].concat(args));
    });
  }

  command(cmd, ...args) {
    const handler = {
      'flash:start': () => {
        // unsupported
      },
      'flashing:success': () => {
        // unsupported
      },
      'flashing:failed': () => {
        // unsupported
      },
      'firmware:recievedProfiles': () => {
        // unsupported
      },
      'firmware:applyProfileSettings': () => {
        // unsupported
      },
      'firmware:grabMachineProfile': () => {
        // unsupported
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
          callback(Error(`Invalid G-code: name=${name}`));
          return;
        }

        //this.emit('gcode:load', name, gcode, context);
        //this.event.trigger('gcode:load');

        log.debug(
          `Load G-code: name="${this.sender.state.name}", size=${this.sender.state.gcode.length}, total=${this.sender.state.total}`
        );

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
        this.event.trigger('gcode:start');

        this.workflow.start();

        // Feeder
        this.feeder.reset();

        // Sender
        this.sender.next();
      },
      'stop': () => {
        log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
        this.command('gcode:stop', ...args);
      },
      // @param {object} options The options object.
      // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
      'gcode:stop': () => {
        this.event.trigger('gcode:stop');

        this.workflow.stop();
      },
      'pause': () => {
        log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
        this.command('gcode:pause');
      },
      'gcode:pause': () => {
        this.event.trigger('gcode:pause');

        this.workflow.pause();
      },
      'resume': () => {
        log.warn(`Warning: The "${cmd}" command is deprecated and will be removed in a future release.`);
        this.command('gcode:resume');
      },
      'gcode:resume': () => {
        this.event.trigger('gcode:resume');

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
        this.feeder.unhold();
        this.feeder.next();
      },
      'feeder:stop': () => {
        this.feeder.reset();
      },
      'feedhold': () => {
        this.event.trigger('feedhold');
      },
      'cyclestart': () => {
        this.event.trigger('cyclestart');
      },
      'homing': () => {
        this.event.trigger('homing');

        this.writeln('G28.2 X Y Z');
      },
      'sleep': () => {
        this.event.trigger('sleep');

        // Unupported
      },
      'unlock': () => {
        // Unsupported
      },
      'reset': () => {
        this.workflow.stop();

        this.feeder.reset();

        // M112: Emergency Stop
        this.writeln('M112');
      },
      // Feed Overrides
      // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
      'feedOverride': () => {
        const [value] = args;
        let feedOverride = this.runner.state.ovF;

        if (value === 0) {
          feedOverride = 100;
        } else if (feedOverride + value > 500) {
          feedOverride = 500;
        } else if (feedOverride + value < 10) {
          feedOverride = 10;
        } else {
          feedOverride += value;
        }
        // M220: Set speed factor override percentage
        this.command('gcode', 'M220 S' + feedOverride);

        // enforce state change
        this.runner.state = {
          ...this.runner.state,
          ovF: feedOverride,
        };
      },
      // Spindle Speed Overrides
      // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
      'spindleOverride': () => {
        const [value] = args;
        let spindleOverride = this.runner.state.ovS;

        if (value === 0) {
          spindleOverride = 100;
        } else if (spindleOverride + value > 500) {
          spindleOverride = 500;
        } else if (spindleOverride + value < 10) {
          spindleOverride = 10;
        } else {
          spindleOverride += value;
        }
        // M221: Set extruder factor override percentage
        this.command('gcode', 'M221 S' + spindleOverride);

        // enforce state change
        this.runner.state = {
          ...this.runner.state,
          ovS: spindleOverride,
        };
      },
      'rapidOverride': () => {
        // Unsupported
      },
      'motor:enable': () => {
        // M17 Enable all stepper motors
        this.command('gcode', 'M17');
      },
      'motor:disable': () => {
        // M18/M84 Disable steppers immediately (until the next move)
        this.command('gcode', 'M18');
      },
      'laser:on': () => {
        const [power = 0, maxS = 255] = args;
        const commands = ['M3 S' + ensurePositiveNumber(maxS * (power / 100))];

        this.command('gcode', commands);
      },
      'lasertest:on': () => {
        const [power = 0, duration = 0, maxS = 255] = args;
        const commands = ['M3 S' + ensurePositiveNumber(maxS * (power / 100))];
        if (duration > 0) {
          // G4 [P<time in ms>] [S<time in sec>]
          // If both S and P are included, S takes precedence.
          commands.push('G4 P' + ensurePositiveNumber(duration));
          commands.push('M5');
        }
        this.command('gcode', commands);
      },
      'lasertest:off': () => {
        this.writeln('M5');
      },
      'gcode': () => {
        const [commands, context] = args;
        const data = ensureArray(commands)
          .join('\n')
          .split(/\r?\n/)
          .filter((line) => {
            if (typeof line !== 'string') {
              return false;
            }

            return line.trim().length > 0;
          });

        this.feeder.feed(data, context);

        {
          // The following criteria must be met to trigger the feeder
          const notBusy = !this.history.writeSource;
          const senderIdle = this.sender.state.sent === this.sender.state.received;
          const feederIdle = !this.feeder.isPending();

          if (notBusy && senderIdle && feederIdle) {
            this.feeder.next();
          }
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
        let unitModal = units === METRIC_UNITS ? 'G21' : 'G20';
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
              return Number((position * direction - OFFSET).toFixed(FIXED));
            } else {
              return Number(-(maxTravel - position - OFFSET).toFixed(FIXED));
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

        const jogCommand =
          `$J=${unitModal}G91 ` + map(axes, (value, letter) => '' + letter.toUpperCase() + value).join(' ');
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
      'toolchange:pre': () => {},
      'toolchange:post': () => {},
      'gcode:outline': () => {
        const [gcode = '', concavity = Infinity] = args;
        const toRun = getOutlineGcode(gcode, concavity);
        log.debug('Running outline');
        this.emit('outline:start');
        this.command('gcode', toRun);
      },
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

    this.emit('serialport:write', data, {
      ...context,
      source: WRITE_SOURCE_CLIENT,
    });
    this.connection.write(data, {
      source: WRITE_SOURCE_CLIENT,
    });
    log.silly(`> ${data}`);
  }

  writeln(data, context) {
    this.write(data + '\n', context);
  }
}

export default MarlinController;
