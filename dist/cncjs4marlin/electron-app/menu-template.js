"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = options => {
  const menuTemplate = process.platform === 'darwin' ? require('./menu-template.darwin').default : require('./menu-template.default').default;
  return menuTemplate(options);
};

exports.default = _default;