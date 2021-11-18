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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var windowManager = null;
var powerSaverId = null;

var main = function main() {
  // https://github.com/electron/electron/blob/master/docs/api/app.md#apprequestsingleinstancelock
  var gotSingleInstanceLock = _electron.app.requestSingleInstanceLock();

  var shouldQuitImmediately = !gotSingleInstanceLock;
  var prevDirectory = '';

  if (shouldQuitImmediately) {
    _electron.app.quit();

    return;
  }

  _electron.app.on('second-instance', function (event, commandLine, workingDirectory) {
    // Someone tried to run a second instance, we should focus our window.
    if (!windowManager) {
      return;
    }

    var window = windowManager.getWindow();

    if (window) {
      if (window.isMinimized()) {
        window.restore();
      }

      window.focus();
    }
  });

  var store = new _electronStore["default"](); // Create the user data directory if it does not exist

  var userData = _electron.app.getPath('userData');

  _mkdirp["default"].sync(userData);

  _electron.app.whenReady().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var splashScreen, res, _res, address, port, mountPoints, url, bounds, options, window, internetConnectivity;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            windowManager = new _WindowManager["default"](); // Create and show splash before server starts

            splashScreen = windowManager.createSplashScreen({
              width: 500,
              height: 400,
              show: false,
              frame: false
            });
            splashScreen.loadFile(_path["default"].join(__dirname, 'app/assets/Splashscreen.gif'));
            splashScreen.webContents.on('did-finish-load', function () {
              splashScreen.show();
            });
            splashScreen.on('show', function () {
              splashScreen.focus();
            });
            _context4.next = 8;
            return (0, _serverCli["default"])();

          case 8:
            res = _context4.sent;
            _res = _objectSpread({}, res), address = _res.address, port = _res.port, mountPoints = _res.mountPoints;

            if (address && port) {
              _context4.next = 13;
              break;
            }

            _electronLog["default"].error('Unable to start the server at ' + _chalk["default"].cyan("http://".concat(address, ":").concat(port)));

            return _context4.abrupt("return");

          case 13:
            /*if (BUILD_DEV) {
                const menu = Menu.buildFromTemplate(menuTemplate({ address, port, mountPoints }));
                Menu.setApplicationMenu(menu);
            }*/
            url = "http://".concat(address, ":").concat(port); // The bounds is a rectangle object with the following properties:
            // * `x` Number - The x coordinate of the origin of the rectangle.
            // * `y` Number - The y coordinate of the origin of the rectangle.
            // * `width` Number - The width of the rectangle.
            // * `height` Number - The height of the rectangle.

            bounds = _objectSpread({
              width: 1140,
              // Defaults to 1140
              height: 768,
              // Defaults to 768
              minWidth: 1140,
              minHeight: 768
            }, store.get('bounds'));
            options = _objectSpread(_objectSpread({}, bounds), {}, {
              title: "".concat(_package["default"].name, " ").concat(_package["default"].version)
            });
            window = windowManager.openWindow(url, options, splashScreen); // Power saver - display sleep higher precedence over app suspension

            powerSaverId = _electron.powerSaveBlocker.start('prevent-display-sleep');

            _electronLog["default"].info("Result of powerSaveBlocker: ".concat(_electron.powerSaveBlocker.isStarted(powerSaverId)));

            _electron.powerMonitor.on('lock-screen', function () {
              _electron.powerSaveBlocker.start('prevent-display-sleep');

              _electronLog["default"].info('Prevented sleep');
            });

            _electron.powerMonitor.on('suspend', function () {
              _electron.powerSaveBlocker.start('prevent-app-suspension');

              _electronLog["default"].info('Prevented suspension');
            }); // Save window size and position


            window.on('close', function () {
              store.set('bounds', window.getBounds());
            });

            _electronUpdater.autoUpdater.on('update-available', function (info) {
              window.webContents.send('update_available', info);
            });

            _electronUpdater.autoUpdater.on('error', function (err) {
              window.webContents.send('updated_error', err);
            });

            _electron.ipcMain.once('restart_app', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _electronUpdater.autoUpdater.downloadUpdate();

                    case 2:
                      _electronUpdater.autoUpdater.quitAndInstall(false, true);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

            _electron.ipcMain.on('load-recent-file', /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(msg, recentFile) {
                var fileMetadata;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0, _RecentFiles.parseAndReturnGCode)(recentFile);

                      case 2:
                        fileMetadata = _context2.sent;
                        window.webContents.send('loaded-recent-file', fileMetadata);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x, _x2) {
                return _ref3.apply(this, arguments);
              };
            }());

            _electron.ipcMain.on('open-upload-dialog', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var additionalOptions, file, FULL_FILE_PATH, getFileInformation, _getFileInformation, _getFileInformation2, filePath, fileName;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      additionalOptions = {};

                      if (prevDirectory) {
                        _electronLog["default"].info("Found previous directory ".concat(prevDirectory));

                        additionalOptions.defaultPath = prevDirectory;
                      }

                      _context3.next = 5;
                      return _electron.dialog.showOpenDialog(window, {
                        properties: ['openFile'],
                        filters: [{
                          name: 'GCode Files',
                          extensions: ['gcode', 'gc', 'nc', 'tap', 'cnc']
                        }, {
                          name: 'All Files',
                          extensions: ['*']
                        }]
                      });

                    case 5:
                      file = _context3.sent;

                      if (file) {
                        _context3.next = 9;
                        break;
                      }

                      _electronLog["default"].info('No file found');

                      return _context3.abrupt("return");

                    case 9:
                      if (!file.canceled) {
                        _context3.next = 11;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 11:
                      FULL_FILE_PATH = file.filePaths[0];

                      getFileInformation = function getFileInformation(file) {
                        var _path$parse = _path["default"].parse(file),
                            base = _path$parse.base,
                            dir = _path$parse.dir;

                        return [dir, base];
                      };

                      _getFileInformation = getFileInformation(FULL_FILE_PATH), _getFileInformation2 = _slicedToArray(_getFileInformation, 2), filePath = _getFileInformation2[0], fileName = _getFileInformation2[1];
                      prevDirectory = filePath; // set previous directory

                      _fs["default"].readFile(FULL_FILE_PATH, 'utf8', function (err, data) {
                        if (err) {
                          _electronLog["default"].error("Error in readFile: ".concat(err));

                          return;
                        }

                        var _fs$statSync = _fs["default"].statSync(FULL_FILE_PATH),
                            size = _fs$statSync.size;

                        window.webContents.send('returned-upload-dialog-data', {
                          data: data,
                          size: size,
                          name: fileName,
                          path: FULL_FILE_PATH
                        });
                      });

                      _context3.next = 21;
                      break;

                    case 18:
                      _context3.prev = 18;
                      _context3.t0 = _context3["catch"](0);

                      _electronLog["default"].error("Caught error in listener - ".concat(_context3.t0));

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, null, [[0, 18]]);
            })));

            _context4.next = 32;
            break;

          case 29:
            _context4.prev = 29;
            _context4.t0 = _context4["catch"](0);

            _electronLog["default"].error(_context4.t0);

          case 32:
            _context4.next = 34;
            return (0, _isOnline["default"])();

          case 34:
            internetConnectivity = _context4.sent;

            if (!internetConnectivity) {
              _context4.next = 39;
              break;
            }

            _electronUpdater.autoUpdater.autoDownload = false; // We don't want to force update but will prompt until it is updated

            _context4.next = 39;
            return _electronUpdater.autoUpdater.checkForUpdates();

          case 39:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 29]]);
  })));
};

main();