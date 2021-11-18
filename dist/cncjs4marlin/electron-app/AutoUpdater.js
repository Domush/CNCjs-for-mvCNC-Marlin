"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _electron = require("electron");

var _os = _interopRequireDefault(require("os"));

var _log = _interopRequireDefault(require("./log"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-unresolved: 0 */
const notify = (title, message) => {
  const windows = _electron.BrowserWindow.getAllWindows();

  if (windows.length === 0) {
    return;
  }

  windows[0].webContents.send('notify', title, message);
};

class AutoUpdater {
  constructor(window) {
    if (process.platform !== 'darwin') {
      return;
    }

    _electron.autoUpdater.addListener('update-available', event => {
      _log.default.debug('A new update is available');
    }); // On Windows only `releaseName` is available.


    _electron.autoUpdater.addListener('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateURL) => {
      const title = 'A new update is ready to install';
      const message = "Version ".concat(releaseName, " is downloaded and will be automatically installed on quit");
      notify(title, message);
    });

    _electron.autoUpdater.addListener('error', err => {
      _log.default.error(err);
    });

    _electron.autoUpdater.addListener('checking-for-update', () => {
      _log.default.debug('checking-for-update');
    });

    _electron.autoUpdater.addListener('update-not-available', () => {
      _log.default.debug('update-not-available');
    });

    const updateServerHost = ''; // FIXME

    const platform = _os.default.platform();

    const arch = _os.default.arch();

    const version = _electron.app.getVersion();

    const feedURL = "https://".concat(updateServerHost, "/update/").concat(platform, "-").concat(arch, "/").concat(version);

    _electron.autoUpdater.setFeedURL(feedURL);

    window.webContents.once('did-frame-finish-load', event => {
      _electron.autoUpdater.checkForUpdates();
    });
  }

}

var _default = AutoUpdater;
exports.default = _default;