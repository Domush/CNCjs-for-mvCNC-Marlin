"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = {
  debug: (0, _debug["default"])(_package["default"] + ':debug'),
  info: (0, _debug["default"])(_package["default"] + ':info'),
  warn: (0, _debug["default"])(_package["default"] + ':warn'),
  error: (0, _debug["default"])(_package["default"] + ':error'),
  fatal: (0, _debug["default"])(_package["default"] + ':fatal')
};
var _default = log;
exports["default"] = _default;