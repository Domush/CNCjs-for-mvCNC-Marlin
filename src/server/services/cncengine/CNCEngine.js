import ensureArray from 'ensure-array';
import noop from 'lodash/noop';
// import partition from 'lodash/partition';
import SerialPort from 'serialport';
import socketIO from 'socket.io';
//import socketioJwt from 'socketio-jwt';
import EventTrigger from '../../lib/EventTrigger.js';
import logger from '../../lib/logger.js';
// import settings from '../../config/settings';
import store from '../../store/index.js';
import config from '../configstore/index.js';
import taskRunner from '../taskrunner/index.js';
import { GrblController, MarlinController } from '../../controllers/index.js';
import { GRBL } from '../../controllers/Grbl/constants.js';
import { MARLIN } from '../../controllers/Marlin/constants.js';
import { authorizeIPAddress } from '../../access-control.js';

const log = logger('service:cncengine');

// Case-insensitive equality checker.
// @param {string} str1 First string to check.
// @param {string} str2 Second string to check.
// @return {boolean} True if str1 and str2 are the same string, ignoring case.
const caseInsensitiveEquals = (str1, str2) => {
  str1 = str1 ? (str1 + '').toUpperCase() : '';
  str2 = str2 ? (str2 + '').toUpperCase() : '';
  return str1 === str2;
};

const isValidController = (controller) =>
  // Grbl
  caseInsensitiveEquals(GRBL, controller) ||
  // Marlin
  caseInsensitiveEquals(MARLIN, controller);

class CNCEngine {
  controllerClass = {};

  listener = {
    taskStart: (...args) => {
      if (this.io) {
        this.io.emit('task:start', ...args);
      }
    },
    taskFinish: (...args) => {
      if (this.io) {
        this.io.emit('task:finish', ...args);
      }
    },
    taskError: (...args) => {
      if (this.io) {
        this.io.emit('task:error', ...args);
      }
    },
    configChange: (...args) => {
      if (this.io) {
        this.io.emit('config:change', ...args);
      }
    },
  };

  server = null;

  io = null;

  sockets = [];

  // File content and metadata
  gcode = null;

  meta = null;

  // Event Trigger
  event = new EventTrigger((event, trigger, commands) => {
    log.debug(`EventTrigger: event="${event}", trigger="${trigger}", commands="${commands}"`);
    if (trigger === 'system') {
      taskRunner.run(commands);
    }
  });

