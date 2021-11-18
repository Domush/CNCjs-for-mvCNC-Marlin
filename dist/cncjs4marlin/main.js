"use strict";

require("@babel/polyfill");

var _electron = require("electron");

var _electronUpdater = require("electron-updater");

var _electronStore = _interopRequireDefault(require("electron-store"));

var _chalk = _interopRequireDefault(require("chalk"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _isOnline = _interopRequireDefault(require("is-online"));

var _electronLog = _interopRequireDefault(require("electron-log"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _WindowManager = _interopRequireDefault(require("./electron-app/WindowManager"));

var _serverCli = _interopRequireDefault(require("./server-cli"));

var _package = _interopRequireDefault(require("./package.json"));

var _RecentFiles = require("./electron-app/RecentFiles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

let windowManager = null;
let powerSaverId = null;

const main = () => {
  // https://github.com/electron/electron/blob/master/docs/api/app.md#apprequestsingleinstancelock
  const gotSingleInstanceLock = _electron.app.requestSingleInstanceLock();

  const shouldQuitImmediately = !gotSingleInstanceLock;
  let prevDirectory = '';

  if (shouldQuitImmediately) {
    _electron.app.quit();

    return;
  }

  _electron.app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (!windowManager) {
      return;
    }

    const window = windowManager.getWindow();

    if (window) {
      if (window.isMinimized()) {
        window.restore();
      }

      window.focus();
    }
  });

  const store = new _electronStore.default(); // Create the user data directory if it does not exist

  const userData = _electron.app.getPath('userData');

  _mkdirp.default.sync(userData);

  _electron.app.whenReady().then( /*#__PURE__*/_asyncToGenerator(function* () {
    try {
      windowManager = new _WindowManager.default(); // Create and show splash before server starts

      const splashScreen = windowManager.createSplashScreen({
        width: 500,
        height: 400,
        show: false,
        frame: false
      });
      splashScreen.loadFile(_path.default.join(__dirname, 'app/assets/Splashscreen.gif'));
      splashScreen.webContents.on('did-finish-load', () => {
        splashScreen.show();
      });
      splashScreen.on('show', () => {
        splashScreen.focus();
      });
      const res = yield (0, _serverCli.default)();

      const {
        address,
        port,
        mountPoints
      } = _objectSpread({}, res);

      if (!(address && port)) {
        _electronLog.default.error('Unable to start the server at ' + _chalk.default.cyan("http://".concat(address, ":").concat(port)));

        return;
      }
      /*if (BUILD_DEV) {
          const menu = Menu.buildFromTemplate(menuTemplate({ address, port, mountPoints }));
          Menu.setApplicationMenu(menu);
      }*/


      const url = "http://".concat(address, ":").concat(port); // The bounds is a rectangle object with the following properties:
      // * `x` Number - The x coordinate of the origin of the rectangle.
      // * `y` Number - The y coordinate of the origin of the rectangle.
      // * `width` Number - The width of the rectangle.
      // * `height` Number - The height of the rectangle.

      const bounds = _objectSpread({
        width: 1140,
        // Defaults to 1140
        height: 768,
        // Defaults to 768
        minWidth: 1140,
        minHeight: 768
      }, store.get('bounds'));

      const options = _objectSpread(_objectSpread({}, bounds), {}, {
        title: "".concat(_package.default.name, " ").concat(_package.default.version)
      });

      const window = windowManager.openWindow(url, options, splashScreen); // Power saver - display sleep higher precedence over app suspension

      powerSaverId = _electron.powerSaveBlocker.start('prevent-display-sleep');

      _electronLog.default.info("Result of powerSaveBlocker: ".concat(_electron.powerSaveBlocker.isStarted(powerSaverId)));

      _electron.powerMonitor.on('lock-screen', () => {
        _electron.powerSaveBlocker.start('prevent-display-sleep');

        _electronLog.default.info('Prevented sleep');
      });

      _electron.powerMonitor.on('suspend', () => {
        _electron.powerSaveBlocker.start('prevent-app-suspension');

        _electronLog.default.info('Prevented suspension');
      }); // Save window size and position


      window.on('close', () => {
        store.set('bounds', window.getBounds());
      });

      _electronUpdater.autoUpdater.on('update-available', info => {
        window.webContents.send('update_available', info);
      });

      _electronUpdater.autoUpdater.on('error', err => {
        window.webContents.send('updated_error', err);
      });

      _electron.ipcMain.once('restart_app', /*#__PURE__*/_asyncToGenerator(function* () {
        yield _electronUpdater.autoUpdater.downloadUpdate();

        _electronUpdater.autoUpdater.quitAndInstall(false, true);
      }));

      _electron.ipcMain.on('load-recent-file', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(function* (msg, recentFile) {
          const fileMetadata = yield (0, _RecentFiles.parseAndReturnGCode)(recentFile);
          window.webContents.send('loaded-recent-file', fileMetadata);
        });

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());

      _electron.ipcMain.on('open-upload-dialog', /*#__PURE__*/_asyncToGenerator(function* () {
        try {
          let additionalOptions = {};

          if (prevDirectory) {
            _electronLog.default.info("Found previous directory ".concat(prevDirectory));

            additionalOptions.defaultPath = prevDirectory;
          }

          const file = yield _electron.dialog.showOpenDialog(window, {
            properties: ['openFile'],
            filters: [{
              name: 'GCode Files',
              extensions: ['gcode', 'gc', 'nc', 'tap', 'cnc']
            }, {
              name: 'All Files',
              extensions: ['*']
            }]
          });

          if (!file) {
            _electronLog.default.info('No file found');

            return;
          }

          if (file.canceled) {
            return;
          }

          const FULL_FILE_PATH = file.filePaths[0];

          const getFileInformation = file => {
            const {
              base,
              dir
            } = _path.default.parse(file);

            return [dir, base];
          };

          const [filePath, fileName] = getFileInformation(FULL_FILE_PATH);
          prevDirectory = filePath; // set previous directory

          _fs.default.readFile(FULL_FILE_PATH, 'utf8', (err, data) => {
            if (err) {
              _electronLog.default.error("Error in readFile: ".concat(err));

              return;
            }

            const {
              size
            } = _fs.default.statSync(FULL_FILE_PATH);

            window.webContents.send('returned-upload-dialog-data', {
              data,
              size,
              name: fileName,
              path: FULL_FILE_PATH
            });
          });
        } catch (e) {
          _electronLog.default.error("Caught error in listener - ".concat(e));
        }
      }));
    } catch (err) {
      _electronLog.default.error(err);
    } //Check for available updates at end to avoid try-catch failing to load events


    const internetConnectivity = yield (0, _isOnline.default)();

    if (internetConnectivity) {
      _electronUpdater.autoUpdater.autoDownload = false; // We don't want to force update but will prompt until it is updated

      yield _electronUpdater.autoUpdater.checkForUpdates();
    }
  }));
};

main();