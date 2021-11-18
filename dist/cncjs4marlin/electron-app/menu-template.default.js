"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _electron = require("electron");

var _trimStart = _interopRequireDefault(require("lodash/trimStart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/electron/electron/blob/master/docs/api/menu/
var _default = function _default(options) {
  // mountPoints = [
  //   {
  //     route: '/widget',
  //     target: '~+/widget'
  //   }
  // ]
  var _options = _objectSpread({}, options),
      address = _options.address,
      port = _options.port,
      _options$mountPoints = _options.mountPoints,
      mountPoints = _options$mountPoints === void 0 ? [] : _options$mountPoints;

  var menuItems = [];

  if (mountPoints.length > 0) {
    menuItems = [{
      type: 'separator'
    }, {
      label: 'Mount Points',
      enabled: false
    }].concat(mountPoints.map(function (mountPoint) {
      return {
        label: "  ".concat(mountPoint.route),
        click: function click() {
          var routePath = (0, _trimStart["default"])(mountPoint.route, '/');
          var url = "http://".concat(address, ":").concat(port, "/").concat(routePath);

          _electron.shell.openExternal(url);
        }
      };
    }));
  }

  var template = [{
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
      click: function click() {
        var url = "http://".concat(address, ":").concat(port);

        _electron.shell.openExternal(url);
      }
    }].concat(_toConsumableArray(menuItems))
  }, {
    role: 'window',
    submenu: [{
      role: 'minimize'
    }, {
      role: 'close'
    }]
  }, {
    role: 'help',
    submenu: [{
      label: 'Learn More',
      click: function click() {
        _electron.shell.openExternal('https://github.com/Domush/cncjs4marlin#readme');
      }
    }]
  }];
  return template;
};

exports["default"] = _default;