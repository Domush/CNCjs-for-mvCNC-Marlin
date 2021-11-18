"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WindowManager = /*#__PURE__*/function () {
  function WindowManager() {
    var _this = this;

    _classCallCheck(this, WindowManager);

    _defineProperty(this, "windows", []);

    _defineProperty(this, "title", '');

    _defineProperty(this, "url", '');

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    // https://github.com/electron/electron/blob/master/docs/api/app.md#event-activate-os-x
    // Emitted when the application is activated, which usually happens
    // when the user clicks on the application's dock icon.
    _electron.app.on('activate', function (e) {
      var window = _this.getWindow();

      if (!window) {
        _this.openWindow(_this.url, {
          title: _this.title,
          width: _this.width || 500,
          height: _this.height || 400,
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


    _electron.app.on('window-all-closed', function () {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform === 'darwin') {
        var window = _this.getWindow();

        if (window) {
          // Remember current window attributes that will be used for the next 'activate' event
          _this.title = window.title;
          _this.url = window.webContents.getURL();

          var _window$getSize = window.getSize(),
              _window$getSize2 = _slicedToArray(_window$getSize, 2),
              width = _window$getSize2[0],
              height = _window$getSize2[1];

          _this.width = width;
          _this.height = height;
        }

        return;
      }

      _electron.app.quit();
    });
  }

  _createClass(WindowManager, [{
    key: "openWindow",
    value: function openWindow(url, options, splashScreen) {
      var _this2 = this;

      var window = new _electron.BrowserWindow(_objectSpread(_objectSpread({}, options), {}, {
        show: false,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          contextIsolation: false,
          preload: _path["default"].join(__dirname, 'preload.js')
        }
      }));
      var webContents = window.webContents; //window.removeMenu();

      window.webContents.once('did-finish-load', function () {
        window.setTitle(options.title);
      });
      window.on('closed', function (event) {
        var index = _this2.windows.indexOf(event.sender);

        console.assert(index >= 0);

        _this2.windows.splice(index, 1);
      }); // Open every external link in a new window
      // https://github.com/electron/electron/blob/master/docs/api/web-contents.md

      webContents.on('new-window', function (event, url) {
        event.preventDefault();

        _electron.shell.openExternal(url);
      });

      if (splashScreen) {
        webContents.once('dom-ready', function () {
          window.show();
          splashScreen.close();
          splashScreen.destroy();
        });
      } else {
        window.show();
      } // Call `ses.setProxy` to ignore proxy settings
      // http://electron.atom.io/docs/latest/api/session/#sessetproxyconfig-callback


      var ses = webContents.session;
      ses.setProxy({
        proxyRules: 'direct://'
      }).then(function () {
        window.loadURL(url);
      });
      this.windows.push(window);
      return window;
    }
  }, {
    key: "createSplashScreen",
    value: function createSplashScreen(options) {
      var splashScreen = new _electron.BrowserWindow(_objectSpread({}, options));
      return splashScreen;
    }
  }, {
    key: "getWindow",
    value: function getWindow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.windows.length === 0) {
        return null;
      }

      return this.windows[index] || null;
    }
  }]);

  return WindowManager;
}();

var _default = WindowManager;
exports["default"] = _default;