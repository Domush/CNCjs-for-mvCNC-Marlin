"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _electron = require("electron");

var _os = _interopRequireDefault(require("os"));

var _log = _interopRequireDefault(require("./log"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var notify = function notify(title, message) {
  var windows = _electron.BrowserWindow.getAllWindows();

  if (windows.length === 0) {
    return;
  }

  windows[0].webContents.send('notify', title, message);
};

var AutoUpdater = function AutoUpdater(window) {
  _classCallCheck(this, AutoUpdater);

  if (process.platform !== 'darwin') {
    return;
  }

  _electron.autoUpdater.addListener('update-available', function (event) {
    _log["default"].debug('A new update is available');
  }); // On Windows only `releaseName` is available.


  _electron.autoUpdater.addListener('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateURL) {
    var title = 'A new update is ready to install';
    var message = "Version ".concat(releaseName, " is downloaded and will be automatically installed on quit");
    notify(title, message);
  });

  _electron.autoUpdater.addListener('error', function (err) {
    _log["default"].error(err);
  });

  _electron.autoUpdater.addListener('checking-for-update', function () {
    _log["default"].debug('checking-for-update');
  });

  _electron.autoUpdater.addListener('update-not-available', function () {
    _log["default"].debug('update-not-available');
  });

  var updateServerHost = ''; // FIXME

  var platform = _os["default"].platform();

  var arch = _os["default"].arch();

  var version = _electron.app.getVersion();

  var feedURL = "https://".concat(updateServerHost, "/update/").concat(platform, "-").concat(arch, "/").concat(version);

  _electron.autoUpdater.setFeedURL(feedURL);

  window.webContents.once('did-frame-finish-load', function (event) {
    _electron.autoUpdater.checkForUpdates();
  });
};

var _default = AutoUpdater;
exports["default"] = _default;