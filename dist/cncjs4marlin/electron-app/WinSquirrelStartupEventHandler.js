"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _child_process = require("child_process");

var _electron = require("electron");

var _log = _interopRequireDefault(require("./log"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint import/no-unresolved: 0 */
var run = function run(args, done) {
  var appPath = _path["default"].resolve(process.execPath, '..');

  var rootAtomPath = _path["default"].resolve(appPath, '..');

  var updateExe = _path["default"].resolve(_path["default"].join(rootAtomPath, 'Update.exe'));

  _log["default"].debug('Spawning `%s` with args `%s`', updateExe, args);

  (0, _child_process.spawn)(updateExe, args, {
    detached: true
  }).on('close', done);
}; // Handle Squirrel Events
// https://github.com/electron/windows-installer#handling-squirrel-events


var handleStartupEvent = function handleStartupEvent() {
  if (process.platform !== 'win32') {
    return false;
  }

  var cmd = process.argv[1];

  var exeName = _path["default"].basename(process.execPath);

  _log["default"].debug('Processing squirrel command `%s`', cmd); // Optionally do things such as:
  // - Install desktop and start menu shortcuts
  // - Add your .exe to the PATH
  // - Write to the registry for things like file associations and explorer context menus


  if (cmd === '--squirrel-install' || cmd === '--squirrel-updated') {
    // Install desktop and start menu shortcuts
    run(['--createShortcut=' + exeName + ''], _electron.app.quit);
    return true;
  } // Undo anything you did in the --squirrel-install and --squirrel-updated handlers


  if (cmd === '--squirrel-uninstall') {
    // Remove desktop and start menu shortcuts
    run(['--removeShortcut=' + exeName + ''], _electron.app.quit);
    return true;
  } // This is called on the outgoing version of your app before updating to the new version -
  // it's the opposite of --squirrel-updated


  if (cmd === '--squirrel-obsolete') {
    _electron.app.quit();

    return true;
  }

  return false;
};

var _default = handleStartupEvent;
exports["default"] = _default;