module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _settings_development__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _settings_production__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);




var env = "production" || false; // Ensure production environment if empty

var settings = {};

if (env === 'development') {
  lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(settings, _settings_base__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _settings_development__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    env: env
  });
} else {
  lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(settings, _settings_base__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _settings_production__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    env: env
  });
}

/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERR_BAD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ERR_UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ERR_FORBIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERR_NOT_FOUND; });
/* unused harmony export ERR_METHOD_NOT_ALLOWED */
/* unused harmony export ERR_NOT_ACCEPTABLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERR_CONFLICT; });
/* unused harmony export ERR_LENGTH_REQUIRED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ERR_PRECONDITION_FAILED; });
/* unused harmony export ERR_PAYLOAD_TOO_LARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ERR_INTERNAL_SERVER_ERROR; });
// Error Codes
var ERR_BAD_REQUEST = 400;
var ERR_UNAUTHORIZED = 401;
var ERR_FORBIDDEN = 403;
var ERR_NOT_FOUND = 404;
var ERR_METHOD_NOT_ALLOWED = 405;
var ERR_NOT_ACCEPTABLE = 406;
var ERR_CONFLICT = 409;
var ERR_LENGTH_REQUIRED = 411;
var ERR_PRECONDITION_FAILED = 412;
var ERR_PAYLOAD_TOO_LARGE = 413;
var ERR_INTERNAL_SERVER_ERROR = 500;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])('service:configstore');
var defaultState = {
  // default state
  checkForUpdates: true,
  controller: {
    exception: {
      ignoreErrors: false
    }
  }
};

var ConfigStore = /*#__PURE__*/function (_events$EventEmitter) {
  _inherits(ConfigStore, _events$EventEmitter);

  var _super = _createSuper(ConfigStore);

  function ConfigStore() {
    var _this;

    _classCallCheck(this, ConfigStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "file", '');

    _defineProperty(_assertThisInitialized(_this), "config", {});

    _defineProperty(_assertThisInitialized(_this), "watcher", null);

    return _this;
  }

  _createClass(ConfigStore, [{
    key: "load",
    value: // @param {string} file The path to a filename.
    // @return {object} The config object.
    function load(file) {
      var _this2 = this;

      this.file = file;
      this.reload();
      this.emit('load', this.config); // emit load event

      if (this.watcher) {
        // Stop watching for changes
        this.watcher.close();
        this.watcher = null;
      }

      try {
        if (!fs__WEBPACK_IMPORTED_MODULE_6___default.a.existsSync(this.file)) {
          var content = JSON.stringify({});
          fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync(this.file, content, 'utf8');
        }

        this.watcher = fs__WEBPACK_IMPORTED_MODULE_6___default.a.watch(this.file, function (eventType, filename) {
          log.debug("fs.watch(eventType='".concat(eventType, "', filename='").concat(filename, "')"));

          if (eventType === 'change') {
            log.debug("\"".concat(filename, "\" has been changed"));

            var ok = _this2.reload();

            ok && _this2.emit('change', _this2.config); // it is ok to emit change event
          }
        });
      } catch (err) {
        log.error(err);
        this.emit('error', err); // emit error event
      }

      return this.config;
    }
  }, {
    key: "reload",
    value: function reload() {
      try {
        if (fs__WEBPACK_IMPORTED_MODULE_6___default.a.existsSync(this.file)) {
          this.config = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_6___default.a.readFileSync(this.file, 'utf8'));
        }
      } catch (err) {
        err.fileName = this.file;
        log.error("Unable to load data from ".concat(chalk__WEBPACK_IMPORTED_MODULE_7___default.a.yellow(JSON.stringify(this.file)), ": err=").concat(err));
        this.emit('error', err); // emit error event

        return false;
      }

      if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4___default()(this.config)) {
        log.error("\"".concat(this.file, "\" does not contain valid JSON"));
        this.config = {};
      }

      this.config.state = _objectSpread(_objectSpread({}, defaultState), this.config.state);
      return true;
    }
  }, {
    key: "sync",
    value: function sync() {
      try {
        var content = JSON.stringify(this.config, null, 4);
        fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync(this.file, content, 'utf8');
      } catch (err) {
        log.error("Unable to write data to \"".concat(this.file, "\""));
        this.emit('error', err); // emit error event

        return false;
      }

      return true;
    }
  }, {
    key: "has",
    value: function has(key) {
      return lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(this.config, key);
    }
  }, {
    key: "get",
    value: function get(key, defaultValue) {
      if (!this.config) {
        this.reload();
      }

      return key !== undefined ? lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(this.config, key, defaultValue) : this.config;
    }
  }, {
    key: "set",
    value: function set(key, value, options) {
      var _options = _objectSpread({}, options),
          _options$silent = _options.silent,
          silent = _options$silent === void 0 ? false : _options$silent;

      if (key === undefined) {
        return;
      }

      var ok = this.reload(); // reload before making changes

      lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(this.config, key, value);

      ok && !silent && this.sync(); // it is ok to write
    }
  }, {
    key: "unset",
    value: function unset(key) {
      if (key === undefined) {
        return;
      }

      var ok = this.reload(); // reload before making changes

      lodash_unset__WEBPACK_IMPORTED_MODULE_0___default()(this.config, key);

      ok && this.sync(); // it is ok to write
    }
  }]);

  return ConfigStore;
}(events__WEBPACK_IMPORTED_MODULE_5___default.a.EventEmitter);

var configstore = new ConfigStore();
/* harmony default export */ __webpack_exports__["a"] = (configstore);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var normalize = function normalize(str) {
  return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/#/g, '#').replace(/:\//g, '://');
};

var urljoin = function urljoin() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var joined = [].slice.call(args, 0).join('/');
  return normalize(joined);
};

/* harmony default export */ __webpack_exports__["a"] = (urljoin);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var api_version_namespaceObject = {};
__webpack_require__.r(api_version_namespaceObject);
__webpack_require__.d(api_version_namespaceObject, "getLatestVersion", function() { return api_version_getLatestVersion; });
var api_state_namespaceObject = {};
__webpack_require__.r(api_state_namespaceObject);
__webpack_require__.d(api_state_namespaceObject, "get", function() { return api_state_get; });
__webpack_require__.d(api_state_namespaceObject, "unset", function() { return api_state_unset; });
__webpack_require__.d(api_state_namespaceObject, "set", function() { return api_state_set; });
var api_gcode_namespaceObject = {};
__webpack_require__.r(api_gcode_namespaceObject);
__webpack_require__.d(api_gcode_namespaceObject, "upload", function() { return api_gcode_upload; });
__webpack_require__.d(api_gcode_namespaceObject, "fetch", function() { return api_gcode_fetch; });
__webpack_require__.d(api_gcode_namespaceObject, "download", function() { return api_gcode_download; });
var api_controllers_namespaceObject = {};
__webpack_require__.r(api_controllers_namespaceObject);
__webpack_require__.d(api_controllers_namespaceObject, "get", function() { return api_controllers_get; });
var api_watch_namespaceObject = {};
__webpack_require__.r(api_watch_namespaceObject);
__webpack_require__.d(api_watch_namespaceObject, "getFiles", function() { return api_watch_getFiles; });
__webpack_require__.d(api_watch_namespaceObject, "readFile", function() { return api_watch_readFile; });
var api_commands_namespaceObject = {};
__webpack_require__.r(api_commands_namespaceObject);
__webpack_require__.d(api_commands_namespaceObject, "fetch", function() { return api_commands_fetch; });
__webpack_require__.d(api_commands_namespaceObject, "create", function() { return api_commands_create; });
__webpack_require__.d(api_commands_namespaceObject, "read", function() { return api_commands_read; });
__webpack_require__.d(api_commands_namespaceObject, "update", function() { return api_commands_update; });
__webpack_require__.d(api_commands_namespaceObject, "__delete", function() { return api_commands_delete; });
__webpack_require__.d(api_commands_namespaceObject, "run", function() { return api_commands_run; });
var api_events_namespaceObject = {};
__webpack_require__.r(api_events_namespaceObject);
__webpack_require__.d(api_events_namespaceObject, "fetch", function() { return api_events_fetch; });
__webpack_require__.d(api_events_namespaceObject, "create", function() { return api_events_create; });
__webpack_require__.d(api_events_namespaceObject, "read", function() { return api_events_read; });
__webpack_require__.d(api_events_namespaceObject, "update", function() { return api_events_update; });
__webpack_require__.d(api_events_namespaceObject, "__delete", function() { return api_events_delete; });
var api_machines_namespaceObject = {};
__webpack_require__.r(api_machines_namespaceObject);
__webpack_require__.d(api_machines_namespaceObject, "fetch", function() { return api_machines_fetch; });
__webpack_require__.d(api_machines_namespaceObject, "create", function() { return api_machines_create; });
__webpack_require__.d(api_machines_namespaceObject, "read", function() { return api_machines_read; });
__webpack_require__.d(api_machines_namespaceObject, "update", function() { return api_machines_update; });
__webpack_require__.d(api_machines_namespaceObject, "__delete", function() { return api_machines_delete; });
var api_macros_namespaceObject = {};
__webpack_require__.r(api_macros_namespaceObject);
__webpack_require__.d(api_macros_namespaceObject, "fetch", function() { return api_macros_fetch; });
__webpack_require__.d(api_macros_namespaceObject, "create", function() { return api_macros_create; });
__webpack_require__.d(api_macros_namespaceObject, "read", function() { return api_macros_read; });
__webpack_require__.d(api_macros_namespaceObject, "update", function() { return api_macros_update; });
__webpack_require__.d(api_macros_namespaceObject, "__delete", function() { return api_macros_delete; });
var api_mdi_namespaceObject = {};
__webpack_require__.r(api_mdi_namespaceObject);
__webpack_require__.d(api_mdi_namespaceObject, "fetch", function() { return api_mdi_fetch; });
__webpack_require__.d(api_mdi_namespaceObject, "create", function() { return api_mdi_create; });
__webpack_require__.d(api_mdi_namespaceObject, "read", function() { return api_mdi_read; });
__webpack_require__.d(api_mdi_namespaceObject, "update", function() { return api_mdi_update; });
__webpack_require__.d(api_mdi_namespaceObject, "bulkUpdate", function() { return api_mdi_bulkUpdate; });
__webpack_require__.d(api_mdi_namespaceObject, "__delete", function() { return api_mdi_delete; });
var api_users_namespaceObject = {};
__webpack_require__.r(api_users_namespaceObject);
__webpack_require__.d(api_users_namespaceObject, "signin", function() { return api_users_signin; });
__webpack_require__.d(api_users_namespaceObject, "fetch", function() { return api_users_fetch; });
__webpack_require__.d(api_users_namespaceObject, "create", function() { return api_users_create; });
__webpack_require__.d(api_users_namespaceObject, "read", function() { return api_users_read; });
__webpack_require__.d(api_users_namespaceObject, "update", function() { return api_users_update; });
__webpack_require__.d(api_users_namespaceObject, "__delete", function() { return api_users_delete; });
var api_file_namespaceObject = {};
__webpack_require__.r(api_file_namespaceObject);
__webpack_require__.d(api_file_namespaceObject, "uploadFile", function() { return api_file_uploadFile; });

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(38);
var external_url_default = /*#__PURE__*/__webpack_require__.n(external_url_);

// EXTERNAL MODULE: external "registry-url"
var external_registry_url_ = __webpack_require__(78);
var external_registry_url_default = /*#__PURE__*/__webpack_require__.n(external_registry_url_);

// EXTERNAL MODULE: external "registry-auth-token"
var external_registry_auth_token_ = __webpack_require__(79);
var external_registry_auth_token_default = /*#__PURE__*/__webpack_require__.n(external_registry_auth_token_);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__(80);
var external_superagent_default = /*#__PURE__*/__webpack_require__.n(external_superagent_);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./api/api.version.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var pkgName = 'cncjs4marlin';
var api_version_getLatestVersion = function getLatestVersion(req, res) {
  var scope = pkgName.split('/')[0];
  var regUrl = external_registry_url_default()(scope);
  var pkgUrl = external_url_default.a.resolve(regUrl, encodeURIComponent(pkgName).replace(/^%40/, '@'));
  var authInfo = external_registry_auth_token_default()(regUrl);
  var headers = {};

  if (authInfo) {
    headers.Authorization = "".concat(authInfo.type, " ").concat(authInfo.token);
  }

  external_superagent_default.a.get(pkgUrl).set(headers).end(function (err, _res) {
    if (err) {
      res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
        msg: "Failed to connect to ".concat(pkgUrl, ": code=").concat(err.code)
      });
      return;
    }

    var _res2 = _objectSpread({}, _res),
        _res2$body = _res2.body,
        data = _res2$body === void 0 ? {} : _res2$body;

    data.time = data.time || {};
    data['dist-tags'] = data['dist-tags'] || {};
    data.versions = data.versions || {};
    var time = data.time[latest];
    var latest = data['dist-tags'].latest;

    var _data$versions$latest = _objectSpread({}, data.versions[latest]),
        name = _data$versions$latest.name,
        version = _data$versions$latest.version,
        description = _data$versions$latest.description,
        homepage = _data$versions$latest.homepage;

    res.send({
      time: time,
      name: name,
      version: version,
      description: description,
      homepage: homepage
    });
  });
};
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(4);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "deep-keys"
var external_deep_keys_ = __webpack_require__(81);
var external_deep_keys_default = /*#__PURE__*/__webpack_require__.n(external_deep_keys_);

// EXTERNAL MODULE: ./services/configstore/index.js
var configstore = __webpack_require__(2);

// CONCATENATED MODULE: ./api/api.state.js


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function api_state_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_state_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_state_ownKeys(Object(source), true).forEach(function (key) { api_state_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_state_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_state_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var api_state_get = function get(req, res) {
  var query = req.query || {};

  if (!query.key) {
    res.send(configstore["a" /* default */].get('state'));
    return;
  }

  var key = "state.".concat(query.key);

  if (!configstore["a" /* default */].has(key)) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var value = configstore["a" /* default */].get(key);
  res.send(value);
};
var api_state_unset = function unset(req, res) {
  var query = req.query || {};

  if (!query.key) {
    res.send(configstore["a" /* default */].get('state'));
    return;
  }

  var key = "state.".concat(query.key);

  if (!configstore["a" /* default */].has(key)) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  configstore["a" /* default */].unset(key);
  res.send({
    err: false
  });
};
var api_state_set = function set(req, res) {
  var query = req.query || {};

  var data = api_state_objectSpread({}, req.body);

  if (query.key) {
    configstore["a" /* default */].set("state.".concat(query.key), data);
    res.send({
      err: false
    });
    return;
  }

  external_deep_keys_default()(data).forEach(function (key) {
    var oldValue = configstore["a" /* default */].get("state.".concat(key));

    var newValue = get_default()(data, key);

    if (_typeof(oldValue) === 'object' && _typeof(newValue) === 'object') {
      configstore["a" /* default */].set("state.".concat(key), api_state_objectSpread(api_state_objectSpread({}, oldValue), newValue));
    } else {
      configstore["a" /* default */].set("state.".concat(key), newValue);
    }
  });
  res.send({
    err: false
  });
};
// EXTERNAL MODULE: ./store/index.js + 1 modules
var store = __webpack_require__(8);

// CONCATENATED MODULE: ./api/api.gcode.js
function api_gcode_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_gcode_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_gcode_ownKeys(Object(source), true).forEach(function (key) { api_gcode_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_gcode_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_gcode_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var api_gcode_upload = function upload(req, res) {
  var _req$body = req.body,
      port = _req$body.port,
      name = _req$body.name,
      gcode = _req$body.gcode,
      _req$body$context = _req$body.context,
      context = _req$body$context === void 0 ? {} : _req$body$context;

  if (!port) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'No port specified'
    });
    return;
  }

  if (!gcode) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'Empty G-code'
    });
    return;
  }

  var controller = store["a" /* default */].get('controllers["' + port + '"]');

  if (!controller) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'Controller not found'
    });
    return;
  } // Load G-code


  controller.command('gcode:load', name, gcode, context, function (err, state) {
    if (err) {
      res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
        msg: 'Failed to load G-code: ' + err
      });
      return;
    }

    res.send(api_gcode_objectSpread({}, state));
  });
};
var api_gcode_fetch = function fetch(req, res) {
  var port = req.query.port;

  if (!port) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'No port specified'
    });
    return;
  }

  var controller = store["a" /* default */].get('controllers["' + port + '"]');

  if (!controller) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'Controller not found'
    });
    return;
  }

  var sender = controller.sender;
  res.send(api_gcode_objectSpread(api_gcode_objectSpread({}, sender.toJSON()), {}, {
    data: sender.state.gcode
  }));
};
var api_gcode_download = function download(req, res) {
  var port = get_default()(req, 'query.port') || get_default()(req, 'body.port');

  if (!port) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'No port specified'
    });
    return;
  }

  var controller = store["a" /* default */].get('controllers["' + port + '"]');

  if (!controller) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'Controller not found'
    });
    return;
  }

  var sender = controller.sender;
  var filename = sender.state.name || 'noname.txt';
  var content = sender.state.gcode || '';
  res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent(filename));
  res.setHeader('Connection', 'close');
  res.write(content);
  res.end();
};
// CONCATENATED MODULE: ./api/api.controllers.js

var api_controllers_get = function get(req, res) {
  var list = [];
  var controllers = store["a" /* default */].get('controllers');
  Object.keys(controllers).forEach(function (port) {
    var controller = controllers[port];

    if (controller) {
      list.push(controller.status);
    }
  });
  res.send(list);
};
// EXTERNAL MODULE: ./services/monitor/index.js + 1 modules
var monitor = __webpack_require__(23);

// CONCATENATED MODULE: ./api/api.watch.js


var api_watch_getFiles = function getFiles(req, res) {
  var path = req.body.path || req.query.path || '';
  var files = monitor["a" /* default */].getFiles(path);
  res.send({
    path: path,
    files: files
  });
};
var api_watch_readFile = function readFile(req, res) {
  var file = req.body.file || req.query.file || '';
  monitor["a" /* default */].readFile(file, function (err, data) {
    if (err) {
      if (err.code === 'ENOENT') {
        res.status(constants["e" /* ERR_NOT_FOUND */]).send({
          msg: 'File not found'
        });
      } else {
        res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
          msg: 'Failed reading file'
        });
      }

      return;
    }

    res.send({
      file: file,
      data: data
    });
  });
};
// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(6);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);

// EXTERNAL MODULE: external "lodash/castArray"
var castArray_ = __webpack_require__(26);
var castArray_default = /*#__PURE__*/__webpack_require__.n(castArray_);

// EXTERNAL MODULE: external "lodash/isPlainObject"
var isPlainObject_ = __webpack_require__(15);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(17);
var external_uuid_default = /*#__PURE__*/__webpack_require__.n(external_uuid_);

// EXTERNAL MODULE: ./config/settings.js
var settings = __webpack_require__(0);

// EXTERNAL MODULE: ./lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./services/taskrunner/index.js + 1 modules
var taskrunner = __webpack_require__(21);

// CONCATENATED MODULE: ./api/paging.js
var getPagingRange = function getPagingRange(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      _ref$pageLength = _ref.pageLength,
      pageLength = _ref$pageLength === void 0 ? 10 : _ref$pageLength,
      _ref$totalRecords = _ref.totalRecords,
      totalRecords = _ref$totalRecords === void 0 ? 0 : _ref$totalRecords;
  page = Number(page);
  pageLength = Number(pageLength);

  if (!page || page < 1) {
    page = 1;
  }

  if (!pageLength || pageLength < 1) {
    pageLength = 10;
  }

  if ((page - 1) * pageLength >= totalRecords) {
    page = Math.ceil(totalRecords / pageLength);
  }

  var begin = (page - 1) * pageLength;
  var end = Math.min((page - 1) * pageLength + pageLength, totalRecords);
  return [begin, end];
};
// CONCATENATED MODULE: ./api/api.commands.js
function api_commands_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_commands_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_commands_ownKeys(Object(source), true).forEach(function (key) { api_commands_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_commands_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_commands_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var log = Object(logger["a" /* default */])('api:commands');
var CONFIG_KEY = 'commands';

var api_commands_getSanitizedRecords = function getSanitizedRecords() {
  var records = castArray_default()(configstore["a" /* default */].get(CONFIG_KEY, []));
  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    } // Defaults to true


    if (record.enabled === undefined) {
      record.enabled = true;
    } // Alias command


    if (!record.commands) {
      record.commands = record.command || '';
      delete record.command;
    }
  }

  if (shouldUpdate) {
    log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_commands_fetch = function fetch(req, res) {
  var records = api_commands_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = _slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        var _record = api_commands_objectSpread({}, record),
            id = _record.id,
            mtime = _record.mtime,
            enabled = _record.enabled,
            title = _record.title,
            commands = _record.commands;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          title: title,
          commands: commands
        };
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        var _record2 = api_commands_objectSpread({}, record),
            id = _record2.id,
            mtime = _record2.mtime,
            enabled = _record2.enabled,
            title = _record2.title,
            commands = _record2.commands;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          title: title,
          commands: commands
        };
      })
    });
  }
};
var api_commands_create = function create(req, res) {
  var _req$body = api_commands_objectSpread({}, req.body),
      _req$body$enabled = _req$body.enabled,
      enabled = _req$body$enabled === void 0 ? true : _req$body$enabled,
      _req$body$title = _req$body.title,
      title = _req$body$title === void 0 ? '' : _req$body$title,
      _req$body$commands = _req$body.commands,
      commands = _req$body$commands === void 0 ? '' : _req$body$commands;

  if (!title) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "title" parameter must not be empty'
    });
    return;
  }

  if (!commands) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "commands" parameter must not be empty'
    });
    return;
  }

  try {
    var records = api_commands_getSanitizedRecords();
    var record = {
      id: external_uuid_default.a.v4(),
      mtime: new Date().getTime(),
      enabled: !!enabled,
      title: title,
      commands: commands
    };
    records.push(record);
    configstore["a" /* default */].set(CONFIG_KEY, records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_commands_read = function read(req, res) {
  var id = req.params.id;
  var records = api_commands_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _record3 = api_commands_objectSpread({}, record),
      mtime = _record3.mtime,
      enabled = _record3.enabled,
      title = _record3.title,
      commands = _record3.commands;

  res.send({
    id: id,
    mtime: mtime,
    enabled: enabled,
    title: title,
    commands: commands
  });
};
var api_commands_update = function update(req, res) {
  var id = req.params.id;
  var records = api_commands_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _req$body2 = api_commands_objectSpread({}, req.body),
      _req$body2$enabled = _req$body2.enabled,
      enabled = _req$body2$enabled === void 0 ? record.enabled : _req$body2$enabled,
      _req$body2$title = _req$body2.title,
      title = _req$body2$title === void 0 ? record.title : _req$body2$title,
      _req$body2$commands = _req$body2.commands,
      commands = _req$body2$commands === void 0 ? record.commands : _req$body2$commands; // Skip validation for "enabled", "title", and "commands"


  try {
    record.mtime = new Date().getTime();
    record.enabled = Boolean(enabled);
    record.title = String(title || '');
    record.commands = String(commands || ''); // Remove deprecated parameter

    if (record.command !== undefined) {
      delete record.command;
    }

    configstore["a" /* default */].set(CONFIG_KEY, records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_commands_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_commands_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(CONFIG_KEY, filteredRecords);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_commands_run = function run(req, res) {
  var id = req.params.id;
  var records = api_commands_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var title = record.title;
  var commands = record.commands;
  log.info("run: title=\"".concat(title, "\", commands=\"").concat(commands, "\""));
  var taskId = taskrunner["a" /* default */].run(commands, title);
  res.send({
    taskId: taskId
  });
};
// CONCATENATED MODULE: ./api/api.events.js
function api_events_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_events_ownKeys(Object(source), true).forEach(function (key) { api_events_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_events_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function api_events_slicedToArray(arr, i) { return api_events_arrayWithHoles(arr) || api_events_iterableToArrayLimit(arr, i) || api_events_unsupportedIterableToArray(arr, i) || api_events_nonIterableRest(); }

function api_events_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function api_events_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return api_events_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return api_events_arrayLikeToArray(o, minLen); }

function api_events_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function api_events_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function api_events_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var api_events_log = Object(logger["a" /* default */])('api:events');
var api_events_CONFIG_KEY = 'events';

var api_events_getSanitizedRecords = function getSanitizedRecords() {
  var records = castArray_default()(configstore["a" /* default */].get(api_events_CONFIG_KEY, []));
  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    } // Defaults to true


    if (record.enabled === undefined) {
      record.enabled = true;
    } // Alias command


    if (!record.commands) {
      record.commands = record.command || '';
      delete record.command;
    }
  }

  if (shouldUpdate) {
    api_events_log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(api_events_CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_events_fetch = function fetch(req, res) {
  var records = api_events_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = api_events_slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        var _record = api_events_objectSpread({}, record),
            id = _record.id,
            mtime = _record.mtime,
            enabled = _record.enabled,
            event = _record.event,
            trigger = _record.trigger,
            commands = _record.commands;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          event: event,
          trigger: trigger,
          commands: commands
        };
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        var _record2 = api_events_objectSpread({}, record),
            id = _record2.id,
            mtime = _record2.mtime,
            enabled = _record2.enabled,
            event = _record2.event,
            trigger = _record2.trigger,
            commands = _record2.commands;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          event: event,
          trigger: trigger,
          commands: commands
        };
      })
    });
  }
};
var api_events_create = function create(req, res) {
  var _req$body = api_events_objectSpread({}, req.body),
      _req$body$enabled = _req$body.enabled,
      enabled = _req$body$enabled === void 0 ? true : _req$body$enabled,
      _req$body$event = _req$body.event,
      event = _req$body$event === void 0 ? '' : _req$body$event,
      _req$body$trigger = _req$body.trigger,
      trigger = _req$body$trigger === void 0 ? '' : _req$body$trigger,
      _req$body$commands = _req$body.commands,
      commands = _req$body$commands === void 0 ? '' : _req$body$commands;

  if (!event) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "event" parameter must not be empty'
    });
    return;
  }

  if (!trigger) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "trigger" parameter must not be empty'
    });
    return;
  }

  if (!commands) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "commands" parameter must not be empty'
    });
    return;
  }

  try {
    var records = api_events_getSanitizedRecords();
    var record = {
      id: external_uuid_default.a.v4(),
      mtime: new Date().getTime(),
      enabled: !!enabled,
      event: event,
      trigger: trigger,
      commands: commands
    };
    records.push(record);
    configstore["a" /* default */].set(api_events_CONFIG_KEY, records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_events_read = function read(req, res) {
  var id = req.params.id;
  var records = api_events_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _record3 = api_events_objectSpread({}, record),
      mtime = _record3.mtime,
      enabled = _record3.enabled,
      event = _record3.event,
      trigger = _record3.trigger,
      commands = _record3.commands;

  res.send({
    id: id,
    mtime: mtime,
    enabled: enabled,
    event: event,
    trigger: trigger,
    commands: commands
  });
};
var api_events_update = function update(req, res) {
  var id = req.params.id;
  var records = api_events_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _req$body2 = api_events_objectSpread({}, req.body),
      _req$body2$enabled = _req$body2.enabled,
      enabled = _req$body2$enabled === void 0 ? record.enabled : _req$body2$enabled,
      _req$body2$event = _req$body2.event,
      event = _req$body2$event === void 0 ? record.event : _req$body2$event,
      _req$body2$trigger = _req$body2.trigger,
      trigger = _req$body2$trigger === void 0 ? record.trigger : _req$body2$trigger,
      _req$body2$commands = _req$body2.commands,
      commands = _req$body2$commands === void 0 ? record.commands : _req$body2$commands; // Skip validation for "enabled", "event", "trigger", and "commands"


  try {
    record.mtime = new Date().getTime();
    record.enabled = Boolean(enabled);
    record.event = String(event || '');
    record.trigger = String(trigger || '');
    record.commands = String(commands || ''); // Remove deprecated parameter

    if (record.command !== undefined) {
      delete record.command;
    }

    configstore["a" /* default */].set(api_events_CONFIG_KEY, records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_events_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_events_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(api_events_CONFIG_KEY, filteredRecords);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
// EXTERNAL MODULE: external "lodash/set"
var set_ = __webpack_require__(11);
var set_default = /*#__PURE__*/__webpack_require__.n(set_);

// EXTERNAL MODULE: ./lib/ensure-type.js
var ensure_type = __webpack_require__(18);

// CONCATENATED MODULE: ./api/api.machines.js
function api_machines_slicedToArray(arr, i) { return api_machines_arrayWithHoles(arr) || api_machines_iterableToArrayLimit(arr, i) || api_machines_unsupportedIterableToArray(arr, i) || api_machines_nonIterableRest(); }

function api_machines_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function api_machines_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return api_machines_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return api_machines_arrayLikeToArray(o, minLen); }

function api_machines_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function api_machines_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function api_machines_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function api_machines_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_machines_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_machines_ownKeys(Object(source), true).forEach(function (key) { api_machines_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_machines_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_machines_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var api_machines_log = Object(logger["a" /* default */])('api:machines');
var api_machines_CONFIG_KEY = 'machines';

var api_machines_getSanitizedRecords = function getSanitizedRecords() {
  var records = castArray_default()(configstore["a" /* default */].get(api_machines_CONFIG_KEY, []));

  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    api_machines_log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(api_machines_CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_machines_ensureMachineProfile = function ensureMachineProfile(payload) {
  var _payload = api_machines_objectSpread({}, payload),
      id = _payload.id,
      name = _payload.name,
      limits = _payload.limits;

  var _limits = api_machines_objectSpread({}, limits),
      _limits$xmin = _limits.xmin,
      xmin = _limits$xmin === void 0 ? 0 : _limits$xmin,
      _limits$xmax = _limits.xmax,
      xmax = _limits$xmax === void 0 ? 0 : _limits$xmax,
      _limits$ymin = _limits.ymin,
      ymin = _limits$ymin === void 0 ? 0 : _limits$ymin,
      _limits$ymax = _limits.ymax,
      ymax = _limits$ymax === void 0 ? 0 : _limits$ymax,
      _limits$zmin = _limits.zmin,
      zmin = _limits$zmin === void 0 ? 0 : _limits$zmin,
      _limits$zmax = _limits.zmax,
      zmax = _limits$zmax === void 0 ? 0 : _limits$zmax;

  return {
    id: id,
    name: Object(ensure_type["b" /* ensureString */])(name),
    limits: {
      xmin: Object(ensure_type["a" /* ensureNumber */])(xmin) || 0,
      xmax: Object(ensure_type["a" /* ensureNumber */])(xmax) || 0,
      ymin: Object(ensure_type["a" /* ensureNumber */])(ymin) || 0,
      ymax: Object(ensure_type["a" /* ensureNumber */])(ymax) || 0,
      zmin: Object(ensure_type["a" /* ensureNumber */])(zmin) || 0,
      zmax: Object(ensure_type["a" /* ensureNumber */])(zmax) || 0
    }
  };
};

var api_machines_fetch = function fetch(req, res) {
  var records = api_machines_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = api_machines_slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        return api_machines_ensureMachineProfile(record);
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        return api_machines_ensureMachineProfile(record);
      })
    });
  }
};
var api_machines_create = function create(req, res) {
  var record = api_machines_objectSpread({}, req.body);

  if (!record.name) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "name" parameter must not be empty'
    });
    return;
  }

  try {
    var records = api_machines_getSanitizedRecords();
    records.push(api_machines_ensureMachineProfile(record));
    configstore["a" /* default */].set(api_machines_CONFIG_KEY, records);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_machines_read = function read(req, res) {
  var id = req.params.id;
  var records = api_machines_getSanitizedRecords();

  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  res.send(api_machines_ensureMachineProfile(record));
};
var api_machines_update = function update(req, res) {
  var id = req.params.id;
  var records = api_machines_getSanitizedRecords();

  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var nextRecord = req.body;
    [// [key, ensureType]
    ['name', ensure_type["b" /* ensureString */]], ['limits.xmin', ensure_type["a" /* ensureNumber */]], ['limits.xmax', ensure_type["a" /* ensureNumber */]], ['limits.ymin', ensure_type["a" /* ensureNumber */]], ['limits.ymax', ensure_type["a" /* ensureNumber */]], ['limits.zmin', ensure_type["a" /* ensureNumber */]], ['limits.zmax', ensure_type["a" /* ensureNumber */]]].forEach(function (it) {
      var _it = api_machines_slicedToArray(it, 2),
          key = _it[0],
          ensureType = _it[1];

      var defaultValue = get_default()(record, key);

      var value = get_default()(nextRecord, key, defaultValue);

      set_default()(record, key, typeof ensureType === 'function' ? ensureType(value) : value);
    });
    configstore["a" /* default */].set(api_machines_CONFIG_KEY, records);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_machines_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_machines_getSanitizedRecords();

  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(api_machines_CONFIG_KEY, filteredRecords);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
// CONCATENATED MODULE: ./api/api.macros.js
function api_macros_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_macros_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_macros_ownKeys(Object(source), true).forEach(function (key) { api_macros_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_macros_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_macros_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function api_macros_slicedToArray(arr, i) { return api_macros_arrayWithHoles(arr) || api_macros_iterableToArrayLimit(arr, i) || api_macros_unsupportedIterableToArray(arr, i) || api_macros_nonIterableRest(); }

function api_macros_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function api_macros_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return api_macros_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return api_macros_arrayLikeToArray(o, minLen); }

function api_macros_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function api_macros_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function api_macros_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var api_macros_log = Object(logger["a" /* default */])('api:macros');
var api_macros_CONFIG_KEY = 'macros';

var api_macros_getSanitizedRecords = function getSanitizedRecords() {
  var records = castArray_default()(configstore["a" /* default */].get(api_macros_CONFIG_KEY, []));
  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    } // Handle migration, should only run once


    if (!record.description) {
      record.description = '';
      shouldUpdate = true;
    }

    if (!record.column) {
      record.column = i % 2 === 0 ? 'column1' : 'column2';
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    api_macros_log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(api_macros_CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_macros_fetch = function fetch(req, res) {
  var records = api_macros_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = api_macros_slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        var _record = api_macros_objectSpread({}, record),
            id = _record.id,
            mtime = _record.mtime,
            name = _record.name,
            content = _record.content,
            description = _record.description,
            column = _record.column,
            rowIndex = _record.rowIndex;

        return {
          id: id,
          mtime: mtime,
          name: name,
          content: content,
          description: description,
          column: column,
          rowIndex: rowIndex
        };
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        var _record2 = api_macros_objectSpread({}, record),
            id = _record2.id,
            mtime = _record2.mtime,
            name = _record2.name,
            content = _record2.content,
            description = _record2.description,
            column = _record2.column,
            rowIndex = _record2.rowIndex;

        return {
          id: id,
          mtime: mtime,
          name: name,
          content: content,
          description: description,
          column: column,
          rowIndex: rowIndex
        };
      })
    });
  }
};
var api_macros_create = function create(req, res) {
  var _req$body = api_macros_objectSpread({}, req.body),
      name = _req$body.name,
      content = _req$body.content,
      _req$body$description = _req$body.description,
      description = _req$body$description === void 0 ? '' : _req$body$description;

  if (!name) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "name" parameter must not be empty'
    });
    return;
  }

  if (!content) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "content" parameter must not be empty'
    });
    return;
  }

  try {
    var records = api_macros_getSanitizedRecords();
    var column, rowIndex;
    var column1Length = records.filter(function (macro) {
      return macro.column === 'column1';
    }).sort(function (a, b) {
      return a.rowIndex - b.rowIndex;
    }).length;
    var column2Length = records.filter(function (macro) {
      return macro.column === 'column2';
    }).sort(function (a, b) {
      return a.rowIndex - b.rowIndex;
    }).length;

    if (column2Length >= column1Length) {
      column = 'column1';
      rowIndex = column1Length;
    } else {
      column = 'column2';
      rowIndex = column2Length;
    }

    var record = {
      id: external_uuid_default.a.v4(),
      mtime: new Date().getTime(),
      name: name,
      content: content,
      description: description,
      column: column,
      rowIndex: rowIndex
    };
    records.push(record);
    configstore["a" /* default */].set(api_macros_CONFIG_KEY, records);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_macros_read = function read(req, res) {
  var id = req.params.id;
  var records = api_macros_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _record3 = api_macros_objectSpread({}, record),
      mtime = _record3.mtime,
      name = _record3.name,
      content = _record3.content,
      description = _record3.description,
      column = _record3.column,
      rowIndex = _record3.rowIndex;

  res.send({
    id: id,
    mtime: mtime,
    name: name,
    content: content,
    description: description,
    column: column,
    rowIndex: rowIndex
  });
};
var api_macros_update = function update(req, res) {
  var id = req.params.id;
  var records = api_macros_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _req$body2 = api_macros_objectSpread({}, req.body),
      _req$body2$name = _req$body2.name,
      name = _req$body2$name === void 0 ? record.name : _req$body2$name,
      _req$body2$content = _req$body2.content,
      content = _req$body2$content === void 0 ? record.content : _req$body2$content,
      _req$body2$descriptio = _req$body2.description,
      description = _req$body2$descriptio === void 0 ? record.description : _req$body2$descriptio,
      _req$body2$column = _req$body2.column,
      column = _req$body2$column === void 0 ? record.column : _req$body2$column,
      _req$body2$rowIndex = _req$body2.rowIndex,
      rowIndex = _req$body2$rowIndex === void 0 ? record.rowIndex : _req$body2$rowIndex;
  /*
  if (!name) {
      res.status(ERR_BAD_REQUEST).send({
          msg: 'The "name" parameter must not be empty'
      });
      return;
  }
   if (!content) {
      res.status(ERR_BAD_REQUEST).send({
          msg: 'The "content" parameter must not be empty'
      });
      return;
  }
  */


  try {
    record.mtime = new Date().getTime();
    record.name = String(name || '');
    record.content = String(content || '');
    record.description = String(description || '');
    record.column = String(column || '');
    record.rowIndex = Number(rowIndex || 0);
    configstore["a" /* default */].set(api_macros_CONFIG_KEY, records);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_macros_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_macros_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(api_macros_CONFIG_KEY, filteredRecords);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
// EXTERNAL MODULE: external "ensure-array"
var external_ensure_array_ = __webpack_require__(9);
var external_ensure_array_default = /*#__PURE__*/__webpack_require__.n(external_ensure_array_);

// CONCATENATED MODULE: ./api/api.mdi.js
function api_mdi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_mdi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_mdi_ownKeys(Object(source), true).forEach(function (key) { api_mdi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_mdi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_mdi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function api_mdi_slicedToArray(arr, i) { return api_mdi_arrayWithHoles(arr) || api_mdi_iterableToArrayLimit(arr, i) || api_mdi_unsupportedIterableToArray(arr, i) || api_mdi_nonIterableRest(); }

function api_mdi_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function api_mdi_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return api_mdi_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return api_mdi_arrayLikeToArray(o, minLen); }

function api_mdi_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function api_mdi_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function api_mdi_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var api_mdi_log = Object(logger["a" /* default */])('api:mdi');
var api_mdi_CONFIG_KEY = 'mdi';

var api_mdi_getSanitizedRecords = function getSanitizedRecords() {
  var records = external_ensure_array_default()(configstore["a" /* default */].get(api_mdi_CONFIG_KEY, []));
  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    api_mdi_log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(api_mdi_CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_mdi_fetch = function fetch(req, res) {
  var records = api_mdi_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = api_mdi_slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        var _record = api_mdi_objectSpread({}, record),
            id = _record.id,
            name = _record.name,
            command = _record.command,
            _record$grid = _record.grid,
            grid = _record$grid === void 0 ? {} : _record$grid;

        return {
          id: id,
          name: name,
          command: command,
          grid: grid
        };
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        var _record2 = api_mdi_objectSpread({}, record),
            id = _record2.id,
            name = _record2.name,
            command = _record2.command,
            _record2$grid = _record2.grid,
            grid = _record2$grid === void 0 ? {} : _record2$grid;

        return {
          id: id,
          name: name,
          command: command,
          grid: grid
        };
      })
    });
  }
};
var api_mdi_create = function create(req, res) {
  var _req$body = api_mdi_objectSpread({}, req.body),
      name = _req$body.name,
      command = _req$body.command,
      _req$body$grid = _req$body.grid,
      grid = _req$body$grid === void 0 ? {} : _req$body$grid;

  if (!name) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "name" parameter must not be empty'
    });
    return;
  }

  if (!command) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "command" parameter must not be empty'
    });
    return;
  }

  try {
    var records = api_mdi_getSanitizedRecords();
    var record = {
      id: external_uuid_default.a.v4(),
      name: name,
      command: command,
      grid: grid
    };
    records.push(record);
    configstore["a" /* default */].set(api_mdi_CONFIG_KEY, records);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].cncrc)
    });
  }
};
var api_mdi_read = function read(req, res) {
  var id = req.params.id;
  var records = api_mdi_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _record3 = api_mdi_objectSpread({}, record),
      name = _record3.name,
      command = _record3.command,
      _record3$grid = _record3.grid,
      grid = _record3$grid === void 0 ? {} : _record3$grid;

  res.send({
    id: id,
    name: name,
    command: command,
    grid: grid
  });
};
var api_mdi_update = function update(req, res) {
  var id = req.params.id;
  var records = api_mdi_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _req$body2 = api_mdi_objectSpread({}, req.body),
      _req$body2$name = _req$body2.name,
      name = _req$body2$name === void 0 ? record.name : _req$body2$name,
      _req$body2$command = _req$body2.command,
      command = _req$body2$command === void 0 ? record.command : _req$body2$command,
      _req$body2$grid = _req$body2.grid,
      grid = _req$body2$grid === void 0 ? record.grid : _req$body2$grid;
  /*
  if (!name) {
      res.status(ERR_BAD_REQUEST).send({
          msg: 'The "name" parameter must not be empty'
      });
      return;
  }
   if (!command) {
      res.status(ERR_BAD_REQUEST).send({
          msg: 'The "command" parameter must not be empty'
      });
      return;
  }
  */


  try {
    record.name = String(name || '');
    record.command = String(command || '');
    record.grid = isPlainObject_default()(grid) ? grid : {};
    configstore["a" /* default */].set(api_mdi_CONFIG_KEY, records);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].cncrc)
    });
  }
};
var api_mdi_bulkUpdate = function bulkUpdate(req, res) {
  var _req$body3 = api_mdi_objectSpread({}, req.body),
      records = _req$body3.records;

  if (!records) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "records" parameter must not be empty'
    });
    return;
  }

  var filteredRecords = external_ensure_array_default()(records).filter(function (record) {
    return isPlainObject_default()(record);
  });

  for (var i = 0; i < filteredRecords.length; ++i) {
    var record = filteredRecords[i];

    var _record4 = api_mdi_objectSpread({}, record),
        id = _record4.id,
        name = _record4.name,
        command = _record4.command,
        _record4$grid = _record4.grid,
        grid = _record4$grid === void 0 ? {} : _record4$grid;

    if (!id) {
      record.id = external_uuid_default.a.v4();
    }

    record.name = String(name || '');
    record.command = String(command || '');
    record.grid = isPlainObject_default()(grid) ? grid : {};
  }

  try {
    configstore["a" /* default */].set(api_mdi_CONFIG_KEY, filteredRecords);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].cncrc)
    });
  }
};
var api_mdi_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_mdi_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(api_mdi_CONFIG_KEY, filteredRecords);
    res.send({
      err: null
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].cncrc)
    });
  }
};
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(33);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// EXTERNAL MODULE: external "bcrypt-nodejs"
var external_bcrypt_nodejs_ = __webpack_require__(24);
var external_bcrypt_nodejs_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_nodejs_);

// EXTERNAL MODULE: external "lodash/some"
var some_ = __webpack_require__(87);
var some_default = /*#__PURE__*/__webpack_require__.n(some_);

// CONCATENATED MODULE: ./api/api.users.js
function api_users_slicedToArray(arr, i) { return api_users_arrayWithHoles(arr) || api_users_iterableToArrayLimit(arr, i) || api_users_unsupportedIterableToArray(arr, i) || api_users_nonIterableRest(); }

function api_users_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function api_users_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return api_users_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return api_users_arrayLikeToArray(o, minLen); }

function api_users_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function api_users_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function api_users_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function api_users_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_users_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_users_ownKeys(Object(source), true).forEach(function (key) { api_users_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_users_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_users_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var api_users_log = Object(logger["a" /* default */])('api:users');
var api_users_CONFIG_KEY = 'users'; // Generate access token
// https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
// Note. Do not use password and other sensitive fields in the payload

var api_users_generateAccessToken = function generateAccessToken(payload) {
  var secret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : settings["a" /* default */].secret;
  var token = external_jsonwebtoken_default.a.sign(payload, secret, {
    expiresIn: settings["a" /* default */].accessTokenLifetime
  });
  return token;
};

var api_users_getSanitizedRecords = function getSanitizedRecords() {
  var records = external_ensure_array_default()(configstore["a" /* default */].get(api_users_CONFIG_KEY, []));
  var shouldUpdate = false;

  for (var i = 0; i < records.length; ++i) {
    if (!isPlainObject_default()(records[i])) {
      records[i] = {};
    }

    var record = records[i];

    if (!record.id) {
      record.id = external_uuid_default.a.v4();
      shouldUpdate = true;
    } // Defaults to true


    if (record.enabled === undefined) {
      record.enabled = true;
    }
  }

  if (shouldUpdate) {
    api_users_log.debug("update sanitized records: ".concat(JSON.stringify(records))); // Pass `{ silent changes }` will suppress the change event

    configstore["a" /* default */].set(api_users_CONFIG_KEY, records, {
      silent: true
    });
  }

  return records;
};

var api_users_signin = function signin(req, res) {
  var _req$body = api_users_objectSpread({}, req.body),
      _req$body$token = _req$body.token,
      token = _req$body$token === void 0 ? '' : _req$body$token,
      _req$body$name = _req$body.name,
      name = _req$body$name === void 0 ? '' : _req$body$name,
      _req$body$password = _req$body.password,
      password = _req$body$password === void 0 ? '' : _req$body$password;

  var users = api_users_getSanitizedRecords();
  var enabledUsers = users.filter(function (user) {
    return user.enabled;
  });

  if (enabledUsers.length === 0) {
    var user = {
      id: '',
      name: ''
    };

    var payload = api_users_objectSpread({}, user);

    var _token = api_users_generateAccessToken(payload, settings["a" /* default */].secret); // generate access token


    res.send({
      enabled: false,
      // session is disabled
      token: _token,
      name: user.name // empty name

    });
    return;
  }

  if (!token) {
    var _user = find_default()(enabledUsers, {
      name: name
    });

    var valid = _user && external_bcrypt_nodejs_default.a.compareSync(password, _user.password);

    if (!valid) {
      res.status(constants["g" /* ERR_UNAUTHORIZED */]).send({
        msg: 'Authentication failed'
      });
      return;
    }

    var _payload = {
      id: _user.id,
      name: _user.name
    };

    var _token2 = api_users_generateAccessToken(_payload, settings["a" /* default */].secret); // generate access token


    res.send({
      enabled: true,
      // session is enabled
      token: _token2,
      // new token
      name: _user.name
    });
    return;
  }

  external_jsonwebtoken_default.a.verify(token, settings["a" /* default */].secret, function (err, user) {
    if (err) {
      res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
        msg: 'Internal server error'
      });
      return;
    }

    var iat = new Date(user.iat * 1000).toISOString();
    var exp = new Date(user.exp * 1000).toISOString();
    api_users_log.debug("jwt.verify: user.id=".concat(user.id, ", user.name=").concat(user.name, ", user.iat=").concat(iat, ", user.exp=").concat(exp));
    user = find_default()(enabledUsers, {
      id: user.id,
      name: user.name
    });

    if (!user) {
      res.status(constants["g" /* ERR_UNAUTHORIZED */]).send({
        msg: 'Authentication failed'
      });
      return;
    }

    res.send({
      enabled: true,
      // session is enabled
      token: token,
      // old token
      name: user.name
    });
  });
};
var api_users_fetch = function fetch(req, res) {
  var records = api_users_getSanitizedRecords();
  var paging = !!req.query.paging;

  if (paging) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$pageLength = _req$query.pageLength,
        pageLength = _req$query$pageLength === void 0 ? 10 : _req$query$pageLength;
    var totalRecords = records.length;

    var _getPagingRange = getPagingRange({
      page: page,
      pageLength: pageLength,
      totalRecords: totalRecords
    }),
        _getPagingRange2 = api_users_slicedToArray(_getPagingRange, 2),
        begin = _getPagingRange2[0],
        end = _getPagingRange2[1];

    var pagedRecords = records.slice(begin, end);
    res.send({
      pagination: {
        page: Number(page),
        pageLength: Number(pageLength),
        totalRecords: Number(totalRecords)
      },
      records: pagedRecords.map(function (record) {
        var _record = api_users_objectSpread({}, record),
            id = _record.id,
            mtime = _record.mtime,
            enabled = _record.enabled,
            name = _record.name;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          name: name
        };
      })
    });
  } else {
    res.send({
      records: records.map(function (record) {
        var _record2 = api_users_objectSpread({}, record),
            id = _record2.id,
            mtime = _record2.mtime,
            enabled = _record2.enabled,
            name = _record2.name;

        return {
          id: id,
          mtime: mtime,
          enabled: enabled,
          name: name
        };
      })
    });
  }
};
var api_users_create = function create(req, res) {
  var _req$body2 = api_users_objectSpread({}, req.body),
      _req$body2$enabled = _req$body2.enabled,
      enabled = _req$body2$enabled === void 0 ? true : _req$body2$enabled,
      _req$body2$name = _req$body2.name,
      name = _req$body2$name === void 0 ? '' : _req$body2$name,
      _req$body2$password = _req$body2.password,
      password = _req$body2$password === void 0 ? '' : _req$body2$password;

  if (!name) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "name" parameter must not be empty'
    });
    return;
  }

  if (!password) {
    res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'The "password" parameter must not be empty'
    });
    return;
  }

  var records = api_users_getSanitizedRecords();

  if (find_default()(records, {
    name: name
  })) {
    res.status(constants["b" /* ERR_CONFLICT */]).send({
      msg: 'The specified user already exists'
    });
    return;
  }

  try {
    var salt = external_bcrypt_nodejs_default.a.genSaltSync();
    var hash = external_bcrypt_nodejs_default.a.hashSync(password.trim(), salt);

    var _records = api_users_getSanitizedRecords();

    var record = {
      id: external_uuid_default.a.v4(),
      mtime: new Date().getTime(),
      enabled: enabled,
      name: name,
      password: hash
    };

    _records.push(record);

    configstore["a" /* default */].set(api_users_CONFIG_KEY, _records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_users_read = function read(req, res) {
  var id = req.params.id;
  var records = api_users_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _record3 = api_users_objectSpread({}, record),
      mtime = _record3.mtime,
      enabled = _record3.enabled,
      name = _record3.name;

  res.send({
    id: id,
    mtime: mtime,
    enabled: enabled,
    name: name
  });
};
var api_users_update = function update(req, res) {
  var id = req.params.id;
  var records = api_users_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  var _req$body3 = api_users_objectSpread({}, req.body),
      _req$body3$enabled = _req$body3.enabled,
      enabled = _req$body3$enabled === void 0 ? record.enabled : _req$body3$enabled,
      _req$body3$name = _req$body3.name,
      name = _req$body3$name === void 0 ? record.name : _req$body3$name,
      _req$body3$oldPasswor = _req$body3.oldPassword,
      oldPassword = _req$body3$oldPasswor === void 0 ? '' : _req$body3$oldPasswor,
      _req$body3$newPasswor = _req$body3.newPassword,
      newPassword = _req$body3$newPasswor === void 0 ? '' : _req$body3$newPasswor;

  var willChangePassword = oldPassword && newPassword; // Skip validation for "enabled" and "name"

  if (willChangePassword && !external_bcrypt_nodejs_default.a.compareSync(oldPassword, record.password)) {
    res.status(constants["f" /* ERR_PRECONDITION_FAILED */]).send({
      msg: 'Incorrect password'
    });
    return;
  }

  var inuse = function inuse(record) {
    return record.id !== id && record.name === name;
  };

  if (some_default()(records, inuse)) {
    res.status(constants["b" /* ERR_CONFLICT */]).send({
      msg: 'The specified user already exists'
    });
    return;
  }

  try {
    record.mtime = new Date().getTime();
    record.enabled = Boolean(enabled);
    record.name = String(name || '');

    if (willChangePassword) {
      var salt = external_bcrypt_nodejs_default.a.genSaltSync();
      var hash = external_bcrypt_nodejs_default.a.hashSync(newPassword.trim(), salt);
      record.password = hash;
    }

    configstore["a" /* default */].set(api_users_CONFIG_KEY, records);
    res.send({
      id: record.id,
      mtime: record.mtime
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
var api_users_delete = function __delete(req, res) {
  var id = req.params.id;
  var records = api_users_getSanitizedRecords();
  var record = find_default()(records, {
    id: id
  });

  if (!record) {
    res.status(constants["e" /* ERR_NOT_FOUND */]).send({
      msg: 'Not found'
    });
    return;
  }

  try {
    var filteredRecords = records.filter(function (record) {
      return record.id !== id;
    });
    configstore["a" /* default */].set(api_users_CONFIG_KEY, filteredRecords);
    res.send({
      id: record.id
    });
  } catch (err) {
    res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
      msg: 'Failed to save ' + JSON.stringify(settings["a" /* default */].rcfile)
    });
  }
};
// EXTERNAL MODULE: ./services/cncengine/index.js + 53 modules
var cncengine = __webpack_require__(44);

// CONCATENATED MODULE: ./api/api.file.js

 // Upload files using superagent:
// https://stackoverflow.com/questions/31748936/how-to-send-files-with-superagent

var api_file_uploadFile = function uploadFile(req, res) {
  var _req$body = req.body,
      port = _req$body.port,
      visualizer = _req$body.visualizer;
  var file = req.file;

  if (!file) {
    return res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
      msg: 'No file attached'
    });
  }

  var buffer = file.buffer;
  var gcode = buffer.toString();
  cncengine["a" /* default */].load({
    gcode: gcode,
    port: port,
    name: file.originalname,
    size: file.size,
    visualizer: visualizer
  });
  return res.send({
    msg: 'Successfully loaded file'
  });
};
// CONCATENATED MODULE: ./api/index.js
/* concated harmony reexport version */__webpack_require__.d(__webpack_exports__, "k", function() { return api_version_namespaceObject; });
/* concated harmony reexport state */__webpack_require__.d(__webpack_exports__, "i", function() { return api_state_namespaceObject; });
/* concated harmony reexport gcode */__webpack_require__.d(__webpack_exports__, "e", function() { return api_gcode_namespaceObject; });
/* concated harmony reexport controllers */__webpack_require__.d(__webpack_exports__, "b", function() { return api_controllers_namespaceObject; });
/* concated harmony reexport watch */__webpack_require__.d(__webpack_exports__, "l", function() { return api_watch_namespaceObject; });
/* concated harmony reexport commands */__webpack_require__.d(__webpack_exports__, "a", function() { return api_commands_namespaceObject; });
/* concated harmony reexport events */__webpack_require__.d(__webpack_exports__, "c", function() { return api_events_namespaceObject; });
/* concated harmony reexport machines */__webpack_require__.d(__webpack_exports__, "f", function() { return api_machines_namespaceObject; });
/* concated harmony reexport macros */__webpack_require__.d(__webpack_exports__, "g", function() { return api_macros_namespaceObject; });
/* concated harmony reexport mdi */__webpack_require__.d(__webpack_exports__, "h", function() { return api_mdi_namespaceObject; });
/* concated harmony reexport users */__webpack_require__.d(__webpack_exports__, "j", function() { return api_users_namespaceObject; });
/* concated harmony reexport files */__webpack_require__.d(__webpack_exports__, "d", function() { return api_file_namespaceObject; });














/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export levels */
/* unused harmony export getLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLevel; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

var getStackTrace = function getStackTrace() {
  var obj = {};
  Error.captureStackTrace(obj, getStackTrace);
  return (obj.stack || '').split('\n');
};

var VERBOSITY_MAX = 3; // -vvv

var _winston$format = winston__WEBPACK_IMPORTED_MODULE_2___default.a.format,
    combine = _winston$format.combine,
    colorize = _winston$format.colorize,
    timestamp = _winston$format.timestamp,
    printf = _winston$format.printf; // https://github.com/winstonjs/winston/blob/master/README.md#creating-your-own-logger

var logger = winston__WEBPACK_IMPORTED_MODULE_2___default.a.createLogger({
  exitOnError: false,
  level: _config_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].winston.level,
  silent: false,
  transports: [new winston__WEBPACK_IMPORTED_MODULE_2___default.a.transports.Console({
    format: combine(colorize(), timestamp(), printf(function (log) {
      return "".concat(log.timestamp, " - ").concat(log.level, " ").concat(log.message);
    })),
    handleExceptions: true
  }), new winston__WEBPACK_IMPORTED_MODULE_2___default.a.transports.File({
    filename: 'cncjs4marlin_server_log.txt',
    level: 'info'
  })]
}); // https://github.com/winstonjs/winston/blob/master/README.md#logging-levels
// npm logging levels are prioritized from 0 to 5 (highest to lowest):

var levels = ['error', // 0
'warn', // 1
'info', // 2
'verbose', // 3
'debug', // 4
'silly' // 5
];
var getLevel = function getLevel() {
  return logger.level;
};
var setLevel = function setLevel(level) {
  logger.level = level;
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  namespace = String(namespace);
  return levels.reduce(function (acc, level) {
    acc[level] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (_config_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].verbosity >= VERBOSITY_MAX && level !== 'silly') {
        args = args.concat(getStackTrace()[2]);
      }

      return namespace.length > 0 ? logger[level](chalk__WEBPACK_IMPORTED_MODULE_1___default.a.cyan(namespace) + ' ' + util__WEBPACK_IMPORTED_MODULE_0___default.a.format.apply(util__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(args))) : logger[level](util__WEBPACK_IMPORTED_MODULE_0___default.a.format.apply(util__WEBPACK_IMPORTED_MODULE_0___default.a, _toConsumableArray(args)));
    };

    return acc;
  }, {});
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "lodash/unset"
var unset_ = __webpack_require__(40);
var unset_default = /*#__PURE__*/__webpack_require__.n(unset_);

// EXTERNAL MODULE: external "lodash/extend"
var extend_ = __webpack_require__(82);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend_);

// EXTERNAL MODULE: external "lodash/set"
var set_ = __webpack_require__(11);
var set_default = /*#__PURE__*/__webpack_require__.n(set_);

// EXTERNAL MODULE: external "lodash/merge"
var merge_ = __webpack_require__(32);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(4);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(16);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

// CONCATENATED MODULE: ./lib/ImmutableStore.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ImmutableStore_ImmutableStore = /*#__PURE__*/function (_events$EventEmitter) {
  _inherits(ImmutableStore, _events$EventEmitter);

  var _super = _createSuper(ImmutableStore);

  function ImmutableStore() {
    var _this;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ImmutableStore);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _this.state = state;
    return _this;
  }

  _createClass(ImmutableStore, [{
    key: "get",
    value: function get(key, defaultValue) {
      return get_default()(this.state, key, defaultValue);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.state = merge_default()({}, this.state, set_default()({}, key, value));
      this.emit('change', this.state);
      return this.state;
    }
  }, {
    key: "unset",
    value: function unset(key) {
      var state = extend_default()({}, this.state);

      unset_default()(state, key);

      this.state = state;
      this.emit('change', this.state);
      return this.state;
    }
  }, {
    key: "replace",
    value: function replace(key, value) {
      this.unset(key);
      this.set(key, value);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.state = {};
      this.emit('change', this.state);
      return this.state;
    }
  }]);

  return ImmutableStore;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var lib_ImmutableStore = (ImmutableStore_ImmutableStore);
// CONCATENATED MODULE: ./store/index.js

var defaultState = {
  controllers: {}
};
var store = new lib_ImmutableStore(defaultState);
/* harmony default export */ var store_0 = __webpack_exports__["a"] = (store);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("ensure-array");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/has");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("lodash/includes");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("lodash/isPlainObject");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ensureBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ensureString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ensureNumber; });
var ensureBoolean = function ensureBoolean(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (value === undefined || value === null) {
    return Boolean(defaultValue);
  }

  return typeof value === 'boolean' ? value : Boolean(value);
};
var ensureString = function ensureString(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (value === undefined || value === null) {
    return String(defaultValue);
  }

  return typeof value === 'string' ? value : String(value);
};
var ensureNumber = function ensureNumber(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (value === undefined || value === null) {
    return Number(defaultValue);
  }

  return typeof value === 'number' ? value : Number(value);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(16);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

// EXTERNAL MODULE: external "spawn-default-shell"
var external_spawn_default_shell_ = __webpack_require__(85);
var external_spawn_default_shell_default = /*#__PURE__*/__webpack_require__.n(external_spawn_default_shell_);

// EXTERNAL MODULE: external "lodash/without"
var without_ = __webpack_require__(53);
var without_default = /*#__PURE__*/__webpack_require__.n(without_);

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__(86);
var external_shortid_default = /*#__PURE__*/__webpack_require__.n(external_shortid_);

// EXTERNAL MODULE: ./lib/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./services/taskrunner/TaskRunner.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var log = Object(logger["a" /* default */])('service:taskrunner');

var TaskRunner_TaskRunner = /*#__PURE__*/function (_events$EventEmitter) {
  _inherits(TaskRunner, _events$EventEmitter);

  var _super = _createSuper(TaskRunner);

  function TaskRunner() {
    var _this;

    _classCallCheck(this, TaskRunner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "tasks", []);

    return _this;
  }

  _createClass(TaskRunner, [{
    key: "run",
    value: function run(command, title, options) {
      var _this2 = this;

      if (options === undefined && _typeof(title) === 'object') {
        options = title;
        title = '';
      }

      var taskId = external_shortid_default.a.generate(); // task id

      var child = external_spawn_default_shell_default.a.spawn(command, _objectSpread({
        detached: true
      }, options));
      child.unref();
      this.tasks.push(taskId);
      this.emit('start', taskId);
      child.stdout.on('data', function (data) {
        process.stdout.write("PID:".concat(child.pid, "> ").concat(data));
      });
      child.stderr.on('data', function (data) {
        process.stderr.write("PID:".concat(child.pid, "> ").concat(data));
      });
      child.on('error', function (err) {
        // Listen for error event can prevent from throwing an unhandled exception
        log.error("Failed to start a child process: err=".concat(JSON.stringify(err)));
        _this2.tasks = without_default()(_this2.tasks, taskId);

        _this2.emit('error', taskId, err);
      }); // The 'exit' event is emitted after the child process ends.
      // Note that the 'exit' event may or may not fire after an error has occurred.
      // It is important to guard against accidentally invoking handler functions multiple times.

      child.on('exit', function (code) {
        if (_this2.contains(taskId)) {
          _this2.tasks = without_default()(_this2.tasks, taskId);

          _this2.emit('finish', taskId, code);
        }
      });
      return taskId;
    }
  }, {
    key: "contains",
    value: function contains(taskId) {
      return this.tasks.indexOf(taskId) >= 0;
    }
  }]);

  return TaskRunner;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var taskrunner_TaskRunner = (TaskRunner_TaskRunner);
// CONCATENATED MODULE: ./services/taskrunner/index.js

var taskRunner = new taskrunner_TaskRunner();
/* harmony default export */ var taskrunner = __webpack_exports__["a"] = (taskRunner);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("lodash/noop");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(20);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(12);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: external "minimatch"
var external_minimatch_ = __webpack_require__(83);
var external_minimatch_default = /*#__PURE__*/__webpack_require__.n(external_minimatch_);

// EXTERNAL MODULE: external "watch"
var external_watch_ = __webpack_require__(84);
var external_watch_default = /*#__PURE__*/__webpack_require__.n(external_watch_);

// CONCATENATED MODULE: ./services/monitor/FSMonitor.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FSMonitor_FSMonitor = /*#__PURE__*/function () {
  function FSMonitor() {
    _classCallCheck(this, FSMonitor);

    _defineProperty(this, "root", '');

    _defineProperty(this, "monitor", null);

    _defineProperty(this, "files", {});
  }

  _createClass(FSMonitor, [{
    key: "watch",
    value: function watch(root) {
      var _this = this;

      external_watch_default.a.createMonitor(root, function (monitor) {
        _this.unwatch();

        _this.root = root;
        _this.monitor = monitor;
        _this.files = _objectSpread({}, monitor.files);
        monitor.on('created', function (f, stat) {
          _this.files[f] = stat;
        });
        monitor.on('changed', function (f, curr, prev) {
          _this.files[f] = curr;
        });
        monitor.on('removed', function (f, stat) {
          delete _this.files[f];
        });
      });
    }
  }, {
    key: "unwatch",
    value: function unwatch() {
      if (this.monitor) {
        this.monitor.stop(); // Stop watching

        this.monitor = null;
      }

      this.files = {};
    }
  }]);

  return FSMonitor;
}();

/* harmony default export */ var monitor_FSMonitor = (FSMonitor_FSMonitor);
// CONCATENATED MODULE: ./services/monitor/index.js




var monitor = new monitor_FSMonitor();

var start = function start(_ref) {
  var watchDirectory = _ref.watchDirectory;
  monitor.watch(watchDirectory);
};

var stop = function stop() {
  monitor.unwatch();
};

var monitor_getFiles = function getFiles(searchPath) {
  var root = monitor.root;
  var files = Object.keys(monitor.files);
  var pattern = external_path_default.a.join(root, searchPath, '*');

  if (!root || pattern.indexOf(root) !== 0) {
    return [];
  }

  return external_minimatch_default.a.match(files, pattern, {
    matchBase: true
  }).map(function (file) {
    var stat = monitor.files[file] || {};
    return {
      name: external_path_default.a.basename(file),
      type: function () {
        if (stat.isFile()) {
          return 'f';
        }

        if (stat.isDirectory()) {
          return 'd';
        }

        if (stat.isBlockDevice()) {
          return 'b';
        }

        if (stat.isCharacterDevice()) {
          return 'c';
        }

        if (stat.isSymbolicLink()) {
          return 'l';
        }

        if (stat.isFIFO()) {
          return 'p';
        }

        if (stat.isSocket()) {
          return 's';
        }

        return '';
      }(),
      size: stat.size,
      atime: stat.atime,
      mtime: stat.mtime,
      ctime: stat.ctime
    };
  });
};

var monitor_readFile = function readFile(file, callback) {
  var root = monitor.root;
  file = external_path_default.a.join(root, file);
  external_fs_default.a.readFile(file, 'utf8', callback);
};

/* harmony default export */ var services_monitor = __webpack_exports__["a"] = ({
  start: start,
  stop: stop,
  getFiles: monitor_getFiles,
  readFile: monitor_readFile
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/intersection");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("lodash/castArray");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("gcode-parser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lodash/trim");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("serialport");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorizeIPAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateUser; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ensure_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var range_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var range_check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(range_check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _services_configstore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var whitelist = [// IPv4 reserved space
'127.0.0.0/8', // Used for loopback addresses to the local host
'10.0.0.0/8', // Used for local communications within a private network
'172.16.0.0/12', // Used for local communications within a private network
'192.168.0.0/16', // Used for local communications within a private network
'169.254.0.0/16', // Link-local address
// IPv4 mapped IPv6 address
'::ffff:10.0.0.0/8', '::ffff:127.0.0.0/8', '::ffff:172.16.0.0/12', '::ffff:192.168.0.0/16', // IPv6 reserved space
'::1/128', // loopback address to the local host
'fc00::/7', // Unique local address
'fe80::/10' // Link-local address
];
var authorizeIPAddress = function authorizeIPAddress(ipaddr) {
  return new Promise(function (resolve, reject) {
    var pass = !!_config_settings__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].allowRemoteAccess;
    pass = pass || whitelist.some(function (test) {
      return range_check__WEBPACK_IMPORTED_MODULE_3___default.a.inRange(ipaddr, test);
    });

    if (pass) {
      resolve();
    } else {
      reject(new Error("Unauthorized IP address: ipaddr=".concat(ipaddr)));
    }
  });
};
var validateUser = function validateUser(user) {
  return new Promise(function (resolve, reject) {
    var _user = _objectSpread({}, user),
        _user$id = _user.id,
        id = _user$id === void 0 ? null : _user$id,
        _user$name = _user.name,
        name = _user$name === void 0 ? null : _user$name;

    var users = ensure_array__WEBPACK_IMPORTED_MODULE_2___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].get('users')).filter(function (user) {
      return lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(user);
    }).map(function (user) {
      return _objectSpread(_objectSpread({}, user), {}, {
        // Defaults to true if not explicitly initialized
        enabled: user.enabled !== false
      });
    });
    var enabledUsers = users.filter(function (user) {
      return user.enabled;
    });

    if (enabledUsers.length === 0 || lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(enabledUsers, {
      id: id,
      name: name
    })) {
      resolve();
    } else {
      reject(new Error("Unauthorized user: user.id=".concat(id, ", user.name=").concat(name)));
    }
  });
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("lodash/unset");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("gcode-toolpath");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("esprima");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "ensure-array"
var external_ensure_array_ = __webpack_require__(9);
var external_ensure_array_default = /*#__PURE__*/__webpack_require__.n(external_ensure_array_);

// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__(22);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);

// EXTERNAL MODULE: external "serialport"
var external_serialport_ = __webpack_require__(34);
var external_serialport_default = /*#__PURE__*/__webpack_require__.n(external_serialport_);

// EXTERNAL MODULE: external "socket.io"
var external_socket_io_ = __webpack_require__(88);
var external_socket_io_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_);

// EXTERNAL MODULE: ./services/configstore/index.js
var configstore = __webpack_require__(2);

// CONCATENATED MODULE: ./lib/EventTrigger.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var noop = function noop() {};

var EventTrigger_EventTrigger = /*#__PURE__*/function () {
  function EventTrigger() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

    _classCallCheck(this, EventTrigger);

    this.callback = callback || noop;
  }

  _createClass(EventTrigger, [{
    key: "trigger",
    value: function trigger(eventKey) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!eventKey) {
        return;
      }

      var events = configstore["a" /* default */].get('events', []);
      events.filter(function (event) {
        return event && event.event === eventKey;
      }).forEach(function (options) {
        var _options = _objectSpread({}, options),
            _options$enabled = _options.enabled,
            enabled = _options$enabled === void 0 ? false : _options$enabled,
            event = _options.event,
            trigger = _options.trigger,
            commands = _options.commands;

        if (!enabled) {
          return;
        }

        if (typeof _this.callback === 'function') {
          _this.callback(event, trigger, commands);
        }
      });
    }
  }]);

  return EventTrigger;
}();

/* harmony default export */ var lib_EventTrigger = (EventTrigger_EventTrigger);
// EXTERNAL MODULE: ./lib/logger.js
var logger = __webpack_require__(7);

// EXTERNAL MODULE: ./store/index.js + 1 modules
var store = __webpack_require__(8);

// EXTERNAL MODULE: ./services/taskrunner/index.js + 1 modules
var taskrunner = __webpack_require__(21);

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(31);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(19);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(41);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(6);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(4);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "lodash/includes"
var includes_ = __webpack_require__(14);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes_);

// EXTERNAL MODULE: external "lodash/intersection"
var intersection_ = __webpack_require__(25);
var intersection_default = /*#__PURE__*/__webpack_require__.n(intersection_);

// EXTERNAL MODULE: external "gcode-parser"
var external_gcode_parser_ = __webpack_require__(27);

// EXTERNAL MODULE: external "gcode-toolpath"
var external_gcode_toolpath_ = __webpack_require__(42);
var external_gcode_toolpath_default = /*#__PURE__*/__webpack_require__.n(external_gcode_toolpath_);

// EXTERNAL MODULE: external "lodash/map"
var map_ = __webpack_require__(29);
var map_default = /*#__PURE__*/__webpack_require__.n(map_);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(16);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

// CONCATENATED MODULE: ./lib/SerialConnection.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["writeFilter"],
    _excluded2 = ["path"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SerialConnection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SerialConnection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SerialConnection_createClass(Constructor, protoProps, staticProps) { if (protoProps) SerialConnection_defineProperties(Constructor.prototype, protoProps); if (staticProps) SerialConnection_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function SerialConnection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SerialConnection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SerialConnection_ownKeys(Object(source), true).forEach(function (key) { SerialConnection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SerialConnection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SerialConnection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Readline = external_serialport_default.a.parsers.Readline; // Validation

var DATABITS = Object.freeze([5, 6, 7, 8]);
var STOPBITS = Object.freeze([1, 2]);
var PARITY = Object.freeze(['none', 'even', 'mark', 'odd', 'space']);
var FLOWCONTROLS = Object.freeze(['rtscts', 'xon', 'xoff', 'xany']);
var defaultSettings = Object.freeze({
  baudRate: 115200,
  dataBits: 8,
  stopBits: 1,
  parity: 'none',
  rtscts: false,
  xon: false,
  xoff: false,
  xany: false
});

var toIdent = function toIdent(options) {
  // Only the path option is required for generating the ident property
  var _options = SerialConnection_objectSpread({}, options),
      path = _options.path;

  return JSON.stringify({
    type: 'serial',
    path: path
  });
};

var SerialConnection_SerialConnection = /*#__PURE__*/function (_EventEmitter) {
  _inherits(SerialConnection, _EventEmitter);

  var _super = _createSuper(SerialConnection);

  // Readline parser
  // SerialPort
  function SerialConnection(options) {
    var _this;

    SerialConnection_classCallCheck(this, SerialConnection);

    _this = _super.call(this);

    SerialConnection_defineProperty(_assertThisInitialized(_this), "type", 'serial');

    SerialConnection_defineProperty(_assertThisInitialized(_this), "parser", null);

    SerialConnection_defineProperty(_assertThisInitialized(_this), "port", null);

    SerialConnection_defineProperty(_assertThisInitialized(_this), "writeFilter", function (data) {
      return data;
    });

    SerialConnection_defineProperty(_assertThisInitialized(_this), "eventListener", {
      data: function data(_data) {
        _this.emit('data', _data);
      },
      open: function open() {
        _this.emit('open');
      },
      close: function close(err) {
        _this.emit('close', err);
      },
      error: function error(err) {
        _this.emit('error', err);
      }
    });

    var _options2 = SerialConnection_objectSpread({}, options),
        writeFilter = _options2.writeFilter,
        rest = _objectWithoutProperties(_options2, _excluded);

    if (writeFilter) {
      if (typeof writeFilter !== 'function') {
        throw new TypeError("\"writeFilter\" must be a function: ".concat(writeFilter));
      }

      _this.writeFilter = writeFilter;
    }

    var settings = Object.assign({}, defaultSettings, rest);

    if (settings.port) {
      throw new TypeError('"port" is an unknown option, did you mean "path"?');
    }

    if (!settings.path) {
      throw new TypeError("\"path\" is not defined: ".concat(settings.path));
    }

    if (settings.baudrate) {
      throw new TypeError('"baudrate" is an unknown option, did you mean "baudRate"?');
    }

    if (typeof settings.baudRate !== 'number') {
      throw new TypeError("\"baudRate\" must be a number: ".concat(settings.baudRate));
    }

    if (DATABITS.indexOf(settings.dataBits) < 0) {
      throw new TypeError("\"databits\" is invalid: ".concat(settings.dataBits));
    }

    if (STOPBITS.indexOf(settings.stopBits) < 0) {
      throw new TypeError("\"stopbits\" is invalid: ".concat(settings.stopbits));
    }

    if (PARITY.indexOf(settings.parity) < 0) {
      throw new TypeError("\"parity\" is invalid: ".concat(settings.parity));
    }

    FLOWCONTROLS.forEach(function (control) {
      if (typeof settings[control] !== 'boolean') {
        throw new TypeError("\"".concat(control, "\" is not boolean: ").concat(settings[control]));
      }
    });
    Object.defineProperties(_assertThisInitialized(_this), {
      settings: {
        enumerable: true,
        value: settings,
        writable: false
      }
    });
    return _this;
  }

  SerialConnection_createClass(SerialConnection, [{
    key: "ident",
    get: function get() {
      return toIdent(this.settings);
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.port && this.port.isOpen;
    }
  }, {
    key: "isClose",
    get: function get() {
      return !this.isOpen;
    } // @param {function} callback The error-first callback.

  }, {
    key: "open",
    value: function open(callback) {
      if (this.port) {
        var err = new Error("Cannot open serial port \"".concat(this.settings.path, "\""));
        callback(err);
        return;
      }

      var _this$settings = this.settings,
          path = _this$settings.path,
          rest = _objectWithoutProperties(_this$settings, _excluded2);

      this.port = new external_serialport_default.a(path, SerialConnection_objectSpread(SerialConnection_objectSpread({}, rest), {}, {
        autoOpen: false
      }));
      this.port.on('open', this.eventListener.open);
      this.port.on('close', this.eventListener.close);
      this.port.on('error', this.eventListener.error);
      this.parser = this.port.pipe(new Readline({
        delimiter: '\n'
      }));
      this.parser.on('data', this.eventListener.data);
      this.port.open(callback);
    } // @param {function} callback The error-first callback.

  }, {
    key: "close",
    value: function close(callback) {
      if (!this.port) {
        var err = new Error("Cannot close serial port \"".concat(this.settings.path, "\""));
        callback && callback(err);
        return;
      }

      this.port.removeListener('open', this.eventListener.open);
      this.port.removeListener('close', this.eventListener.close);
      this.port.removeListener('error', this.eventListener.error);
      this.parser.removeListener('data', this.eventListener.data);
      this.port.close(callback);
      this.port = null;
      this.parser = null;
    }
  }, {
    key: "write",
    value: function write(data, context) {
      if (!this.port) {
        return;
      }

      data = this.writeFilter(data, context);
      this.port.write(data);
    }
  }]);

  return SerialConnection;
}(external_events_["EventEmitter"]);


/* harmony default export */ var lib_SerialConnection = (SerialConnection_SerialConnection);
// CONCATENATED MODULE: ./lib/Feeder.js
function Feeder_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Feeder_typeof = function _typeof(obj) { return typeof obj; }; } else { Feeder_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Feeder_typeof(obj); }

function Feeder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Feeder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Feeder_createClass(Constructor, protoProps, staticProps) { if (protoProps) Feeder_defineProperties(Constructor.prototype, protoProps); if (staticProps) Feeder_defineProperties(Constructor, staticProps); return Constructor; }

function Feeder_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Feeder_setPrototypeOf(subClass, superClass); }

function Feeder_setPrototypeOf(o, p) { Feeder_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Feeder_setPrototypeOf(o, p); }

function Feeder_createSuper(Derived) { var hasNativeReflectConstruct = Feeder_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Feeder_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Feeder_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Feeder_possibleConstructorReturn(this, result); }; }

function Feeder_possibleConstructorReturn(self, call) { if (call && (Feeder_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Feeder_assertThisInitialized(self); }

function Feeder_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Feeder_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Feeder_getPrototypeOf(o) { Feeder_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Feeder_getPrototypeOf(o); }

function Feeder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Feeder = /*#__PURE__*/function (_events$EventEmitter) {
  Feeder_inherits(Feeder, _events$EventEmitter);

  var _super = Feeder_createSuper(Feeder);

  // @param {object} [options] The options object.
  // @param {function} [options.dataFilter] A function to be used to handle the data. The function accepts two arguments: The data to be sent to the controller, and the context.
  function Feeder(options) {
    var _this;

    Feeder_classCallCheck(this, Feeder);

    _this = _super.call(this);

    Feeder_defineProperty(Feeder_assertThisInitialized(_this), "state", {
      hold: false,
      holdReason: null,
      queue: [],
      pending: false,
      changed: false,
      outstanding: 0,
      interval: null
    });

    Feeder_defineProperty(Feeder_assertThisInitialized(_this), "dataFilter", null);

    if (typeof options.dataFilter === 'function') {
      _this.dataFilter = options.dataFilter;
    }

    _this.on('change', function () {
      _this.state.changed = true;
    });

    return _this;
  }

  Feeder_createClass(Feeder, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        hold: this.state.hold,
        holdReason: this.state.holdReason,
        queue: this.state.queue.length,
        pending: this.state.pending,
        changed: this.state.changed
      };
    }
  }, {
    key: "feed",
    value: function feed() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Clear pending state when the feeder queue is empty
      if (this.state.queue.length === 0) {
        this.state.pending = false;
      }

      data = [].concat(data);

      if (data.length > 0) {
        this.state.queue = this.state.queue.concat(data.map(function (command) {
          return {
            command: command,
            context: context
          };
        }));
        this.emit('change');
      }
    }
  }, {
    key: "hold",
    value: function hold(reason) {
      if (this.state.hold) {
        return;
      }

      this.state.hold = true;
      this.state.holdReason = reason;
      this.emit('hold');
      this.emit('change');
    }
  }, {
    key: "unhold",
    value: function unhold() {
      if (!this.state.hold) {
        return;
      }

      this.state.hold = false;
      this.state.holdReason = null;
      this.emit('unhold');
      this.emit('change');
    }
  }, {
    key: "clear",
    value: function clear() {
      this.state.queue = [];
      this.state.pending = false;
      this.state.outstanding = 0;
      this.state.interval && clearInterval(this.state.interval);
      this.emit('change');
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state.hold = false;
      this.state.holdReason = null;
      this.state.queue = [];
      this.state.pending = false;
      this.state.outstanding = 0;
      clearInterval(this.state.interval);
      this.state.interval = null;
      this.emit('change');
    }
  }, {
    key: "size",
    value: function size() {
      return this.state.queue.length;
    }
  }, {
    key: "next",
    value: function next() {
      while (!this.state.hold && this.state.queue.length > 0) {
        var _this$state$queue$shi = this.state.queue.shift(),
            command = _this$state$queue$shi.command,
            context = _this$state$queue$shi.context;

        if (this.dataFilter) {
          command = this.dataFilter(command, context) || '';

          if (!command) {
            // Ignore blank lines
            continue;
          }
        }

        this.state.pending = true;
        this.state.outstanding++;
        this.emit('data', command, context);
        this.emit('change');
        break;
      } // Clear pending state when the feeder queue is empty


      if (this.state.queue.length === 0) {
        this.state.pending = false;
      }

      return this.state.pending;
    }
  }, {
    key: "isPending",
    value: function isPending() {
      return this.state.pending;
    } // Returns true if any state have changes

  }, {
    key: "peek",
    value: function peek() {
      var changed = this.state.changed;
      this.state.changed = false;
      return changed;
    }
  }, {
    key: "ack",
    value: function ack() {
      if (this.state.outstanding > 0) {
        this.state.outstanding--;
      }
    }
  }, {
    key: "hasOutstanding",
    value: function hasOutstanding() {
      return this.state.outstanding > 0;
    }
  }, {
    key: "repeatCommand",
    value: function repeatCommand(command) {
      var _this2 = this;

      var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      if (!this.state.interval) {
        this.state.interval = setInterval(function () {
          if (!_this2.hasOutstanding()) {
            _this2.feed(command);

            if (!_this2.isPending()) {
              _this2.next();
            }
          }
        }, timer);
      } else {
        clearInterval(this.state.interval);
        this.state.interval = null;
      }
    }
  }]);

  return Feeder;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var lib_Feeder = (Feeder);
// CONCATENATED MODULE: ./lib/Sender.js
function Sender_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sender_typeof = function _typeof(obj) { return typeof obj; }; } else { Sender_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sender_typeof(obj); }

function Sender_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sender_setPrototypeOf(subClass, superClass); }

function Sender_setPrototypeOf(o, p) { Sender_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sender_setPrototypeOf(o, p); }

function Sender_createSuper(Derived) { var hasNativeReflectConstruct = Sender_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Sender_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Sender_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Sender_possibleConstructorReturn(this, result); }; }

function Sender_possibleConstructorReturn(self, call) { if (call && (Sender_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Sender_assertThisInitialized(self); }

function Sender_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sender_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Sender_getPrototypeOf(o) { Sender_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sender_getPrototypeOf(o); }

function Sender_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sender_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sender_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sender_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sender_defineProperties(Constructor, staticProps); return Constructor; }

function Sender_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint max-classes-per-file: 0 */

var SP_TYPE_SEND_RESPONSE = 0;
var SP_TYPE_CHAR_COUNTING = 1;

var Sender_noop = function noop() {};

var SPSendResponse = /*#__PURE__*/function () {
  function SPSendResponse(options) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Sender_noop;

    Sender_classCallCheck(this, SPSendResponse);

    Sender_defineProperty(this, "callback", null);

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (typeof callback === 'function') {
      this.callback = callback;
    }
  }

  Sender_createClass(SPSendResponse, [{
    key: "process",
    value: function process() {
      this.callback && this.callback(this);
    }
  }, {
    key: "clear",
    value: function clear() {// Do nothing
    }
  }, {
    key: "type",
    get: function get() {
      return SP_TYPE_SEND_RESPONSE;
    }
  }]);

  return SPSendResponse;
}();

var SPCharCounting = /*#__PURE__*/function () {
  function SPCharCounting(options) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Sender_noop;

    Sender_classCallCheck(this, SPCharCounting);

    Sender_defineProperty(this, "callback", null);

    Sender_defineProperty(this, "state", {
      bufferSize: 128,
      // Defaults to 128
      dataLength: 0,
      queue: [],
      line: ''
    });

    if (typeof options === 'function') {
      callback = options;
      options = {};
    } // bufferSize


    var bufferSize = Number(options.bufferSize);

    if (bufferSize && bufferSize > 0) {
      this.state.bufferSize = bufferSize;
    }

    if (typeof callback === 'function') {
      this.callback = callback;
    }
  }

  Sender_createClass(SPCharCounting, [{
    key: "process",
    value: function process() {
      this.callback && this.callback(this);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state.bufferSize = 128; // Defaults to 128

      this.state.dataLength = 0;
      this.state.queue = [];
      this.state.line = '';
    }
  }, {
    key: "clear",
    value: function clear() {
      this.state.dataLength = 0;
      this.state.queue = [];
      this.state.line = '';
    }
  }, {
    key: "type",
    get: function get() {
      return SP_TYPE_CHAR_COUNTING;
    }
  }, {
    key: "bufferSize",
    get: function get() {
      return this.state.bufferSize;
    },
    set: function set(bufferSize) {
      if (bufferSize === void 0) {
        bufferSize = 0;
      }

      bufferSize = Number(bufferSize);

      if (!bufferSize) {
        return;
      } // The buffer size cannot be reduced below the size of the data within the buffer.


      this.state.bufferSize = Math.max(bufferSize, this.state.dataLength);
    }
  }, {
    key: "dataLength",
    get: function get() {
      return this.state.dataLength;
    },
    set: function set(dataLength) {
      this.state.dataLength = dataLength;
    }
  }, {
    key: "queue",
    get: function get() {
      return this.state.queue;
    },
    set: function set(queue) {
      this.state.queue = queue;
    }
  }, {
    key: "line",
    get: function get() {
      return this.state.line;
    },
    set: function set(line) {
      this.state.line = line;
    }
  }]);

  return SPCharCounting;
}();

var Sender = /*#__PURE__*/function (_events$EventEmitter) {
  Sender_inherits(Sender, _events$EventEmitter);

  var _super = Sender_createSuper(Sender);

  // streaming protocol
  // @param {number} [type] Streaming protocol type. 0 for send-response, 1 for character-counting.
  // @param {object} [options] The options object.
  // @param {number} [options.bufferSize] The buffer size used in character-counting streaming protocol. Defaults to 127.
  // @param {function} [options.dataFilter] A function to be used to handle the data. The function accepts two arguments: The data to be sent to the controller, and the context.
  function Sender() {
    var _this;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SP_TYPE_SEND_RESPONSE;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Sender_classCallCheck(this, Sender);

    _this = _super.call(this);

    Sender_defineProperty(Sender_assertThisInitialized(_this), "sp", null);

    Sender_defineProperty(Sender_assertThisInitialized(_this), "state", {
      hold: false,
      holdReason: null,
      name: '',
      gcode: '',
      context: {},
      lines: [],
      total: 0,
      sent: 0,
      received: 0,
      startTime: 0,
      finishTime: 0,
      elapsedTime: 0,
      remainingTime: 0
    });

    Sender_defineProperty(Sender_assertThisInitialized(_this), "stateChanged", false);

    Sender_defineProperty(Sender_assertThisInitialized(_this), "dataFilter", null);

    if (typeof options.dataFilter === 'function') {
      _this.dataFilter = options.dataFilter;
    } // character-counting


    if (type === SP_TYPE_CHAR_COUNTING) {
      _this.sp = new SPCharCounting(options, function (sp) {
        if (sp.queue.length > 0) {
          var lineLength = sp.queue.shift();
          sp.dataLength -= lineLength;
        }

        while (!_this.state.hold && _this.state.sent < _this.state.total) {
          // Remove leading and trailing whitespace from both ends of a string
          sp.line = sp.line || _this.state.lines[_this.state.sent].trim();

          if (_this.dataFilter) {
            sp.line = _this.dataFilter(sp.line, _this.state.context) || '';
          } // The newline character (\n) consumed the RX buffer space


          if (sp.line.length > 0 && sp.dataLength + sp.line.length + 1 >= sp.bufferSize) {
            break;
          }

          _this.state.sent++;

          _this.emit('change');

          if (sp.line.length === 0) {
            _this.ack(); // ack empty line


            continue;
          }

          var line = sp.line + '\n';
          sp.line = '';
          sp.dataLength += line.length;
          sp.queue.push(line.length);

          _this.emit('data', line, _this.state.context);
        }
      });
    } // send-response


    if (type === SP_TYPE_SEND_RESPONSE) {
      _this.sp = new SPSendResponse(options, function (sp) {
        while (!_this.state.hold && _this.state.sent < _this.state.total) {
          // Remove leading and trailing whitespace from both ends of a string
          var line = _this.state.lines[_this.state.sent].trim();

          if (_this.dataFilter) {
            line = _this.dataFilter(line, _this.state.context) || '';
          }

          _this.state.sent++;

          _this.emit('change');

          if (line.length === 0) {
            _this.ack(); // ack empty line


            continue;
          }

          _this.emit('data', line + '\n', _this.state.context);

          break;
        }
      });
    }

    _this.on('change', function () {
      _this.stateChanged = true;
    });

    return _this;
  }

  Sender_createClass(Sender, [{
    key: "getContext",
    value: function getContext() {
      return this.state.context;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        sp: this.sp.type,
        hold: this.state.hold,
        holdReason: this.state.holdReason,
        name: this.state.name,
        context: this.state.context,
        size: this.state.gcode.length,
        total: this.state.total,
        sent: this.state.sent,
        received: this.state.received,
        startTime: this.state.startTime,
        finishTime: this.state.finishTime,
        elapsedTime: this.state.elapsedTime,
        remainingTime: this.state.remainingTime
      };
    }
  }, {
    key: "hold",
    value: function hold(reason) {
      if (this.state.hold) {
        return;
      }

      this.state.hold = true;
      this.state.holdReason = reason;
      this.emit('hold');
      this.emit('change');
    }
  }, {
    key: "unhold",
    value: function unhold() {
      if (!this.state.hold) {
        return;
      }

      this.state.hold = false;
      this.state.holdReason = null;
      this.emit('unhold');
      this.emit('change');
    } // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "load",
    value: function load(name) {
      var gcode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof gcode !== 'string' || !gcode) {
        return false;
      }
      /*const comments = ['#', '(', '%'];
      const lines = gcode.split('\n');
      lines.filter(line => (line.trim().length > 0))
          .filter(line => !comments.some(comment => line.includes(comment)));
      console.log(lines);*/


      var lines = gcode.split('\n');

      if (this.sp) {
        this.sp.clear();
      }

      this.state.hold = false;
      this.state.holdReason = null;
      this.state.name = name;
      this.state.gcode = gcode;
      this.state.context = context;
      this.state.lines = lines;
      this.state.total = this.state.lines.length;
      this.state.sent = 0;
      this.state.received = 0;
      this.state.startTime = 0;
      this.state.finishTime = 0;
      this.state.elapsedTime = 0;
      this.state.remainingTime = 0;
      this.emit('load', name, gcode, context);
      this.emit('change');
      return true;
    }
  }, {
    key: "unload",
    value: function unload() {
      if (this.sp) {
        this.sp.clear();
      }

      this.state.hold = false;
      this.state.holdReason = null;
      this.state.name = '';
      this.state.gcode = '';
      this.state.context = {};
      this.state.lines = [];
      this.state.total = 0;
      this.state.sent = 0;
      this.state.received = 0;
      this.state.startTime = 0;
      this.state.finishTime = 0;
      this.state.elapsedTime = 0;
      this.state.remainingTime = 0;
      this.emit('unload');
      this.emit('change');
    } // Tells the sender an acknowledgement has received.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "ack",
    value: function ack() {
      if (!this.state.gcode) {
        return false;
      }

      if (this.state.received >= this.state.sent) {
        return false;
      }

      this.state.received++;
      this.emit('change');
      return true;
    } // Tells the sender to send more data.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var lineToStartFrom = options.lineToStartFrom;

      if (!this.state.gcode) {
        return false;
      }

      var now = new Date().getTime();

      var handleStart = function handleStart() {
        _this2.state.startTime = now;
        _this2.state.finishTime = 0;
        _this2.state.elapsedTime = 0;
        _this2.state.remainingTime = 0;

        _this2.emit('start', _this2.state.startTime);

        _this2.emit('change');
      };

      if (lineToStartFrom) {
        this.state.sent = lineToStartFrom;
        this.state.received = lineToStartFrom;
        handleStart();
      }

      if (this.state.total > 0 && this.state.sent === 0) {
        handleStart();
      }

      if (this.sp) {
        this.sp.process();
      } // Elapsed Time


      this.state.elapsedTime = now - this.state.startTime; // Make a 1 second delay before estimating the remaining time

      if (this.state.elapsedTime >= 1000 && this.state.received > 0) {
        var timePerCode = this.state.elapsedTime / this.state.received;
        this.state.remainingTime = timePerCode * this.state.total - this.state.elapsedTime;
      }

      if (this.state.received >= this.state.total) {
        if (this.state.finishTime === 0) {
          // avoid issue 'end' multiple times
          this.state.finishTime = now;
          this.emit('end', this.state.finishTime);
          this.emit('change');
        }
      }

      return true;
    } // Rewinds the internal array pointer.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "rewind",
    value: function rewind() {
      if (!this.state.gcode) {
        return false;
      }

      if (this.sp) {
        this.sp.clear();
      }

      this.state.hold = false; // clear hold off state

      this.state.holdReason = null;
      this.state.sent = 0;
      this.state.received = 0;
      this.emit('change');
      return true;
    } // Checks if there are any state changes. It also clears the stateChanged flag.
    // @return {boolean} Returns true on state changes, false otherwise.

  }, {
    key: "peek",
    value: function peek() {
      var stateChanged = this.stateChanged;
      this.stateChanged = false;
      return stateChanged;
    }
  }]);

  return Sender;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var lib_Sender = (Sender);
// CONCATENATED MODULE: ./lib/Workflow.js
function Workflow_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Workflow_typeof = function _typeof(obj) { return typeof obj; }; } else { Workflow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Workflow_typeof(obj); }

function Workflow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Workflow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Workflow_createClass(Constructor, protoProps, staticProps) { if (protoProps) Workflow_defineProperties(Constructor.prototype, protoProps); if (staticProps) Workflow_defineProperties(Constructor, staticProps); return Constructor; }

function Workflow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Workflow_setPrototypeOf(subClass, superClass); }

function Workflow_setPrototypeOf(o, p) { Workflow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Workflow_setPrototypeOf(o, p); }

function Workflow_createSuper(Derived) { var hasNativeReflectConstruct = Workflow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Workflow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Workflow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Workflow_possibleConstructorReturn(this, result); }; }

function Workflow_possibleConstructorReturn(self, call) { if (call && (Workflow_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Workflow_assertThisInitialized(self); }

function Workflow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Workflow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Workflow_getPrototypeOf(o) { Workflow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Workflow_getPrototypeOf(o); }

function Workflow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Workflow State

var WORKFLOW_STATE_RUNNING = 'running';
var WORKFLOW_STATE_PAUSED = 'paused';
var WORKFLOW_STATE_IDLE = 'idle';

var Workflow = /*#__PURE__*/function (_events$EventEmitter) {
  Workflow_inherits(Workflow, _events$EventEmitter);

  var _super = Workflow_createSuper(Workflow);

  function Workflow() {
    var _this;

    Workflow_classCallCheck(this, Workflow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Workflow_defineProperty(Workflow_assertThisInitialized(_this), "state", WORKFLOW_STATE_IDLE);

    return _this;
  }

  Workflow_createClass(Workflow, [{
    key: "isRunning",
    value: function isRunning() {
      return this.state === WORKFLOW_STATE_RUNNING;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.state === WORKFLOW_STATE_PAUSED;
    }
  }, {
    key: "isIdle",
    value: function isIdle() {
      return this.state === WORKFLOW_STATE_IDLE;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state !== WORKFLOW_STATE_RUNNING) {
        this.state = WORKFLOW_STATE_RUNNING;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this.emit.apply(this, ['start'].concat(args));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.state !== WORKFLOW_STATE_IDLE) {
        this.state = WORKFLOW_STATE_IDLE;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this.emit.apply(this, ['stop'].concat(args));
      }
    }
  }, {
    key: "stopTesting",
    value: function stopTesting() {
      this.state = WORKFLOW_STATE_IDLE;
      this.emit('stop');
    }
  }, {
    key: "resumeTesting",
    value: function resumeTesting() {
      if (this.state === WORKFLOW_STATE_PAUSED) {
        this.state = WORKFLOW_STATE_RUNNING;
        this.emit('resume');
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.state === WORKFLOW_STATE_RUNNING) {
        this.state = WORKFLOW_STATE_PAUSED;
      }

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.emit.apply(this, ['pause'].concat(args));
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.state === WORKFLOW_STATE_PAUSED) {
        this.state = WORKFLOW_STATE_RUNNING;
      }

      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.emit.apply(this, ['resume'].concat(args));
    }
  }]);

  return Workflow;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var lib_Workflow = (Workflow);
// CONCATENATED MODULE: ./lib/delay.js
var delay = function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
};

/* harmony default export */ var lib_delay = (delay);
// CONCATENATED MODULE: ./lib/ensure-positive-number.js
var ensurePositiveNumber = function ensurePositiveNumber(value) {
  var minimumValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // In comparison to the global isFinite() function, the Number.isFinite() method doesn't forcibly convert the parameter to a number.
  if (!Number.isFinite(minimumValue) || minimumValue < 0) {
    minimumValue = 0;
  }

  return Math.max(Number(value) || 0, minimumValue);
};

/* harmony default export */ var ensure_positive_number = (ensurePositiveNumber);
// EXTERNAL MODULE: external "lodash/set"
var set_ = __webpack_require__(11);
var set_default = /*#__PURE__*/__webpack_require__.n(set_);

// EXTERNAL MODULE: external "esprima"
var external_esprima_ = __webpack_require__(43);

// EXTERNAL MODULE: external "escodegen"
var external_escodegen_ = __webpack_require__(89);

// CONCATENATED MODULE: ./lib/evaluate-expression.js
function evaluate_expression_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function evaluate_expression_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { evaluate_expression_ownKeys(Object(source), true).forEach(function (key) { evaluate_expression_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { evaluate_expression_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function evaluate_expression_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function evaluate_expression_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { evaluate_expression_typeof = function _typeof(obj) { return typeof obj; }; } else { evaluate_expression_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return evaluate_expression_typeof(obj); }

/* eslint no-bitwise: 0 */



var log = Object(logger["a" /* default */])('evaluate-expression');
var UNRESOLVED = Symbol('unresolved');

var evaluate_expression_evaluateExpression = function evaluateExpression(src, vars) {
  if (!vars || evaluate_expression_typeof(vars) !== 'object') {
    vars = evaluate_expression_objectSpread({}, vars);
  }

  var walk = function walk(node) {
    if (node.type === 'Literal') {
      return node.value;
    }

    if (node.type === 'UnaryExpression') {
      var val = walk(node.argument);

      if (node.operator === '+') {
        return +val;
      }

      if (node.operator === '-') {
        return -val;
      }

      if (node.operator === '~') {
        return ~val;
      }

      if (node.operator === '!') {
        return !val;
      }

      return UNRESOLVED;
    }

    if (node.type === 'ArrayExpression') {
      var xs = [];

      for (var i = 0, l = node.elements.length; i < l; i++) {
        var x = walk(node.elements[i]);

        if (x === UNRESOLVED) {
          return UNRESOLVED;
        }

        xs.push(x);
      }

      return xs;
    }

    if (node.type === 'ObjectExpression') {
      var obj = {};

      for (var _i = 0; _i < node.properties.length; _i++) {
        var prop = node.properties[_i];
        var value = prop.value === null ? prop.value : walk(prop.value);

        if (value === UNRESOLVED) {
          return UNRESOLVED;
        }

        obj[prop.key.value || prop.key.name] = value;
      }

      return obj;
    }

    if (node.type === 'BinaryExpression' || node.type === 'LogicalExpression') {
      var _l = walk(node.left);

      if (_l === UNRESOLVED) {
        return UNRESOLVED;
      }

      var r = walk(node.right);

      if (r === UNRESOLVED) {
        return UNRESOLVED;
      }

      var op = node.operator;

      if (op === '==') {
        return _l == r; // eslint-disable-line eqeqeq
      }

      if (op === '===') {
        return _l === r;
      }

      if (op === '!=') {
        return _l != r; // eslint-disable-line eqeqeq
      }

      if (op === '!==') {
        return _l !== r;
      }

      if (op === '+') {
        return _l + r;
      }

      if (op === '-') {
        return _l - r;
      }

      if (op === '*') {
        return _l * r;
      }

      if (op === '/') {
        return _l / r;
      }

      if (op === '%') {
        return _l % r;
      }

      if (op === '<') {
        return _l < r;
      }

      if (op === '<=') {
        return _l <= r;
      }

      if (op === '>') {
        return _l > r;
      }

      if (op === '>=') {
        return _l >= r;
      }

      if (op === '|') {
        return _l | r;
      }

      if (op === '&') {
        return _l & r;
      }

      if (op === '^') {
        return _l ^ r;
      }

      if (op === '&&') {
        return _l && r;
      }

      if (op === '||') {
        return _l || r;
      }

      return UNRESOLVED;
    }

    if (node.type === 'Identifier') {
      if (Object.hasOwnProperty.call(vars, node.name)) {
        return vars[node.name];
      }

      return UNRESOLVED;
    }

    if (node.type === 'ThisExpression') {
      if (Object.hasOwnProperty.call(vars, 'this')) {
        return vars['this']; // eslint-disable-line dot-notation
      }

      return UNRESOLVED;
    }

    if (node.type === 'CallExpression') {
      var callee = walk(node.callee);

      if (callee === UNRESOLVED) {
        return UNRESOLVED;
      }

      if (typeof callee !== 'function') {
        return UNRESOLVED;
      }

      var ctx = node.callee.object ? walk(node.callee.object) : UNRESOLVED;

      if (ctx === UNRESOLVED) {
        ctx = null;
      }

      var args = [];

      for (var _i2 = 0, _l2 = node.arguments.length; _i2 < _l2; _i2++) {
        var _x = walk(node.arguments[_i2]);

        if (_x === UNRESOLVED) {
          return UNRESOLVED;
        }

        args.push(_x);
      }

      return callee.apply(ctx, args);
    }

    if (node.type === 'MemberExpression') {
      var _obj = walk(node.object);

      if (_obj === UNRESOLVED) {
        return UNRESOLVED;
      }

      if (node.property.type === 'Identifier') {
        return _obj[node.property.name];
      }

      var _prop = walk(node.property);

      if (_prop === UNRESOLVED) {
        return UNRESOLVED;
      }

      return _obj[_prop];
    }

    if (node.type === 'ConditionalExpression') {
      var _val = walk(node.test);

      if (_val === UNRESOLVED) {
        return UNRESOLVED;
      }

      return _val ? walk(node.consequent) : walk(node.alternate);
    }

    if (node.type === 'ExpressionStatement') {
      var _val2 = walk(node.expression);

      if (_val2 === UNRESOLVED) {
        return UNRESOLVED;
      }

      return _val2;
    }

    if (node.type === 'ReturnStatement') {
      return walk(node.argument);
    }

    if (node.type === 'FunctionExpression') {
      var bodies = node.body.body; // Create a "scope" for our arguments

      var oldVars = {};
      Object.keys(vars).forEach(function (element) {
        oldVars[element] = vars[element];
      });

      for (var _i3 = 0; _i3 < node.params.length; _i3++) {
        var key = node.params[_i3];

        if (key.type !== 'Identifier') {
          return UNRESOLVED;
        }

        vars[key.name] = null;
      }

      for (var _i4 in bodies) {
        if (walk(bodies[_i4]) === UNRESOLVED) {
          return UNRESOLVED;
        }
      } // restore the vars and scope after walk


      vars = oldVars;
      var keys = Object.keys(vars);
      var vals = keys.map(function (key) {
        return vars[key];
      });
      return Function(keys.join(', '), 'return ' + Object(external_escodegen_["generate"])(node)).apply(null, vals); // eslint-disable-line no-new-func
    }

    if (node.type === 'TemplateLiteral') {
      var str = '';
      var _i5 = 0;

      for (_i5 = 0; _i5 < node.expressions.length; _i5++) {
        str += walk(node.quasis[_i5]);
        str += walk(node.expressions[_i5]);
      }

      str += walk(node.quasis[_i5]);
      return str;
    }

    if (node.type === 'TaggedTemplateExpression') {
      var tag = walk(node.tag);
      var quasi = node.quasi;
      var strings = quasi.quasis.map(walk);
      var values = quasi.expressions.map(walk);
      return tag.apply(null, [strings].concat(values));
    }

    if (node.type === 'TemplateElement') {
      return node.value.cooked;
    }

    return UNRESOLVED;
  };

  var result = UNRESOLVED;

  try {
    var ast;

    if (typeof src === 'string') {
      ast = Object(external_esprima_["parse"])(src).body[0].expression;
    } else {
      ast = src;
    }

    result = walk(ast);
  } catch (e) {
    log.error("src=\"".concat(src, "\", vars=").concat(JSON.stringify(vars)));
    log.error(e);
  }

  return result === UNRESOLVED ? undefined : result;
};

/* harmony default export */ var evaluate_expression = (evaluate_expression_evaluateExpression);
// CONCATENATED MODULE: ./lib/evaluate-assignment-expression.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function evaluate_assignment_expression_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { evaluate_assignment_expression_typeof = function _typeof(obj) { return typeof obj; }; } else { evaluate_assignment_expression_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return evaluate_assignment_expression_typeof(obj); }





var evaluate_assignment_expression_log = Object(logger["a" /* default */])('evaluate-assignment-expression');

var isStaticMemberExpression = function isStaticMemberExpression(node) {
  return evaluate_assignment_expression_typeof(node) === 'object' && node.type === 'MemberExpression' && !node.computed;
};

var isComputedMemberExpression = function isComputedMemberExpression(node) {
  return evaluate_assignment_expression_typeof(node) === 'object' && node.type === 'MemberExpression' && !!node.computed;
};

var evaluate_assignment_expression_lookupObjectPath = function lookupObjectPath(node, vars) {
  if (!node) {
    return [];
  }
  /*
   * Expression: 'x = value'
   *
   * Identifier { type: 'Identifier', name: 'x' }
   */


  if (node.type === 'Identifier') {
    return [node.name];
  }

  if (isComputedMemberExpression(node)) {
    return [].concat(_toConsumableArray(lookupObjectPath(node.object, vars)), [evaluate_expression(node.property, vars)]);
  }

  if (isStaticMemberExpression(node)) {
    /*
     * Expression: 'x.y = value'
     *
     * StaticMemberExpression {
     *   type: 'MemberExpression',
     *   computed: false,
     *   object: Identifier { type: 'Identifier', name: 'x' },
     *   property: Identifier { type: 'Identifier', name: 'y' }
     * }
     *
     * Expression: 'x[y] = value'
     *
     * ComputedMemberExpression {
     *   type: 'MemberExpression',
     *   computed: true,
     *   object: Identifier { type: 'Identifier', name: 'x' },
     *   property: Identifier { type: 'Identifier', name: 'y' }
     * }
     */
    if (node.property.type === 'Identifier') {
      return [].concat(_toConsumableArray(lookupObjectPath(node.object, vars)), [node.property.name]);
    }
    /*
     * Expression: 'x["y"] = value'
     *
     * ComputedMemberExpression {
     *   type: 'MemberExpression',
     *   computed: true,
     *   object: Identifier { type: 'Identifier', name: 'x' },
     *   property: Literal { type: 'Literal', value: 'y', raw: '"y"' }
     * }
     */


    if (node.property.type === 'Literal') {
      return [].concat(_toConsumableArray(lookupObjectPath(node.object, vars)), [node.property.value]);
    }

    return [].concat(_toConsumableArray(lookupObjectPath(node.object, vars)), [evaluate_expression(node.property, vars)]);
  }

  return [node.name];
};

var evaluate_assignment_expression_walkAssignmentExpression = function walkAssignmentExpression(node, vars) {
  console.assert(node && node.type === 'AssignmentExpression');
  var path = evaluate_assignment_expression_lookupObjectPath(node.left, vars);

  if (path) {
    var value = evaluate_expression(node.right, vars);

    set_default()(vars, path, value);
  }
};

var evaluate_assignment_expression_walkSequenceExpression = function walkSequenceExpression(node, vars) {
  console.assert(node && node.type === 'SequenceExpression');
  node.expressions.forEach(function (expr) {
    if (expr.type === 'AssignmentExpression') {
      evaluate_assignment_expression_walkAssignmentExpression(expr, vars);
      return;
    }

    evaluate_expression(expr, vars);
  });
};

var evaluate_assignment_expression_evaluateAssignmentExpression = function evaluateAssignmentExpression(src) {
  var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!src) {
    return vars;
  }

  try {
    var ast = Object(external_esprima_["parse"])(src).body[0].expression;

    if (ast.type === 'AssignmentExpression') {
      evaluate_assignment_expression_walkAssignmentExpression(ast, vars);
    } else if (ast.type === 'SequenceExpression') {
      evaluate_assignment_expression_walkSequenceExpression(ast, vars);
    } else {
      evaluate_expression(ast, vars);
    }
  } catch (e) {
    evaluate_assignment_expression_log.error("src=\"".concat(src, "\", vars=").concat(JSON.stringify(vars)));
    evaluate_assignment_expression_log.error(e);
  }

  return vars;
};

/* harmony default export */ var evaluate_assignment_expression = (evaluate_assignment_expression_evaluateAssignmentExpression);
// CONCATENATED MODULE: ./lib/translate-expression.js


var translate_expression_log = Object(logger["a" /* default */])('translate-expression');
var re = new RegExp(/\[[^\]]+\]/g);

var translate_expression_translateExpression = function translateExpression(data) {
  var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!data) {
    return '';
  }

  try {
    data = String(data).replace(re, function (match) {
      var src = match.slice(1, -1);
      var value = evaluate_expression(src, vars);
      return value !== undefined ? value : match;
    });
  } catch (e) {
    translate_expression_log.error("data=\"".concat(data, "\", vars=").concat(JSON.stringify(vars)));
    translate_expression_log.error(e);
  }

  return data;
};

/* harmony default export */ var translate_expression = (translate_expression_translateExpression);
// EXTERNAL MODULE: ./services/monitor/index.js + 1 modules
var monitor = __webpack_require__(23);

// EXTERNAL MODULE: external "hull.js"
var external_hull_js_ = __webpack_require__(90);
var external_hull_js_default = /*#__PURE__*/__webpack_require__.n(external_hull_js_);

// EXTERNAL MODULE: external "lodash/uniqBy"
var uniqBy_ = __webpack_require__(91);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy_);

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(92);

// CONCATENATED MODULE: ./lib/outlineService.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || outlineService_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outlineService_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outlineService_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outlineService_arrayLikeToArray(o, minLen); }

function outlineService_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var outlineService_log = Object(logger["a" /* default */])('service:outline'); // Generate an ordered pair - we don't care about Z index for outline purposes so it's removed

function vertex(x, y) {
  return [x.toFixed(2), y.toFixed(2)];
}

function getOutlineGcode(gcode) {
  var concavity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  var vertices = [];
  var toolpath = new external_gcode_toolpath_default.a({
    addLine: function addLine(_ref, v1, v2) {
      var motion = _ref.motion;

      // We ignore G0 movements since they generally aren't cutting movements
      if (motion === 'G1') {
        //vertices.push(vertex(v1.x, v1.y));
        vertices.push(vertex(v2.x, v2.y));
      }
    },
    addArcCurve: function addArcCurve(_ref2, v1, v2, v0) {
      var motion = _ref2.motion,
          plane = _ref2.plane;
      var isClockwise = motion === 'G2';
      var radius = Math.sqrt(Math.pow(v1.x - v0.x, 2) + Math.pow(v1.y - v0.y, 2));
      var startAngle = Math.atan2(v1.y - v0.y, v1.x - v0.x);
      var endAngle = Math.atan2(v2.y - v0.y, v2.x - v0.x); // Draw full circle if startAngle and endAngle are both zero

      if (startAngle === endAngle) {
        endAngle += 2 * Math.PI;
      }

      var arcCurve = new external_three_["ArcCurve"](v0.x, // aX
      v0.y, // aY
      radius, // aRadius
      startAngle, // aStartAngle
      endAngle, // aEndAngle
      isClockwise // isClockwise
      );
      var divisions = 30;
      var points = arcCurve.getPoints(divisions);
      vertices.push(vertex(v1.x, v1.y));

      for (var i = 0; i < points.length; ++i) {
        var point = points[i];
        var z = (v2.z - v1.z) / points.length * i + v1.z;

        if (plane === 'G17') {
          // XY-plane
          vertices.push(vertex(point.x, point.y));
        } else if (plane === 'G18') {
          // ZX-plane
          vertices.push(vertex(point.y, z));
        } else if (plane === 'G19') {
          // YZ-plane
          vertices.push(vertex(z, point.x));
        }
      }
    }
  });
  outlineService_log.debug('Parsing g-code');
  toolpath.loadFromStringSync(gcode);
  outlineService_log.debug('Reducing to unique vertices');
  var uniqueVertices = uniqBy_default()(vertices, function (v) {
    return JSON.stringify(v);
  });
  outlineService_log.debug("Dataset reduced from ".concat(vertices.length, " to ").concat(uniqueVertices.length, " points."));
  outlineService_log.debug("Generating hull with accuracy of ".concat(concavity));
  var fileHull = external_hull_js_default()(uniqueVertices, concavity);
  var gCode = convertPointsToGCode(fileHull);
  return gCode;
}

function convertPointsToGCode(points) {
  var gCode = [];
  gCode.push('G21 G91 G0 Z5');
  points.forEach(function (point) {
    var _point = _slicedToArray(point, 2),
        x = _point[0],
        y = _point[1];

    gCode.push("G21 G90 G0 X".concat(x, " Y").concat(y));
  });
  gCode.push('G21 G91 G0 Z-5');
  return gCode;
}
// CONCATENATED MODULE: ./controllers/constants.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
var GLOBAL_OBJECTS = {
  // Function properties
  parseFloat: parseFloat,
  parseInt: parseInt,
  // Fundamental objects
  Object: Object,
  Function: Function,
  Boolean: Boolean,
  // Numbers and dates
  Number: Number,
  Math: Math,
  Date: Date,
  // Text processing
  String: String,
  RegExp: RegExp,
  // Structured data
  JSON: JSON
}; // Write Source

var WRITE_SOURCE_CLIENT = 'client';
var WRITE_SOURCE_SERVER = 'server';
var WRITE_SOURCE_FEEDER = 'feeder';
var WRITE_SOURCE_SENDER = 'sender';
// EXTERNAL MODULE: external "lodash/each"
var each_ = __webpack_require__(54);
var each_default = /*#__PURE__*/__webpack_require__.n(each_);

// EXTERNAL MODULE: external "lodash/has"
var has_ = __webpack_require__(13);
var has_default = /*#__PURE__*/__webpack_require__.n(has_);

// CONCATENATED MODULE: ./lib/decimal-places.js
// http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
var decimalPlaces = function decimalPlaces(num) {
  var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

  if (!match) {
    return 0;
  } // Number of digits right of decimal point.


  var digits = match[1] ? match[1].length : 0; // Adjust for scientific notation.

  var E = match[2] ? +match[2] : 0;
  return Math.max(0, digits - E);
};

/* harmony default export */ var decimal_places = (decimalPlaces);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultStatus.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = GrblLineParserResultStatus_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function GrblLineParserResultStatus_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GrblLineParserResultStatus_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GrblLineParserResultStatus_arrayLikeToArray(o, minLen); }

function GrblLineParserResultStatus_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GrblLineParserResultStatus_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultStatus_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultStatus_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultStatus_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultStatus_defineProperties(Constructor, staticProps); return Constructor; }

//https://github.com/grbl/grbl/blob/master/grbl/report.c
var GrblLineParserResultStatus_GrblLineParserResultStatus = /*#__PURE__*/function () {
  function GrblLineParserResultStatus() {
    GrblLineParserResultStatus_classCallCheck(this, GrblLineParserResultStatus);
  }

  GrblLineParserResultStatus_createClass(GrblLineParserResultStatus, null, [{
    key: "parse",
    value: // * Grbl v0.9
    //   <Idle>
    //   <Idle,MPos:5.529,0.560,7.000,WPos:1.529,-5.440,-0.000>
    //   <Idle,MPos:5.529,0.560,7.000,0.000,WPos:1.529,-5.440,-0.000,0.000>
    //   <Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000,Buf:0,RX:0,Lim:000>
    //   <Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000,Buf:0,RX:0,Ln:0,F:0.>
    // * Grbl v1.1
    //   <Idle|MPos:3.000,2.000,0.000|FS:0,0>
    //   <Hold:0|MPos:5.000,2.000,0.000|FS:0,0>
    //   <Idle|MPos:5.000,2.000,0.000|FS:0,0|Ov:100,100,100>
    //   <Idle|MPos:5.000,2.000,0.000|FS:0,0|WCO:0.000,0.000,0.000>
    //   <Run|MPos:23.036,1.620,0.000|FS:500,0>
    function parse(line) {
      var r = line.match(/^<(.+)>$/);

      if (!r) {
        return null;
      }

      var payload = {}; //const pattern = /[a-zA-Z]+(:[0-9\.\-]+(,[0-9\.\-]+){0,5})?/g;

      var pattern = /[a-zA-Z]+(:[a-zA-Z0-9\.\-]+(,[0-9\.\-[a]+){0,5})?/g;
      var params = r[1].match(pattern);
      var result = {};
      {
        // Active State (v0.9, v1.1)
        // * Valid states types: Idle, Run, Hold, Jog, Alarm, Door, Check, Home, Sleep
        // * Sub-states may be included via : a colon delimiter and numeric code.
        // * Current sub-states are:
        //   - Hold:0 Hold complete. Ready to resume.
        //   - Hold:1 Hold in-progress. Reset will throw an alarm.
        //   - Door:0 Door closed. Ready to resume.
        //   - Door:1 Machine stopped. Door still ajar. Can't resume until closed.
        //   - Door:2 Door opened. Hold (or parking retract) in-progress. Reset will throw an alarm.
        //   - Door:3 Door closed and resuming. Restoring from park, if applicable. Reset will throw an alarm.
        var states = (params.shift() || '').split(':');
        payload.activeState = states[0] || '';
        payload.subState = Number(states[1] || '');
      }

      var _iterator = _createForOfIteratorHelper(params),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var param = _step.value;
          var nv = param.match(/^(.+):(.+)/);

          if (nv) {
            var type = nv[1];

            var _value = nv[2].split(',');

            result[type] = _value;
          }
        } // Machine Position (v0.9, v1.1)

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (has_default()(result, 'MPos')) {
        var axes = ['x', 'y', 'z', 'a', 'b', 'c'];

        var mPos = get_default()(result, 'MPos', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


        payload.mpos = {};

        for (var i = 0; i < mPos.length; ++i) {
          payload.mpos[axes[i]] = mPos[i];
        }
      } // Work Position (v0.9, v1.1)


      if (has_default()(result, 'WPos')) {
        var _axes = ['x', 'y', 'z', 'a', 'b', 'c'];

        var wPos = get_default()(result, 'WPos', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


        payload.wpos = {};

        for (var _i = 0; _i < wPos.length; ++_i) {
          payload.wpos[_axes[_i]] = wPos[_i];
        }
      } // Work Coordinate Offset (v1.1)


      if (has_default()(result, 'WCO')) {
        var _axes2 = ['x', 'y', 'z', 'a', 'b', 'c'];

        var wco = get_default()(result, 'WCO', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


        payload.wco = {};

        for (var _i2 = 0; _i2 < wco.length; ++_i2) {
          payload.wco[_axes2[_i2]] = wco[_i2];
        }
      } // Planner Buffer (v0.9)


      if (has_default()(result, 'Buf')) {
        payload.buf = payload.buf || {};
        payload.buf.planner = Number(get_default()(result, 'Buf[0]', 0));
      } // RX Buffer (v0.9)


      if (has_default()(result, 'RX')) {
        payload.buf = payload.buf || {};
        payload.buf.rx = Number(get_default()(result, 'RX[0]', 0));
      } // Buffer State (v1.1)
      // Bf:15,128. The first value is the number of available blocks in the planner buffer and the second is number of available bytes in the serial RX buffer.


      if (has_default()(result, 'Bf')) {
        payload.buf = payload.buf || {};
        payload.buf.planner = Number(get_default()(result, 'Bf[0]', 0));
        payload.buf.rx = Number(get_default()(result, 'Bf[1]', 0));
      } // Line Number (v0.9, v1.1)
      // Ln:99999 indicates line 99999 is currently being executed.


      if (has_default()(result, 'Ln')) {
        payload.ln = Number(get_default()(result, 'Ln[0]', 0));
      } // Feed Rate (v0.9, v1.1)
      // F:500 contains real-time feed rate data as the value.
      // This appears only when VARIABLE_SPINDLE is disabled.


      if (has_default()(result, 'F')) {
        payload.feedrate = Number(get_default()(result, 'F[0]', 0));
      } // Current Feed and Speed (v1.1)
      // FS:500,8000 contains real-time feed rate, followed by spindle speed, data as the values.


      if (has_default()(result, 'FS')) {
        payload.feedrate = Number(get_default()(result, 'FS[0]', 0));
        payload.spindle = Number(get_default()(result, 'FS[1]', 0));
      } // Limit Pins (v0.9)
      // X_AXIS is (1<<0) or bit 0
      // Y_AXIS is (1<<1) or bit 1
      // Z_AXIS is (1<<2) or bit 2


      if (has_default()(result, 'Lim')) {
        var value = Number(get_default()(result, 'Lim[0]', 0));
        payload.pinState = [value & 1 << 0 ? 'X' : '', value & 1 << 1 ? 'Y' : '', value & 1 << 2 ? 'Z' : '', value & 1 << 2 ? 'A' : ''].join('');
      } // Input Pin State (v1.1)
      // * Pn:XYZPDHRS indicates which input pins Grbl has detected as 'triggered'.
      // * Each letter of XYZPDHRS denotes a particular 'triggered' input pin.
      //   - X Y Z XYZ limit pins, respectively
      //   - P the probe pin.
      //   - D H R S the door, hold, soft-reset, and cycle-start pins, respectively.
      //   - Example: Pn:PZ indicates the probe and z-limit pins are 'triggered'.
      //   - Note: A may be added in later versions for an A-axis limit pin.


      if (has_default()(result, 'Pn')) {
        var pins = get_default()(result, 'Pn[0]', '');

        payload.pinState = {};
        pins.split('').forEach(function (pin) {
          payload.pinState[pin] = true;
        });
      } // Override Values (v1.1)
      // Ov:100,100,100 indicates current override values in percent of programmed values for feed, rapids, and spindle speed, respectively.


      if (has_default()(result, 'Ov')) {
        payload.ov = get_default()(result, 'Ov', []).map(function (v) {
          return Number(v);
        });
      } // Accessory State (v1.1)
      // * A:SFM indicates the current state of accessory machine components, such as the spindle and coolant.
      // * Each letter after A: denotes a particular state. When it appears, the state is enabled. When it does not appear, the state is disabled.
      //   - S indicates spindle is enabled in the CW direction. This does not appear with C.
      //   - C indicates spindle is enabled in the CCW direction. This does not appear with S.
      //   - F indicates flood coolant is enabled.
      //   - M indicates mist coolant is enabled.


      if (has_default()(result, 'A')) {
        payload.accessoryState = get_default()(result, 'A[0]', '');
      }

      return {
        type: GrblLineParserResultStatus,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultStatus;
}();

/* harmony default export */ var Grbl_GrblLineParserResultStatus = (GrblLineParserResultStatus_GrblLineParserResultStatus);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultOk.js
function GrblLineParserResultOk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultOk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultOk_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultOk_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultOk_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultOk = /*#__PURE__*/function () {
  function GrblLineParserResultOk() {
    GrblLineParserResultOk_classCallCheck(this, GrblLineParserResultOk);
  }

  GrblLineParserResultOk_createClass(GrblLineParserResultOk, null, [{
    key: "parse",
    value: function parse(line) {
      var r = line.match(/^ok$/);

      if (!r) {
        return null;
      }

      var payload = {};
      return {
        type: GrblLineParserResultOk,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultOk;
}();

/* harmony default export */ var Grbl_GrblLineParserResultOk = (GrblLineParserResultOk);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultError.js
function GrblLineParserResultError_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultError_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultError_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultError_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultError_defineProperties(Constructor, staticProps); return Constructor; }

// https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#grbl-response-meanings
var GrblLineParserResultError = /*#__PURE__*/function () {
  function GrblLineParserResultError() {
    GrblLineParserResultError_classCallCheck(this, GrblLineParserResultError);
  }

  GrblLineParserResultError_createClass(GrblLineParserResultError, null, [{
    key: "parse",
    value: function parse(line) {
      var r = line.match(/^error:\s*(.+)$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultError,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultError;
}();

/* harmony default export */ var Grbl_GrblLineParserResultError = (GrblLineParserResultError);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultAlarm.js
function GrblLineParserResultAlarm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultAlarm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultAlarm_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultAlarm_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultAlarm_defineProperties(Constructor, staticProps); return Constructor; }

// https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#alarms
var GrblLineParserResultAlarm = /*#__PURE__*/function () {
  function GrblLineParserResultAlarm() {
    GrblLineParserResultAlarm_classCallCheck(this, GrblLineParserResultAlarm);
  }

  GrblLineParserResultAlarm_createClass(GrblLineParserResultAlarm, null, [{
    key: "parse",
    value: function parse(line) {
      var r = line.match(/^ALARM:\s*(.+)$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultAlarm,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultAlarm;
}();

/* harmony default export */ var Grbl_GrblLineParserResultAlarm = (GrblLineParserResultAlarm);
// EXTERNAL MODULE: external "lodash/compact"
var compact_ = __webpack_require__(93);
var compact_default = /*#__PURE__*/__webpack_require__.n(compact_);

// EXTERNAL MODULE: external "lodash/trim"
var trim_ = __webpack_require__(30);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim_);

// CONCATENATED MODULE: ./controllers/Grbl/constants.js
/* eslint max-len: 0 */
// Grbl
var GRBL = 'Grbl'; // Active State

var GRBL_ACTIVE_STATE_IDLE = 'Idle';
var GRBL_ACTIVE_STATE_RUN = 'Run';
var GRBL_ACTIVE_STATE_HOLD = 'Hold';
var GRBL_ACTIVE_STATE_DOOR = 'Door';
var GRBL_ACTIVE_STATE_HOME = 'Home';
var GRBL_ACTIVE_STATE_SLEEP = 'Sleep';
var GRBL_ACTIVE_STATE_ALARM = 'Alarm';
var GRBL_ACTIVE_STATE_CHECK = 'Check'; // Real-time Commands: ~, !, ?, and Ctrl-x

var GRBL_REALTIME_COMMANDS = ['~', // Cycle Start
'!', // Feed Hold
'?', // Current Status
'\x18' // Reset Grbl (Ctrl-X)
]; // https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.9
// http://linuxcnc.org/docs/html/gcode/overview.html#cap:modal-groups

var GRBL_MODAL_GROUPS = [{
  // Motion Mode (Defaults to G0)
  group: 'motion',
  modes: ['G0', 'G1', 'G2', 'G3', 'G38.2', 'G38.3', 'G38.4', 'G38.5', 'G80']
}, {
  // Work Coordinate System Select (Defaults to G54)
  group: 'wcs',
  modes: ['G54', 'G55', 'G56', 'G57', 'G58', 'G59']
}, {
  // Plane Select (Defaults to G17)
  group: 'plane',
  modes: ['G17', 'G18', 'G19']
}, {
  // Units Mode (Defaults to G21)
  group: 'units',
  modes: ['G20', 'G21']
}, {
  // Distance Mode (Defaults to G90)
  group: 'distance',
  modes: ['G90', 'G91']
}, {
  // Feed Rate Mode (Defaults to G94)
  group: 'feedrate',
  modes: ['G93', 'G94']
}, {
  // Program Mode (Defaults to M0)
  group: 'program',
  modes: ['M0', 'M1', 'M2', 'M30']
}, {
  // Spindle State (Defaults to M5)
  group: 'spindle',
  modes: ['M3', 'M4', 'M5']
}, {
  // Coolant State (Defaults to M9)
  group: 'coolant',
  modes: ['M7', 'M8', 'M9']
}]; // Errors
// https://github.com/gnea/grbl/blob/master/doc/csv/error_codes_en_US.csv

var GRBL_ERRORS = [{
  code: 1,
  message: 'Expected command letter',
  description: 'G-code words consist of a letter and a value. Letter was not found.'
}, {
  code: 2,
  message: 'Bad number format',
  description: 'Missing the expected G-code word value or numeric value format is not valid.'
}, {
  code: 3,
  message: 'Invalid statement',
  description: 'Grbl \$\' system command was not recognized or supported.'
}, {
  code: 4,
  message: 'Value < 0',
  description: 'Negative value received for an expected positive value.'
}, {
  code: 5,
  message: 'Setting disabled',
  description: 'Homing cycle failure. Homing is not enabled via settings.'
}, {
  code: 6,
  message: 'Value < 3 usec',
  description: 'Minimum step pulse time must be greater than 3usec.'
}, {
  code: 7,
  message: 'EEPROM read fail. Using defaults',
  description: 'An EEPROM read failed. Auto-restoring affected EEPROM to default values.'
}, {
  code: 8,
  message: 'Not idle',
  description: 'Grbl \'$\' command cannot be used unless Grbl is IDLE. Ensures smooth operation during a job.'
}, {
  code: 9,
  message: 'G-code lock',
  description: 'G-code commands are locked out during alarm or jog state.'
}, {
  code: 10,
  message: 'Homing not enabled',
  description: 'Soft limits cannot be enabled without homing also enabled.'
}, {
  code: 11,
  message: 'Line overflow',
  description: 'Max characters per line exceeded. Received command line was not executed.'
}, {
  code: 12,
  message: 'Step rate > 30kHz',
  description: 'Grbl \'$\' setting value cause the step rate to exceed the maximum supported.'
}, {
  code: 13,
  message: 'Check Door',
  description: 'Safety door detected as opened and door state initiated.'
}, {
  code: 14,
  message: 'Line length exceeded',
  description: 'Build info or startup line exceeded EEPROM line length limit. Line not stored.'
}, {
  code: 15,
  message: 'Travel exceeded',
  description: 'Jog target exceeds machine travel. Jog command has been ignored.'
}, {
  code: 16,
  message: 'Invalid jog command',
  description: 'Jog command has no \'=\' or contains prohibited g-code.'
}, {
  code: 17,
  message: 'Setting disabled',
  description: 'Laser mode requires PWM output.'
}, {
  code: 20,
  message: 'Unsupported command',
  description: 'Unsupported or invalid g-code command found in block.'
}, {
  code: 21,
  message: 'Modal group violation',
  description: 'More than one g-code command from same modal group found in block.'
}, {
  code: 22,
  message: 'Undefined feed rate',
  description: 'Feed rate has not yet been set or is undefined.'
}, {
  code: 23,
  message: 'Invalid gcode ID:23',
  description: 'G-code command in block requires an integer value.'
}, {
  code: 24,
  message: 'Invalid gcode ID:24',
  description: 'More than one g-code command that requires axis words found in block.'
}, {
  code: 25,
  message: 'Invalid gcode ID:25',
  description: 'Repeated g-code word found in block.'
}, {
  code: 26,
  message: 'Invalid gcode ID:26',
  description: 'No axis words found in block for g-code command or current modal state which requires them.'
}, {
  code: 27,
  message: 'Invalid gcode ID:27',
  description: 'Line number value is invalid.'
}, {
  code: 28,
  message: 'Invalid gcode ID:28',
  description: 'G-code command is missing a required value word.'
}, {
  code: 29,
  message: 'Invalid gcode ID:29',
  description: 'G59.x work coordinate systems are not supported.'
}, {
  code: 30,
  message: 'Invalid gcode ID:30',
  description: 'G53 only allowed with G0 and G1 motion modes.'
}, {
  code: 31,
  message: 'Invalid gcode ID:31',
  description: 'Axis words found in block when no command or current modal state uses them.'
}, {
  code: 32,
  message: 'Invalid gcode ID:32',
  description: 'G2 and G3 arcs require at least one in-plane axis word.'
}, {
  code: 33,
  message: 'Invalid gcode ID:33',
  description: 'Motion command target is invalid.'
}, {
  code: 34,
  message: 'Invalid gcode ID:34',
  description: 'Arc radius value is invalid.'
}, {
  code: 35,
  message: 'Invalid gcode ID:35',
  description: 'G2 and G3 arcs require at least one in-plane offset word.'
}, {
  code: 36,
  message: 'Invalid gcode ID:36',
  description: 'Unused value words found in block.'
}, {
  code: 37,
  message: 'Invalid gcode ID:37',
  description: 'G43.1 dynamic tool length offset is not assigned to configured tool length axis.'
}, {
  code: 38,
  message: 'Invalid gcode ID:38',
  description: 'Tool number greater than max supported value.'
}]; // Alarms
// https://github.com/gnea/grbl/blob/master/doc/csv/alarm_codes_en_US.csv

var GRBL_ALARMS = [{
  code: 1,
  message: 'Hard limit',
  description: 'Hard limit has been triggered. Machine position is likely lost due to sudden halt. Re-homing is highly recommended.'
}, {
  code: 2,
  message: 'Soft limit',
  description: 'Soft limit alarm. G-code motion target exceeds machine travel. Machine position retained. Alarm may be safely unlocked.'
}, {
  code: 3,
  message: 'Abort during cycle',
  description: 'Reset while in motion. Machine position is likely lost due to sudden halt. Re-homing is highly recommended.'
}, {
  code: 4,
  message: 'Probe fail',
  description: 'Probe fail. Probe is not in the expected initial state before starting probe cycle when G38.2 and G38.3 is not triggered and G38.4 and G38.5 is triggered.'
}, {
  code: 5,
  message: 'Probe fail',
  description: 'Probe fail. Probe did not contact the workpiece within the programmed travel for G38.2 and G38.4.'
}, {
  code: 6,
  message: 'Homing fail',
  description: 'Homing fail. The active homing cycle was reset.'
}, {
  code: 7,
  message: 'Homing fail',
  description: 'Homing fail. Safety door was opened during homing cycle.'
}, {
  code: 8,
  message: 'Homing fail',
  description: 'Homing fail. Pull off travel failed to clear limit switch. Try increasing pull-off setting or check wiring.'
}, {
  code: 9,
  message: 'Homing fail',
  description: 'Homing fail. Could not find limit switch within search distances. Try increasing max travel, decreasing pull-off distance, or check wiring.'
}, {
  code: 'Homing',
  message: 'Homing required',
  description: 'Homing must be run if limit switches and homing cycle is enabled in EEPROM'
}]; // Settings
// https://github.com/gnea/grbl/blob/master/doc/csv/setting_codes_en_US.csv

var GRBL_SETTINGS = [{
  setting: '$0',
  message: 'Step pulse time',
  category: 'Motors',
  units: 'μs',
  description: 'Sets time length per step. Minimum 3usec.',
  inputType: 'number',
  min: 3,
  max: 12,
  step: 1
}, {
  setting: '$1',
  message: 'Step idle delay',
  category: 'Motors',
  units: 'ms',
  description: 'Sets a short hold delay when stopping to let dynamics settle before disabling steppers. Value 255 keeps motors enabled with no delay.',
  inputType: 'number',
  min: 25,
  max: 255,
  step: 5
}, {
  setting: '$2',
  message: 'Step pulse invert',
  category: 'Motors',
  units: 'mask',
  description: 'Inverts the step signal. Set axis bit to invert (00000ZYX).',
  inputType: 'mask2'
}, {
  setting: '$3',
  message: 'Step direction invert',
  category: 'Motors',
  units: 'mask',
  description: 'Inverts the direction signal. Set axis bit to invert (00000ZYX).',
  inputType: 'mask3'
}, {
  setting: '$4',
  message: 'Invert step enable pin',
  category: 'Pins',
  units: 'boolean',
  description: 'Inverts the stepper driver enable pin signal.',
  inputType: 'switch'
}, {
  setting: '$5',
  message: 'Invert limit pins',
  category: 'Pins',
  units: 'boolean',
  description: 'Inverts the all of the limit input pins.',
  inputType: 'switch'
}, {
  setting: '$6',
  message: 'Invert probe pin',
  category: 'Pins',
  units: 'boolean',
  description: 'Inverts the probe input pin signal.',
  inputType: 'switch'
}, {
  setting: '$10',
  message: 'Status report options',
  category: 'GRBL',
  units: 'mask',
  description: 'Alters data included in status reports.',
  inputType: 'mask10'
}, {
  setting: '$11',
  message: 'Junction deviation',
  category: 'GRBL',
  units: 'mm',
  description: 'Sets how fast Grbl travels through consecutive motions. Lower value slows it down.',
  inputType: 'number',
  min: 0.001,
  max: 0.020,
  step: 0.001
}, {
  setting: '$12',
  message: 'Arc tolerance',
  category: 'GRBL',
  units: 'mm',
  description: 'Sets the G2 and G3 arc tracing accuracy based on radial error. Beware: A very small value may effect performance.',
  inputType: 'number',
  min: 0.001,
  max: 0.003,
  step: 0.001
}, {
  setting: '$13',
  message: 'Report in inches',
  category: 'GRBL',
  units: 'boolean',
  description: 'Enables inch units when returning any position and rate value that is not a settings value.',
  inputType: 'switch'
}, {
  setting: '$20',
  message: 'Soft limits enable',
  category: 'Homing',
  units: 'boolean',
  description: 'Enables soft limits checks within machine travel and sets alarm when exceeded. Requires homing.',
  inputType: 'switch'
}, {
  setting: '$21',
  message: 'Hard limits enable',
  category: 'Homing',
  units: 'boolean',
  description: 'Enables hard limits. Immediately halts motion and throws an alarm when switch is triggered.',
  inputType: 'switch'
}, {
  setting: '$22',
  message: 'Homing cycle enable',
  category: 'Homing',
  units: 'boolean',
  description: 'Enables homing cycle. Requires limit switches on all axes.',
  inputType: 'switch'
}, {
  setting: '$23',
  message: 'Homing direction invert',
  category: 'Homing',
  units: 'mask',
  description: 'Homing searches for a switch in the positive direction. Set axis bit (00000ZYX) to search in negative direction.',
  inputType: 'mask23'
}, {
  setting: '$24',
  message: 'Homing locate feed rate',
  category: 'Homing',
  units: 'mm/min',
  description: 'Feed rate to slowly engage limit switch to determine its location accurately.',
  inputType: 'number',
  min: 1,
  max: 30,
  step: 1
}, {
  setting: '$25',
  message: 'Homing search seek rate',
  category: 'Homing',
  units: 'mm/min',
  description: 'Seek rate to quickly find the limit switch before the slower locating phase.',
  inputType: 'number',
  min: 100,
  max: 1000,
  step: 100
}, {
  setting: '$26',
  message: 'Homing switch debounce delay',
  category: 'Homing',
  units: 'ms',
  description: 'Sets a short delay between phases of homing cycle to let a switch debounce.',
  inputType: 'number',
  min: 5,
  max: 255,
  step: 5
}, {
  setting: '$27',
  message: 'Homing switch pull-off distance',
  category: 'Homing',
  units: 'mm',
  description: 'Retract distance after triggering switch to disengage it. Homing will fail if switch isn\'t cleared.',
  inputType: 'number',
  min: 0,
  max: 5,
  step: 0.5
}, {
  setting: '$30',
  message: 'Maximum spindle speed',
  category: 'Spindle',
  units: 'rpm',
  description: 'Maximum spindle speed. Sets PWM to 100% duty cycle.',
  inputType: 'number',
  min: 100,
  max: 10000,
  step: 100
}, {
  setting: '$31',
  message: 'Minimum spindle speed',
  category: 'Spindle',
  units: 'rpm',
  description: 'Minimum spindle speed. Sets PWM to 0.4% or lowest duty cycle.',
  inputType: 'number',
  min: 1,
  max: 100,
  step: 1
}, {
  setting: '$32',
  message: 'Laser-mode enabled as spindle',
  category: 'Spindle',
  units: 'boolean',
  description: 'Converts spindle commands into laser mode. Consecutive G1/2/3 commands will not halt when spindle speed is changed.',
  inputType: 'switch'
}, {
  setting: '$100',
  message: 'X-axis travel resolution',
  category: 'Motors',
  units: 'step/mm',
  description: 'X-axis travel resolution in steps per millimeter.',
  inputType: 'number',
  min: 10,
  max: 500,
  step: 10
}, {
  setting: '$101',
  message: 'Y-axis travel resolution',
  category: 'Motors',
  units: 'step/mm',
  description: 'Y-axis travel resolution in steps per millimeter.',
  inputType: 'number',
  min: 10,
  max: 500,
  step: 10
}, {
  setting: '$102',
  message: 'Z-axis travel resolution',
  category: 'Motors',
  units: 'step/mm',
  description: 'Z-axis travel resolution in steps per millimeter.',
  inputType: 'number',
  min: 10,
  max: 500,
  step: 10
}, {
  setting: '$110',
  message: 'X-axis maximum rate',
  category: 'Motors',
  units: 'mm/min',
  description: 'X-axis maximum rate. Used as G0 rapid rate.',
  inputType: 'number',
  min: 100,
  max: 1500,
  step: 100
}, {
  setting: '$111',
  message: 'Y-axis maximum rate',
  category: 'Motors',
  units: 'mm/min',
  description: 'Y-axis maximum rate. Used as G0 rapid rate.',
  inputType: 'number',
  min: 100,
  max: 1500,
  step: 100
}, {
  setting: '$112',
  message: 'Z-axis maximum rate',
  category: 'Motors',
  units: 'mm/min',
  description: 'Z-axis maximum rate. Used as G0 rapid rate.',
  inputType: 'number',
  min: 10,
  max: 1000,
  step: 10
}, {
  setting: '$120',
  message: 'X-axis acceleration',
  category: 'Motors',
  units: 'mm/sec^2',
  description: 'X-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.',
  inputType: 'number',
  min: 1,
  max: 15,
  step: 1
}, {
  setting: '$121',
  message: 'Y-axis acceleration',
  category: 'Motors',
  units: 'mm/sec^2',
  description: 'Y-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.',
  inputType: 'number',
  min: 1,
  max: 15,
  step: 1
}, {
  setting: '$122',
  message: 'Z-axis acceleration',
  category: 'Motors',
  units: 'mm/sec^2',
  description: 'Z-axis acceleration. Used for motion planning to not exceed motor torque and lose steps.',
  inputType: 'number',
  min: 1,
  max: 15,
  step: 1
}, {
  setting: '$130',
  message: 'X-axis maximum travel',
  category: 'Limits',
  units: 'mm',
  description: 'Maximum X-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.',
  inputType: 'number',
  min: 1,
  max: 1500,
  step: 10
}, {
  setting: '$131',
  message: 'Y-axis maximum travel',
  category: 'Limits',
  units: 'mm',
  description: 'Maximum Y-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.',
  inputType: 'number',
  min: 1,
  max: 1500,
  step: 10
}, {
  setting: '$132',
  message: 'Z-axis maximum travel',
  category: 'Limits',
  units: 'mm',
  description: 'Maximum Z-axis travel distance from homing switch. Determines valid machine space for soft-limits and homing search distances.',
  inputType: 'number',
  min: 1,
  max: 1500,
  step: 10
}];
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultParserState.js
function GrblLineParserResultParserState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultParserState_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultParserState_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultParserState_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultParserState_defineProperties(Constructor, staticProps); return Constructor; }










var GrblLineParserResultParserState_GrblLineParserResultParserState = /*#__PURE__*/function () {
  function GrblLineParserResultParserState() {
    GrblLineParserResultParserState_classCallCheck(this, GrblLineParserResultParserState);
  }

  GrblLineParserResultParserState_createClass(GrblLineParserResultParserState, null, [{
    key: "parse",
    value: // * Grbl v0.9
    //   [G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.]
    // * Grbl v1.1
    //   [GC:G0 G54 G17 G21 G90 G94 M0 M5 M9 T0 S0.0 F500.0]
    function parse(line) {
      var r = line.match(/^\[(?:GC:)?((?:[a-zA-Z][0-9]+(?:\.[0-9]*)?\s*)+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {};

      var words = compact_default()(r[1].split(' ')).map(function (word) {
        return trim_default()(word);
      });

      var _loop = function _loop(i) {
        var word = words[i]; // Gx, Mx

        if (word.indexOf('G') === 0 || word.indexOf('M') === 0) {
          var _r = find_default()(GRBL_MODAL_GROUPS, function (group) {
            return includes_default()(group.modes, word);
          });

          if (!_r) {
            return "continue";
          }

          var prevWord = get_default()(payload, 'modal.' + _r.group, '');

          if (prevWord) {
            set_default()(payload, 'modal.' + _r.group, external_ensure_array_default()(prevWord).concat(word));
          } else {
            set_default()(payload, 'modal.' + _r.group, word);
          }

          return "continue";
        } // T: tool number


        if (word.indexOf('T') === 0) {
          set_default()(payload, 'tool', word.substring(1));

          return "continue";
        } // F: feed rate


        if (word.indexOf('F') === 0) {
          set_default()(payload, 'feedrate', word.substring(1));

          return "continue";
        } // S: spindle speed


        if (word.indexOf('S') === 0) {
          set_default()(payload, 'spindle', word.substring(1));

          return "continue";
        }
      };

      for (var i = 0; i < words.length; ++i) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      return {
        type: GrblLineParserResultParserState,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultParserState;
}();

/* harmony default export */ var Grbl_GrblLineParserResultParserState = (GrblLineParserResultParserState_GrblLineParserResultParserState);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultParameters.js
function GrblLineParserResultParameters_slicedToArray(arr, i) { return GrblLineParserResultParameters_arrayWithHoles(arr) || GrblLineParserResultParameters_iterableToArrayLimit(arr, i) || GrblLineParserResultParameters_unsupportedIterableToArray(arr, i) || GrblLineParserResultParameters_nonIterableRest(); }

function GrblLineParserResultParameters_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GrblLineParserResultParameters_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GrblLineParserResultParameters_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GrblLineParserResultParameters_arrayLikeToArray(o, minLen); }

function GrblLineParserResultParameters_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GrblLineParserResultParameters_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function GrblLineParserResultParameters_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function GrblLineParserResultParameters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultParameters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultParameters_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultParameters_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultParameters_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultParameters = /*#__PURE__*/function () {
  function GrblLineParserResultParameters() {
    GrblLineParserResultParameters_classCallCheck(this, GrblLineParserResultParameters);
  }

  GrblLineParserResultParameters_createClass(GrblLineParserResultParameters, null, [{
    key: "parse",
    value: function parse(line) {
      var r = line.match(/^\[(G54|G55|G56|G57|G58|G59|G28|G30|G92|TLO|PRB):(.+)\]$/);

      if (!r) {
        return null;
      }

      var name = r[1];
      var value = r[2];
      var payload = {
        name: name,
        value: ''
      }; // [Gxx:0.000]

      var re = /^G\d+$/i;

      if (re.test(name)) {
        var axes = ['x', 'y', 'z', 'a', 'b', 'c'];
        var list = value.split(',');
        payload.value = {};

        for (var i = 0; i < list.length; ++i) {
          payload.value[axes[i]] = list[i];
        }
      } // [TLO:0.000]


      if (name === 'TLO') {
        payload.value = value;
      } // [PRB:0.000,0.000,1.492:1]


      if (name === 'PRB') {
        var _axes = ['x', 'y', 'z', 'a', 'b', 'c'];

        var _value$split = value.split(':'),
            _value$split2 = GrblLineParserResultParameters_slicedToArray(_value$split, 2),
            str = _value$split2[0],
            result = _value$split2[1];

        var _list = str.split(',');

        payload.value = {};
        payload.value.result = Number(result);

        for (var _i2 = 0; _i2 < _list.length; ++_i2) {
          payload.value[_axes[_i2]] = _list[_i2];
        }
      }

      return {
        type: GrblLineParserResultParameters,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultParameters;
}();

/* harmony default export */ var Grbl_GrblLineParserResultParameters = (GrblLineParserResultParameters);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultHelp.js
function GrblLineParserResultHelp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultHelp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultHelp_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultHelp_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultHelp_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultHelp = /*#__PURE__*/function () {
  function GrblLineParserResultHelp() {
    GrblLineParserResultHelp_classCallCheck(this, GrblLineParserResultHelp);
  }

  GrblLineParserResultHelp_createClass(GrblLineParserResultHelp, null, [{
    key: "parse",
    value: function parse(line) {
      // * Grbl v1.1
      //   [HLP:]
      var r = line.match(/^\[(?:HLP:)(.+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultHelp,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultHelp;
}();

/* harmony default export */ var Grbl_GrblLineParserResultHelp = (GrblLineParserResultHelp);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultVersion.js
function GrblLineParserResultVersion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultVersion_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultVersion_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultVersion_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultVersion_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultVersion = /*#__PURE__*/function () {
  function GrblLineParserResultVersion() {
    GrblLineParserResultVersion_classCallCheck(this, GrblLineParserResultVersion);
  }

  GrblLineParserResultVersion_createClass(GrblLineParserResultVersion, null, [{
    key: "parse",
    value: function parse(line) {
      // * Grbl v1.1
      //   [VER:]
      var r = line.match(/^\[(?:VER:)(.+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultVersion,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultVersion;
}();

/* harmony default export */ var Grbl_GrblLineParserResultVersion = (GrblLineParserResultVersion);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultOption.js
function GrblLineParserResultOption_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultOption_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultOption_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultOption_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultOption_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultOption = /*#__PURE__*/function () {
  function GrblLineParserResultOption() {
    GrblLineParserResultOption_classCallCheck(this, GrblLineParserResultOption);
  }

  GrblLineParserResultOption_createClass(GrblLineParserResultOption, null, [{
    key: "parse",
    value: function parse(line) {
      // * Grbl v1.1
      //   [OPT:]
      var r = line.match(/^\[(?:OPT:)(.+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultOption,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultOption;
}();

/* harmony default export */ var Grbl_GrblLineParserResultOption = (GrblLineParserResultOption);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultEcho.js
function GrblLineParserResultEcho_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultEcho_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultEcho_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultEcho_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultEcho_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultEcho = /*#__PURE__*/function () {
  function GrblLineParserResultEcho() {
    GrblLineParserResultEcho_classCallCheck(this, GrblLineParserResultEcho);
  }

  GrblLineParserResultEcho_createClass(GrblLineParserResultEcho, null, [{
    key: "parse",
    value: function parse(line) {
      // * Grbl v1.1
      //   [echo:]
      var r = line.match(/^\[(?:echo:)(.+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultEcho,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultEcho;
}();

/* harmony default export */ var Grbl_GrblLineParserResultEcho = (GrblLineParserResultEcho);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultFeedback.js
function GrblLineParserResultFeedback_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultFeedback_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultFeedback_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultFeedback_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultFeedback_defineProperties(Constructor, staticProps); return Constructor; }

// https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#feedback-messages
var GrblLineParserResultFeedback = /*#__PURE__*/function () {
  function GrblLineParserResultFeedback() {
    GrblLineParserResultFeedback_classCallCheck(this, GrblLineParserResultFeedback);
  }

  GrblLineParserResultFeedback_createClass(GrblLineParserResultFeedback, null, [{
    key: "parse",
    value: // * Grbl v0.9
    //   []
    // * Grbl v1.1
    //   [MSG:]
    function parse(line) {
      var r = line.match(/^\[(?:MSG:)?(.+)\]$/);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: GrblLineParserResultFeedback,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultFeedback;
}();

/* harmony default export */ var Grbl_GrblLineParserResultFeedback = (GrblLineParserResultFeedback);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultSettings.js


function GrblLineParserResultSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultSettings_defineProperties(Constructor, staticProps); return Constructor; }

var GrblLineParserResultSettings_GrblLineParserResultSettings = /*#__PURE__*/function () {
  function GrblLineParserResultSettings() {
    GrblLineParserResultSettings_classCallCheck(this, GrblLineParserResultSettings);
  }

  GrblLineParserResultSettings_createClass(GrblLineParserResultSettings, null, [{
    key: "parse",
    value: function parse(line) {
      var r = line.match(/^(\$[^=]+)=([^ ]*)\s*(.*)/);

      if (!r) {
        return null;
      }

      var payload = {
        name: r[1],
        value: r[2],
        message: trim_default()(r[3], '()')
      };
      return {
        type: GrblLineParserResultSettings,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultSettings;
}();

/* harmony default export */ var Grbl_GrblLineParserResultSettings = (GrblLineParserResultSettings_GrblLineParserResultSettings);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultStartup.js
function GrblLineParserResultStartup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParserResultStartup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParserResultStartup_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParserResultStartup_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParserResultStartup_defineProperties(Constructor, staticProps); return Constructor; }


var GrblLineParserResultStartup_pattern = new RegExp(/^([a-zA-Z0-9]+)\s+((?:\d+\.){1,2}\d+[a-zA-Z0-9\-\.]*)([^\[]*\[[^\]]+\].*)?/);

var GrblLineParserResultStartup_GrblLineParserResultStartup = /*#__PURE__*/function () {
  function GrblLineParserResultStartup() {
    GrblLineParserResultStartup_classCallCheck(this, GrblLineParserResultStartup);
  }

  GrblLineParserResultStartup_createClass(GrblLineParserResultStartup, null, [{
    key: "parse",
    value: // Grbl 0.9j ['$' for help]
    // Grbl 1.1d ['$' for help]
    // Grbl 1.1
    // Grbl 1.1h: LongMill build ['$' for help]
    // Grbl 1.1h ['$' for help] LongMill build Feb 25, 2020
    // gCarvin 2.0.0 ['$' for help]
    function parse(line) {
      var r = line.match(GrblLineParserResultStartup_pattern);

      if (!r) {
        return null;
      }

      var firmware = r[1];
      var version = r[2];

      var message = trim_default()(r[3]);

      var payload = {
        firmware: firmware,
        version: version,
        message: message
      };
      return {
        type: GrblLineParserResultStartup,
        payload: payload
      };
    }
  }]);

  return GrblLineParserResultStartup;
}();

/* harmony default export */ var Grbl_GrblLineParserResultStartup = (GrblLineParserResultStartup_GrblLineParserResultStartup);
// CONCATENATED MODULE: ./controllers/Grbl/GrblLineParser.js


function GrblLineParser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblLineParser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblLineParser_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblLineParser_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblLineParser_defineProperties(Constructor, staticProps); return Constructor; }













 // Grbl v1.1
// https://github.com/gnea/grbl/blob/edge/doc/markdown/interface.md

var GrblLineParser_GrblLineParser = /*#__PURE__*/function () {
  function GrblLineParser() {
    GrblLineParser_classCallCheck(this, GrblLineParser);
  }

  GrblLineParser_createClass(GrblLineParser, [{
    key: "parse",
    value: function parse(line) {
      var parsers = [// <>
      Grbl_GrblLineParserResultStatus, // ok
      Grbl_GrblLineParserResultOk, // error:x
      Grbl_GrblLineParserResultError, // ALARM:
      Grbl_GrblLineParserResultAlarm, // [G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.] (v0.9)
      // [GC:G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.] (v1.1)
      Grbl_GrblLineParserResultParserState, // [G54:0.000,0.000,0.000]
      // [G55:0.000,0.000,0.000]
      // [G56:0.000,0.000,0.000]
      // [G57:0.000,0.000,0.000]
      // [G58:0.000,0.000,0.000]
      // [G59:0.000,0.000,0.000]
      // [G28:0.000,0.000,0.000]
      // [G30:0.000,0.000,0.000]
      // [G92:0.000,0.000,0.000]
      // [TLO:0.000]
      // [PRB:0.000,0.000,0.000:0]
      Grbl_GrblLineParserResultParameters, // [HLP:] (v1.1)
      Grbl_GrblLineParserResultHelp, // [VER:] (v1.1)
      Grbl_GrblLineParserResultVersion, // [OPT:] (v1.1)
      Grbl_GrblLineParserResultOption, // [echo:] (v1.1)
      Grbl_GrblLineParserResultEcho, // [] (v0.9)
      // [MSG:] (v1.1)
      Grbl_GrblLineParserResultFeedback, // $xx
      Grbl_GrblLineParserResultSettings, // Grbl X.Xx ['$' for help]
      Grbl_GrblLineParserResultStartup];

      for (var _i = 0, _parsers = parsers; _i < _parsers.length; _i++) {
        var parser = _parsers[_i];
        var result = parser.parse(line);

        if (result) {
          set_default()(result, 'payload.raw', line);

          return result;
        }
      }

      return {
        type: null,
        payload: {
          raw: line
        }
      };
    }
  }]);

  return GrblLineParser;
}();

/* harmony default export */ var Grbl_GrblLineParser = (GrblLineParser_GrblLineParser);
// CONCATENATED MODULE: ./controllers/Grbl/GrblRunner.js
function GrblRunner_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GrblRunner_typeof = function _typeof(obj) { return typeof obj; }; } else { GrblRunner_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GrblRunner_typeof(obj); }






function GrblRunner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function GrblRunner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GrblRunner_ownKeys(Object(source), true).forEach(function (key) { GrblRunner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GrblRunner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GrblRunner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblRunner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblRunner_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblRunner_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblRunner_defineProperties(Constructor, staticProps); return Constructor; }

function GrblRunner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GrblRunner_setPrototypeOf(subClass, superClass); }

function GrblRunner_setPrototypeOf(o, p) { GrblRunner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GrblRunner_setPrototypeOf(o, p); }

function GrblRunner_createSuper(Derived) { var hasNativeReflectConstruct = GrblRunner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GrblRunner_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GrblRunner_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GrblRunner_possibleConstructorReturn(this, result); }; }

function GrblRunner_possibleConstructorReturn(self, call) { if (call && (GrblRunner_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return GrblRunner_assertThisInitialized(self); }

function GrblRunner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GrblRunner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GrblRunner_getPrototypeOf(o) { GrblRunner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GrblRunner_getPrototypeOf(o); }

function GrblRunner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var GrblRunner_GrblRunner = /*#__PURE__*/function (_events$EventEmitter) {
  GrblRunner_inherits(GrblRunner, _events$EventEmitter);

  var _super = GrblRunner_createSuper(GrblRunner);

  function GrblRunner() {
    var _this;

    GrblRunner_classCallCheck(this, GrblRunner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    GrblRunner_defineProperty(GrblRunner_assertThisInitialized(_this), "state", {
      status: {
        activeState: '',
        mpos: {
          x: '0.000',
          y: '0.000',
          z: '0.000'
        },
        wpos: {
          x: '0.000',
          y: '0.000',
          z: '0.000'
        },
        ov: [],
        alarmCode: 'Homing',
        probeActive: false,
        pinState: {}
      },
      parserstate: {
        modal: {
          motion: 'G0',
          // G0, G1, G2, G3, G38.2, G38.3, G38.4, G38.5, G80
          wcs: 'G54',
          // G54, G55, G56, G57, G58, G59
          plane: 'G17',
          // G17: xy-plane, G18: xz-plane, G19: yz-plane
          units: 'G21',
          // G20: Inches, G21: Millimeters
          distance: 'G90',
          // G90: Absolute, G91: Relative
          feedrate: 'G94',
          // G93: Inverse time mode, G94: Units per minute
          program: 'M0',
          // M0, M1, M2, M30
          spindle: 'M5',
          // M3: Spindle (cw), M4: Spindle (ccw), M5: Spindle off
          coolant: 'M9' // M7: Mist coolant, M8: Flood coolant, M9: Coolant off, [M7,M8]: Both on

        },
        tool: '',
        feedrate: '',
        spindle: ''
      }
    });

    GrblRunner_defineProperty(GrblRunner_assertThisInitialized(_this), "settings", {
      version: '',
      parameters: {},
      settings: {}
    });

    GrblRunner_defineProperty(GrblRunner_assertThisInitialized(_this), "parser", new Grbl_GrblLineParser());

    return _this;
  }

  GrblRunner_createClass(GrblRunner, [{
    key: "parse",
    value: function parse(data) {
      var _this2 = this;

      data = ('' + data).replace(/\s+$/, '');

      if (!data) {
        return;
      }

      this.emit('raw', {
        raw: data
      });
      var result = this.parser.parse(data) || {};
      var type = result.type,
          payload = result.payload;
      var raw = payload.raw;

      if (type === Grbl_GrblLineParserResultStatus) {
        // Grbl v1.1
        // WCO:0.000,10.000,2.500
        // A current work coordinate offset is now sent to easily convert
        // between position vectors, where WPos = MPos - WCO for each axis.
        if (has_default()(payload, 'mpos') && !has_default()(payload, 'wpos')) {
          payload.wpos = payload.wpos || {};

          each_default()(payload.mpos, function (mpos, axis) {
            var digits = decimal_places(mpos);

            var wco = get_default()(payload.wco || _this2.state.status.wco, axis, 0);

            payload.wpos[axis] = (Number(mpos) - Number(wco)).toFixed(digits);
          });
        } else if (has_default()(payload, 'wpos') && !has_default()(payload, 'mpos')) {
          payload.mpos = payload.mpos || {};

          each_default()(payload.wpos, function (wpos, axis) {
            var digits = decimal_places(wpos);

            var wco = get_default()(payload.wco || _this2.state.status.wco, axis, 0);

            payload.mpos[axis] = (Number(wpos) + Number(wco)).toFixed(digits);
          });
        }

        var probeActive = raw.includes('Pn:P');

        var nextState = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
          status: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state.status), {}, {
            probeActive: probeActive
          }, payload)
        }); // Delete the raw key


        delete nextState.status.raw;

        if (!isEqual_default()(this.state.status, nextState.status)) {
          this.state = nextState; // enforce change
        }

        this.emit('status', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultOk) {
        this.emit('ok', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultError) {
        // https://nodejs.org/api/events.html#events_error_events
        // As a best practice, listeners should always be added for the 'error' events.
        this.emit('error', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultAlarm) {
        var _nextState = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
          status: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state.status), {}, {
            activeState: GRBL_ACTIVE_STATE_ALARM,
            alarmCode: Number(payload.message)
          })
        });

        if (!isEqual_default()(this.state.status, _nextState.status)) {
          this.state = _nextState; // enforce change
        }

        this.emit('alarm', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultParserState) {
        var modal = payload.modal,
            tool = payload.tool,
            feedrate = payload.feedrate,
            spindle = payload.spindle;

        var _nextState2 = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
          parserstate: {
            modal: modal,
            tool: tool,
            feedrate: feedrate,
            spindle: spindle
          }
        });

        if (!isEqual_default()(this.state.parserstate, _nextState2.parserstate)) {
          this.state = _nextState2; // enforce change
        }

        this.emit('parserstate', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultParameters) {
        var name = payload.name,
            value = payload.value;

        var nextSettings = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
          parameters: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings.parameters), {}, GrblRunner_defineProperty({}, name, value))
        });

        if (!isEqual_default()(this.settings.parameters[name], nextSettings.parameters[name])) {
          this.settings = nextSettings; // enforce change
        }

        this.emit('parameters', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultFeedback) {
        this.emit('feedback', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultSettings) {
        var _name = payload.name,
            _value = payload.value;

        var _nextSettings = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
          settings: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings.settings), {}, GrblRunner_defineProperty({}, _name, _value))
        });

        if (this.settings.settings[_name] !== _nextSettings.settings[_name]) {
          this.settings = _nextSettings; // enforce change
        }

        this.emit('settings', payload);
        return;
      }

      if (type === Grbl_GrblLineParserResultStartup) {
        var version = payload.version;

        var _nextSettings2 = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
          version: version
        });

        if (!isEqual_default()(this.settings.version, _nextSettings2.version)) {
          this.settings = _nextSettings2; // enforce change
        }

        this.emit('startup', payload);
        return;
      }

      if (data.length > 0) {
        this.emit('others', payload);
        return;
      }
    }
  }, {
    key: "getMachinePosition",
    value: function getMachinePosition() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return get_default()(state, 'status.mpos', {});
    }
  }, {
    key: "getWorkPosition",
    value: function getWorkPosition() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return get_default()(state, 'status.wpos', {});
    }
  }, {
    key: "getModalGroup",
    value: function getModalGroup() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return get_default()(state, 'parserstate.modal', {});
    }
  }, {
    key: "getTool",
    value: function getTool() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return Number(get_default()(state, 'parserstate.tool')) || 0;
    }
  }, {
    key: "isAlarm",
    value: function isAlarm() {
      var activeState = get_default()(this.state, 'status.activeState');

      return activeState === GRBL_ACTIVE_STATE_ALARM;
    }
  }, {
    key: "isIdle",
    value: function isIdle() {
      var activeState = get_default()(this.state, 'status.activeState');

      return activeState === GRBL_ACTIVE_STATE_IDLE;
    }
  }]);

  return GrblRunner;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var Grbl_GrblRunner = (GrblRunner_GrblRunner);
// CONCATENATED MODULE: ../app/constants/index.js
// AXIS
var AXIS_E = 'e';
var AXIS_X = 'x';
var AXIS_Y = 'y';
var AXIS_Z = 'z';
var AXIS_A = 'a';
var AXIS_B = 'b';
var AXIS_C = 'c'; // Imperial System

var IMPERIAL_UNITS = 'in';
var IMPERIAL_STEPS = [0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.003, 0.005, 0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.3, 0.5, 1, // Default
2, 3, 5, 10, 20]; // Metric System

var METRIC_UNITS = 'mm';
var METRIC_STEPS = [0.001, 0.002, 0.003, 0.005, 0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.3, 0.5, 1, // Default
2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500]; // Controller

var constants_GRBL = 'Grbl';
var MARLIN = 'Marlin'; // Workflow State

var constants_WORKFLOW_STATE_IDLE = 'idle';
var constants_WORKFLOW_STATE_PAUSED = 'paused';
var constants_WORKFLOW_STATE_RUNNING = 'running'; // Grbl Active State

var constants_GRBL_ACTIVE_STATE_IDLE = 'Idle';
var constants_GRBL_ACTIVE_STATE_RUN = 'Run';
var constants_GRBL_ACTIVE_STATE_HOLD = 'Hold';
var constants_GRBL_ACTIVE_STATE_DOOR = 'Door';
var constants_GRBL_ACTIVE_STATE_HOME = 'Home';
var constants_GRBL_ACTIVE_STATE_SLEEP = 'Sleep';
var constants_GRBL_ACTIVE_STATE_ALARM = 'Alarm';
var constants_GRBL_ACTIVE_STATE_CHECK = 'Check';
var GRBL_ACTIVE_STATE_JOG = 'Jog';
var GRBL_ACTIVE_STATE_TESTING = 'Testing File';
var LASER_MODE = 'laser';
var SPINDLE_MODE = 'spindle';
var CARVING_CATEGORY = 'Carving';
var OVERRIDES_CATEGORY = 'Overrides';
var VISUALIZER_CATEGORY = 'Visualizer';
var LOCATION_CATEGORY = 'Location';
var JOGGING_CATEGORY = 'Jogging';
var MACRO_CATEGORY = 'Macros';
var PROBING_CATEGORY = 'Probing';
var SPINDLE_LASER_CATEGORY = 'Spindle/Laser';
var GENERAL_CATEGORY = 'General';
var TOOLBAR_CATEGORY = 'Toolbar';
var RENDER_NO_FILE = 'RENDER_NO_FILE';
var RENDER_LOADING = 'RENDER_LOADNG';
var RENDER_RENDERING = 'RENDER_RENDERING';
var RENDER_RENDERED = 'RENDER_RENDERED';
var SPIRAL_MOVEMENT = 'SPIRAL_MOVEMENT';
var ZIG_ZAG_MOVEMENT = 'ZIG_ZAG_MOVEMENT';
var START_POSITION_BACK_LEFT = 'START_POSITION_BACK_LEFT';
var START_POSITION_BACK_RIGHT = 'START_POSITION_BACK_RIGHT';
var START_POSITION_FRONT_LEFT = 'START_POSITION_FRONT_LEFT';
var START_POSITION_FRONT_RIGHT = 'START_POSITION_FRONT_RIGHT';
var SURFACING_VISUALIZER_CONTAINER_ID = 'SURFACING_VISUALIZER_CONTAINER_ID';
var VISUALIZER_PRIMARY = 'VISUALIZER_PRIMARY';
var VISUALIZER_SECONDARY = 'VISUALIZER_SECONDARY';
// EXTERNAL MODULE: external "avrgirl-arduino"
var external_avrgirl_arduino_ = __webpack_require__(94);
var external_avrgirl_arduino_default = /*#__PURE__*/__webpack_require__.n(external_avrgirl_arduino_);

// EXTERNAL MODULE: C:/GitHub/CNCjs4Marlin/node_modules/file-loader/dist/cjs.js!./lib/Firmware/Flashing/grblsept15.hex
var grblsept15 = __webpack_require__(95);
var grblsept15_default = /*#__PURE__*/__webpack_require__.n(grblsept15);

// CONCATENATED MODULE: ./lib/Firmware/Flashing/firmwareflashing.js




var firmwareflashing_log = Object(logger["a" /* default */])('FlashLib: ');

var firmwareflashing_FlashingFirmware = function FlashingFirmware(recievedPortNumber) {
  if (!recievedPortNumber) {
    firmwareflashing_log.error('No port specified');
    return;
  }

  var controller = store["a" /* default */].get('controllers["' + recievedPortNumber + '"]');

  try {
    var avrgirl = new external_avrgirl_arduino_default.a({
      board: 'uno',
      port: recievedPortNumber
    });
    avrgirl.flash(grblsept15_default.a, function (error) {
      if (error) {
        if (controller) {
          controller.command('flashing:failed', error);
        }

        firmwareflashing_log.debug("".concat(error, " Error flashing board"));
      } else {
        if (controller) {
          controller.command('flashing:success');
        }

        firmwareflashing_log.debug('Flash successful');
      }
    });
  } catch (error) {
    firmwareflashing_log.debug("".concat(error, " Error flashing board"));
  }
};

/* harmony default export */ var firmwareflashing = (firmwareflashing_FlashingFirmware);
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/DefaultGrblSettings.txt
/* harmony default export */ var DefaultGrblSettings = ("{\"$0\":\"10\",\"$1\":\"255\",\"$2\":\"0\",\"$3\":\"3\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"3\",\"$11\":\"0.020\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"750.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"40.000\",\"$101\":\"40.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"235.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill12X12.txt
/* harmony default export */ var Sienci_Long_Mill12X12 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"304.000\",\"$131\":\"304.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill12X30.txt
/* harmony default export */ var Sienci_Long_Mill12X30 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"304.000\",\"$131\":\"812.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill30X30.txt
/* harmony default export */ var Sienci_Long_Mill30X30 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"3\",\"$24\":\"25.000\",\"$25\":\"1500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"762.000\",\"$131\":\"812.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Mill One.txt
/* harmony default export */ var Sienci_Mill_One = ("{\"$0\":\"10\",\"$1\":\"25\",\"$2\":\"0\",\"$3\":\"6\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"235.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
// CONCATENATED MODULE: C:/GitHub/CNCjs4Marlin/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Mill OneV3.txt
/* harmony default export */ var Sienci_Mill_OneV3 = ("{\"$0\":\"10\",\"$1\":\"25\",\"$2\":\"0\",\"$3\":\"6\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"257.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
// CONCATENATED MODULE: ./lib/Firmware/Profiles/ApplyFirmwareProfile.js









var ApplyFirmwareProfile_ApplyFirmwareProfile = function ApplyFirmwareProfile(nameOfMachine, typeOfMachine, recievedPortNumber) {
  var gcode = function gcode(cmd, params) {
    var s = map_default()(params, function (value, letter) {
      return String(letter + value);
    }).join('=');
    return s.length > 0 ? cmd + '' + s : cmd;
  };

  var controller = store["a" /* default */].get('controllers["' + recievedPortNumber + '"]');
  var settings = DefaultGrblSettings;

  if (nameOfMachine === 'Mill One') {
    if (typeOfMachine === 'V3') {
      settings = Sienci_Mill_OneV3;
    } else {
      settings = Sienci_Mill_One;
    }
  }

  if (nameOfMachine === 'LongMill') {
    if (typeOfMachine === '12x12') {
      settings = Sienci_Long_Mill12X12;
    }

    if (typeOfMachine === '12x30') {
      settings = Sienci_Long_Mill12X30;
    }

    if (typeOfMachine === '30x30') {
      settings = Sienci_Long_Mill30X30;
    }
  }

  var obj = JSON.parse(settings);
  var values = Object.values(obj);

  if (values.length === 34) {
    for (var i = 0; i < values.length; i++) {
      if (values[i] === true) {
        values[i] = '1';
      }

      if (values[i] === false) {
        values[i] = '0';
      }
    }

    var keys = Object.keys(obj);
    var finalStrings = [];
    var valuesToSubmit = [];

    for (var _i = 0; _i < keys.length; _i++) {
      valuesToSubmit.push([keys[_i], values[_i]]);
    }

    var gCoded = gcode(valuesToSubmit);

    for (var j = 0; j < gCoded.length; j++) {
      finalStrings[j] = gCoded[j].join('=');
    }

    controller.command('gcode', finalStrings);
    controller.command('gcode', '$$');
  }
};

/* harmony default export */ var Profiles_ApplyFirmwareProfile = (ApplyFirmwareProfile_ApplyFirmwareProfile);
// CONCATENATED MODULE: ./lib/homing.js

var FRONT_RIGHT = 'FR';
var FRONT_LEFT = 'FL';
var BACK_RIGHT = 'BR';
var BACK_LEFT = 'BL';
var POSITIVE_DIRECTION = 1;
var NEGATIVE_DIRECTION = -1;
var getHomingLocation = function getHomingLocation(setting) {
  if (setting === '0') {
    return BACK_RIGHT;
  } else if (setting === '1') {
    return BACK_LEFT;
  } else if (setting === '2') {
    return FRONT_RIGHT;
  } else if (setting === '3') {
    return FRONT_LEFT;
  }

  return BACK_RIGHT;
};
var determineMaxMovement = function determineMaxMovement(position, movementDirection, limitLocation, limit) {
  var OFFSET = 0.1;
  limit -= OFFSET; // We reduce limit to account for bumping into edges

  if (position === 0) {
    return (limit * movementDirection).toFixed(2);
  }

  if (movementDirection === POSITIVE_DIRECTION) {
    if (limitLocation === POSITIVE_DIRECTION) {
      return (limit - position).toFixed(2);
    } else {
      return (position - OFFSET).toFixed(2);
    }
  } else if (movementDirection === NEGATIVE_DIRECTION) {
    if (limitLocation === POSITIVE_DIRECTION) {
      return (-1 * (position - OFFSET)).toFixed(2);
    } else {
      return (-1 * (limit - position)).toFixed(2);
    }
  }

  return 0;
};
var getAxisMaximumLocation = function getAxisMaximumLocation(homingMask) {
  var homingLocation = getHomingLocation(homingMask);

  if (homingLocation === BACK_RIGHT) {
    return [NEGATIVE_DIRECTION, NEGATIVE_DIRECTION];
  } else if (homingLocation === BACK_LEFT) {
    return [POSITIVE_DIRECTION, NEGATIVE_DIRECTION];
  } else if (homingLocation === FRONT_RIGHT) {
    return [NEGATIVE_DIRECTION, POSITIVE_DIRECTION];
  }

  return [POSITIVE_DIRECTION, POSITIVE_DIRECTION];
};
var homing_determineMachineZeroFlagSet = function determineMachineZeroFlagSet(res, settings) {
  var homingMask = get_default()(settings, 'settings.$23');
  var mpos = get_default()(res, 'mpos');
  var homingLocation = getHomingLocation(homingMask);
  var xPos = parseInt(mpos.x, 10);
  var yPos = parseInt(mpos.y, 10);
  var zPos = parseInt(mpos.z, 10);

  if (homingLocation !== BACK_RIGHT) {
    if (xPos === 0 && yPos === 0 && zPos === 0) {
      return true;
    }
  }

  return false;
};
// CONCATENATED MODULE: ./controllers/Grbl/GrblController.js









function GrblController_slicedToArray(arr, i) { return GrblController_arrayWithHoles(arr) || GrblController_iterableToArrayLimit(arr, i) || GrblController_unsupportedIterableToArray(arr, i) || GrblController_nonIterableRest(); }

function GrblController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GrblController_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function GrblController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function GrblController_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = GrblController_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function GrblController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GrblController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GrblController_arrayLikeToArray(o, minLen); }

function GrblController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function GrblController_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function GrblController_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GrblController_ownKeys(Object(source), true).forEach(function (key) { GrblController_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GrblController_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function GrblController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GrblController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GrblController_createClass(Constructor, protoProps, staticProps) { if (protoProps) GrblController_defineProperties(Constructor.prototype, protoProps); if (staticProps) GrblController_defineProperties(Constructor, staticProps); return Constructor; }

function GrblController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























 // % commands

var WAIT = '%wait';
var PREHOOK_COMPLETE = '%pre_complete';
var POSTHOOK_COMPLETE = '%post_complete';
var GrblController_log = Object(logger["a" /* default */])('controller:Grbl');
var GrblController_noop = noop_default.a;

var GrblController_GrblController = /*#__PURE__*/function () {
  // CNCEngine
  // Sockets
  // Connection
  // Grbl
  // Event Trigger
  // Feeder
  // Sender
  // Shared context
  // Workflow
  // Homing information
  function GrblController(engine, options) {
    var _this = this;

    GrblController_classCallCheck(this, GrblController);

    GrblController_defineProperty(this, "type", GRBL);

    GrblController_defineProperty(this, "engine", null);

    GrblController_defineProperty(this, "sockets", {});

    GrblController_defineProperty(this, "connection", null);

    GrblController_defineProperty(this, "connectionEventListener", {
      data: function data(_data) {
        GrblController_log.silly("< ".concat(_data));

        _this.runner.parse('' + _data);
      },
      close: function close(err) {
        _this.ready = false;

        if (err) {
          GrblController_log.warn("Disconnected from serial port \"".concat(_this.options.port, "\":"), err);
        }

        _this.close(function (err) {
          // Remove controller from store
          var port = _this.options.port;
          store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

          _this.destroy();
        });
      },
      error: function error(err) {
        _this.ready = false;

        if (err) {
          GrblController_log.error("Unexpected error while reading/writing serial port \"".concat(_this.options.port, "\":"), err);
        }
      }
    });

    GrblController_defineProperty(this, "controller", null);

    GrblController_defineProperty(this, "ready", false);

    GrblController_defineProperty(this, "initialized", false);

    GrblController_defineProperty(this, "state", {});

    GrblController_defineProperty(this, "settings", {});

    GrblController_defineProperty(this, "toolChangeContext", {});

    GrblController_defineProperty(this, "queryTimer", null);

    GrblController_defineProperty(this, "actionMask", {
      queryParserState: {
        state: false,
        // wait for a message containing the current G-code parser modal state
        reply: false // wait for an `ok` or `error` response

      },
      queryStatusReport: false,
      // Respond to user input
      replyParserState: false,
      // $G
      replyStatusReport: false // ?

    });

    GrblController_defineProperty(this, "actionTime", {
      queryParserState: 0,
      queryStatusReport: 0,
      senderFinishTime: 0
    });

    GrblController_defineProperty(this, "event", null);

    GrblController_defineProperty(this, "feeder", null);

    GrblController_defineProperty(this, "sender", null);

    GrblController_defineProperty(this, "sharedContext", {});

    GrblController_defineProperty(this, "workflow", null);

    GrblController_defineProperty(this, "homingStarted", false);

    GrblController_defineProperty(this, "homingFlagSet", false);

    if (!engine) {
      throw new Error('engine must be specified');
    }

    this.engine = engine;

    var _options = GrblController_objectSpread({}, options),
        _port = _options.port,
        baudrate = _options.baudrate,
        rtscts = _options.rtscts;

    this.options = GrblController_objectSpread(GrblController_objectSpread({}, this.options), {}, {
      port: _port,
      baudrate: baudrate,
      rtscts: rtscts
    }); // Connection

    this.connection = new lib_SerialConnection({
      path: _port,
      baudRate: baudrate,
      rtscts: rtscts,
      writeFilter: function writeFilter(data) {
        var line = data.trim();

        if (!line) {
          return data;
        }

        {
          // Grbl settings: $0-$255
          var r = line.match(/^(\$\d{1,3})=([\d\.]+)$/);

          if (r) {
            var name = r[1];
            var value = Number(r[2]);

            if (name === '$13' && value >= 0 && value <= 65535) {
              var nextSettings = GrblController_objectSpread(GrblController_objectSpread({}, _this.runner.settings), {}, {
                settings: GrblController_objectSpread(GrblController_objectSpread({}, _this.runner.settings.settings), {}, GrblController_defineProperty({}, name, value ? '1' : '0'))
              });

              _this.runner.settings = nextSettings; // enforce change
            }
          }
        }
        return data;
      }
    }); // Event Trigger

    this.event = new lib_EventTrigger(function (event, trigger, commands) {
      GrblController_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

      if (trigger === 'system') {
        taskrunner["a" /* default */].run(commands);
      } else {
        _this.command('gcode', commands);
      }
    }); // Feeder

    this.feeder = new lib_Feeder({
      dataFilter: function dataFilter(line, context) {
        // Remove comments that start with a semicolon `;`
        line = line.replace(/\s*;.*/g, '').trim();
        context = _this.populateContext(context);

        if (line[0] === '%') {
          // %wait
          if (line === WAIT) {
            GrblController_log.debug('Wait for the planner to empty');
            return 'G4 P0.5'; // dwell
          }

          if (line === PREHOOK_COMPLETE) {
            GrblController_log.debug('Finished Pre-hook');

            _this.feeder.hold({
              data: '%toolchange'
            });

            _this.emit('toolchange:preHookComplete');

            return '(Pre-Hook complete)';
          }

          if (line === POSTHOOK_COMPLETE) {
            GrblController_log.debug('Finished Post-hook, resuming program');

            _this.workflow.resume();

            return '(Post-Hook complete)';
          } // Expression
          // %_x=posx,_y=posy,_z=posz


          evaluate_assignment_expression(line.slice(1), context);
          return '';
        } // line="G0 X[posx - 8] Y[ymax]"
        // > "G0 X2 Y50"


        line = translate_expression(line, context);
        var data = external_gcode_parser_["parseLine"](line, {
          flatten: true
        });
        var words = external_ensure_array_default()(data.words);
        {
          // Program Mode: M0, M1
          var programMode = intersection_default()(words, ['M0', 'M1'])[0];

          if (programMode === 'M0') {
            GrblController_log.debug('M0 Program Pause');

            _this.feeder.hold({
              data: 'M0'
            }); // Hold reason

          } else if (programMode === 'M1') {
            GrblController_log.debug('M1 Program Pause');

            _this.feeder.hold({
              data: 'M1'
            }); // Hold reason

          }
        } // More aggressive updating of spindle modals for safety

        var spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

        if (spindleCommand) {
          _this.updateSpindleModal(spindleCommand);
        } // // M6 Tool Change
        // if (_.includes(words, 'M6')) {
        //     log.debug('M6 Tool Change');
        //     this.feeder.hold({ data: 'M6' }); // Hold reason
        //     // Surround M6 with parentheses to ignore
        //     // unsupported command error. If we nuke the whole
        //     // line, then we'll likely lose other commands that
        //     // share the line, like a T~.  This makes tool
        //     // changes complicated.
        //     line = line.replace('M6', '(M6)');
        // }


        return line;
      }
    });
    this.feeder.on('data', function () {
      var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_this.isClose()) {
        GrblController_log.error("Serial port \"".concat(_this.options.port, "\" is not accessible"));
        return;
      }

      if (_this.runner.isAlarm()) {
        _this.feeder.reset();

        _this.emit('workflow:state', _this.workflow.state); // Propogate alarm code to UI


        GrblController_log.warn('Stopped sending G-code commands in Alarm mode');
        return;
      }

      line = String(line).trim();

      if (line.length === 0) {
        return;
      }

      _this.emit('serialport:write', line + '\n', GrblController_objectSpread(GrblController_objectSpread({}, context), {}, {
        source: WRITE_SOURCE_FEEDER
      }));

      _this.connection.write(line + '\n');

      GrblController_log.silly("> ".concat(line));
    });
    this.feeder.on('hold', GrblController_noop);
    this.feeder.on('unhold', GrblController_noop); // Sender

    this.sender = new lib_Sender(SP_TYPE_CHAR_COUNTING, {
      // Deduct the buffer size to prevent from buffer overrun
      bufferSize: 128 - 8,
      // The default buffer size is 128 bytes
      dataFilter: function dataFilter(line, context) {
        // Remove comments that start with a semicolon `;`
        line = line.replace(/\s*;.*/g, '').trim();
        context = _this.populateContext(context);
        var _this$sender$state = _this.sender.state,
            sent = _this$sender$state.sent,
            received = _this$sender$state.received;

        if (line[0] === '%') {
          // %wait
          if (line === WAIT) {
            GrblController_log.debug("Wait for the planner to empty: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));

            _this.sender.hold({
              data: WAIT
            }); // Hold reason


            return 'G4 P0.5'; // dwell
          } // Expression
          // %_x=posx,_y=posy,_z=posz


          evaluate_assignment_expression(line.slice(1), context);
          return '';
        } // line="G0 X[posx - 8] Y[ymax]"
        // > "G0 X2 Y50"


        line = translate_expression(line, context);
        var data = external_gcode_parser_["parseLine"](line, {
          flatten: true
        });
        var words = external_ensure_array_default()(data.words);
        {
          // Program Mode: M0, M1
          var programMode = intersection_default()(words, ['M0', 'M1'])[0];

          if (programMode === 'M0') {
            GrblController_log.debug("M0 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received)); // Workaround for Carbide files - prevent M0 early from pausing program

            if (sent > 10) {
              _this.workflow.pause({
                data: 'M0'
              });

              _this.emit('workflow:pause', {
                data: 'M0'
              });
            }

            return line.replace('M0', '(M0)');
          } else if (programMode === 'M1') {
            GrblController_log.debug("M1 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));

            _this.workflow.pause({
              data: 'M1'
            });

            _this.emit('workflow:pause', {
              data: 'M1'
            });

            return line.replace('M1', '(M1)');
          }
        }
        var machineProfile = store["a" /* default */].get('machineProfile'); //const preferences = store.get('preferences');

        /*if (line) {
            const regex = /([^NGMXYZIJKFPRST%\-?\.?\d+\.?\s])/gi;
            if (regex.test(line)) {
                if (preferences === undefined) {
                    this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                    return line;
                }
                if (preferences && preferences.showLineWarnings) {
                    this.workflow.pause({ data: line });
                    this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                } if (!preferences && !preferences.showLineWarnings) {
                    this.emit('workflow:state', this.workflow.state, { validLine: false, line });
                }
            }
        }*/

        if (includes_default()(words, 'G28') && !machineProfile.endstops) {
          line = line.replace('G28', '(G28)');
        } // More aggressive updating of spindle modals for safety


        var spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

        if (spindleCommand) {
          _this.updateSpindleModal(spindleCommand);
        }
        /* Emit event to UI for toolchange handler */


        if (includes_default()(words, 'M6')) {
          GrblController_log.debug("M6 Tool Change: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
          var toolChangeOption = _this.toolChangeContext.toolChangeOption; // Handle specific cases for macro and pause, ignore is default and comments line out with no other action

          if (toolChangeOption === 'Pause') {
            _this.workflow.pause({
              data: 'M6'
            });

            _this.emit('gcode:toolChange', {
              line: sent + 1,
              block: line,
              option: toolChangeOption
            });
          } else if (toolChangeOption === 'Code') {
            _this.workflow.pause({
              data: 'M6'
            });

            _this.emit('toolchange:start');

            _this.runPreChangeHook(_this.populateContext());
          }

          line = line.replace('M6', '(M6)');
        }

        return line;
      }
    });
    this.sender.on('data', function () {
      var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_this.isClose()) {
        GrblController_log.error("Serial port \"".concat(_this.options.port, "\" is not accessible"));
        return;
      } // if (this.workflow.state === WORKFLOW_STATE_IDLE) {
      //     log.error(`Unexpected workflow state: ${this.workflow.state}`);
      //     return;
      // }


      line = String(line).trim();

      if (line.length === 0) {
        GrblController_log.warn("Expected non-empty line: N=".concat(_this.sender.state.sent));
        return;
      }

      _this.emit('serialport:read', line);

      _this.connection.write(line + '\n');

      GrblController_log.silly("> ".concat(line));
    });
    this.sender.on('hold', GrblController_noop);
    this.sender.on('unhold', GrblController_noop);
    this.sender.on('start', function (startTime) {
      _this.actionTime.senderFinishTime = 0;
    });
    this.sender.on('end', function (finishTime) {
      _this.actionTime.senderFinishTime = finishTime;
    }); // Workflow

    this.workflow = new lib_Workflow();
    this.workflow.on('start', function () {
      _this.emit('workflow:state', _this.workflow.state);

      _this.sender.rewind();
    });
    this.workflow.on('stop', function () {
      _this.emit('workflow:state', _this.workflow.state);

      _this.sender.rewind();
    });
    this.workflow.on('pause', function () {
      _this.emit('workflow:state', _this.workflow.state);

      if (arguments.length > 0) {
        var reason = GrblController_objectSpread({}, arguments.length <= 0 ? undefined : arguments[0]);

        _this.sender.hold(reason); // Hold reason

      } else {
        _this.sender.hold();
      }
    });
    this.workflow.on('resume', function () {
      _this.emit('workflow:state', _this.workflow.state); // Reset feeder prior to resume program execution


      _this.feeder.reset(); // Resume program execution


      _this.sender.unhold();

      _this.sender.next();
    }); // Grbl

    this.runner = new Grbl_GrblRunner();
    this.runner.on('raw', GrblController_noop);
    this.runner.on('status', function (res) {
      if (_this.homingStarted) {
        _this.homingFlagSet = homing_determineMachineZeroFlagSet(res, _this.settings);

        _this.emit('homing:flag', _this.homingFlagSet);

        _this.homingStarted = false;
      } // console.log(`runner on status ${res}`);


      _this.actionMask.queryStatusReport = false;

      if (_this.actionMask.replyStatusReport) {
        _this.actionMask.replyStatusReport = false;

        _this.emit('serialport:read', res.raw);
      } // Check if the receive buffer is available in the status report


      var rx = Number(get_default()(res, 'buf.rx', 0)) || 0;

      if (rx > 0) {
        // Do not modify the buffer size when running a G-code program
        if (_this.workflow.state !== WORKFLOW_STATE_IDLE) {
          return;
        } // Check if the streaming protocol is character-counting streaming protocol


        if (_this.sender.sp.type !== SP_TYPE_CHAR_COUNTING) {
          return;
        } // Check if the queue is empty


        if (_this.sender.sp.dataLength !== 0) {
          return;
        } // Deduct the receive buffer length to prevent from buffer overrun


        var bufferSize = rx - 8; // TODO

        if (bufferSize > _this.sender.sp.bufferSize) {
          _this.sender.sp.bufferSize = bufferSize;
        }
      }
    });
    this.runner.on('ok', function (res) {
      if (_this.actionMask.queryParserState.reply) {
        if (_this.actionMask.replyParserState) {
          _this.actionMask.replyParserState = false;

          _this.emit('serialport:read', res.raw);
        }

        _this.actionMask.queryParserState.reply = false;
        return;
      }

      var _this$sender$state2 = _this.sender.state,
          hold = _this$sender$state2.hold,
          sent = _this$sender$state2.sent,
          received = _this$sender$state2.received;

      if (_this.workflow.state === WORKFLOW_STATE_RUNNING) {
        _this.emit('serialport:read', res.raw);

        if (hold && received + 1 >= sent) {
          GrblController_log.debug("Continue sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));

          _this.sender.unhold();
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      }

      if (_this.workflow.state === WORKFLOW_STATE_PAUSED && received < sent) {
        _this.emit('serialport:read', res.raw);

        if (!hold) {
          GrblController_log.error('The sender does not hold off during the paused state');
        }

        if (received + 1 >= sent) {
          GrblController_log.debug("Stop sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      }

      _this.emit('serialport:read', res.raw); // Feeder


      _this.feeder.ack();

      _this.feeder.next();
    });
    this.runner.on('error', function (res) {
      var code = Number(res.message) || undefined;

      var error = find_default()(GRBL_ERRORS, {
        code: code
      });

      if (_this.workflow.state === WORKFLOW_STATE_RUNNING || _this.workflow.state === WORKFLOW_STATE_PAUSED) {
        var _this$sender$state3 = _this.sender.state,
            lines = _this$sender$state3.lines,
            received = _this$sender$state3.received;
        var line = lines[received] || '';
        var preferences = store["a" /* default */].get('preferences') || {
          showLineWarnings: false
        };

        _this.emit('serialport:read', "error:".concat(code, " (").concat(error.message, ")"));

        if (error) {
          if (preferences.showLineWarnings === false) {
            _this.emit('gcode_error', error, code, line);

            _this.workflow.pause({
              err: "error:".concat(code, " (").concat(error.message, ")")
            });
          }

          if (preferences.showLineWarnings) {
            _this.workflow.pause({
              err: "error:".concat(code, " (").concat(error.message, ")")
            });

            _this.emit('workflow:state', _this.workflow.state, {
              validLine: false,
              line: "".concat(lines.length, " ").concat(line)
            });

            return;
          }
        } else {
          _this.emit('serialport:read', res.raw);
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      }

      if (error) {
        // Grbl v1.1
        _this.emit('serialport:read', "error:".concat(code, " (").concat(error.message, ")"));
      } else {
        // Grbl v0.9
        _this.emit('serialport:read', res.raw);
      } // Feeder


      _this.feeder.ack();

      _this.feeder.next();
    });
    this.runner.on('alarm', function (res) {
      var code = Number(res.message) || undefined;

      var alarm = find_default()(GRBL_ALARMS, {
        code: code
      });

      if (alarm) {
        // Grbl v1.1
        _this.emit('serialport:read', "ALARM:".concat(code, " (").concat(alarm.message, ")")); // Force propogation of current state on alarm


        _this.state = _this.runner.state;

        _this.emit('controller:state', GRBL, _this.state);
      } else {
        // Grbl v0.9
        _this.emit('serialport:read', res.raw);
      }
    });
    this.runner.on('parserstate', function (res) {
      //finished searching gCode file for errors
      if (_this.sender.state.finishTime > 0 && _this.runner.state.status.activeState === 'Check') {
        _this.command('gcode', '$c');

        _this.workflow.stopTesting();

        _this.emit('gcode_error_checking_file', _this.sender.state, 'finished');

        return;
      }

      _this.actionMask.queryParserState.state = false;
      _this.actionMask.queryParserState.reply = true;

      if (_this.actionMask.replyParserState) {
        _this.emit('serialport:read', res.raw);
      }
    });
    this.runner.on('parameters', function (res) {
      _this.emit('serialport:read', res.raw);
    });
    this.runner.on('feedback', function (res) {
      _this.emit('serialport:read', res.raw);
    });
    this.runner.on('settings', function (res) {
      var setting = find_default()(GRBL_SETTINGS, {
        setting: res.name
      });

      if (!res.message && setting) {
        // Grbl v1.1
        _this.emit('serialport:read', "".concat(res.name, "=").concat(res.value, " (").concat(setting.message, ", ").concat(setting.units, ")"));
      } else {
        // Grbl v0.9
        _this.emit('serialport:read', res.raw);
      }
    });
    this.runner.on('startup', function (res) {
      _this.emit('serialport:read', res.raw); // The startup message always prints upon startup, after a reset, or at program end.
      // Setting the initial state when Grbl has completed re-initializing all systems.


      _this.clearActionValues(); // Set ready flag to true when a startup message has arrived


      _this.ready = true; // Clear sender - for physical buttons
      //this.sender.unload();

      if (!_this.initialized) {
        _this.initialized = true; // Initialize controller

        _this.initController();
      }
    });
    this.runner.on('others', function (res) {
      _this.emit('serialport:read', res.raw);
    });

    var queryStatusReport = function queryStatusReport() {
      // Check the ready flag
      if (!_this.ready) {
        return;
      }

      var now = new Date().getTime(); // The status report query (?) is a realtime command, it does not consume the receive buffer.

      var lastQueryTime = _this.actionTime.queryStatusReport;

      if (lastQueryTime > 0) {
        var timespan = Math.abs(now - lastQueryTime);
        var toleranceTime = 5000; // 5 seconds
        // Check if it has not been updated for a long time

        if (timespan >= toleranceTime) {
          GrblController_log.debug("Continue status report query: timespan=".concat(timespan, "ms"));
          _this.actionMask.queryStatusReport = false;
        }
      }

      if (_this.actionMask.queryStatusReport) {
        return;
      }

      if (_this.isOpen()) {
        _this.actionMask.queryStatusReport = true;
        _this.actionTime.queryStatusReport = now;

        _this.connection.write('?');
      }
    };

    var queryParserState = throttle_default()(function () {
      // Check the ready flag
      if (!_this.ready) {
        return;
      }

      var now = new Date().getTime(); // Do not force query parser state ($G) when running a G-code program,
      // it will consume 3 bytes from the receive buffer in each time period.

      if (_this.workflow.state === WORKFLOW_STATE_IDLE && _this.runner.isIdle()) {
        var lastQueryTime = _this.actionTime.queryParserState;

        if (lastQueryTime > 0) {
          var timespan = Math.abs(now - lastQueryTime);
          var toleranceTime = 10000; // 10 seconds
          // Check if it has not been updated for a long time

          if (timespan >= toleranceTime) {
            GrblController_log.debug("Continue parser state query: timespan=".concat(timespan, "ms"));
            _this.actionMask.queryParserState.state = false;
            _this.actionMask.queryParserState.reply = false;
          }
        }
      }

      if (_this.actionMask.queryParserState.state || _this.actionMask.queryParserState.reply) {
        return;
      }

      if (_this.isOpen()) {
        _this.actionMask.queryParserState.state = true;
        _this.actionMask.queryParserState.reply = false;
        _this.actionTime.queryParserState = now;

        _this.connection.write('$G\n');
      }
    }, 500);

    this.queryTimer = setInterval(function () {
      if (_this.isClose()) {
        // Serial port is closed
        return;
      } // Feeder


      if (_this.feeder.peek()) {
        _this.emit('feeder:status', _this.feeder.toJSON());
      } // Sender


      if (_this.sender.peek()) {
        _this.emit('sender:status', _this.sender.toJSON());
      }

      var zeroOffset = isEqual_default()(_this.runner.getWorkPosition(_this.state), _this.runner.getWorkPosition(_this.runner.state)); // Grbl settings


      if (_this.settings !== _this.runner.settings) {
        _this.settings = _this.runner.settings;

        _this.emit('controller:settings', GRBL, _this.settings);

        _this.emit('Grbl:settings', _this.settings); // Backward compatibility

      } // Grbl state


      if (_this.state !== _this.runner.state) {
        _this.state = _this.runner.state;

        _this.emit('controller:state', GRBL, _this.state);

        _this.emit('Grbl:state', _this.state); // Backward compatibility

      } // Check the ready flag


      if (!_this.ready) {
        return;
      } // ? - Status Report


      queryStatusReport(); // $G - Parser State

      queryParserState(); // Check if the machine has stopped movement after completion

      if (_this.actionTime.senderFinishTime > 0) {
        var machineIdle = zeroOffset && _this.runner.isIdle();

        var now = new Date().getTime();
        var timespan = Math.abs(now - _this.actionTime.senderFinishTime);
        var toleranceTime = 500; // in milliseconds

        if (!machineIdle) {
          // Extend the sender finish time
          _this.actionTime.senderFinishTime = now;
        } else if (timespan > toleranceTime) {
          GrblController_log.silly("Finished sending G-code: timespan=".concat(timespan));
          _this.actionTime.senderFinishTime = 0; // Stop workflow

          _this.command('gcode:stop');
        }
      }
    }, 250); // Load file if it exists in CNC engine (AKA it was loaded before connection
  }

  GrblController_createClass(GrblController, [{
    key: "initController",
    value: function () {
      var _initController = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // $13=0 (report in mm)
                // $13=1 (report in inches)
                this.writeln('$$');
                _context.next = 3;
                return lib_delay(50);

              case 3:
                this.event.trigger('controller:ready');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initController() {
        return _initController.apply(this, arguments);
      }

      return initController;
    }()
  }, {
    key: "populateContext",
    value: function populateContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Machine position
      var _this$runner$getMachi = this.runner.getMachinePosition(),
          mposx = _this$runner$getMachi.x,
          mposy = _this$runner$getMachi.y,
          mposz = _this$runner$getMachi.z,
          mposa = _this$runner$getMachi.a,
          mposb = _this$runner$getMachi.b,
          mposc = _this$runner$getMachi.c; // Work position


      var _this$runner$getWorkP = this.runner.getWorkPosition(),
          posx = _this$runner$getWorkP.x,
          posy = _this$runner$getWorkP.y,
          posz = _this$runner$getWorkP.z,
          posa = _this$runner$getWorkP.a,
          posb = _this$runner$getWorkP.b,
          posc = _this$runner$getWorkP.c; // Modal group


      var modal = this.runner.getModalGroup(); // Tool

      var tool = this.runner.getTool();
      return Object.assign(context || {}, GrblController_objectSpread({
        // User-defined global variables
        global: this.sharedContext,
        // Bounding box
        xmin: Number(context.xmin) || 0,
        xmax: Number(context.xmax) || 0,
        ymin: Number(context.ymin) || 0,
        ymax: Number(context.ymax) || 0,
        zmin: Number(context.zmin) || 0,
        zmax: Number(context.zmax) || 0,
        // Machine position
        mposx: Number(mposx) || 0,
        mposy: Number(mposy) || 0,
        mposz: Number(mposz) || 0,
        mposa: Number(mposa) || 0,
        mposb: Number(mposb) || 0,
        mposc: Number(mposc) || 0,
        // Work position
        posx: Number(posx) || 0,
        posy: Number(posy) || 0,
        posz: Number(posz) || 0,
        posa: Number(posa) || 0,
        posb: Number(posb) || 0,
        posc: Number(posc) || 0,
        // Modal group
        modal: {
          motion: modal.motion,
          wcs: modal.wcs,
          plane: modal.plane,
          units: modal.units,
          distance: modal.distance,
          feedrate: modal.feedrate,
          program: modal.program,
          spindle: modal.spindle,
          // M7 and M8 may be active at the same time, but a modal group violation might occur when issuing M7 and M8 together on the same line. Using the new line character (\n) to separate lines can avoid this issue.
          coolant: external_ensure_array_default()(modal.coolant).join('\n')
        },
        // Tool
        tool: Number(tool) || 0
      }, GLOBAL_OBJECTS));
    }
  }, {
    key: "clearActionValues",
    value: function clearActionValues() {
      this.actionMask.queryParserState.state = false;
      this.actionMask.queryParserState.reply = false;
      this.actionMask.queryStatusReport = false;
      this.actionMask.replyParserState = false;
      this.actionMask.replyStatusReport = false;
      this.actionTime.queryParserState = 0;
      this.actionTime.queryStatusReport = 0;
      this.actionTime.senderFinishTime = 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.queryTimer) {
        clearInterval(this.queryTimer);
        this.queryTimer = null;
      }

      if (this.runner) {
        this.runner.removeAllListeners();
        this.runner = null;
      }

      this.sockets = {};

      if (this.connection) {
        this.connection = null;
      }

      if (this.event) {
        this.event = null;
      }

      if (this.feeder) {
        this.feeder = null;
      }

      if (this.sender) {
        this.sender = null;
      }

      if (this.workflow) {
        this.workflow = null;
      }
    }
  }, {
    key: "status",
    get: function get() {
      return {
        port: this.options.port,
        baudrate: this.options.baudrate,
        rtscts: this.options.rtscts,
        sockets: Object.keys(this.sockets),
        ready: this.ready,
        controller: {
          type: this.type,
          settings: this.settings,
          state: this.state
        },
        feeder: this.feeder.toJSON(),
        sender: this.sender.toJSON(),
        workflow: {
          state: this.workflow.state
        }
      };
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GrblController_noop;
      var _this$options = this.options,
          port = _this$options.port,
          baudrate = _this$options.baudrate; // Assertion check

      if (this.isOpen()) {
        GrblController_log.error("Cannot open serial port \"".concat(port, "\""));
        return;
      }

      this.connection.on('data', this.connectionEventListener.data);
      this.connection.on('close', this.connectionEventListener.close);
      this.connection.on('error', this.connectionEventListener.error);
      this.connection.open(function (err) {
        if (err) {
          GrblController_log.error("Error opening serial port \"".concat(port, "\":"), err);

          _this2.emit('serialport:error', {
            err: err,
            port: port
          });

          callback(err); // notify error

          return;
        }

        _this2.emit('serialport:open', {
          port: port,
          baudrate: baudrate,
          controllerType: _this2.type,
          inuse: true
        }); // Emit a change event to all connected sockets


        if (_this2.engine.io) {
          _this2.engine.io.emit('serialport:change', {
            port: port,
            inuse: true
          });
        }

        callback(); // register controller

        GrblController_log.debug("Connected to serial port \"".concat(port, "\""));

        _this2.workflow.stop(); // Clear action values


        _this2.clearActionValues();
      });
    }
  }, {
    key: "close",
    value: function close(callback) {
      var port = this.options.port; // Assertion check

      if (!this.connection) {
        var err = "Serial port \"".concat(port, "\" is not available");
        callback(new Error(err));
        return;
      } // Stop status query


      this.ready = false; // Clear initialized flag

      this.initialized = false;
      this.emit('serialport:close', {
        port: port,
        inuse: false
      }); // Emit a change event to all connected sockets

      if (this.engine.io) {
        this.engine.io.emit('serialport:change', {
          port: port,
          inuse: false
        });
      }

      if (this.isClose()) {
        callback(null);
        return;
      }

      this.connection.removeAllListeners();
      this.connection.close(callback);
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.connection && this.connection.isOpen;
    }
  }, {
    key: "isClose",
    value: function isClose() {
      return !this.isOpen();
    }
  }, {
    key: "loadFile",
    value: function loadFile(gcode, _ref) {
      var name = _ref.name;
      GrblController_log.debug("Loading file '".concat(name, "' to controller"));
      this.command('gcode:load', name, gcode);
    }
  }, {
    key: "addConnection",
    value: function addConnection(socket) {
      if (!socket) {
        GrblController_log.error('The socket parameter is not specified');
        return;
      }

      GrblController_log.debug("Add socket connection: id=".concat(socket.id));
      this.sockets[socket.id] = socket; //
      // Send data to newly connected client
      //

      if (this.isOpen()) {
        socket.emit('serialport:open', {
          port: this.options.port,
          baudrate: this.options.baudrate,
          controllerType: this.type,
          inuse: true
        });
      }

      if (!isEmpty_default()(this.settings)) {
        // controller settings
        socket.emit('controller:settings', GRBL, this.settings);
        socket.emit('Grbl:settings', this.settings); // Backward compatibility
      }

      if (!isEmpty_default()(this.state)) {
        // controller state
        socket.emit('controller:state', GRBL, this.state);
        socket.emit('Grbl:state', this.state); // Backward compatibility
      }

      if (this.feeder) {
        // feeder status
        socket.emit('feeder:status', this.feeder.toJSON());
      }

      if (this.sender) {
        // sender status
        socket.emit('sender:status', this.sender.toJSON());
        GrblController_log.info('Emitting Sender');
      }

      if (this.workflow) {
        // workflow state
        socket.emit('workflow:state', this.workflow.state);
      }
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(socket) {
      if (!socket) {
        GrblController_log.error('The socket parameter is not specified');
        return;
      }

      GrblController_log.debug("Remove socket connection: id=".concat(socket.id));
      this.sockets[socket.id] = undefined;
      delete this.sockets[socket.id];
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this3 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      Object.keys(this.sockets).forEach(function (id) {
        var socket = _this3.sockets[id];
        socket.emit.apply(socket, [eventName].concat(args));
      });
    }
  }, {
    key: "command",
    value: function command(cmd) {
      var _this4 = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var handler = {
        'flash:start': function flashStart() {
          var port = args[0];

          if (!port) {
            _this4.emit('task:error', 'No port specified - make sure you connect to you device at least once before attempting flashing');

            return;
          }

          _this4.close(function () {
            firmwareflashing(port);
          });
        },
        'flashing:success': function flashingSuccess() {
          var data = args[0];

          _this4.emit('message', data);
        },
        'flashing:failed': function flashingFailed() {
          var error = args[0];

          _this4.emit('task:error', error);
        },
        'firmware:recievedProfiles': function firmwareRecievedProfiles() {
          var files = args[0];

          _this4.emit('task:finish', files);
        },
        'firmware:applyProfileSettings': function firmwareApplyProfileSettings() {
          var nameOfMachine = args[0],
              typeOfMachine = args[1],
              port = args[2];
          Profiles_ApplyFirmwareProfile(nameOfMachine, typeOfMachine, port);
        },
        'firmware:grabMachineProfile': function firmwareGrabMachineProfile() {
          // let [values] = args;
          var machineProfile = store["a" /* default */].get('machineProfile');

          _this4.emit('sender:status', machineProfile);
        },
        'gcode:load': function gcodeLoad() {
          var name = args[0],
              gcode = args[1],
              _args$ = args[2],
              context = _args$ === void 0 ? {} : _args$,
              _args$2 = args[3],
              callback = _args$2 === void 0 ? GrblController_noop : _args$2;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          } // G4 P0 or P with a very small value will empty the planner queue and then
          // respond with an ok when the dwell is complete. At that instant, there will
          // be no queued motions, as long as no more commands were sent after the G4.
          // This is the fastest way to do it without having to check the status reports.


          var dwell = '%wait ; Wait for the planner to empty';

          var ok = _this4.sender.load(name, gcode + '\n' + dwell, context);

          if (!ok) {
            callback(new Error("Invalid G-code: name=".concat(name)));
            return;
          } //this.emit('gcode:load', name, gcode, context);
          //this.event.trigger('gcode:load');


          GrblController_log.debug("Load G-code: name=\"".concat(_this4.sender.state.name, "\", size=").concat(_this4.sender.state.gcode.length, ", total=").concat(_this4.sender.state.total));

          _this4.workflow.stop();

          callback(null, _this4.sender.toJSON());
        },
        'gcode:unload': function gcodeUnload() {
          _this4.workflow.stop();

          _this4.engine.unload(); // Sender


          _this4.sender.unload();

          _this4.emit('file:unload');

          _this4.event.trigger('file:unload');
        },
        'start': function start() {
          GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:start');
        },
        'gcode:start': function gcodeStart() {
          var lineToStartFrom = args[0];
          var totalLines = _this4.sender.state.total;

          if (lineToStartFrom && lineToStartFrom <= totalLines) {
            var _this4$sender$state$l = _this4.sender.state.lines,
                lines = _this4$sender$state$l === void 0 ? [] : _this4$sender$state$l;
            var firstHalf = lines.slice(0, lineToStartFrom);
            var feedRate = 200;
            var spindleRate = 0;

            var getWordValue = function getWordValue(token, words) {
              var _iterator = GrblController_createForOfIteratorHelper(words),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var wordPair = _step.value;

                  var _wordPair = GrblController_slicedToArray(wordPair, 2),
                      word = _wordPair[0],
                      value = _wordPair[1];

                  if (word === token) {
                    return value;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return 0;
            };

            var toolpath = new external_gcode_toolpath_default.a();
            toolpath.loadFromStringSync(firstHalf.join('\n'), function (data) {
              var words = data.words,
                  line = data.line;

              if (line.includes('F')) {
                feedRate = getWordValue('F', words);
              }

              if (line.includes('S')) {
                spindleRate = getWordValue('S', words);
              }
            });
            var modal = toolpath.getModal();
            var position = toolpath.getPosition();
            var xVal = position.x,
                yVal = position.y,
                zVal = position.z;
            var modalGCode = []; // Move up and then to cut start position

            modalGCode.push('G0 G90 G21 Z10');
            modalGCode.push("G0 G90 G21 X".concat(xVal, " Y").concat(yVal));
            modalGCode.push("G0 G90 G21 Z".concat(zVal)); // Set modals based on what's parsed so far in the file

            modalGCode.push("".concat(modal.units, " ").concat(modal.distance, " ").concat(modal.arc, " ").concat(modal.feedrate, " ").concat(modal.wcs, " ").concat(modal.plane));
            modalGCode.push("F".concat(feedRate, " S").concat(spindleRate));

            _this4.command('gcode', modalGCode);
          } //Allow the prepend commands to register before resuming job


          setTimeout(function () {
            _this4.event.trigger('gcode:start');

            _this4.workflow.start(); // Feeder


            _this4.feeder.reset(); // Sender


            _this4.sender.next({
              lineToStartFrom: lineToStartFrom
            });
          }, 100);
        },
        'stop': function stop() {
          GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command.apply(_this4, ['gcode:stop'].concat(args));
        },
        // @param {object} options The options object.
        // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
        'gcode:stop': function () {
          var _gcodeStop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var options, _options2, _options2$force, force, activeState;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this4.event.trigger('gcode:stop');

                    _this4.workflow.stop();

                    options = args[0];
                    _options2 = GrblController_objectSpread({}, options), _options2$force = _options2.force, force = _options2$force === void 0 ? false : _options2$force;

                    if (!force) {
                      _context2.next = 11;
                      break;
                    }

                    activeState = get_default()(_this4.state, 'status.activeState', '');

                    if (activeState === GRBL_ACTIVE_STATE_RUN) {
                      _this4.write('!'); // hold

                    }

                    _context2.next = 9;
                    return lib_delay(500);

                  case 9:
                    // delay 500ms
                    activeState = get_default()(_this4.state, 'status.activeState', '');

                    if (activeState === GRBL_ACTIVE_STATE_HOLD) {
                      _this4.write('\x18'); // ^x

                    }

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function gcodeStop() {
            return _gcodeStop.apply(this, arguments);
          }

          return gcodeStop;
        }(),
        'pause': function pause() {
          GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:pause');
        },
        'gcode:pause': function gcodePause() {
          _this4.event.trigger('gcode:pause');

          _this4.workflow.pause();

          _this4.write('!');
        },
        'resume': function resume() {
          GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:resume');
        },
        'gcode:resume': function gcodeResume() {
          _this4.event.trigger('gcode:resume');

          _this4.write('~');

          _this4.workflow.resume();
        },
        'feeder:feed': function feederFeed() {
          var commands = args[0],
              _args$3 = args[1],
              context = _args$3 === void 0 ? {} : _args$3;

          _this4.command('gcode', commands, context);
        },
        'feeder:start': function feederStart() {
          if (_this4.workflow.state === WORKFLOW_STATE_RUNNING) {
            return;
          }

          _this4.write('~');

          _this4.feeder.unhold();

          _this4.feeder.next();
        },
        'feeder:stop': function feederStop() {
          _this4.feeder.reset();
        },
        'feedhold': function feedhold() {
          _this4.event.trigger('feedhold');

          _this4.write('!');
        },
        'cyclestart': function cyclestart() {
          _this4.event.trigger('cyclestart');

          _this4.write('~');
        },
        'statusreport': function statusreport() {
          _this4.write('?');
        },
        'homing': function homing() {
          _this4.event.trigger('homing');

          _this4.homingStarted = true; // Update homing cycle as having started

          _this4.writeln('$H');

          _this4.state.status.activeState = GRBL_ACTIVE_STATE_HOME;

          _this4.emit('controller:state', GRBL, _this4.state);
        },
        'sleep': function sleep() {
          _this4.event.trigger('sleep');

          _this4.writeln('$SLP');
        },
        'unlock': function unlock() {
          _this4.writeln('$X');
        },
        'reset': function reset() {
          _this4.workflow.stop();

          _this4.feeder.reset();

          _this4.write('\x18'); // ^x

        },
        'reset:limit': function resetLimit() {
          _this4.workflow.stop();

          _this4.feeder.reset();

          _this4.write('\x18'); // ^x


          _this4.writeln('$X');
        },
        // Feed Overrides
        // @param {number} value The amount of percentage increase or decrease.
        //   0: Set 100% of programmed rate.
        //  10: Increase 10%
        // -10: Decrease 10%
        //   1: Increase 1%
        //  -1: Decrease 1%
        'feedOverride': function feedOverride() {
          var value = args[0];

          if (value === 0) {
            _this4.write('\x90');
          } else if (value === 10) {
            _this4.write('\x91');
          } else if (value === -10) {
            _this4.write('\x92');
          } else if (value === 1) {
            _this4.write('\x93');
          } else if (value === -1) {
            _this4.write('\x94');
          }
        },
        // Spindle Speed Overrides
        // @param {number} value The amount of percentage increase or decrease.
        //   0: Set 100% of programmed spindle speed
        //  10: Increase 10%
        // -10: Decrease 10%
        //   1: Increase 1%
        //  -1: Decrease 1%
        'spindleOverride': function spindleOverride() {
          var value = args[0];

          if (value === 0) {
            _this4.write('\x99');
          } else if (value === 10) {
            _this4.write('\x9a');
          } else if (value === -10) {
            _this4.write('\x9b');
          } else if (value === 1) {
            _this4.write('\x9c');
          } else if (value === -1) {
            _this4.write('\x9d');
          }
        },
        // Rapid Overrides
        // @param {number} value A percentage value of 25, 50, or 100. A value of zero will reset to 100%.
        // 100: Set to 100% full rapid rate.
        //  50: Set to 50% of rapid rate.
        //  25: Set to 25% of rapid rate.
        'rapidOverride': function rapidOverride() {
          var value = args[0];

          if (value === 0 || value === 100) {
            _this4.write('\x95');
          } else if (value === 50) {
            _this4.write('\x96');
          } else if (value === 25) {
            _this4.write('\x97');
          }
        },
        'lasertest:on': function lasertestOn() {
          var _args$4 = args[0],
              power = _args$4 === void 0 ? 0 : _args$4,
              _args$5 = args[1],
              duration = _args$5 === void 0 ? 0 : _args$5,
              _args$6 = args[2],
              maxS = _args$6 === void 0 ? 1000 : _args$6;
          var commands = [// https://github.com/gnea/grbl/wiki/Grbl-v1.1-Laser-Mode
          // The laser will only turn on when Grbl is in a G1, G2, or G3 motion mode.
          'G1F1 M3 S' + ensure_positive_number(maxS * (power / 100))];

          if (duration > 0) {
            commands.push('G4P' + ensure_positive_number(duration));
            commands.push('M5 S0');
          }

          _this4.state.parserstate.modal.spindle = 'M3';

          _this4.emit('controller:state', GRBL, _this4.state);

          _this4.command('gcode', commands);
        },
        'lasertest:off': function lasertestOff() {
          var commands = ['M5S0'];

          _this4.command('gcode', commands);
        },
        'gcode': function gcode() {
          var commands = args[0],
              context = args[1];
          var data = external_ensure_array_default()(commands).join('\n').split(/\r?\n/).filter(function (line) {
            if (typeof line !== 'string') {
              return false;
            }

            return line.trim().length > 0;
          });

          _this4.feeder.feed(data, context);

          if (!_this4.feeder.isPending()) {
            _this4.feeder.next();
          }
        },
        'gcode:safe': function gcodeSafe() {
          var commands = args[0],
              prefUnits = args[1];
          var deviceUnits = _this4.state.parserstate.modal.units;
          var code = [];

          if (!deviceUnits) {
            GrblController_log.error('Unable to determine device unit modal');
            return;
          } // Force command in preferred units


          if (prefUnits !== deviceUnits) {
            code.push(prefUnits);
          }

          code = code.concat(commands); // return modal to previous state if they were different previously

          if (prefUnits !== deviceUnits) {
            code = code.concat(deviceUnits);
          }

          _this4.command('gcode', code);
        },
        'jog:start': function jogStart() {
          var axes = args[0],
              _args$7 = args[1],
              feedrate = _args$7 === void 0 ? 1000 : _args$7,
              _args$8 = args[2],
              units = _args$8 === void 0 ? METRIC_UNITS : _args$8; //const JOG_COMMAND_INTERVAL = 80;

          var unitModal = units === METRIC_UNITS ? 'G21' : 'G20';
          var _this4$settings$setti = _this4.settings.settings,
              $20 = _this4$settings$setti.$20,
              $130 = _this4$settings$setti.$130,
              $131 = _this4$settings$setti.$131,
              $132 = _this4$settings$setti.$132,
              $23 = _this4$settings$setti.$23;
          var jogFeedrate;

          if ($20 === '1') {
            $130 = Number($130);
            $131 = Number($131);
            $132 = Number($132); // Convert feedrate to metric if working in imperial - easier to convert feedrate and treat everything else as MM than opposite

            if (units !== METRIC_UNITS) {
              feedrate = (feedrate * 25.4).toFixed(2);
              unitModal = 'G21';
            }

            var OFFSET = 0.1;
            var FIXED = 2; //If we are moving on the positive direction, we don't need to subtract
            //the max travel by it as we are moving towards the zero position, but if
            //we are moving in the negative direction we need to subtract the max travel
            //by it to reach the maximum amount in that direction

            var calculateAxisValue = function calculateAxisValue(_ref2) {
              var direction = _ref2.direction,
                  position = _ref2.position,
                  maxTravel = _ref2.maxTravel;

              if (position === 0) {
                return ((maxTravel - OFFSET) * direction).toFixed(FIXED);
              }

              if (direction === 1) {
                return Number((position * direction - OFFSET).toFixed(FIXED));
              } else {
                return Number(-(maxTravel - position - OFFSET).toFixed(FIXED));
              }
            };

            var mpos = _this4.state.status.mpos;
            Object.keys(mpos).forEach(function (axis) {
              mpos[axis] = Number(mpos[axis]);
            });

            if (_this4.homingFlagSet) {
              var _getAxisMaximumLocati = getAxisMaximumLocation($23),
                  _getAxisMaximumLocati2 = GrblController_slicedToArray(_getAxisMaximumLocati, 2),
                  xMaxLoc = _getAxisMaximumLocati2[0],
                  yMaxLoc = _getAxisMaximumLocati2[1];

              if (axes.X) {
                axes.X = determineMaxMovement(Math.abs(mpos.x), axes.X, xMaxLoc, $130);
              }

              if (axes.Y) {
                axes.Y = determineMaxMovement(Math.abs(mpos.y), axes.Y, yMaxLoc, $131);
              }
            } else {
              if (axes.X) {
                axes.X = calculateAxisValue({
                  direction: axes.X,
                  position: Math.abs(mpos.x),
                  maxTravel: $130
                });
              }

              if (axes.Y) {
                axes.Y = calculateAxisValue({
                  direction: axes.Y,
                  position: Math.abs(mpos.y),
                  maxTravel: $131
                });
              }
            }

            if (axes.Z) {
              axes.Z = calculateAxisValue({
                direction: axes.Z,
                position: Math.abs(mpos.z),
                maxTravel: $132
              });
            }
          } else {
            jogFeedrate = 1000;
            Object.keys(axes).forEach(function (axis) {
              axes[axis] *= jogFeedrate;
            });
          }

          axes.F = feedrate;

          if (axes.Z) {
            axes.F *= 0.8;
            axes.F = axes.F.toFixed(3);
          }

          var jogCommand = "$J=".concat(unitModal, "G91 ") + map_default()(axes, function (value, letter) {
            return '' + letter.toUpperCase() + value;
          }).join(' ');

          _this4.command('gcode', jogCommand);
        },
        'jog:stop': function jogStop() {
          _this4.feeder.reset();

          _this4.command('jog:cancel');

          _this4.feeder.reset();
        },
        'jog:cancel': function jogCancel() {
          _this4.command('gcode', '\x85');
        },
        'macro:run': function macroRun() {
          var id = args[0],
              _args$9 = args[1],
              context = _args$9 === void 0 ? {} : _args$9,
              _args$10 = args[2],
              callback = _args$10 === void 0 ? GrblController_noop : _args$10;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          }

          var macros = configstore["a" /* default */].get('macros');

          var macro = find_default()(macros, {
            id: id
          });

          if (!macro) {
            GrblController_log.error("Cannot find the macro: id=".concat(id));
            return;
          }

          _this4.event.trigger('macro:run');

          _this4.command('gcode', macro.content, context);

          callback(null);
        },
        'macro:load': function macroLoad() {
          var id = args[0],
              _args$11 = args[1],
              context = _args$11 === void 0 ? {} : _args$11,
              _args$12 = args[2],
              callback = _args$12 === void 0 ? GrblController_noop : _args$12;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          }

          var macros = configstore["a" /* default */].get('macros');

          var macro = find_default()(macros, {
            id: id
          });

          if (!macro) {
            GrblController_log.error("Cannot find the macro: id=".concat(id));
            return;
          }

          _this4.event.trigger('macro:load');

          _this4.command('gcode:load', macro.name, macro.content, context, callback);
        },
        'watchdir:load': function watchdirLoad() {
          var file = args[0],
              _args$13 = args[1],
              callback = _args$13 === void 0 ? GrblController_noop : _args$13;
          var context = {}; // empty context

          monitor["a" /* default */].readFile(file, function (err, data) {
            if (err) {
              callback(err);
              return;
            }

            _this4.command('gcode:load', file, data, context, callback);
          });
        },
        'machineprofile:load': function machineprofileLoad() {
          var machineProfile = args[0];
          store["a" /* default */].set('machineProfile', machineProfile);
        },
        'settings:updated': function settingsUpdated() {
          var _args$14 = args[0],
              newSettings = _args$14 === void 0 ? {} : _args$14;
          var currentSettings = store["a" /* default */].get('preferences') || {};

          var updated = GrblController_objectSpread(GrblController_objectSpread({}, currentSettings), newSettings);

          store["a" /* default */].set('preferences', updated);
        },
        'toolchange:context': function toolchangeContext() {
          var context = args[0];
          _this4.toolChangeContext = context;
        },
        'toolchange:pre': function toolchangePre() {
          GrblController_log.debug('Starting pre hook');

          _this4.runPreChangeHook();
        },
        'toolchange:post': function toolchangePost() {
          GrblController_log.debug('starting post hook');

          _this4.command('feeder:start');

          _this4.runPostChangeHook();
        },
        'gcode:outline': function gcodeOutline() {
          var _args$15 = args[0],
              gcode = _args$15 === void 0 ? '' : _args$15,
              _args$16 = args[1],
              concavity = _args$16 === void 0 ? Infinity : _args$16;
          var toRun = getOutlineGcode(gcode, concavity);
          GrblController_log.debug('Running outline');

          _this4.emit('outline:start');

          _this4.command('gcode', toRun);
        }
      }[cmd];

      if (!handler) {
        GrblController_log.error("Unknown command: ".concat(cmd));
        return;
      }

      handler();
    }
  }, {
    key: "write",
    value: function write(data, context) {
      // Assertion check
      if (this.isClose()) {
        GrblController_log.error("Serial port \"".concat(this.options.port, "\" is not accessible"));
        return;
      }

      var cmd = data.trim();
      this.actionMask.replyStatusReport = cmd === '?' || this.actionMask.replyStatusReport;
      this.actionMask.replyParserState = cmd === '$G' || this.actionMask.replyParserState;
      this.emit('serialport:write', data, GrblController_objectSpread(GrblController_objectSpread({}, context), {}, {
        source: WRITE_SOURCE_CLIENT
      }));
      this.connection.write(data);
      GrblController_log.silly("> ".concat(data));
    }
  }, {
    key: "writeln",
    value: function writeln(data, context) {
      if (includes_default()(GRBL_REALTIME_COMMANDS, data)) {
        this.write(data, context);
      } else {
        this.write(data + '\n', context);
      }
    }
  }, {
    key: "convertGcodeToArray",
    value: function convertGcodeToArray(gcode) {
      //Clean up lines and remove ones that are comments and headers
      var lines = gcode.split('\n').filter(function (line) {
        return line.trim().length > 0;
      });
      return lines;
    }
  }, {
    key: "updateSpindleModal",
    value: function updateSpindleModal(modal) {
      this.state.parserstate.modal.spindle = modal;
      this.emit('controller:state', GRBL, this.state);
    }
    /* Runs specified code segment on M6 command before alerting the UI as to what's happened */

  }, {
    key: "runPreChangeHook",
    value: function runPreChangeHook() {
      var _ref3 = this.toolChangeContext || '',
          preHook = _ref3.preHook;

      var block = this.convertGcodeToArray(preHook);
      block.push(PREHOOK_COMPLETE);
      this.command('gcode', block);
    }
  }, {
    key: "runPostChangeHook",
    value: function runPostChangeHook() {
      var _ref4 = this.toolChangeContext || '',
          postHook = _ref4.postHook;

      var block = this.convertGcodeToArray(postHook);
      block.push(POSTHOOK_COMPLETE);
      this.command('gcode', block);
    }
  }]);

  return GrblController;
}();

/* harmony default export */ var Grbl_GrblController = (GrblController_GrblController);
// EXTERNAL MODULE: external "lodash/uniq"
var uniq_ = __webpack_require__(96);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq_);

// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultEcho.js
function MarlinLineParserResultEcho_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultEcho_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultEcho_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultEcho_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultEcho_defineProperties(Constructor, staticProps); return Constructor; }

var MarlinLineParserResultEcho = /*#__PURE__*/function () {
  function MarlinLineParserResultEcho() {
    MarlinLineParserResultEcho_classCallCheck(this, MarlinLineParserResultEcho);
  }

  MarlinLineParserResultEcho_createClass(MarlinLineParserResultEcho, null, [{
    key: "parse",
    value: // echo:
    function parse(line) {
      var r = line.match(/^echo:\s*(.+)$/i);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: MarlinLineParserResultEcho,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultEcho;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultEcho = (MarlinLineParserResultEcho);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultError.js
function MarlinLineParserResultError_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultError_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultError_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultError_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultError_defineProperties(Constructor, staticProps); return Constructor; }

var MarlinLineParserResultError = /*#__PURE__*/function () {
  function MarlinLineParserResultError() {
    MarlinLineParserResultError_classCallCheck(this, MarlinLineParserResultError);
  }

  MarlinLineParserResultError_createClass(MarlinLineParserResultError, null, [{
    key: "parse",
    value: // Error:Printer halted. kill() called!
    function parse(line) {
      var r = line.match(/^Error:\s*(.+)$/i);

      if (!r) {
        return null;
      }

      var payload = {
        message: r[1]
      };
      return {
        type: MarlinLineParserResultError,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultError;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultError = (MarlinLineParserResultError);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultFirmware.js
function MarlinLineParserResultFirmware_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultFirmware_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultFirmware_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultFirmware_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultFirmware_defineProperties(Constructor, staticProps); return Constructor; }

var MarlinLineParserResultFirmware = /*#__PURE__*/function () {
  function MarlinLineParserResultFirmware() {
    MarlinLineParserResultFirmware_classCallCheck(this, MarlinLineParserResultFirmware);
  }

  MarlinLineParserResultFirmware_createClass(MarlinLineParserResultFirmware, null, [{
    key: "parse",
    value: // FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff
    function parse(line) {
      var r = line.match(/^FIRMWARE_NAME:.*/i);

      if (!r) {
        return null;
      }

      var payload = {};
      {
        // FIRMWARE_NAME
        var _r = line.match(/FIRMWARE_NAME:([a-zA-Z\_\-]+(\s+[\d\.]+)?)/);

        if (_r) {
          payload.firmwareName = _r[1];
        }
      }
      {
        // PROTOCOL_VERSION
        var _r2 = line.match(/PROTOCOL_VERSION:([\d\.]+)/);

        if (_r2) {
          payload.protocolVersion = _r2[1];
        }
      }
      {
        // MACHINE_TYPE
        var _r3 = line.match(/MACHINE_TYPE:(\w+)/);

        if (_r3) {
          payload.machineType = _r3[1];
        }
      }
      {
        // EXTRUDER_COUNT
        var _r4 = line.match(/EXTRUDER_COUNT:(\d+)/);

        if (_r4) {
          payload.extruderCount = Number(_r4[1]);
        }
      }
      {
        // UUID
        var _r5 = line.match(/UUID:([a-zA-Z0-9\-]+)/);

        if (_r5) {
          payload.uuid = _r5[1];
        }
      }
      return {
        type: MarlinLineParserResultFirmware,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultFirmware;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultFirmware = (MarlinLineParserResultFirmware);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultOk.js
function MarlinLineParserResultOk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultOk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultOk_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultOk_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultOk_defineProperties(Constructor, staticProps); return Constructor; }

var MarlinLineParserResultOk = /*#__PURE__*/function () {
  function MarlinLineParserResultOk() {
    MarlinLineParserResultOk_classCallCheck(this, MarlinLineParserResultOk);
  }

  MarlinLineParserResultOk_createClass(MarlinLineParserResultOk, null, [{
    key: "parse",
    value: // ok
    function parse(line) {
      var r = line.match(/^ok$/);

      if (!r) {
        return null;
      }

      var payload = {};
      return {
        type: MarlinLineParserResultOk,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultOk;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultOk = (MarlinLineParserResultOk);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultPosition.js
function MarlinLineParserResultPosition_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MarlinLineParserResultPosition_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function MarlinLineParserResultPosition_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MarlinLineParserResultPosition_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MarlinLineParserResultPosition_arrayLikeToArray(o, minLen); }

function MarlinLineParserResultPosition_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MarlinLineParserResultPosition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultPosition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultPosition_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultPosition_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultPosition_defineProperties(Constructor, staticProps); return Constructor; }



var MarlinLineParserResultPosition_MarlinLineParserResultPosition = /*#__PURE__*/function () {
  function MarlinLineParserResultPosition() {
    MarlinLineParserResultPosition_classCallCheck(this, MarlinLineParserResultPosition);
  }

  MarlinLineParserResultPosition_createClass(MarlinLineParserResultPosition, null, [{
    key: "parse",
    value: // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
    function parse(line) {
      var r = line.match(/^(?:(?:X|Y|Z|E):[0-9\.\-]+\s+)+/i);

      if (!r) {
        return null;
      }

      var payload = {
        pos: {}
      };
      var pattern = /((X|Y|Z|E):[0-9\.\-]+)+/gi;
      var params = r[0].match(pattern);

      var _iterator = MarlinLineParserResultPosition_createForOfIteratorHelper(params),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var param = _step.value;
          var nv = param.match(/^(.+):(.+)/);

          if (nv) {
            var axis = nv[1].toLowerCase();
            var pos = nv[2];
            var digits = decimal_places(pos);
            payload.pos[axis] = Number(pos).toFixed(digits);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        type: MarlinLineParserResultPosition,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultPosition;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultPosition = (MarlinLineParserResultPosition_MarlinLineParserResultPosition);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultStart.js
function MarlinLineParserResultStart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParserResultStart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParserResultStart_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParserResultStart_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParserResultStart_defineProperties(Constructor, staticProps); return Constructor; }

var MarlinLineParserResultStart = /*#__PURE__*/function () {
  function MarlinLineParserResultStart() {
    MarlinLineParserResultStart_classCallCheck(this, MarlinLineParserResultStart);
  }

  MarlinLineParserResultStart_createClass(MarlinLineParserResultStart, null, [{
    key: "parse",
    value: // start
    function parse(line) {
      var r = line.match(/^(?:echo:)?start$/i);

      if (!r) {
        return null;
      }

      var payload = {};
      return {
        type: MarlinLineParserResultStart,
        payload: payload
      };
    }
  }]);

  return MarlinLineParserResultStart;
}();

/* harmony default export */ var Marlin_MarlinLineParserResultStart = (MarlinLineParserResultStart);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParser.js


function MarlinLineParser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinLineParser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinLineParser_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinLineParser_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinLineParser_defineProperties(Constructor, staticProps); return Constructor; }








var MarlinLineParser_MarlinLineParser = /*#__PURE__*/function () {
  function MarlinLineParser() {
    MarlinLineParser_classCallCheck(this, MarlinLineParser);
  }

  MarlinLineParser_createClass(MarlinLineParser, [{
    key: "parse",
    value: function parse(line) {
      var parsers = [// start
      Marlin_MarlinLineParserResultStart, // FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff
      Marlin_MarlinLineParserResultFirmware, // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
      Marlin_MarlinLineParserResultPosition, // ok
      Marlin_MarlinLineParserResultOk, // echo:
      Marlin_MarlinLineParserResultEcho, // Error:Printer halted. kill() called!
      Marlin_MarlinLineParserResultError];

      for (var _i = 0, _parsers = parsers; _i < _parsers.length; _i++) {
        var parser = _parsers[_i];
        var result = parser.parse(line);

        if (result) {
          set_default()(result, 'payload.raw', line);

          return result;
        }
      }

      return {
        type: null,
        payload: {
          raw: line
        }
      };
    }
  }]);

  return MarlinLineParser;
}();

/* harmony default export */ var Marlin_MarlinLineParser = (MarlinLineParser_MarlinLineParser);
// CONCATENATED MODULE: ./controllers/Marlin/MarlinRunner.js
function MarlinRunner_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MarlinRunner_typeof = function _typeof(obj) { return typeof obj; }; } else { MarlinRunner_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MarlinRunner_typeof(obj); }




function MarlinRunner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function MarlinRunner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarlinRunner_ownKeys(Object(source), true).forEach(function (key) { MarlinRunner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarlinRunner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarlinRunner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinRunner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinRunner_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinRunner_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinRunner_defineProperties(Constructor, staticProps); return Constructor; }

function MarlinRunner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MarlinRunner_setPrototypeOf(subClass, superClass); }

function MarlinRunner_setPrototypeOf(o, p) { MarlinRunner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MarlinRunner_setPrototypeOf(o, p); }

function MarlinRunner_createSuper(Derived) { var hasNativeReflectConstruct = MarlinRunner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MarlinRunner_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MarlinRunner_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MarlinRunner_possibleConstructorReturn(this, result); }; }

function MarlinRunner_possibleConstructorReturn(self, call) { if (call && (MarlinRunner_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return MarlinRunner_assertThisInitialized(self); }

function MarlinRunner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MarlinRunner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function MarlinRunner_getPrototypeOf(o) { MarlinRunner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MarlinRunner_getPrototypeOf(o); }

function MarlinRunner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var MarlinRunner_MarlinRunner = /*#__PURE__*/function (_events$EventEmitter) {
  MarlinRunner_inherits(MarlinRunner, _events$EventEmitter);

  var _super = MarlinRunner_createSuper(MarlinRunner);

  function MarlinRunner() {
    var _this;

    MarlinRunner_classCallCheck(this, MarlinRunner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    MarlinRunner_defineProperty(MarlinRunner_assertThisInitialized(_this), "state", {
      pos: {
        x: '0.000',
        y: '0.000',
        z: '0.000',
        e: '0.000'
      },
      modal: {
        motion: 'G0',
        // G0, G1, G2, G3, G38.2, G38.3, G38.4, G38.5, G80
        wcs: 'G54',
        // G54, G55, G56, G57, G58, G59
        plane: 'G17',
        // G17: xy-plane, G18: xz-plane, G19: yz-plane
        units: 'G20',
        // G20: Inches, G21: Millimeters
        distance: 'G90',
        // G90: Absolute, G91: Relative
        feedrate: 'G94',
        // G93: Inverse time mode, G94: Units per minute
        program: 'M0',
        // M0, M1, M2, M30
        spindle: 'M5',
        // M3: Spindle (cw), M4: Spindle (ccw), M5: Spindle off
        coolant: 'M9' // M7: Mist coolant, M8: Flood coolant, M9: Coolant off, [M7,M8]: Both on

      },
      ovF: 100,
      ovS: 100,
      rapidFeedrate: 0,
      // Related to G0
      feedrate: 0,
      // Related to G1, G2, G3, G38.2, G38.3, G38.4, G38.5, G80
      spindle: 0 // Related to M3, M4, M5

    });

    MarlinRunner_defineProperty(MarlinRunner_assertThisInitialized(_this), "settings", {});

    MarlinRunner_defineProperty(MarlinRunner_assertThisInitialized(_this), "parser", new Marlin_MarlinLineParser());

    return _this;
  }

  MarlinRunner_createClass(MarlinRunner, [{
    key: "parse",
    value: function parse(data) {
      data = ('' + data).replace(/\s+$/, '');

      if (!data) {
        return;
      }

      this.emit('raw', {
        raw: data
      });
      var result = this.parser.parse(data) || {};
      var type = result.type,
          payload = result.payload; // const { raw } = payload;

      if (type === Marlin_MarlinLineParserResultStart) {
        this.emit('start', payload);
        return;
      }

      if (type === Marlin_MarlinLineParserResultFirmware) {
        var firmwareName = payload.firmwareName,
            protocolVersion = payload.protocolVersion,
            machineType = payload.machineType,
            extruderCount = payload.extruderCount,
            uuid = payload.uuid;

        var nextSettings = MarlinRunner_objectSpread(MarlinRunner_objectSpread({}, this.settings), {}, {
          firmwareName: firmwareName,
          protocolVersion: protocolVersion,
          machineType: machineType,
          extruderCount: extruderCount,
          uuid: uuid
        });

        if (!isEqual_default()(this.settings, nextSettings)) {
          this.settings = nextSettings; // enforce change
        }

        this.emit('firmware', payload);
        return;
      }

      if (type === Marlin_MarlinLineParserResultPosition) {
        var nextState = MarlinRunner_objectSpread(MarlinRunner_objectSpread({}, this.state), {}, {
          pos: MarlinRunner_objectSpread(MarlinRunner_objectSpread({}, this.state.pos), payload.pos)
        });

        if (!isEqual_default()(this.state.pos, nextState.pos)) {
          this.state = nextState; // enforce change
        }

        this.emit('pos', payload);
        return;
      }

      if (type === Marlin_MarlinLineParserResultOk) {
        this.emit('ok', payload);
        return;
      }

      if (type === Marlin_MarlinLineParserResultError) {
        this.emit('error', payload);
        return;
      }

      if (type === Marlin_MarlinLineParserResultEcho) {
        this.emit('echo', payload);
        return;
      }

      if (data.length > 0) {
        this.emit('others', payload);
        return;
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return get_default()(state, 'pos', {});
    }
  }, {
    key: "getModalGroup",
    value: function getModalGroup() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return get_default()(state, 'modal', {});
    }
  }, {
    key: "getTool",
    value: function getTool() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      // Not supported
      return 0;
    }
  }, {
    key: "isAlarm",
    value: function isAlarm() {
      // Not supported
      return false;
    }
  }, {
    key: "isIdle",
    value: function isIdle() {
      // Not supported
      return false;
    }
  }]);

  return MarlinRunner;
}(external_events_default.a.EventEmitter);

/* harmony default export */ var Marlin_MarlinRunner = (MarlinRunner_MarlinRunner);
// CONCATENATED MODULE: ./controllers/Marlin/interpret.js



var fromPairs = function fromPairs(pairs) {
  var index = -1;
  var length = !pairs ? 0 : pairs.length;
  var result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }

  return result;
};

var partitionWordsByGroup = function partitionWordsByGroup() {
  var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var groups = [];

  for (var i = 0; i < words.length; ++i) {
    var word = words[i];
    var letter = word[0];

    if (letter === 'G' || letter === 'M') {
      groups.push([word]);
      continue;
    }

    if (groups.length > 0) {
      groups[groups.length - 1].push(word);
    } else {
      groups.push([word]);
    }
  }

  return groups;
};

var interpret = function () {
  var cmd = '';
  return function (line, callback) {
    var data = Object(external_gcode_parser_["parseLine"])(line);
    var groups = partitionWordsByGroup(external_ensure_array_default()(data.words));

    for (var i = 0; i < groups.length; ++i) {
      var words = groups[i];
      var word = words[0] || [];
      var letter = word[0];
      var arg = word[1];

      if (letter === 'G' || letter === 'M') {
        cmd = letter + arg;
        var params = fromPairs(words.slice(1));
        callback(cmd, params);
      } else {
        // Use previous command if the line does not start with Gxx or Mxx
        // G0 XZ0.25
        //   X-0.5 Y0
        //   Z0.1
        var _params = fromPairs(words);

        callback(cmd, _params);
      }
    }
  };
}();

/* harmony default export */ var Marlin_interpret = (interpret);
// CONCATENATED MODULE: ./controllers/Marlin/constants.js
// Marlin
var constants_MARLIN = 'Marlin';
var QUERY_TYPE_POSITION = 'position';
var QUERY_TYPE_TEMPERATURE = 'temperature';
// CONCATENATED MODULE: ./controllers/Marlin/MarlinController.js









function MarlinController_slicedToArray(arr, i) { return MarlinController_arrayWithHoles(arr) || MarlinController_iterableToArrayLimit(arr, i) || MarlinController_unsupportedIterableToArray(arr, i) || MarlinController_nonIterableRest(); }

function MarlinController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MarlinController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MarlinController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MarlinController_arrayLikeToArray(o, minLen); }

function MarlinController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MarlinController_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MarlinController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MarlinController_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function MarlinController_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarlinController_ownKeys(Object(source), true).forEach(function (key) { MarlinController_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarlinController_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MarlinController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MarlinController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MarlinController_createClass(Constructor, protoProps, staticProps) { if (protoProps) MarlinController_defineProperties(Constructor.prototype, protoProps); if (staticProps) MarlinController_defineProperties(Constructor, staticProps); return Constructor; }

function MarlinController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Toolpath from 'gcode-toolpath';






 // import delay from '../../lib/delay';















 // % commands

var MarlinController_WAIT = '%wait';
var MarlinController_log = Object(logger["a" /* default */])('controller:Marlin');
var MarlinController_noop = noop_default.a;

var MarlinController_MarlinController = /*#__PURE__*/function () {
  // CNCEngine
  // Sockets
  // Connection
  // Marlin
  // Event Trigger
  // Feeder
  // Sender
  // Shared context
  // Workflow
  // Query
  // Get the current position of the steppers.
  function MarlinController(engine, options) {
    var _this = this;

    MarlinController_classCallCheck(this, MarlinController);

    MarlinController_defineProperty(this, "type", constants_MARLIN);

    MarlinController_defineProperty(this, "engine", null);

    MarlinController_defineProperty(this, "sockets", {});

    MarlinController_defineProperty(this, "connection", null);

    MarlinController_defineProperty(this, "connectionEventListener", {
      data: function data(_data) {
        MarlinController_log.silly("< ".concat(_data));

        _this.runner.parse('' + _data);
      },
      close: function close(err) {
        _this.ready = false;

        if (err) {
          MarlinController_log.warn("Disconnected from serial port \"".concat(_this.options.port, "\":"), err);
        }

        _this.close(function (err) {
          // Remove controller from store
          var port = _this.options.port;
          store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

          _this.destroy();
        });
      },
      error: function error(err) {
        _this.ready = false;

        if (err) {
          MarlinController_log.error("Unexpected error while reading/writing serial port \"".concat(_this.options.port, "\":"), err);
        }
      }
    });

    MarlinController_defineProperty(this, "controller", null);

    MarlinController_defineProperty(this, "ready", false);

    MarlinController_defineProperty(this, "initialized", false);

    MarlinController_defineProperty(this, "state", {});

    MarlinController_defineProperty(this, "settings", {});

    MarlinController_defineProperty(this, "feedOverride", 100);

    MarlinController_defineProperty(this, "spindleOverride", 100);

    MarlinController_defineProperty(this, "history", {
      // The write source is one of the following:
      // * WRITE_SOURCE_CLIENT
      // * WRITE_SOURCE_SERVER
      // * WRITE_SOURCE_FEEDER
      // * WRITE_SOURCE_SENDER
      writeSource: null,
      writeLine: ''
    });

    MarlinController_defineProperty(this, "event", null);

    MarlinController_defineProperty(this, "feeder", null);

    MarlinController_defineProperty(this, "sender", null);

    MarlinController_defineProperty(this, "senderFinishTime", 0);

    MarlinController_defineProperty(this, "sharedContext", {});

    MarlinController_defineProperty(this, "workflow", null);

    MarlinController_defineProperty(this, "queryTimer", null);

    MarlinController_defineProperty(this, "query", {
      // state
      type: null,
      lastQueryTime: 0,
      // action
      issue: function issue() {
        if (!_this.query.type) {
          return;
        }

        var now = new Date().getTime();

        if (_this.query.type === QUERY_TYPE_POSITION) {
          _this.connection.write('M114\n', {
            source: WRITE_SOURCE_SERVER
          });

          _this.query.lastQueryTime = now;
        } else {
          MarlinController_log.error('Unsupported query type:', _this.query.type);
        }

        _this.query.type = null;
      }
    });

    MarlinController_defineProperty(this, "queryPosition", function () {
      var lastQueryTime = 0;
      return throttle_default()(function () {
        // Check the ready flag
        if (!_this.ready) {
          return;
        }

        var now = new Date().getTime();

        if (!_this.query.type) {
          _this.query.type = QUERY_TYPE_POSITION;
          lastQueryTime = now;
        } else if (lastQueryTime > 0) {
          var timespan = Math.abs(now - lastQueryTime);
          var toleranceTime = 5000; // 5 seconds

          if (timespan >= toleranceTime) {
            MarlinController_log.silly("Reschedule current position query: now=".concat(now, "ms, timespan=").concat(timespan, "ms"));
            _this.query.type = QUERY_TYPE_POSITION;
            lastQueryTime = now;
          }
        }
      }, 500);
    }());

    if (!engine) {
      throw new Error('engine must be specified');
    }

    this.engine = engine;

    var _options = MarlinController_objectSpread({}, options),
        _port = _options.port,
        baudrate = _options.baudrate,
        rtscts = _options.rtscts;

    this.options = MarlinController_objectSpread(MarlinController_objectSpread({}, this.options), {}, {
      port: _port,
      baudrate: baudrate,
      rtscts: rtscts
    }); // Connection

    this.connection = new lib_SerialConnection({
      path: _port,
      baudRate: baudrate,
      rtscts: rtscts,
      writeFilter: function writeFilter(data, context) {
        var _context = MarlinController_objectSpread({}, context),
            _context$source = _context.source,
            source = _context$source === void 0 ? null : _context$source;

        var line = data.trim(); // Update write history

        _this.history.writeSource = source;
        _this.history.writeLine = line;

        if (!line) {
          return data;
        }

        var nextState = MarlinController_objectSpread(MarlinController_objectSpread({}, _this.runner.state), {}, {
          modal: MarlinController_objectSpread({}, _this.runner.state.modal)
        });

        Marlin_interpret(line, function (cmd, params) {
          // motion
          if (includes_default()(['G0', 'G1', 'G2', 'G3', 'G38.2', 'G38.3', 'G38.4', 'G38.5', 'G80'], cmd)) {
            nextState.modal.motion = cmd;

            if (params.F !== undefined) {
              if (cmd === 'G0') {
                nextState.rapidFeedrate = params.F;
              } else {
                nextState.feedrate = params.F;
              }
            }
          } // wcs


          if (includes_default()(['G54', 'G55', 'G56', 'G57', 'G58', 'G59'], cmd)) {
            nextState.modal.wcs = cmd;
          } // plane


          if (includes_default()(['G17', 'G18', 'G19'], cmd)) {
            // G17: xy-plane, G18: xz-plane, G19: yz-plane
            nextState.modal.plane = cmd;
          } // units


          if (includes_default()(['G20', 'G21'], cmd)) {
            // G20: Inches, G21: Millimeters
            nextState.modal.units = cmd;
          } // distance


          if (includes_default()(['G90', 'G91'], cmd)) {
            // G90: Absolute, G91: Relative
            nextState.modal.distance = cmd;
          } // feedrate


          if (includes_default()(['G93', 'G94'], cmd)) {
            // G93: Inverse time mode, G94: Units per minute
            nextState.modal.feedrate = cmd;
          } // program


          if (includes_default()(['M0', 'M1', 'M2', 'M30'], cmd)) {
            nextState.modal.program = cmd;
          } // spindle or head


          if (includes_default()(['M3', 'M4', 'M5'], cmd)) {
            // M3: Spindle (cw), M4: Spindle (ccw), M5: Spindle off
            nextState.modal.spindle = cmd;

            if (cmd === 'M3' || cmd === 'M4') {
              if (params.S !== undefined) {
                nextState.spindle = params.S;
              }
            }
          } // coolant


          if (includes_default()(['M7', 'M8', 'M9'], cmd)) {
            var coolant = nextState.modal.coolant; // M7: Mist coolant, M8: Flood coolant, M9: Coolant off, [M7,M8]: Both on

            if (cmd === 'M9' || coolant === 'M9') {
              nextState.modal.coolant = cmd;
            } else {
              nextState.modal.coolant = uniq_default()(external_ensure_array_default()(coolant).concat(cmd)).sort();

              if (nextState.modal.coolant.length === 1) {
                nextState.modal.coolant = nextState.modal.coolant[0];
              }
            }
          }
        });

        if (!isEqual_default()(_this.runner.state, nextState)) {
          _this.runner.state = nextState; // enforce change
        }

        return data;
      }
    }); // Event Trigger

    this.event = new lib_EventTrigger(function (event, trigger, commands) {
      MarlinController_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

      if (trigger === 'system') {
        taskrunner["a" /* default */].run(commands);
      } else {
        _this.command('gcode', commands);
      }
    }); // Feeder

    this.feeder = new lib_Feeder({
      dataFilter: function dataFilter(line, context) {
        // Remove comments that start with a semicolon `;`
        line = line.replace(/\s*;.*/g, '').trim();
        context = _this.populateContext(context);

        if (line[0] === '%') {
          // %wait
          if (line === MarlinController_WAIT) {
            MarlinController_log.debug('Wait for the planner to empty'); // G4 [P<time in ms>] [S<time in sec>]
            // If both S and P are included, S takes precedence.

            return 'G4 P500'; // dwell
          } // Expression
          // %_x=posx,_y=posy,_z=posz


          evaluate_assignment_expression(line.slice(1), context);
          return '';
        } // line="G0 X[posx - 8] Y[ymax]"
        // > "G0 X2 Y50"


        line = translate_expression(line, context);
        var data = external_gcode_parser_["parseLine"](line, {
          flatten: true
        });
        var words = external_ensure_array_default()(data.words);
        {
          // Program Mode: M0, M1
          var programMode = intersection_default()(words, ['M0', 'M1'])[0];

          if (programMode === 'M0') {
            MarlinController_log.debug('M0 Program Pause');

            _this.workflow.pause({
              data: 'M0'
            });

            _this.emit('workflow:pause', {
              data: 'M0'
            });

            return line.replace('M0', '(M0)');
          } else if (programMode === 'M1') {
            MarlinController_log.debug('M1 Program Pause');

            _this.workflow.pause({
              data: 'M1'
            });

            _this.emit('workflow:pause', {
              data: 'M1'
            });

            return line.replace('M1', '(M1)');
          }
        } // M6 Tool Change

        if (includes_default()(words, 'M6')) {
          MarlinController_log.debug('M6 Tool Change');

          _this.feeder.hold({
            data: 'M6'
          }); // Hold reason

        } // More aggressive updating of spindle modals for safety


        var spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

        if (spindleCommand) {
          _this.updateSpindleModal(spindleCommand);
        }

        return line;
      }
    });
    this.feeder.on('data', function () {
      var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_this.isClose()) {
        MarlinController_log.error("Serial port \"".concat(_this.options.port, "\" is not accessible"));
        return;
      }

      if (_this.runner.isAlarm()) {
        _this.feeder.reset();

        _this.emit('workflow:state', _this.workflow.state); // Propogate alarm code to UI


        MarlinController_log.warn('Stopped sending G-code commands in Alarm mode');
        return;
      }

      line = String(line).trim();

      if (line.length === 0) {
        return;
      }

      _this.emit('serialport:write', line + '\n', MarlinController_objectSpread(MarlinController_objectSpread({}, context), {}, {
        source: WRITE_SOURCE_FEEDER
      }));

      _this.connection.write(line + '\n', {
        source: WRITE_SOURCE_FEEDER
      });

      MarlinController_log.silly("> ".concat(line));
    });
    this.feeder.on('hold', MarlinController_noop);
    this.feeder.on('unhold', MarlinController_noop); // Sender

    this.sender = new lib_Sender(SP_TYPE_CHAR_COUNTING, {
      //            // Deduct the buffer size to prevent from buffer overrun
      //            bufferSize: (128 - 8), // The default buffer size is 128 bytes
      dataFilter: function dataFilter(line, context) {
        // Remove comments that start with a semicolon `;`
        line = line.replace(/\s*;.*/g, '').trim();
        context = _this.populateContext(context);
        var _this$sender$state = _this.sender.state,
            sent = _this$sender$state.sent,
            received = _this$sender$state.received;

        if (line[0] === '%') {
          // %wait
          if (line === MarlinController_WAIT) {
            MarlinController_log.debug("Wait for the planner to empty: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));

            _this.sender.hold({
              data: MarlinController_WAIT
            }); // Hold reason
            // G4 [P<time in ms>] [S<time in sec>]
            // If both S and P are included, S takes precedence.


            return 'G4 P500'; // dwell
          } // Expression
          // %_x=posx,_y=posy,_z=posz


          evaluate_assignment_expression(line.slice(1), context);
          return '';
        } // line="G0 X[posx - 8] Y[ymax]"
        // > "G0 X2 Y50"


        line = translate_expression(line, context);
        var data = external_gcode_parser_["parseLine"](line, {
          flatten: true
        });
        var words = external_ensure_array_default()(data.words);
        {
          // Program Mode: M0, M1
          var programMode = intersection_default()(words, ['M0', 'M1'])[0];

          if (programMode === 'M0') {
            MarlinController_log.debug("M0 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received)); // Workaround for Carbide files - prevent M0 early from pausing program

            if (sent > 10) {
              _this.workflow.pause({
                data: 'M0'
              });

              _this.emit('workflow:pause', {
                data: 'M0'
              });
            }

            return line.replace('M0', '(M0)');
          } else if (programMode === 'M1') {
            MarlinController_log.debug("M1 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));

            _this.workflow.pause({
              data: 'M1'
            });

            _this.emit('workflow:pause', {
              data: 'M1'
            });

            return line.replace('M1', '(M1)');
          }
        } // M6 Tool Change

        if (includes_default()(words, 'M6')) {
          MarlinController_log.debug("M6 Tool Change: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));

          _this.workflow.pause({
            data: 'M6'
          });
        }

        return line;
      }
    });
    this.sender.on('data', function () {
      var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_this.isClose()) {
        MarlinController_log.error("Serial port \"".concat(_this.options.port, "\" is not accessible"));
        return;
      }

      if (_this.workflow.state === WORKFLOW_STATE_IDLE) {
        MarlinController_log.error("Unexpected workflow state: ".concat(_this.workflow.state));
        return;
      }

      line = String(line).trim();

      if (line.length === 0) {
        MarlinController_log.warn("Expected non-empty line: N=".concat(_this.sender.state.sent));
        return;
      }

      _this.emit('serialport:read', line);

      _this.connection.write(line + '\n', {
        source: WRITE_SOURCE_SENDER
      });

      MarlinController_log.silly("> ".concat(line));
    });
    this.sender.on('hold', MarlinController_noop);
    this.sender.on('unhold', MarlinController_noop);
    this.sender.on('start', function (startTime) {
      _this.senderFinishTime = 0;
    });
    this.sender.on('end', function (finishTime) {
      _this.senderFinishTime = finishTime;
    }); // Workflow

    this.workflow = new lib_Workflow();
    this.workflow.on('start', function () {
      _this.emit('workflow:state', _this.workflow.state);

      _this.sender.rewind();
    });
    this.workflow.on('stop', function () {
      _this.emit('workflow:state', _this.workflow.state);

      _this.sender.rewind();
    });
    this.workflow.on('pause', function () {
      _this.emit('workflow:state', _this.workflow.state);

      if (arguments.length > 0) {
        var reason = MarlinController_objectSpread({}, arguments.length <= 0 ? undefined : arguments[0]);

        _this.sender.hold(reason); // Hold reason

      } else {
        _this.sender.hold();
      }
    });
    this.workflow.on('resume', function () {
      _this.emit('workflow:state', _this.workflow.state); // Reset feeder prior to resume program execution


      _this.feeder.reset(); // Resume program execution


      _this.sender.unhold();

      _this.sender.next();
    }); // Marlin

    this.runner = new Marlin_MarlinRunner();
    this.runner.on('raw', MarlinController_noop);
    this.runner.on('start', function (res) {
      _this.emit('serialport:read', res.raw); // Marlin sends 'start' as the first message after
      // power-on, but not when the serial port is closed and
      // then re-opened.  Marlin has no software-initiated
      // restart, so 'start' is not dependable as a readiness
      // indicator.  Instead, we send M115 on connection open
      // to request a firmware report, whose response signals
      // Marlin readiness.  On initial power-up, Marlin might
      // miss that first M115 as it boots, so we send this
      // possibly-redundant M115 when we see 'start'.


      _this.connection.write('M115\n', {
        source: WRITE_SOURCE_SERVER
      });
    });
    this.runner.on('echo', function (res) {
      _this.emit('serialport:read', res.raw);
    });
    this.runner.on('firmware', function (res) {
      _this.emit('serialport:read', res.raw);

      if (!_this.ready) {
        _this.ready = true; // Initialize controller

        _this.event.trigger('controller:ready');
      }
    });
    this.runner.on('pos', function (res) {
      MarlinController_log.silly("controller.on('pos'): source=".concat(_this.history.writeSource, ", line=").concat(JSON.stringify(_this.history.writeLine), ", res=").concat(JSON.stringify(res)));

      if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], _this.history.writeSource)) {
        _this.emit('serialport:read', res.raw);
      }
    });
    this.runner.on('temperature', function (res) {
      MarlinController_log.silly("controller.on('temperature'): source=".concat(_this.history.writeSource, ", line=").concat(JSON.stringify(_this.history.writeLine), ", res=").concat(JSON.stringify(res)));

      if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], _this.history.writeSource)) {
        _this.emit('serialport:read', res.raw);
      }
    });
    this.runner.on('ok', function (res) {
      MarlinController_log.silly("controller.on('ok'): source=".concat(_this.history.writeSource, ", line=").concat(JSON.stringify(_this.history.writeLine), ", res=").concat(JSON.stringify(res)));

      if (res) {
        if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], _this.history.writeSource)) {
          _this.emit('serialport:read', res.raw);
        } else if (!_this.history.writeSource) {
          _this.emit('serialport:read', res.raw);

          MarlinController_log.error('"history.writeSource" should not be empty');
        }
      }

      _this.history.writeSource = null;
      _this.history.writeLine = ''; // Perform preemptive query to prevent starvation

      var now = new Date().getTime();
      var timespan = Math.abs(now - _this.query.lastQueryTime);

      if (_this.query.type && timespan > 2000) {
        _this.query.issue();

        return;
      }

      var _this$sender$state2 = _this.sender.state,
          hold = _this$sender$state2.hold,
          sent = _this$sender$state2.sent,
          received = _this$sender$state2.received;

      if (_this.workflow.state === WORKFLOW_STATE_RUNNING) {
        _this.emit('serialport:read', res.raw);

        if (hold && received + 1 >= sent) {
          MarlinController_log.debug("Continue sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));

          _this.sender.unhold();
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      }

      if (_this.workflow.state === WORKFLOW_STATE_PAUSED && received < sent) {
        _this.emit('serialport:read', res.raw);

        if (!hold) {
          MarlinController_log.error('The sender does not hold off during the paused state');
        }

        if (received + 1 >= sent) {
          MarlinController_log.debug("Stop sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      } // Feeder


      if (_this.feeder.next()) {
        return;
      }

      _this.query.issue();
    });
    this.runner.on('error', function (res) {
      // Sender
      if (_this.workflow.state === WORKFLOW_STATE_RUNNING) {
        var ignoreErrors = configstore["a" /* default */].get('state.controller.exception.ignoreErrors');
        var pauseError = !ignoreErrors;
        var _this$sender$state3 = _this.sender.state,
            lines = _this$sender$state3.lines,
            received = _this$sender$state3.received;
        var line = lines[received] || '';

        _this.emit('serialport:read', "> ".concat(line.trim(), " (line=").concat(received + 1, ")"));

        _this.emit('serialport:read', res.raw);

        if (pauseError) {
          _this.workflow.pause({
            err: res.raw
          });
        }

        _this.sender.ack();

        _this.sender.next();

        return;
      }

      _this.emit('serialport:read', res.raw); // Feeder


      _this.feeder.next();
    });
    this.runner.on('others', function (res) {
      _this.emit('serialport:read', res.raw);
    });
    this.queryTimer = setInterval(function () {
      if (_this.isClose()) {
        // Serial port is closed
        return;
      } // Feeder


      if (_this.feeder.peek()) {
        _this.emit('feeder:status', _this.feeder.toJSON());
      } // Sender


      if (_this.sender.peek()) {
        _this.emit('sender:status', _this.sender.toJSON());
      }

      var zeroOffset = isEqual_default()(_this.runner.getPosition(_this.state), _this.runner.getPosition(_this.runner.state)); // Marlin settings


      if (_this.settings !== _this.runner.settings) {
        _this.settings = _this.runner.settings;

        _this.emit('controller:settings', constants_MARLIN, _this.settings);

        _this.emit('Marlin:settings', _this.settings); // Backward compatibility

      } // Marlin state


      if (_this.state !== _this.runner.state) {
        _this.state = _this.runner.state;

        _this.emit('controller:state', constants_MARLIN, _this.state);

        _this.emit('Marlin:state', _this.state); // Backward compatibility

      } // Check the ready flag


      if (!_this.ready) {
        return;
      } // M114: Get Current Position


      _this.queryPosition();

      {
        // The following criteria must be met to issue a query
        var notBusy = !_this.history.writeSource;
        var senderIdle = _this.sender.state.sent === _this.sender.state.received;
        var feederEmpty = _this.feeder.size() === 0;

        if (notBusy && senderIdle && feederEmpty) {
          _this.query.issue();
        }
      } // Check if the machine has stopped movement after completion

      if (_this.senderFinishTime > 0) {
        var machineIdle = zeroOffset;
        var now = new Date().getTime();
        var timespan = Math.abs(now - _this.senderFinishTime);
        var toleranceTime = 500; // in milliseconds

        if (!machineIdle) {
          // Extend the sender finish time
          _this.senderFinishTime = now;
        } else if (timespan > toleranceTime) {
          MarlinController_log.silly("Finished sending G-code: timespan=".concat(timespan));
          _this.senderFinishTime = 0; // Stop workflow

          _this.command('gcode:stop');
        }
      }
    }, 250); // Load file if it exists in CNC engine (AKA it was loaded before connection
  }

  MarlinController_createClass(MarlinController, [{
    key: "populateContext",
    value: function populateContext(context) {
      // Work position
      var _this$runner$getPosit = this.runner.getPosition(),
          posx = _this$runner$getPosit.x,
          posy = _this$runner$getPosit.y,
          posz = _this$runner$getPosit.z,
          pose = _this$runner$getPosit.e; // Modal group


      var modal = this.runner.getModalGroup(); // Tool

      var tool = this.runner.getTool();
      return Object.assign(context || {}, MarlinController_objectSpread({
        // User-defined global variables
        global: this.sharedContext,
        // Bounding box
        xmin: Number(context.xmin) || 0,
        xmax: Number(context.xmax) || 0,
        ymin: Number(context.ymin) || 0,
        ymax: Number(context.ymax) || 0,
        zmin: Number(context.zmin) || 0,
        zmax: Number(context.zmax) || 0,
        // Work position
        posx: Number(posx) || 0,
        posy: Number(posy) || 0,
        posz: Number(posz) || 0,
        pose: Number(pose) || 0,
        // Modal group
        modal: {
          motion: modal.motion,
          wcs: modal.wcs,
          plane: modal.plane,
          units: modal.units,
          distance: modal.distance,
          feedrate: modal.feedrate,
          program: modal.program,
          spindle: modal.spindle,
          // M7 and M8 may be active at the same time, but a modal group violation might occur when issuing M7 and M8 together on the same line. Using the new line character (\n) to separate lines can avoid this issue.
          coolant: external_ensure_array_default()(modal.coolant).join('\n')
        },
        // Tool
        tool: Number(tool) || 0
      }, GLOBAL_OBJECTS));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.queryTimer) {
        clearInterval(this.queryTimer);
        this.queryTimer = null;
      }

      if (this.runner) {
        this.runner.removeAllListeners();
        this.runner = null;
      }

      this.sockets = {};

      if (this.connection) {
        this.connection = null;
      }

      if (this.event) {
        this.event = null;
      }

      if (this.feeder) {
        this.feeder = null;
      }

      if (this.sender) {
        this.sender = null;
      }

      if (this.workflow) {
        this.workflow = null;
      }
    }
  }, {
    key: "status",
    get: function get() {
      return {
        port: this.options.port,
        baudrate: this.options.baudrate,
        rtscts: this.options.rtscts,
        sockets: Object.keys(this.sockets),
        ready: this.ready,
        controller: {
          type: this.type,
          settings: this.settings,
          state: this.state
        },
        feeder: this.feeder.toJSON(),
        sender: this.sender.toJSON(),
        workflow: {
          state: this.workflow.state
        }
      };
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MarlinController_noop;
      var _this$options = this.options,
          port = _this$options.port,
          baudrate = _this$options.baudrate; // Assertion check

      if (this.isOpen()) {
        MarlinController_log.error("Cannot open serial port \"".concat(port, "\""));
        return;
      }

      this.connection.on('data', this.connectionEventListener.data);
      this.connection.on('close', this.connectionEventListener.close);
      this.connection.on('error', this.connectionEventListener.error);
      this.connection.open(function (err) {
        if (err) {
          MarlinController_log.error("Error opening serial port \"".concat(port, "\":"), err);

          _this2.emit('serialport:error', {
            err: err,
            port: port
          });

          callback(err); // notify error

          return;
        }

        _this2.emit('serialport:open', {
          port: port,
          baudrate: baudrate,
          controllerType: _this2.type,
          inuse: true
        }); // Emit a change event to all connected sockets


        if (_this2.engine.io) {
          _this2.engine.io.emit('serialport:change', {
            port: port,
            inuse: true
          });
        }

        callback(); // register controller

        MarlinController_log.debug("Connected to serial port \"".concat(port, "\"")); // M115: Get firmware version and capabilities
        // The response to this will take us to the ready state

        _this2.connection.write('M115\n', {
          source: WRITE_SOURCE_SERVER
        });

        _this2.workflow.stop();

        if (_this2.sender.state.gcode) {
          // Unload G-code
          _this2.command('unload');
        }
      });
    }
  }, {
    key: "close",
    value: function close(callback) {
      var port = this.options.port; // Assertion check

      if (!this.connection) {
        var err = "Serial port \"".concat(port, "\" is not available");
        callback(new Error(err));
        return;
      } // Stop status query


      this.ready = false; // Clear initialized flag

      this.initialized = false;
      this.emit('serialport:close', {
        port: port,
        inuse: false
      }); // Emit a change event to all connected sockets

      if (this.engine.io) {
        this.engine.io.emit('serialport:change', {
          port: port,
          inuse: false
        });
      }

      if (this.isClose()) {
        callback(null);
        return;
      }

      this.connection.removeAllListeners();
      this.connection.close(callback);
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.connection && this.connection.isOpen;
    }
  }, {
    key: "isClose",
    value: function isClose() {
      return !this.isOpen();
    }
  }, {
    key: "loadFile",
    value: function loadFile(gcode, _ref) {
      var name = _ref.name;
      MarlinController_log.debug("Loading file '".concat(name, "' to controller"));
      this.command('gcode:load', name, gcode);
    }
  }, {
    key: "addConnection",
    value: function addConnection(socket) {
      if (!socket) {
        MarlinController_log.error('The socket parameter is not specified');
        return;
      }

      MarlinController_log.debug("Add socket connection: id=".concat(socket.id));
      this.sockets[socket.id] = socket; //
      // Send data to newly connected client
      //

      if (this.isOpen()) {
        socket.emit('serialport:open', {
          port: this.options.port,
          baudrate: this.options.baudrate,
          controllerType: this.type,
          inuse: true
        });
      }

      if (!isEmpty_default()(this.settings)) {
        // controller settings
        socket.emit('controller:settings', constants_MARLIN, this.settings);
        socket.emit('Marlin:settings', this.settings); // Backward compatibility
      }

      if (!isEmpty_default()(this.state)) {
        // controller state
        socket.emit('controller:state', constants_MARLIN, this.state);
        socket.emit('Marlin:state', this.state); // Backward compatibility
      }

      if (this.feeder) {
        // feeder status
        socket.emit('feeder:status', this.feeder.toJSON());
      }

      if (this.sender) {
        // sender status
        socket.emit('sender:status', this.sender.toJSON());
        var _this$sender$state4 = this.sender.state,
            name = _this$sender$state4.name,
            gcode = _this$sender$state4.gcode,
            context = _this$sender$state4.context;

        if (gcode) {
          socket.emit('gcode:load', name, gcode, context);
        }

        MarlinController_log.info('Emitting Sender');
      }

      if (this.workflow) {
        // workflow state
        socket.emit('workflow:state', this.workflow.state);
      }
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(socket) {
      if (!socket) {
        MarlinController_log.error('The socket parameter is not specified');
        return;
      }

      MarlinController_log.debug("Remove socket connection: id=".concat(socket.id));
      this.sockets[socket.id] = undefined;
      delete this.sockets[socket.id];
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this3 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      Object.keys(this.sockets).forEach(function (id) {
        var socket = _this3.sockets[id];
        socket.emit.apply(socket, [eventName].concat(args));
      });
    }
  }, {
    key: "command",
    value: function command(cmd) {
      var _this4 = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var handler = {
        'flash:start': function flashStart() {// unsupported
        },
        'flashing:success': function flashingSuccess() {// unsupported
        },
        'flashing:failed': function flashingFailed() {// unsupported
        },
        'firmware:recievedProfiles': function firmwareRecievedProfiles() {// unsupported
        },
        'firmware:applyProfileSettings': function firmwareApplyProfileSettings() {// unsupported
        },
        'firmware:grabMachineProfile': function firmwareGrabMachineProfile() {// unsupported
        },
        'gcode:load': function gcodeLoad() {
          var name = args[0],
              gcode = args[1],
              _args$ = args[2],
              context = _args$ === void 0 ? {} : _args$,
              _args$2 = args[3],
              callback = _args$2 === void 0 ? MarlinController_noop : _args$2;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          } // G4 P0 or P with a very small value will empty the planner queue and then
          // respond with an ok when the dwell is complete. At that instant, there will
          // be no queued motions, as long as no more commands were sent after the G4.
          // This is the fastest way to do it without having to check the status reports.


          var dwell = '%wait ; Wait for the planner to empty';

          var ok = _this4.sender.load(name, gcode + '\n' + dwell, context);

          if (!ok) {
            callback(new Error("Invalid G-code: name=".concat(name)));
            return;
          } //this.emit('gcode:load', name, gcode, context);
          //this.event.trigger('gcode:load');


          MarlinController_log.debug("Load G-code: name=\"".concat(_this4.sender.state.name, "\", size=").concat(_this4.sender.state.gcode.length, ", total=").concat(_this4.sender.state.total));

          _this4.workflow.stop();

          callback(null, _this4.sender.toJSON());
        },
        'gcode:unload': function gcodeUnload() {
          _this4.workflow.stop();

          _this4.engine.unload(); // Sender


          _this4.sender.unload();

          _this4.emit('file:unload');

          _this4.event.trigger('file:unload');
        },
        'start': function start() {
          MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:start');
        },
        'gcode:start': function gcodeStart() {
          _this4.event.trigger('gcode:start');

          _this4.workflow.start(); // Feeder


          _this4.feeder.reset(); // Sender


          _this4.sender.next();
        },
        'stop': function stop() {
          MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command.apply(_this4, ['gcode:stop'].concat(args));
        },
        // @param {object} options The options object.
        // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
        'gcode:stop': function gcodeStop() {
          _this4.event.trigger('gcode:stop');

          _this4.workflow.stop();
        },
        'pause': function pause() {
          MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:pause');
        },
        'gcode:pause': function gcodePause() {
          _this4.event.trigger('gcode:pause');

          _this4.workflow.pause();
        },
        'resume': function resume() {
          MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));

          _this4.command('gcode:resume');
        },
        'gcode:resume': function gcodeResume() {
          _this4.event.trigger('gcode:resume');

          _this4.workflow.resume();
        },
        'feeder:feed': function feederFeed() {
          var commands = args[0],
              _args$3 = args[1],
              context = _args$3 === void 0 ? {} : _args$3;

          _this4.command('gcode', commands, context);
        },
        'feeder:start': function feederStart() {
          if (_this4.workflow.state === WORKFLOW_STATE_RUNNING) {
            return;
          }

          _this4.feeder.unhold();

          _this4.feeder.next();
        },
        'feeder:stop': function feederStop() {
          _this4.feeder.reset();
        },
        'feedhold': function feedhold() {
          _this4.event.trigger('feedhold');
        },
        'cyclestart': function cyclestart() {
          _this4.event.trigger('cyclestart');
        },
        'homing': function homing() {
          _this4.event.trigger('homing');

          _this4.writeln('G28.2 X Y Z');
        },
        'sleep': function sleep() {
          _this4.event.trigger('sleep'); // Unupported

        },
        'unlock': function unlock() {// Unsupported
        },
        'reset': function reset() {
          _this4.workflow.stop();

          _this4.feeder.reset(); // M112: Emergency Stop


          _this4.writeln('M112');
        },
        // Feed Overrides
        // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
        'feedOverride': function feedOverride() {
          var value = args[0];
          var feedOverride = _this4.runner.state.ovF;

          if (value === 0) {
            feedOverride = 100;
          } else if (feedOverride + value > 500) {
            feedOverride = 500;
          } else if (feedOverride + value < 10) {
            feedOverride = 10;
          } else {
            feedOverride += value;
          } // M220: Set speed factor override percentage


          _this4.command('gcode', 'M220 S' + feedOverride); // enforce state change


          _this4.runner.state = MarlinController_objectSpread(MarlinController_objectSpread({}, _this4.runner.state), {}, {
            ovF: feedOverride
          });
        },
        // Spindle Speed Overrides
        // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
        'spindleOverride': function spindleOverride() {
          var value = args[0];
          var spindleOverride = _this4.runner.state.ovS;

          if (value === 0) {
            spindleOverride = 100;
          } else if (spindleOverride + value > 500) {
            spindleOverride = 500;
          } else if (spindleOverride + value < 10) {
            spindleOverride = 10;
          } else {
            spindleOverride += value;
          } // M221: Set extruder factor override percentage


          _this4.command('gcode', 'M221 S' + spindleOverride); // enforce state change


          _this4.runner.state = MarlinController_objectSpread(MarlinController_objectSpread({}, _this4.runner.state), {}, {
            ovS: spindleOverride
          });
        },
        'rapidOverride': function rapidOverride() {// Unsupported
        },
        'motor:enable': function motorEnable() {
          // M17 Enable all stepper motors
          _this4.command('gcode', 'M17');
        },
        'motor:disable': function motorDisable() {
          // M18/M84 Disable steppers immediately (until the next move)
          _this4.command('gcode', 'M18');
        },
        'laser:on': function laserOn() {
          var _args$4 = args[0],
              power = _args$4 === void 0 ? 0 : _args$4,
              _args$5 = args[1],
              maxS = _args$5 === void 0 ? 255 : _args$5;
          var commands = ['M3 S' + ensure_positive_number(maxS * (power / 100))];

          _this4.command('gcode', commands);
        },
        'lasertest:on': function lasertestOn() {
          var _args$6 = args[0],
              power = _args$6 === void 0 ? 0 : _args$6,
              _args$7 = args[1],
              duration = _args$7 === void 0 ? 0 : _args$7,
              _args$8 = args[2],
              maxS = _args$8 === void 0 ? 255 : _args$8;
          var commands = ['M3 S' + ensure_positive_number(maxS * (power / 100))];

          if (duration > 0) {
            // G4 [P<time in ms>] [S<time in sec>]
            // If both S and P are included, S takes precedence.
            commands.push('G4 P' + ensure_positive_number(duration));
            commands.push('M5');
          }

          _this4.command('gcode', commands);
        },
        'lasertest:off': function lasertestOff() {
          _this4.writeln('M5');
        },
        'gcode': function gcode() {
          var commands = args[0],
              context = args[1];
          var data = external_ensure_array_default()(commands).join('\n').split(/\r?\n/).filter(function (line) {
            if (typeof line !== 'string') {
              return false;
            }

            return line.trim().length > 0;
          });

          _this4.feeder.feed(data, context);

          {
            // The following criteria must be met to trigger the feeder
            var notBusy = !_this4.history.writeSource;
            var senderIdle = _this4.sender.state.sent === _this4.sender.state.received;
            var feederIdle = !_this4.feeder.isPending();

            if (notBusy && senderIdle && feederIdle) {
              _this4.feeder.next();
            }
          }
        },
        'gcode:safe': function gcodeSafe() {
          var commands = args[0],
              prefUnits = args[1];
          var deviceUnits = _this4.state.parserstate.modal.units;
          var code = [];

          if (!deviceUnits) {
            MarlinController_log.error('Unable to determine device unit modal');
            return;
          } // Force command in preferred units


          if (prefUnits !== deviceUnits) {
            code.push(prefUnits);
          }

          code = code.concat(commands); // return modal to previous state if they were different previously

          if (prefUnits !== deviceUnits) {
            code = code.concat(deviceUnits);
          }

          _this4.command('gcode', code);
        },
        'jog:start': function jogStart() {
          var axes = args[0],
              _args$9 = args[1],
              feedrate = _args$9 === void 0 ? 1000 : _args$9,
              _args$10 = args[2],
              units = _args$10 === void 0 ? METRIC_UNITS : _args$10; //const JOG_COMMAND_INTERVAL = 80;

          var unitModal = units === METRIC_UNITS ? 'G21' : 'G20';
          var _this4$settings$setti = _this4.settings.settings,
              $20 = _this4$settings$setti.$20,
              $130 = _this4$settings$setti.$130,
              $131 = _this4$settings$setti.$131,
              $132 = _this4$settings$setti.$132,
              $23 = _this4$settings$setti.$23;
          var jogFeedrate;

          if ($20 === '1') {
            $130 = Number($130);
            $131 = Number($131);
            $132 = Number($132); // Convert feedrate to metric if working in imperial - easier to convert feedrate and treat everything else as MM than opposite

            if (units !== METRIC_UNITS) {
              feedrate = (feedrate * 25.4).toFixed(2);
              unitModal = 'G21';
            }

            var OFFSET = 0.1;
            var FIXED = 2; //If we are moving on the positive direction, we don't need to subtract
            //the max travel by it as we are moving towards the zero position, but if
            //we are moving in the negative direction we need to subtract the max travel
            //by it to reach the maximum amount in that direction

            var calculateAxisValue = function calculateAxisValue(_ref2) {
              var direction = _ref2.direction,
                  position = _ref2.position,
                  maxTravel = _ref2.maxTravel;

              if (position === 0) {
                return ((maxTravel - OFFSET) * direction).toFixed(FIXED);
              }

              if (direction === 1) {
                return Number((position * direction - OFFSET).toFixed(FIXED));
              } else {
                return Number(-(maxTravel - position - OFFSET).toFixed(FIXED));
              }
            };

            var mpos = _this4.state.status.mpos;
            Object.keys(mpos).forEach(function (axis) {
              mpos[axis] = Number(mpos[axis]);
            });

            if (_this4.homingFlagSet) {
              var _getAxisMaximumLocati = getAxisMaximumLocation($23),
                  _getAxisMaximumLocati2 = MarlinController_slicedToArray(_getAxisMaximumLocati, 2),
                  xMaxLoc = _getAxisMaximumLocati2[0],
                  yMaxLoc = _getAxisMaximumLocati2[1];

              if (axes.X) {
                axes.X = determineMaxMovement(Math.abs(mpos.x), axes.X, xMaxLoc, $130);
              }

              if (axes.Y) {
                axes.Y = determineMaxMovement(Math.abs(mpos.y), axes.Y, yMaxLoc, $131);
              }
            } else {
              if (axes.X) {
                axes.X = calculateAxisValue({
                  direction: axes.X,
                  position: Math.abs(mpos.x),
                  maxTravel: $130
                });
              }

              if (axes.Y) {
                axes.Y = calculateAxisValue({
                  direction: axes.Y,
                  position: Math.abs(mpos.y),
                  maxTravel: $131
                });
              }
            }

            if (axes.Z) {
              axes.Z = calculateAxisValue({
                direction: axes.Z,
                position: Math.abs(mpos.z),
                maxTravel: $132
              });
            }
          } else {
            jogFeedrate = 1000;
            Object.keys(axes).forEach(function (axis) {
              axes[axis] *= jogFeedrate;
            });
          }

          axes.F = feedrate;

          if (axes.Z) {
            axes.F *= 0.8;
            axes.F = axes.F.toFixed(3);
          }

          var jogCommand = "$J=".concat(unitModal, "G91 ") + map_default()(axes, function (value, letter) {
            return '' + letter.toUpperCase() + value;
          }).join(' ');

          _this4.command('gcode', jogCommand);
        },
        'jog:stop': function jogStop() {
          _this4.feeder.reset();

          _this4.command('jog:cancel');

          _this4.feeder.reset();
        },
        'jog:cancel': function jogCancel() {
          _this4.command('gcode', '\x85');
        },
        'macro:run': function macroRun() {
          var id = args[0],
              _args$11 = args[1],
              context = _args$11 === void 0 ? {} : _args$11,
              _args$12 = args[2],
              callback = _args$12 === void 0 ? MarlinController_noop : _args$12;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          }

          var macros = configstore["a" /* default */].get('macros');

          var macro = find_default()(macros, {
            id: id
          });

          if (!macro) {
            MarlinController_log.error("Cannot find the macro: id=".concat(id));
            return;
          }

          _this4.event.trigger('macro:run');

          _this4.command('gcode', macro.content, context);

          callback(null);
        },
        'macro:load': function macroLoad() {
          var id = args[0],
              _args$13 = args[1],
              context = _args$13 === void 0 ? {} : _args$13,
              _args$14 = args[2],
              callback = _args$14 === void 0 ? MarlinController_noop : _args$14;

          if (typeof context === 'function') {
            callback = context;
            context = {};
          }

          var macros = configstore["a" /* default */].get('macros');

          var macro = find_default()(macros, {
            id: id
          });

          if (!macro) {
            MarlinController_log.error("Cannot find the macro: id=".concat(id));
            return;
          }

          _this4.event.trigger('macro:load');

          _this4.command('gcode:load', macro.name, macro.content, context, callback);
        },
        'watchdir:load': function watchdirLoad() {
          var file = args[0],
              _args$15 = args[1],
              callback = _args$15 === void 0 ? MarlinController_noop : _args$15;
          var context = {}; // empty context

          monitor["a" /* default */].readFile(file, function (err, data) {
            if (err) {
              callback(err);
              return;
            }

            _this4.command('gcode:load', file, data, context, callback);
          });
        },
        'machineprofile:load': function machineprofileLoad() {
          var machineProfile = args[0];
          store["a" /* default */].set('machineProfile', machineProfile);
        },
        'settings:updated': function settingsUpdated() {
          var _args$16 = args[0],
              newSettings = _args$16 === void 0 ? {} : _args$16;
          var currentSettings = store["a" /* default */].get('preferences') || {};

          var updated = MarlinController_objectSpread(MarlinController_objectSpread({}, currentSettings), newSettings);

          store["a" /* default */].set('preferences', updated);
        },
        'toolchange:context': function toolchangeContext() {
          var context = args[0];
          _this4.toolChangeContext = context;
        },
        'toolchange:pre': function toolchangePre() {},
        'toolchange:post': function toolchangePost() {},
        'gcode:outline': function gcodeOutline() {
          var _args$17 = args[0],
              gcode = _args$17 === void 0 ? '' : _args$17,
              _args$18 = args[1],
              concavity = _args$18 === void 0 ? Infinity : _args$18;
          var toRun = getOutlineGcode(gcode, concavity);
          MarlinController_log.debug('Running outline');

          _this4.emit('outline:start');

          _this4.command('gcode', toRun);
        }
      }[cmd];

      if (!handler) {
        MarlinController_log.error("Unknown command: ".concat(cmd));
        return;
      }

      handler();
    }
  }, {
    key: "write",
    value: function write(data, context) {
      // Assertion check
      if (this.isClose()) {
        MarlinController_log.error("Serial port \"".concat(this.options.port, "\" is not accessible"));
        return;
      }

      this.emit('serialport:write', data, MarlinController_objectSpread(MarlinController_objectSpread({}, context), {}, {
        source: WRITE_SOURCE_CLIENT
      }));
      this.connection.write(data, {
        source: WRITE_SOURCE_CLIENT
      });
      MarlinController_log.silly("> ".concat(data));
    }
  }, {
    key: "writeln",
    value: function writeln(data, context) {
      this.write(data + '\n', context);
    }
  }]);

  return MarlinController;
}();

/* harmony default export */ var Marlin_MarlinController = (MarlinController_MarlinController);
// CONCATENATED MODULE: ./controllers/index.js



// EXTERNAL MODULE: ./access-control.js
var access_control = __webpack_require__(35);

// CONCATENATED MODULE: ./services/cncengine/CNCEngine.js
var CNCEngine_excluded = ["port", "gcode"];

function CNCEngine_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CNCEngine_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CNCEngine_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CNCEngine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CNCEngine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CNCEngine_ownKeys(Object(source), true).forEach(function (key) { CNCEngine_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CNCEngine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CNCEngine_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CNCEngine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CNCEngine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CNCEngine_createClass(Constructor, protoProps, staticProps) { if (protoProps) CNCEngine_defineProperties(Constructor.prototype, protoProps); if (staticProps) CNCEngine_defineProperties(Constructor, staticProps); return Constructor; }

function CNCEngine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import partition from 'lodash/partition';


 //import socketioJwt from 'socketio-jwt';


 // import settings from '../../config/settings';








var CNCEngine_log = Object(logger["a" /* default */])('service:cncengine'); // Case-insensitive equality checker.
// @param {string} str1 First string to check.
// @param {string} str2 Second string to check.
// @return {boolean} True if str1 and str2 are the same string, ignoring case.

var caseInsensitiveEquals = function caseInsensitiveEquals(str1, str2) {
  str1 = str1 ? (str1 + '').toUpperCase() : '';
  str2 = str2 ? (str2 + '').toUpperCase() : '';
  return str1 === str2;
};

var CNCEngine_isValidController = function isValidController(controller) {
  return (// Grbl
    caseInsensitiveEquals(GRBL, controller) || // Marlin
    caseInsensitiveEquals(constants_MARLIN, controller)
  );
};

var CNCEngine_CNCEngine = /*#__PURE__*/function () {
  function CNCEngine() {
    var _this = this;

    CNCEngine_classCallCheck(this, CNCEngine);

    CNCEngine_defineProperty(this, "controllerClass", {});

    CNCEngine_defineProperty(this, "listener", {
      taskStart: function taskStart() {
        if (_this.io) {
          var _this$io;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_this$io = _this.io).emit.apply(_this$io, ['task:start'].concat(args));
        }
      },
      taskFinish: function taskFinish() {
        if (_this.io) {
          var _this$io2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_this$io2 = _this.io).emit.apply(_this$io2, ['task:finish'].concat(args));
        }
      },
      taskError: function taskError() {
        if (_this.io) {
          var _this$io3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          (_this$io3 = _this.io).emit.apply(_this$io3, ['task:error'].concat(args));
        }
      },
      configChange: function configChange() {
        if (_this.io) {
          var _this$io4;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          (_this$io4 = _this.io).emit.apply(_this$io4, ['config:change'].concat(args));
        }
      }
    });

    CNCEngine_defineProperty(this, "server", null);

    CNCEngine_defineProperty(this, "io", null);

    CNCEngine_defineProperty(this, "sockets", []);

    CNCEngine_defineProperty(this, "gcode", null);

    CNCEngine_defineProperty(this, "meta", null);

    CNCEngine_defineProperty(this, "event", new lib_EventTrigger(function (event, trigger, commands) {
      CNCEngine_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

      if (trigger === 'system') {
        taskrunner["a" /* default */].run(commands);
      }
    }));
  }

  CNCEngine_createClass(CNCEngine, [{
    key: "start",
    value: // @param {object} server The HTTP server instance.
    // @param {string} controller Specify CNC controller.
    function start(server) {
      var _this2 = this;

      var controller = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      // Fallback to an empty string if the controller is not valid
      if (!CNCEngine_isValidController(controller)) {
        controller = '';
      } // Marlin


      if (!controller || caseInsensitiveEquals(constants_MARLIN, controller)) {
        this.controllerClass[constants_MARLIN] = Marlin_MarlinController;
      } // Grbl


      if (caseInsensitiveEquals(GRBL, controller)) {
        this.controllerClass[GRBL] = Grbl_GrblController;
      }

      if (Object.keys(this.controllerClass).length === 0) {
        throw new Error("No valid CNC controller specified (".concat(controller, ")"));
      }

      var loadedControllers = Object.keys(this.controllerClass);
      CNCEngine_log.debug("Loaded controllers: ".concat(loadedControllers));
      this.stop();
      taskrunner["a" /* default */].on('start', this.listener.taskStart);
      taskrunner["a" /* default */].on('finish', this.listener.taskFinish);
      taskrunner["a" /* default */].on('error', this.listener.taskError);
      configstore["a" /* default */].on('change', this.listener.configChange); // System Trigger: Startup

      this.event.trigger('startup');
      this.server = server;
      this.io = external_socket_io_default()(this.server, {
        serveClient: true,
        path: '/socket.io',
        pingTimeout: 60000,
        pingInterval: 25000,
        maxHttpBufferSize: 40e6
      });
      this.io.use( /*#__PURE__*/function () {
        var _ref = CNCEngine_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(socket, next) {
          var ipaddr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  // IP Address Access Control
                  ipaddr = socket.handshake.address;
                  _context.next = 4;
                  return Object(access_control["a" /* authorizeIPAddress */])(ipaddr);

                case 4:
                  _context.next = 11;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  CNCEngine_log.warn(_context.t0);
                  next(_context.t0);
                  return _context.abrupt("return");

                case 11:
                  next();

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 6]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.io.on('connection', function (socket) {
        var address = socket.handshake.address;
        var user = socket.decoded_token || {};
        CNCEngine_log.debug("New connection from ".concat(address, ": id=").concat(socket.id, ", user.id=").concat(user.id, ", user.name=").concat(user.name)); // Add to the socket pool

        _this2.sockets.push(socket);

        socket.emit('startup', {
          loadedControllers: Object.keys(_this2.controllerClass),
          // User-defined baud rates and ports
          baudrates: external_ensure_array_default()(configstore["a" /* default */].get('baudrates', [])),
          ports: external_ensure_array_default()(configstore["a" /* default */].get('ports', []))
        });
        socket.on('disconnect', function () {
          CNCEngine_log.debug("Disconnected from ".concat(address, ": id=").concat(socket.id, ", user.id=").concat(user.id, ", user.name=").concat(user.name));
          var controllers = store["a" /* default */].get('controllers', {});
          Object.keys(controllers).forEach(function (port) {
            var controller = controllers[port];

            if (!controller) {
              return;
            }

            controller.removeConnection(socket);
          }); // Remove from socket pool

          _this2.sockets.splice(_this2.sockets.indexOf(socket), 1);
        });
        socket.on('reconnect', function (port) {
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller) {
            CNCEngine_log.info("No controller found on port ".concat(port, " to reconnect to"));
            return;
          }

          CNCEngine_log.info("Reconnecting to open controller on port ".concat(port, " with socket ID ").concat(socket.id));
          controller.addConnection(socket);
          CNCEngine_log.info("Controller state: ".concat(controller.isOpen()));

          if (controller.isOpen()) {
            CNCEngine_log.info('Joining port room on socket');
            socket.join(port);
          } else {
            CNCEngine_log.info('Controller no longer open');
          }
        }); // List the available serial ports

        socket.on('list', function () {
          CNCEngine_log.debug("socket.list(): id=".concat(socket.id));
          external_serialport_default.a.list().then(function (ports) {
            ports = ports.concat(external_ensure_array_default()(configstore["a" /* default */].get('ports', [])));
            var controllers = store["a" /* default */].get('controllers', {});
            var portsInUse = Object.keys(controllers).filter(function (port) {
              var controller = controllers[port];
              return controller && controller.isOpen();
            });
            ports = ports.map(function (port) {
              return {
                port: port.path,
                manufacturer: port.manufacturer,
                inuse: portsInUse.indexOf(port.path) >= 0
              };
            });
            socket.emit('serialport:list', ports);
          })["catch"](function (err) {
            CNCEngine_log.error(err);
          });
        }); // Open serial port

        socket.on('open', function (port, options) {
          var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop_default.a;

          if (typeof callback !== 'function') {
            callback = noop_default.a;
          }

          CNCEngine_log.debug("socket.open(\"".concat(port, "\", ").concat(JSON.stringify(options), "): id=").concat(socket.id));
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller) {
            var _options = CNCEngine_objectSpread({}, options),
                _options$controllerTy = _options.controllerType,
                controllerType = _options$controllerTy === void 0 ? constants_MARLIN : _options$controllerTy,
                baudrate = _options.baudrate,
                rtscts = _options.rtscts;

            var Controller = _this2.controllerClass[controllerType];

            if (!Controller) {
              var err = "Not supported controller: ".concat(controllerType);
              CNCEngine_log.error(err);
              callback(new Error(err));
              return;
            }

            var engine = _this2;
            controller = new Controller(engine, {
              port: port,
              baudrate: baudrate,
              rtscts: !!rtscts
            });
          }

          controller.addConnection(socket); // Load file to controller if it exists

          if (_this2.hasFileLoaded()) {
            controller.loadFile(_this2.gcode, _this2.meta);
          } else {
            CNCEngine_log.debug('No file in CNCEngine to load to sender');
          }

          if (controller.isOpen()) {
            // Join the room
            socket.join(port);
            callback(null);
            return;
          }

          controller.open(function () {
            var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (err) {
              callback(err);
              return;
            } // System Trigger: Open a serial port


            _this2.event.trigger('port:open');

            if (store["a" /* default */].get("controllers[\"".concat(port, "\"]"))) {
              CNCEngine_log.error("Serial port \"".concat(port, "\" was not properly closed"));
            }

            store["a" /* default */].set("controllers[".concat(JSON.stringify(port), "]"), controller); // Join the room

            socket.join(port);
            callback(null);
          });
        }); // Close serial port

        socket.on('close', function (port) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop_default.a;

          if (typeof callback !== 'function') {
            callback = noop_default.a;
          }

          CNCEngine_log.debug("socket.close(\"".concat(port, "\"): id=").concat(socket.id));
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller) {
            var err = "Serial port \"".concat(port, "\" not accessible");
            CNCEngine_log.error(err);
            callback(new Error(err));
            return;
          } // System Trigger: Close a serial port


          _this2.event.trigger('port:close'); // Leave the room


          socket.leave(port);
          controller.close(function (err) {
            // Remove controller from store
            store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

            controller.destroy();
            callback(null);
          });
        });
        socket.on('command', function (port, cmd) {
          CNCEngine_log.debug("socket.command(\"".concat(port, "\", \"").concat(cmd, "\"): id=").concat(socket.id));
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller || controller.isClose()) {
            CNCEngine_log.error("Serial port \"".concat(port, "\" not accessible"));
            return;
          }

          for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
            args[_key5 - 2] = arguments[_key5];
          }

          controller.command.apply(controller, [cmd].concat(args));
        });
        socket.on('write', function (port, data) {
          var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          CNCEngine_log.debug("socket.write(\"".concat(port, "\", \"").concat(data, "\", ").concat(JSON.stringify(context), "): id=").concat(socket.id));
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller || controller.isClose()) {
            CNCEngine_log.error("Serial port \"".concat(port, "\" not accessible"));
            return;
          }

          controller.write(data, context);
        });
        socket.on('writeln', function (port, data) {
          var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          CNCEngine_log.debug("socket.writeln(\"".concat(port, "\", \"").concat(data, "\", ").concat(JSON.stringify(context), "): id=").concat(socket.id));
          var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

          if (!controller || controller.isClose()) {
            CNCEngine_log.error("Serial port \"".concat(port, "\" not accessible"));
            return;
          }

          controller.writeln(data, context);
        });
        socket.on('hPing', function () {
          CNCEngine_log.debug("Health check received at ".concat(new Date().toLocaleTimeString()));
          socket.emit('hPong');
        });
        socket.on('file:fetch', function () {
          socket.emit('file:fetch', _this2.gcode, _this2.meta);
        });
        socket.on('file:unload', function () {
          CNCEngine_log.debug('Socket unload called');

          _this2.unload();
        });
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.io) {
        this.io.close();
        this.io = null;
      }

      this.sockets = [];
      this.server = null;
      taskrunner["a" /* default */].removeListener('start', this.listener.taskStart);
      taskrunner["a" /* default */].removeListener('finish', this.listener.taskFinish);
      taskrunner["a" /* default */].removeListener('error', this.listener.taskError);
      configstore["a" /* default */].removeListener('change', this.listener.configChange);
    } // Emit message across all sockets

  }, {
    key: "emit",
    value: function emit(msg) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      this.sockets.forEach(function (socket) {
        socket.emit.apply(socket, [msg].concat(args));
      });
    }
    /* Functions related to loading file through server */
    // If gcode is going to live in CNCengine, we need functions to access or unload it.

  }, {
    key: "load",
    value: function load(_ref2) {
      var port = _ref2.port,
          gcode = _ref2.gcode,
          meta = CNCEngine_objectWithoutProperties(_ref2, CNCEngine_excluded);

      this.gcode = gcode;
      this.meta = meta; // Load the file to the sender if controller connection exists

      if (port) {
        var controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

        if (controller) {
          controller.loadFile(this.gcode, this.meta);
        }
      }

      CNCEngine_log.info("Loaded file '".concat(meta.name, "' to CNCEngine"));
      this.emit('file:load', gcode, meta.size, meta.name, meta.visualizer);
    }
  }, {
    key: "unload",
    value: function unload() {
      CNCEngine_log.info('Unloading file from CNCEngine');
      this.gcode = null;
      this.meta = null;
      this.emit('file:unload');
    }
  }, {
    key: "fetchGcode",
    value: function fetchGcode() {
      return [this.gcode, this.meta];
    }
  }, {
    key: "hasFileLoaded",
    value: function hasFileLoaded() {
      return this.gcode !== null;
    }
  }]);

  return CNCEngine;
}();

/* harmony default export */ var cncengine_CNCEngine = (CNCEngine_CNCEngine);
// CONCATENATED MODULE: ./services/cncengine/index.js

var cncengine = new cncengine_CNCEngine();

var cncengine_start = function start(server, controller) {
  cncengine.start(server, controller);
};

var cncengine_stop = function stop() {
  cncengine.stop();
};

var cncengine_load = function load(gcode) {
  cncengine.load(gcode);
};

var unload = function unload() {
  cncengine.unload();
};

/* harmony default export */ var services_cncengine = __webpack_exports__["a"] = ({
  start: cncengine_start,
  stop: cncengine_stop,
  load: cncengine_load,
  unload: unload
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(46, 1);
/* harmony import */ var _build_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _build_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_config__WEBPACK_IMPORTED_MODULE_2__);



var RC_FILE = '.cncjs4m_rc';
var SESSION_PATH = '.cncjs4m-sessions'; // Secret

var secret = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;

var getUserHome = function getUserHome() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
};

/* harmony default export */ __webpack_exports__["a"] = ({
  rcfile: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(getUserHome(), RC_FILE),
  verbosity: 0,
  version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version,
  // The secret key is loaded from the config file (defaults to "~/.cncjs4m_rc")
  // @see "src/app/index.js"
  secret: secret,
  // Access Token Lifetime
  accessTokenLifetime: '30d',
  // https://github.com/zeit/ms
  // Allow Remote Access
  allowRemoteAccess: false,
  // Express view engine
  view: {
    // Set html (w/o dot) as the default extension
    defaultExtension: 'html',
    // Format: <extension>: <template>
    engines: [{
      // Hogan template with .html extension
      extension: 'html',
      template: 'hogan'
    }, {
      // Hogan template with .hbs extension
      extension: 'hbs',
      template: 'hogan'
    }, {
      // Hogan template with .hogan extension
      extension: 'hogan',
      template: 'hogan'
    }]
  },
  // Middleware (https://github.com/senchalabs/connect)
  middleware: {
    // https://github.com/expressjs/body-parser
    'body-parser': {
      'json': {
        // maximum request body size. (default: <100kb>)
        limit: '256mb'
      },
      'urlencoded': {
        extended: true,
        // maximum request body size. (default: <100kb>)
        limit: '256mb'
      }
    },
    // https://github.com/mscdex/connect-busboy
    'busboy': {
      limits: {
        fileSize: 256 * 1024 * 1024 // 256MB

      },
      // immediate
      //   false: no immediate parsing
      //   true: immediately start reading from the request stream and parsing
      immediate: false
    },
    // https://github.com/andrewrk/node-multiparty/
    'multiparty': {
      // Limits the amount of memory a field (not a file) can allocate in bytes. If this value is exceeded, an error event is emitted. The default size is 2MB.
      maxFieldsSize: 50 * 1024 * 1024,
      // 50MB
      // Limits the number of fields that will be parsed before emitting an error event. A file counts as a field in this case. Defaults to 1000.
      maxFields: 1000
    },
    // https://github.com/expressjs/morgan
    'morgan': {
      // The ':id' token is defined at app.js
      format: ':id \x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m \x1b[34m:status\x1b[0m :response-time ms'
    },
    // https://github.com/expressjs/compression
    'compression': {
      // response is only compressed if the byte size is at or above this threshold.
      threshold: 512
    },
    // https://github.com/expressjs/session
    'session': {
      path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(getUserHome(), SESSION_PATH)
    }
  },
  siofu: {
    // SocketIOFileUploader
    dir: './tmp/siofu'
  },
  i18next: {
    lowerCaseLng: true,
    // logs out more info (console)
    debug: false,
    // language to lookup key if not found on set language
    fallbackLng: 'en',
    // string or array of namespaces
    ns: ['config', 'resource' // default
    ],
    // default namespace used if not passed to translation function
    defaultNS: 'resource',
    whitelist: _build_config__WEBPACK_IMPORTED_MODULE_2__["languages"],
    // array of languages to preload
    preload: [],
    // language codes to lookup, given set language is 'en-US':
    // 'all' --> ['en-US', 'en', 'dev']
    // 'currentOnly' --> 'en-US'
    // 'languageOnly' --> 'en'
    load: 'currentOnly',
    // char to separate keys
    keySeparator: '.',
    // char to split namespace from key
    nsSeparator: ':',
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    },
    detection: {
      // order and from where user language should be detected
      order: ['session', 'querystring', 'cookie', 'header'],
      // keys or params to lookup language from
      lookupQuerystring: 'lang',
      lookupCookie: 'lang',
      lookupSession: 'lang',
      // cache user language
      caches: ['cookie']
    },
    backend: {
      // path where resources get loaded from
      loadPath: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '..', 'i18n', '{{lng}}', '{{ns}}.json'),
      // path to post missing resources
      addPath: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '..', 'i18n', '{{lng}}', '{{ns}}.savedMissing.json'),
      // jsonIndent to use when storing json files
      jsonIndent: 4
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "config"))

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = {"name":"cncjs4marlin","version":"0.0.1","productName":"CNCjs_for_Marlin","description":"Web-based gCode sender","author":{"name":"Edward W <CNCjs@webbsense.com>","email":"cncjs4marlin@webbsense.com"},"license":"MIT","repository":{"type":"git","url":"https://github.com/Domush/cncjs4marlin"},"main":"main.js","dependencies":{"@babel/polyfill":"~7.4.3","@babel/runtime":"~7.4.3","avrgirl-arduino":"^5.0.1","bcrypt-nodejs":"0.0.3","body-parser":"~1.18.3","chalk":"~2.4.2","commander":"~2.20.0","compression":"~1.7.4","connect-restreamer":"~1.0.3","consolidate":"~0.15.1","cookie-parser":"~1.4.4","debug":"~4.1.1","deep-keys":"~0.5.0","electron-log":"^4.3.5","electron-store":"~3.2.0","electron-updater":"^4.3.8","ensure-array":"~1.0.0","errorhandler":"~1.5.0","escodegen":"~1.11.1","esprima":"~4.0.1","expand-tilde":"~2.0.2","express":"~4.16.4","express-jwt":"~5.3.1","express-session":"~1.16.1","gcode-parser":"~1.3.6","gcode-toolpath":"~2.2.0","hogan.js":"~3.0.2","http-proxy":"~1.18.1","hull.js":"^1.0.1","i18next":"~15.0.9","i18next-express-middleware":"~1.8.0","i18next-node-fs-backend":"~2.1.3","is-electron":"~2.2.0","is-online":"^9.0.1","jsonwebtoken":"~8.5.1","method-override":"~3.0.0","minimatch":"~3.0.4","mkdirp":"~0.5.1","morgan":"~1.9.1","multer":"^1.4.2","range_check":"~1.4.0","registry-auth-token":"~3.4.0","registry-url":"~5.1.0","rimraf":"~2.6.3","serve-favicon":"~2.5.0","serve-static":"~1.13.2","session-file-store":"~1.2.0","shortid":"~2.2.14","socket.io":"^4.1.3","spawn-default-shell":"~2.0.0","superagent":"^6.1.0","three":"^0.132.2","uuid":"~3.3.2","watch":"~1.0.2","webappengine":"~1.2.0","winston":"~3.2.1"}};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("i18next-express-middleware");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("lodash/without");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("lodash/each");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("expand-tilde");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("lodash/escapeRegExp");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("lodash/size");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("lodash/trimEnd");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqWith");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("webappengine");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
  languages: ['en' // English (default)
  ],
  analytics: {
    trackingId: 'UA-107017110-1'
  }
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


var maxAge = 0;
/* harmony default export */ __webpack_exports__["a"] = ({
  route: '/',
  // with trailing slash
  assets: {
    app: {
      routes: ['' // empty path
      ],
      path: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '..', '..', 'app'),
      maxAge: maxAge
    }
  },
  backend: {
    enable: true,
    host: 'localhost',
    port: 80,
    route: 'api/'
  },
  cluster: {
    // note. node-inspector cannot debug child (forked) process
    enable: false,
    maxWorkers: os__WEBPACK_IMPORTED_MODULE_0___default.a.cpus().length || 1
  },
  winston: {
    // https://github.com/winstonjs/winston#logging-levels
    level: 'debug'
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "config"))

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_urljoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var publicPath = "/2b5a2f1b/" || false; // see gulp/task/app.js

var maxAge = 365 * 24 * 60 * 60 * 1000; // one year

/* harmony default export */ __webpack_exports__["a"] = ({
  route: '/',
  // with trailing slash
  assets: {
    app: {
      routes: [// with trailing slash
      Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(publicPath, '/'), '/' // fallback
      ],
      path: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '..', '..', 'app'),
      maxAge: maxAge
    }
  },
  backend: {
    enable: false,
    // disable backend service in production
    host: 'localhost',
    port: 80,
    route: 'api/'
  },
  cluster: {
    // note. node-inspector cannot debug child (forked) process
    enable: false,
    maxWorkers: os__WEBPACK_IMPORTED_MODULE_0___default.a.cpus().length || 1
  },
  winston: {
    // https://github.com/winstonjs/winston#logging-levels
    level: 'info'
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "config"))

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var connect_restreamer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69);
/* harmony import */ var connect_restreamer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(connect_restreamer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var consolidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var consolidate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(consolidate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(errorhandler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(105);
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hogan_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72);
/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73);
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var session_file_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(76);
/* harmony import */ var session_file_store__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(session_file_store__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(77);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52);
/* harmony import */ var i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _lib_urljoin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7);
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(0);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5);
/* harmony import */ var _lib_middleware_errclient__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(98);
/* harmony import */ var _lib_middleware_errclient__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware_errclient__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _lib_middleware_errlog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(99);
/* harmony import */ var _lib_middleware_errlog__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware_errlog__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _lib_middleware_errnotfound__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(100);
/* harmony import */ var _lib_middleware_errnotfound__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware_errnotfound__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _lib_middleware_errserver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(101);
/* harmony import */ var _lib_middleware_errserver__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_lib_middleware_errserver__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _services_configstore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2);
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(35);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint callback-return: 0 */





 //import multiparty from 'connect-multiparty';







 // required by consolidate
























var log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"])('app');

var renderPage = function renderPage() {
  var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'index';
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash_noop__WEBPACK_IMPORTED_MODULE_22___default.a;
  return function (req, res, next) {
    // Override IE's Compatibility View Settings
    // http://stackoverflow.com/questions/6156639/x-ua-compatible-is-set-to-ie-edge-but-it-still-doesnt-stop-compatibility-mode
    res.set({
      'X-UA-Compatible': 'IE=edge'
    });

    var locals = _objectSpread({}, cb(req, res));

    res.render(view, locals);
  };
};

var appMain = function appMain() {
  var app = express__WEBPACK_IMPORTED_MODULE_9___default()();
  {
    // Settings
    if (false) { var webpackDevServer; } else {
      // a custom "verbose errors" setting which can be used in the templates via settings['verbose errors']
      app.disable('verbose errors'); // Disables verbose errors in production

      app.enable('view cache'); // Enables view template compilation caching in production
    }

    app.enable('trust proxy'); // Enables reverse proxy support, disabled by default

    app.enable('case sensitive routing'); // Enable case sensitivity, disabled by default, treating "/Foo" and "/foo" as the same

    app.disable('strict routing'); // Enable strict routing, by default "/foo" and "/foo/" are treated the same by the router

    app.disable('x-powered-by'); // Enables the X-Powered-By: Express HTTP header, enabled by default

    for (var i = 0; i < _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines.length; ++i) {
      var extension = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines[i].extension;
      var template = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines[i].template;
      app.engine(extension, consolidate__WEBPACK_IMPORTED_MODULE_7___default.a[template]);
    }

    app.set('view engine', _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.defaultExtension); // The default engine extension to use when omitted

    app.set('views', [path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '../app'), path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'views')]); // The view directory path

    log.debug('app.settings: %j', app.settings);
  } // Setup i18n (i18next)

  i18next__WEBPACK_IMPORTED_MODULE_13___default.a.use(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14___default.a).use(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__["LanguageDetector"]).init(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].i18next);
  app.use( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var ipaddr;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // IP Address Access Control
              ipaddr = req.ip || req.connection.remoteAddress;
              _context.next = 4;
              return Object(_access_control__WEBPACK_IMPORTED_MODULE_34__[/* authorizeIPAddress */ "a"])(ipaddr);

            case 4:
              _context.next = 11;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              log.warn(_context.t0);
              res.status(_constants__WEBPACK_IMPORTED_MODULE_35__[/* ERR_FORBIDDEN */ "c"]).end('Forbidden Access');
              return _context.abrupt("return");

            case 11:
              next();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()); // Removes the 'X-Powered-By' header in earlier versions of Express

  app.use(function (req, res, next) {
    res.removeHeader('X-Powered-By');
    next();
  }); // Middleware
  // https://github.com/senchalabs/connect

  try {
    // https://github.com/valery-barysok/session-file-store
    var _path = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.session.path; // Defaults to './sienci-sessions'

    rimraf__WEBPACK_IMPORTED_MODULE_23___default.a.sync(_path);
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(_path);
    var FileStore = session_file_store__WEBPACK_IMPORTED_MODULE_20___default()(express_session__WEBPACK_IMPORTED_MODULE_11___default.a);
    app.use(express_session__WEBPACK_IMPORTED_MODULE_11___default()({
      // https://github.com/expressjs/session#secret
      secret: _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].secret,
      // https://github.com/expressjs/session#resave
      resave: true,
      // https://github.com/expressjs/session#saveuninitialized
      saveUninitialized: true,
      store: new FileStore({
        path: _path,
        logFn: function logFn() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log.debug.apply(log, args);
        }
      })
    }));
  } catch (err) {
    log.error(err);
  }

  app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_18___default()(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], 'assets.app.path', ''), 'favicon.ico')));
  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()()); // Connect's body parsing middleware. This only handles urlencoded and json bodies.
  // https://github.com/expressjs/body-parser

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware['body-parser'].json));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware['body-parser'].urlencoded)); // For multipart bodies, please use the following modules:
  // - [busboy](https://github.com/mscdex/busboy) and [connect-busboy](https://github.com/mscdex/connect-busboy)
  // - [multiparty](https://github.com/andrewrk/node-multiparty) and [connect-multiparty](https://github.com/andrewrk/connect-multiparty)
  //app.use(multiparty(settings.middleware.multiparty));
  // https://github.com/dominictarr/connect-restreamer
  // connect's bodyParser has a problem when using it with a proxy.
  // It gobbles up all the body events, so that the proxy doesn't see anything!

  app.use(connect_restreamer__WEBPACK_IMPORTED_MODULE_6___default()()); // https://github.com/expressjs/method-override

  app.use(method_override__WEBPACK_IMPORTED_MODULE_16___default()());

  if (_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].verbosity > 0) {
    // https://github.com/expressjs/morgan#use-custom-token-formats
    // Add an ID to all requests and displays it using the :id token
    morgan__WEBPACK_IMPORTED_MODULE_17___default.a.token('id', function (req, res) {
      return req.session.id;
    });
    app.use(morgan__WEBPACK_IMPORTED_MODULE_17___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.morgan.format));
  }

  app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.compression));
  Object.keys(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].assets).forEach(function (name) {
    var asset = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].assets[name];
    log.debug('assets: name=%s, asset=%s', name, JSON.stringify(asset));

    if (!asset.path) {
      log.error('asset path is not defined');
      return;
    }

    asset.routes.forEach(function (assetRoute) {
      var route = Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route || '/', assetRoute || '');
      log.debug('> route=%s', name, route);
      app.use(route, serve_static__WEBPACK_IMPORTED_MODULE_19___default()(asset.path, {
        maxAge: asset.maxAge
      }));
    });
  });
  app.use(Object(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__["handle"])(i18next__WEBPACK_IMPORTED_MODULE_13___default.a, {}));
  {
    // Secure API Access
    app.use(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api'), express_jwt__WEBPACK_IMPORTED_MODULE_10___default()({
      secret: _services_configstore__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].get('secret'),
      credentialsRequired: true
    }));
    app.use( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, req, res, next) {
        var bypass, whitelist, token, user, ipaddr;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bypass = !(err && err.name === 'UnauthorizedError'); // Check whether the app is running in development mode

                bypass = bypass || "production" === 'development'; // Check whether the request path is not restricted

                whitelist = [// Also see "src/app/api/index.js"
                Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/signin')];
                bypass = bypass || whitelist.some(function (path) {
                  return req.path.indexOf(path) === 0;
                });

                if (bypass) {
                  _context2.next = 16;
                  break;
                }

                // Check whether the provided credential is correct
                token = lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(req, 'query.token') || lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(req, 'body.token');
                _context2.prev = 6;
                // User Validation
                user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_15___default.a.verify(token, _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].secret) || {};
                _context2.next = 10;
                return Object(_access_control__WEBPACK_IMPORTED_MODULE_34__[/* validateUser */ "b"])(user);

              case 10:
                bypass = true;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](6);
                log.warn(_context2.t0);

              case 16:
                if (bypass) {
                  _context2.next = 21;
                  break;
                }

                ipaddr = req.ip || req.connection.remoteAddress;
                log.warn("Forbidden: ipaddr=".concat(ipaddr, ", code=\"").concat(err.code, "\", message=\"").concat(err.message, "\""));
                res.status(_constants__WEBPACK_IMPORTED_MODULE_35__[/* ERR_FORBIDDEN */ "c"]).end('Forbidden Access');
                return _context2.abrupt("return");

              case 21:
                next();

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[6, 13]]);
      }));

      return function (_x4, _x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  {
    // Register API routes with public access
    // Also see "src/app/app.js"
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/signin'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].signin);
  }
  {
    // Register API routes with authorized access
    // Version
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/version/latest'), _api__WEBPACK_IMPORTED_MODULE_28__[/* version */ "k"].getLatestVersion); // State

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/state'), _api__WEBPACK_IMPORTED_MODULE_28__[/* state */ "i"].get);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/state'), _api__WEBPACK_IMPORTED_MODULE_28__[/* state */ "i"].set);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/state'), _api__WEBPACK_IMPORTED_MODULE_28__[/* state */ "i"].unset); // G-code

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/gcode'), _api__WEBPACK_IMPORTED_MODULE_28__[/* gcode */ "e"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/gcode'), _api__WEBPACK_IMPORTED_MODULE_28__[/* gcode */ "e"].upload);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/gcode/download'), _api__WEBPACK_IMPORTED_MODULE_28__[/* gcode */ "e"].download);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/gcode/download'), _api__WEBPACK_IMPORTED_MODULE_28__[/* gcode */ "e"].download); // Alias
    // Controllers

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/controllers'), _api__WEBPACK_IMPORTED_MODULE_28__[/* controllers */ "b"].get); // Commands

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].create);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].__delete);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/run/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].run); // Events

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].create);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].__delete); // Machines

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].create);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].__delete); // Macros

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].create);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].__delete); // MDI

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].create);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].bulkUpdate);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].__delete); // Users

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].fetch);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].create);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].read);
    app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].update);
    app["delete"](Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].__delete); // Watch

    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/files'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].getFiles);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/files'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].getFiles);
    app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/file'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].readFile);
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/file'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].readFile); // Files - with multer

    var storage = multer__WEBPACK_IMPORTED_MODULE_5___default.a.memoryStorage();
    var upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({
      storage: storage
    });
    app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/file'), upload.single('gcode'), _api__WEBPACK_IMPORTED_MODULE_28__[/* files */ "d"].uploadFile);
  } // page

  app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, '/'), renderPage('index.hbs', function (req, res) {
    var webroot = lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], 'assets.app.routes[0]', ''); // with trailing slash


    var lng = req.language;
    var t = req.t;
    return {
      webroot: webroot,
      lang: lng,
      title: "".concat(t('title'), " ").concat(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].version),
      loading: t('loading')
    };
  }));
  {
    // Error handling
    app.use(_lib_middleware_errlog__WEBPACK_IMPORTED_MODULE_30___default()());
    app.use(_lib_middleware_errclient__WEBPACK_IMPORTED_MODULE_29___default()({
      error: 'XHR error'
    }));
    app.use(_lib_middleware_errnotfound__WEBPACK_IMPORTED_MODULE_31___default()({
      view: path__WEBPACK_IMPORTED_MODULE_1___default.a.join('common', '404.hogan'),
      error: 'Not found'
    }));
    app.use(_lib_middleware_errserver__WEBPACK_IMPORTED_MODULE_32___default()({
      view: path__WEBPACK_IMPORTED_MODULE_1___default.a.join('common', '500.hogan'),
      error: 'Internal server error'
    }));
  }
  return app;
};

/* harmony default export */ __webpack_exports__["a"] = (appMain);
/* WEBPACK VAR INJECTION */}.call(this, ""))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("connect-restreamer");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("consolidate");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("i18next-node-fs-backend");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("session-file-store");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("registry-url");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("registry-auth-token");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("deep-keys");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("lodash/extend");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("minimatch");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("watch");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("spawn-default-shell");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("lodash/some");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("escodegen");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("hull.js");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqBy");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("lodash/compact");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("avrgirl-arduino");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a9a23f8958ef3213db16a3c3dd8fe5b.hex";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniq");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("range_check");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * errclient
 *
 * Examples:
 *
 *     app.use(middleware.errclient({ error: 'XHR error' }))
 *
 * Options:
 *
 *   - error    error message
 *
 * @param {Object} options
 * @return {Function}
 * @api public
 */
var errclient = function errclient(options) {
  options = options || {};
  var error = options.error || '';
  return function (err, req, res, next) {
    if (req.xhr) {
      res.send(500, {
        error: error
      });
      return;
    }

    next(err);
  };
};

module.exports = errclient;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * errlog:
 *
 *   Write request and error information to stderr, loggly, or similar services.
 *
 * Examples:
 *
 *   app.use(middleware.errlog())
 *
 * @return {Function}
 * @api public
 */
var errlog = function errlog() {
  return function (err, req, res, next) {
    console.error(err.stack);
    next(err);
  };
};

module.exports = errlog;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * errnotfound:
 *
 * Examples:
 *
 *     app.use(middleware.errnotfound({ view: '404', error: 'Not found' }))
 *
 * Options:
 *
 *   - view     view
 *   - error    error message
 *
 * @param {Object} options
 * @return {Function}
 * @api public
 */
var errnotfound = function errnotfound(options) {
  options = options || {};
  var view = options.view || '404',
      error = options.error || '';
  return function (req, res, next) {
    res.status(404); // respond with html page

    if (req.accepts('html')) {
      res.render(view, {
        url: req.url
      });
      return;
    } // respond with json


    if (req.accepts('json')) {
      res.send({
        error: error
      });
      return;
    } // default to plain-text. send()


    res.type('txt').send(error);
  };
};

module.exports = errnotfound;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * errserver:
 *
 * error-handling middleware, take the same form
 * as regular middleware, however they require an
 * arity of 4, aka the signature (err, req, res, next).
 * when connect has an error, it will invoke ONLY error-handling
 * middleware.
 *
 * If we were to next() here any remaining non-error-handling
 * middleware would then be executed, or if we next(err) to
 * continue passing the error, only error-handling middleware
 * would remain being executed, however here
 * we simply respond with an error page.
 *
 * Examples:
 *
 *     app.use(middleware.errserver({ view: '500', error: 'Internal server error' }))
 *
 * Options:
 *
 *   - view     view
 *   - error    error message
 *
 * @param {Object} options
 * @return {Function}
 * @api public
 */
var errserver = function errserver(options) {
  options = options || {};
  var view = options.view || '500',
      error = options.error || '';
  return function (err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render(view, {
      error: error
    });
  };
};

module.exports = errserver;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServer", function() { return createServer; });
/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ensure_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var expand_tilde__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var expand_tilde__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(expand_tilde__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58);
/* harmony import */ var lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_trimEnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60);
/* harmony import */ var lodash_trimEnd__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_trimEnd__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var webappengine__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62);
/* harmony import */ var webappengine__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(webappengine__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(0);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66);
/* harmony import */ var _services_cncengine__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44);
/* harmony import */ var _services_monitor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23);
/* harmony import */ var _services_configstore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2);
/* harmony import */ var _lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(18);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7);
/* harmony import */ var _lib_urljoin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























var log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])('init');

var createServer = function createServer(options, callback) {
  options = _objectSpread({}, options);
  {
    // verbosity
    var verbosity = options.verbosity; // https://github.com/winstonjs/winston#logging-levels

    if (verbosity === 1) {
      lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'verbosity', verbosity);
      Object(_lib_logger__WEBPACK_IMPORTED_MODULE_24__[/* setLevel */ "b"])('verbose');
    }

    if (verbosity === 2) {
      lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'verbosity', verbosity);
      Object(_lib_logger__WEBPACK_IMPORTED_MODULE_24__[/* setLevel */ "b"])('debug');
    }

    if (verbosity === 3) {
      lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'verbosity', verbosity);
      Object(_lib_logger__WEBPACK_IMPORTED_MODULE_24__[/* setLevel */ "b"])('silly');
    }
  }
  var rcfile = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(options.configFile || _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].rcfile); // configstore service

  log.info("Loading configuration from ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(rcfile))));
  _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].load(rcfile); // rcfile

  _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].rcfile = rcfile;
  {
    // secret
    if (!_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('secret')) {
      // generate a secret key
      var secret = bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5___default.a.genSaltSync(); // TODO: use a strong secret

      _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].set('secret', secret);
    }

    _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].secret = _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('secret', _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].secret);
  }
  {
    // watchDirectory
    var watchDirectory = options.watchDirectory || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('watchDirectory');

    if (watchDirectory) {
      if (fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(watchDirectory)) {
        log.info("Watching ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(watchDirectory)), " for file changes")); // monitor service

        _services_monitor__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"].start({
          watchDirectory: watchDirectory
        });
      } else {
        log.error("The directory ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(watchDirectory)), " does not exist."));
      }
    }
  }
  {
    // accessTokenLifetime
    var accessTokenLifetime = options.accessTokenLifetime || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('accessTokenLifetime');

    if (accessTokenLifetime) {
      lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'accessTokenLifetime', accessTokenLifetime);
    }
  }
  {
    // allowRemoteAccess
    var allowRemoteAccess = options.allowRemoteAccess || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('allowRemoteAccess', false);

    if (allowRemoteAccess) {
      if (lodash_size__WEBPACK_IMPORTED_MODULE_14___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('users')) === 0) {
        log.warn('You\'ve enabled remote access to the server. It\'s recommended to create an user account to protect against malicious attacks.');
      }

      lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'allowRemoteAccess', allowRemoteAccess);
    }
  }
  var _options = options,
      _options$port = _options.port,
      port = _options$port === void 0 ? 0 : _options$port,
      host = _options.host,
      backlog = _options.backlog;
  var mountPoints = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_16___default()([].concat(_toConsumableArray(ensure_array__WEBPACK_IMPORTED_MODULE_7___default()(options.mountPoints)), _toConsumableArray(ensure_array__WEBPACK_IMPORTED_MODULE_7___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('mountPoints')))), lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default.a).filter(function (mount) {
    if (!mount || !mount.route || mount.route === '/') {
      log.error("Must specify a valid route path ".concat(JSON.stringify(mount.route), "."));
      return false;
    }

    return true;
  });
  var routes = [];
  mountPoints.forEach(function (mount) {
    if (Object(_lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__[/* ensureString */ "b"])(mount.target).match(/^(http|https):\/\//i)) {
      log.info("Starting a proxy server to proxy all requests starting with ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(mount.route), " to ").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(mount.target)));
      routes.push({
        type: 'server',
        route: mount.route,
        server: function server(options) {
          var _options2 = _objectSpread({}, options),
              _options2$route = _options2.route,
              route = _options2$route === void 0 ? '/' : _options2$route;

          var routeWithoutTrailingSlash = lodash_trimEnd__WEBPACK_IMPORTED_MODULE_15___default()(route, '/');
          var target = mount.target;
          var targetPathname = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(target).pathname;
          var proxyPathPattern = new RegExp('^' + lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_11___default()(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(targetPathname, routeWithoutTrailingSlash)), 'i');
          log.debug("> route=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(route)));
          log.debug("> routeWithoutTrailingSlash=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(routeWithoutTrailingSlash)));
          log.debug("> target=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(target)));
          log.debug("> targetPathname=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(targetPathname)));
          log.debug("> proxyPathPattern=RegExp(".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(proxyPathPattern), ")"));
          var proxy = http_proxy__WEBPACK_IMPORTED_MODULE_10___default.a.createProxyServer({
            // Change the origin of the host header to the target URL
            changeOrigin: true,
            // Do not verify the SSL certificate for self-signed certs
            //secure: false,
            target: target
          });
          proxy.on('proxyReq', function (proxyReq, req, res, options) {
            var originalPath = proxyReq.path || '';
            proxyReq.path = originalPath.replace(proxyPathPattern, targetPathname).replace('//', '/');
            log.debug("proxy.on('proxyReq'): modifiedPath=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(proxyReq.path), ", originalPath=").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(originalPath)));
          });
          proxy.on('proxyRes', function (proxyRes, req, res) {
            log.debug("proxy.on('proxyRes'): headers=".concat(JSON.stringify(proxyRes.headers, true, 2)));
          });
          var app = express__WEBPACK_IMPORTED_MODULE_9___default()(); // Matched routes:
          //   /widget/
          //   /widget/v1/

          app.all(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(routeWithoutTrailingSlash, '*'), function (req, res) {
            var url = req.url;
            log.debug("proxy.web(): url=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(url)));
            proxy.web(req, res);
          }); // Matched routes:
          //   /widget

          app.all(routeWithoutTrailingSlash, function (req, res, next) {
            var url = req.url; // Redirect URL with a trailing slash

            if (url.indexOf(routeWithoutTrailingSlash) === 0 && url.indexOf(routeWithoutTrailingSlash + '/') < 0) {
              var redirectUrl = routeWithoutTrailingSlash + '/' + url.slice(routeWithoutTrailingSlash.length);
              log.debug("redirect: url=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(url), ", redirectUrl=").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(redirectUrl)));
              res.redirect(301, redirectUrl);
              return;
            }

            next();
          });
          return app;
        }
      });
    } else {
      // expandTilde('~') => '/Users/<userhome>'
      var directory = expand_tilde__WEBPACK_IMPORTED_MODULE_8___default()(Object(_lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__[/* ensureString */ "b"])(mount.target)).trim();
      log.info("Mounting a directory ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(directory)), " to serve requests starting with ").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(mount.route)));

      if (!directory) {
        log.error("The directory path ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(directory)), " must not be empty."));
        return;
      }

      if (!path__WEBPACK_IMPORTED_MODULE_3___default.a.isAbsolute(directory)) {
        log.error("The directory path ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(directory)), " must be absolute."));
        return;
      }

      if (!fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(directory)) {
        log.error("The directory path ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(directory)), " does not exist."));
        return;
      }

      routes.push({
        type: 'static',
        route: mount.route,
        directory: directory
      });
    }
  });
  routes.push({
    type: 'server',
    route: '/',
    server: function server() {
      return Object(_app__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])();
    }
  });
  webappengine__WEBPACK_IMPORTED_MODULE_17___default()({
    port: port,
    host: host,
    backlog: backlog,
    routes: routes
  }).on('ready', function (server) {
    // cncengine service
    _services_cncengine__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].start(server, options.controller || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('controller', ''));
    var address = server.address().address;
    var port = server.address().port;
    callback && callback(null, {
      address: address,
      port: port,
      mountPoints: mountPoints
    });

    if (address !== '0.0.0.0') {
      log.info('Starting the server at ' + chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow("http://".concat(address, ":").concat(port)));
      return;
    }

    dns__WEBPACK_IMPORTED_MODULE_0___default.a.lookup(os__WEBPACK_IMPORTED_MODULE_2___default.a.hostname(), {
      family: 4,
      all: true
    }, function (err, addresses) {
      if (err) {
        log.error('Can\'t resolve host name:', err);
        return;
      }

      addresses.forEach(function (_ref) {
        var address = _ref.address,
            family = _ref.family;
        log.info('Starting the server at ' + chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow("http://".concat(address, ":").concat(port)));
      });
    });
  }).on('error', function (err) {
    callback && callback(err);
    log.error(err);
  });
};



/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("hogan.js");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map