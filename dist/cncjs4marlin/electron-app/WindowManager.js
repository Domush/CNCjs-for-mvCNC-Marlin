"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WindowManager {
  constructor() {
    _defineProperty(this, "windows", []);

    _defineProperty(this, "title", '');

    _defineProperty(this, "url", '');

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    // https://github.com/electron/electron/blob/master/docs/api/app.md#event-activate-os-x
    // Emitted when the application is activated, which usually happens
    // when the user clicks on the application's dock icon.
    _electron.app.on('activate', e => {
      const window = this.getWindow();

      if (!window) {
        this.openWindow(this.url, {
          title: this.title,
          width: this.width || 500,
          height: this.height || 400,
          minWidth: 1280,
          minHeight: 768
        });
      }
    }); // https://github.com/electron/electron/blob/master/docs/api/app.md#event-window-all-closed
    // Emitted when all windows have been closed.
    // This event is only emitted when the application is not going to quit.
    // If the user pressed Cmd + Q, or the developer called app.quit(), Electron
    // will first try to close all the windows and then emit the will-quit event,
    // and in this case the window-all-closed event would not be emitted.


    _electron.app.on('window-all-closed', () => {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform === 'darwin') {
        const window = this.getWindow();

        if (window) {
          // Remember current window attributes that will be used for the next 'activate' event
          this.title = window.title;
          this.url = window.webContents.getURL();
          const [width, height] = window.getSize();
          this.width = width;
          this.height = height;
        }

        return;
      }

      _electron.app.quit();
    });
  }

  openWindow(url, options, splashScreen) {
    const window = new _electron.BrowserWindow(_objectSpread(_objectSpread({}, options), {}, {
      show: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false,
        preload: _path.default.join(__dirname, 'preload.js')
      }
    }));
    const webContents = window.webContents;
    window.removeMenu();
    window.webContents.once('did-finish-load', () => {
      window.setTitle(options.title);
    });
    window.on('closed', event => {
      const index = this.windows.indexOf(event.sender);
      console.assert(index >= 0);
      this.windows.splice(index, 1);
    }); // Open every external link in a new window
    // https://github.com/electron/electron/blob/master/docs/api/web-contents.md

    webContents.on('new-window', (event, url) => {
      event.preventDefault();

      _electron.shell.openExternal(url);
    });

    if (splashScreen) {
      webContents.once('dom-ready', () => {
        window.show();
        splashScreen.close();
        splashScreen.destroy();
      });
    } else {
      window.show();
    } // Call `ses.setProxy` to ignore proxy settings
    // http://electron.atom.io/docs/latest/api/session/#sessetproxyconfig-callback


    const ses = webContents.session;
    ses.setProxy({
      proxyRules: 'direct://'
    }).then(() => {
      window.loadURL(url);
    });
    this.windows.push(window);
    return window;
  }

  createSplashScreen(options) {
    const splashScreen = new _electron.BrowserWindow(_objectSpread({}, options));
    return splashScreen;
  }

  getWindow() {
    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.windows.length === 0) {
      return null;
    }

    return this.windows[index] || null;
  }

}

var _default = WindowManager;
exports.default = _default;