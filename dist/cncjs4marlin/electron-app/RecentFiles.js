"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAndReturnGCode = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = require('path');

var fs = require('fs').promises;

var fsBase = require('fs');

var getFileInformation = function getFileInformation(file) {
  var fileName = path.parse(file).base;
  var filePath = path.parse(file).dir;
  return [filePath, fileName];
};

var fileExistsAtPath = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filePath) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fs.access(filePath);

          case 3:
            return _context.abrupt("return", true);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function fileExistsAtPath(_x) {
    return _ref.apply(this, arguments);
  };
}();

var parseAndReturnGCode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var filePath, _getFileInformation, _getFileInformation2, fileDir, fileName, fileExists, stats, size, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filePath = _ref2.filePath;
            _getFileInformation = getFileInformation(filePath), _getFileInformation2 = _slicedToArray(_getFileInformation, 2), fileDir = _getFileInformation2[0], fileName = _getFileInformation2[1];
            _context2.prev = 2;
            _context2.next = 5;
            return fileExistsAtPath(filePath);

          case 5:
            fileExists = _context2.sent;

            if (fileExists) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", null);

          case 8:
            stats = fsBase.statSync(filePath);
            size = stats.size;
            _context2.next = 12;
            return fs.readFile(filePath, 'utf-8');

          case 12:
            data = _context2.sent;
            return _context2.abrupt("return", {
              result: data,
              size: size,
              name: fileName,
              dir: fileDir,
              fullPath: filePath
            });

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](2);
            throw _context2.t0;

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 16]]);
  }));

  return function parseAndReturnGCode(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.parseAndReturnGCode = parseAndReturnGCode;