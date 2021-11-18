"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAndReturnGCode = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const path = require('path');

const fs = require('fs').promises;

const fsBase = require('fs');

const getFileInformation = file => {
  const fileName = path.parse(file).base;
  const filePath = path.parse(file).dir;
  return [filePath, fileName];
};

const fileExistsAtPath = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (filePath) {
    try {
      yield fs.access(filePath);
      return true;
    } catch (e) {
      return false;
    }
  });

  return function fileExistsAtPath(_x) {
    return _ref.apply(this, arguments);
  };
}();

const parseAndReturnGCode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (_ref2) {
    let {
      filePath
    } = _ref2;
    const [fileDir, fileName] = getFileInformation(filePath);

    try {
      const fileExists = yield fileExistsAtPath(filePath);

      if (!fileExists) {
        return null; // TODO: Handle null as FILENOTFOUND error
      }

      const stats = fsBase.statSync(filePath);
      const {
        size
      } = stats;
      const data = yield fs.readFile(filePath, 'utf-8');
      return {
        result: data,
        size: size,
        name: fileName,
        dir: fileDir,
        fullPath: filePath
      };
    } catch (err) {
      throw err;
    }
  });

  return function parseAndReturnGCode(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.parseAndReturnGCode = parseAndReturnGCode;