"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _electron = require("electron");

var _trimStart = _interopRequireDefault(require("lodash/trimStart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/electron/electron/blob/master/docs/api/menu/
var _default = options => {
  // mountPoints = [
  //   {
  //     route: '/widget',
  //     target: '~+/widget'
  //   }
  // ]
  const {
    address,
    port,
    mountPoints = []
  } = _objectSpread({}, options);

  let menuItems = [];

  if (mountPoints.length > 0) {
    menuItems = [{
      type: 'separator'
    }, {
      label: 'Mount Points',
      enabled: false
    }].concat(mountPoints.map(mountPoint => ({
      label: "  ".concat(mountPoint.route),
      click: () => {
        const routePath = (0, _trimStart.default)(mountPoint.route, '/');
        const url = "http://".concat(address, ":").concat(port, "/").concat(routePath);

        _electron.shell.openExternal(url);
      }
    })));
  }

  const template = [{
    label: _electron.app.getName(),
    submenu: [{
      role: 'about'
    }, {
      type: 'separator'
    }, {
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      role: 'hide'
    }, {
      role: 'hideothers'
    }, {
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      role: 'quit'
    }]
  }, {
    label: 'Edit',
    submenu: [{
      role: 'undo'
    }, {
      role: 'redo'
    }, {
      type: 'separator'
    }, {
      role: 'cut'
    }, {
      role: 'copy'
    }, {
      role: 'paste'
    }, {
      role: 'pasteandmatchstyle'
    }, {
      role: 'delete'
    }, {
      role: 'selectall'
    }, {
      type: 'separator'
    }, {
      label: 'Speech',
      submenu: [{
        role: 'startspeaking'
      }, {
        role: 'stopspeaking'
      }]
    }]
  }, {
    label: 'View',
    submenu: [{
      role: 'reload'
    }, {
      role: 'forcereload'
    }, {
      role: 'toggledevtools'
    }, {
      type: 'separator'
    }, {
      role: 'resetzoom'
    }, {
      role: 'zoomin'
    }, {
      role: 'zoomout'
    }, {
      type: 'separator'
    }, {
      role: 'togglefullscreen'
    }, {
      type: 'separator'
    }, {
      label: 'View In Browser',
      click: () => {
        const url = "http://".concat(address, ":").concat(port);

        _electron.shell.openExternal(url);
      }
    }, ...menuItems]
  }, {
    role: 'window',
    submenu: [{
      role: 'close'
    }, {
      role: 'minimize'
    }, {
      role: 'zoom'
    }, {
      type: 'separator'
    }, {
      role: 'front'
    }]
  }, {
    role: 'help',
    submenu: [{
      label: 'Learn More',
      click: () => {
        _electron.shell.openExternal('https://github.com/Domush/cncjs4marlin#readme');
      }
    }]
  }];
  return template;
};

exports.default = _default;