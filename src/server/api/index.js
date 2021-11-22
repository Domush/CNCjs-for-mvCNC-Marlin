const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const version = require('./api.version.js');
const state = require('./api.state');
const gcode = require('./api.gcode');
const controllers = require('./api.controllers');
const watch = require('./api.watch');
const commands = require('./api.commands');
const events = require('./api.events');
const machines = require('./api.machines');
const macros = require('./api.macros');
const mdi = require('./api.mdi');
const users = require('./api.users');
const files = require('./api.file');

export { version, state, gcode, controllers, watch, commands, events, machines, macros, mdi, users, files };