  // @param {object} server The HTTP server instance.
  // @param {string} controller Specify CNC controller.
  start(server, controller = '') {
    // Fallback to an empty string if the controller is not valid
    if (!isValidController(controller)) {
      controller = '';
    }

    // Marlin
    if (!controller || caseInsensitiveEquals(MARLIN, controller)) {
      this.controllerClass[MARLIN] = MarlinController;
    }
    // Grbl
    if (caseInsensitiveEquals(GRBL, controller)) {
      this.controllerClass[GRBL] = GrblController;
    }

    if (Object.keys(this.controllerClass).length === 0) {
      throw Error(`No valid CNC controller specified (${controller})`);
    }

    const loadedControllers = Object.keys(this.controllerClass);
    log.debug(`Loaded controllers: ${loadedControllers}`);

    this.stop();

    taskRunner.on('start', this.listener.taskStart);
    taskRunner.on('finish', this.listener.taskFinish);
    taskRunner.on('error', this.listener.taskError);
    config.on('change', this.listener.configChange);

    // System Trigger: Startup
    this.event.trigger('startup');

    this.server = server;
    this.io = socketIO(this.server, {
      serveClient: true,
      path: '/socket.io',
      pingTimeout: 60000,
      pingInterval: 25000,
      maxHttpBufferSize: 40e6,
    });

    this.io.use(async (socket, next) => {
      try {
        // IP Address Access Control
        const ipaddr = socket.handshake.address;
        await authorizeIPAddress(ipaddr);

        // User Validation
        //const user = socket.decoded_token || {};
        //await validateUser(user);
      } catch (err) {
        log.warn(err);
        next(err);
        return;
      }

      next();
    });

    this.io.on('connection', (socket) => {
      const address = socket.handshake.address;
      const user = socket.decoded_token || {};
      log.debug(`New connection from ${address}: id=${socket.id}, user.id=${user.id}, user.name=${user.name}`);

      // Add to the socket pool
      this.sockets.push(socket);

      socket.emit('startup', {
        loadedControllers: Object.keys(this.controllerClass),

        // User-defined baud rates and ports
        baudrates: ensureArray(config.get('baudrates', [])),
        ports: ensureArray(config.get('ports', [])),
      });
      socket.on('disconnect', () => {
        log.debug(`Disconnected from ${address}: id=${socket.id}, user.id=${user.id}, user.name=${user.name}`);

        const controllers = store.get('controllers', {});
        Object.keys(controllers).forEach((port) => {
          const controller = controllers[port];
          if (!controller) {
            return;
          }
          controller.removeConnection(socket);
        });

        // Remove from socket pool
        this.sockets.splice(this.sockets.indexOf(socket), 1);
      });

      socket.on('reconnect', (port) => {
        let controller = store.get(`controllers["${port}"]`);
        if (!controller) {
          log.info(`No controller found on port ${port} to reconnect to`);
          return;
        }
        log.info(`Reconnecting to open controller on port ${port} with socket ID ${socket.id}`);
        controller.addConnection(socket);
        log.info(`Controller state: ${controller.isOpen()}`);
        if (controller.isOpen()) {
          log.info('Joining port room on socket');
          socket.join(port);
        } else {
          log.info('Controller no longer open');
        }
      });

      // List the available serial ports
      socket.on('list', () => {
        log.debug(`socket.list(): id=${socket.id}`);

        SerialPort.list()
          .then((ports) => {
            ports = ports.concat(ensureArray(config.get('ports', [])));

            const controllers = store.get('controllers', {});
            const portsInUse = Object.keys(controllers).filter((port) => {
              const controller = controllers[port];
              return controller && controller.isOpen();
            });

            ports = ports.map((port) => ({
              port: port.path,
              manufacturer: port.manufacturer,
              inuse: portsInUse.indexOf(port.path) >= 0,
            }));

            socket.emit('serialport:list', ports);
          })
          .catch((err) => {
            log.error(err);
          });
      });

      // Open serial port
      socket.on('open', (port, options, callback = noop) => {
        if (typeof callback !== 'function') {
          callback = noop;
        }

        log.debug(`socket.open("${port}", ${JSON.stringify(options)}): id=${socket.id}`);

        let controller = store.get(`controllers["${port}"]`);
        if (!controller) {
          let { controllerType = MARLIN, baudrate, rtscts } = options;

          const Controller = this.controllerClass[controllerType];
          if (!Controller) {
            const err = `Not supported controller: ${controllerType}`;
            log.error(err);
            callback(Error(err));
            return;
          }

          const engine = this;
          controller = new Controller(engine, {
            port: port,
            baudrate: baudrate,
            rtscts: !!rtscts,
          });
        }

        controller.addConnection(socket);
        // Load file to controller if it exists
        if (this.hasFileLoaded()) {
          controller.loadFile(this.gcode, this.meta);
        } else {
          log.debug('No file in CNCEngine to load to sender');
        }

        if (controller.isOpen()) {
          // Join the room
          socket.join(port);

          callback(null);
          return;
        }

        controller.open((err = null) => {
          if (err) {
            callback(err);
            return;
          }

          // System Trigger: Open a serial port
          this.event.trigger('port:open');

          if (store.get(`controllers["${port}"]`)) {
            log.error(`Serial port "${port}" was not properly closed`);
          }
          store.set(`controllers[${JSON.stringify(port)}]`, controller);

          // Join the room
          socket.join(port);

          callback(null);
        });
      });

      // Close serial port
      socket.on('close', (port, callback = noop) => {
        if (typeof callback !== 'function') {
          callback = noop;
        }

        log.debug(`socket.close("${port}"): id=${socket.id}`);

        const controller = store.get(`controllers["${port}"]`);
        if (!controller) {
          const err = `Serial port "${port}" not accessible`;
          log.error(err);
          callback(Error(err));
          return;
        }

        // System Trigger: Close a serial port
        this.event.trigger('port:close');

        // Leave the room
        socket.leave(port);

        controller.close((err) => {
          // Remove controller from store
          store.unset(`controllers[${JSON.stringify(port)}]`);

          // Destroy controller
          controller.destroy();

          callback(null);
        });
      });

      socket.on('command', (port, cmd, ...args) => {
        log.debug(`socket.command("${port}", "${cmd}"): id=${socket.id}`);

        const controller = store.get(`controllers["${port}"]`);
        if (!controller || controller.isClose()) {
          log.error(`Serial port "${port}" not accessible`);
          return;
        }

        controller.command(...[cmd].concat(args));
      });

      socket.on('write', (port, data, context = {}) => {
        log.debug(`socket.write("${port}", "${data}", ${JSON.stringify(context)}): id=${socket.id}`);

        const controller = store.get(`controllers["${port}"]`);
        if (!controller || controller.isClose()) {
          log.error(`Serial port "${port}" not accessible`);
          return;
        }

        controller.write(data, context);
      });

      socket.on('writeln', (port, data, context = {}) => {
        log.debug(`socket.writeln("${port}", "${data}", ${JSON.stringify(context)}): id=${socket.id}`);

        const controller = store.get(`controllers["${port}"]`);
        if (!controller || controller.isClose()) {
          log.error(`Serial port "${port}" not accessible`);
          return;
        }

        controller.writeln(data, context);
      });

      socket.on('hPing', () => {
        log.debug(`Health check received at ${new Date().toLocaleTimeString()}`);
        socket.emit('hPong');
      });

      socket.on('file:fetch', () => {
        socket.emit('file:fetch', this.gcode, this.meta);
      });

      socket.on('file:unload', () => {
        log.debug('Socket unload called');
        this.unload();
      });
    });
  }

  stop() {
    if (this.io) {
      this.io.close();
      this.io = null;
    }
    this.sockets = [];
    this.server = null;

    taskRunner.removeListener('start', this.listener.taskStart);
    taskRunner.removeListener('finish', this.listener.taskFinish);
    taskRunner.removeListener('error', this.listener.taskError);
    config.removeListener('change', this.listener.configChange);
  }

  // Emit message across all sockets
  emit(msg, ...args) {
    this.sockets.forEach((socket) => {
      socket.emit(msg, ...args);
    });
  }

  /* Functions related to loading file through server */
  // If gcode is going to live in CNCengine, we need functions to access or unload it.
  load({ port, gcode, ...meta }) {
    this.gcode = gcode;
    this.meta = meta;

    // Load the file to the sender if controller connection exists
    if (port) {
      const controller = store.get(`controllers["${port}"]`);
      if (controller) {
        controller.loadFile(this.gcode, this.meta);
      }
    }

    log.info(`Loaded file '${meta.name}' to CNCEngine`);
    this.emit('file:load', gcode, meta.size, meta.name, meta.visualizer);
  }

  unload() {
    log.info('Unloading file from CNCEngine');
    this.gcode = null;
    this.meta = null;
    this.emit('file:unload');
  }

  fetchGcode() {
    return [this.gcode, this.meta];
  }

  hasFileLoaded() {
    return this.gcode !== null;
  }
}

export default CNCEngine;
