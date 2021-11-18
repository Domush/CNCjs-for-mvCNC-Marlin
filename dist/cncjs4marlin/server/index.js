module.exports =
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
    /******/
  })
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _settings_development__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _settings_production__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);




      const env = "production" || false; // Ensure production environment if empty

      const settings = {};

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

      /***/
    }),
/* 1 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ERR_BAD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return ERR_UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return ERR_FORBIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () { return ERR_NOT_FOUND; });
/* unused harmony export ERR_METHOD_NOT_ALLOWED */
/* unused harmony export ERR_NOT_ACCEPTABLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return ERR_CONFLICT; });
/* unused harmony export ERR_LENGTH_REQUIRED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () { return ERR_PRECONDITION_FAILED; });
/* unused harmony export ERR_PAYLOAD_TOO_LARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return ERR_INTERNAL_SERVER_ERROR; });
      // Error Codes
      const ERR_BAD_REQUEST = 400;
      const ERR_UNAUTHORIZED = 401;
      const ERR_FORBIDDEN = 403;
      const ERR_NOT_FOUND = 404;
      const ERR_METHOD_NOT_ALLOWED = 405;
      const ERR_NOT_ACCEPTABLE = 406;
      const ERR_CONFLICT = 409;
      const ERR_LENGTH_REQUIRED = 411;
      const ERR_PRECONDITION_FAILED = 412;
      const ERR_PAYLOAD_TOO_LARGE = 413;
      const ERR_INTERNAL_SERVER_ERROR = 500;

      /***/
    }),
/* 2 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var lodash_unset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);






      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





      const log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])('service:configstore');
      const defaultState = {
        // default state
        checkForUpdates: true,
        controller: {
          exception: {
            ignoreErrors: false
          }
        }
      };

      class ConfigStore extends events__WEBPACK_IMPORTED_MODULE_5___default.a.EventEmitter {
        constructor() {
          super(...arguments);

          _defineProperty(this, "file", '');

          _defineProperty(this, "config", {});

          _defineProperty(this, "watcher", null);
        }

        // @param {string} file The path to a filename.
        // @return {object} The config object.
        load(file) {
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
              const content = JSON.stringify({});
              fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync(this.file, content, 'utf8');
            }

            this.watcher = fs__WEBPACK_IMPORTED_MODULE_6___default.a.watch(this.file, (eventType, filename) => {
              log.debug("fs.watch(eventType='".concat(eventType, "', filename='").concat(filename, "')"));

              if (eventType === 'change') {
                log.debug("\"".concat(filename, "\" has been changed"));
                const ok = this.reload();
                ok && this.emit('change', this.config); // it is ok to emit change event
              }
            });
          } catch (err) {
            log.error(err);
            this.emit('error', err); // emit error event
          }

          return this.config;
        }

        reload() {
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

        sync() {
          try {
            const content = JSON.stringify(this.config, null, 4);
            fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync(this.file, content, 'utf8');
          } catch (err) {
            log.error("Unable to write data to \"".concat(this.file, "\""));
            this.emit('error', err); // emit error event

            return false;
          }

          return true;
        }

        has(key) {
          return lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(this.config, key);
        }

        get(key, defaultValue) {
          if (!this.config) {
            this.reload();
          }

          return key !== undefined ? lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(this.config, key, defaultValue) : this.config;
        }

        set(key, value, options) {
          const {
            silent = false
          } = _objectSpread({}, options);

          if (key === undefined) {
            return;
          }

          const ok = this.reload(); // reload before making changes

          lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(this.config, key, value);

          ok && !silent && this.sync(); // it is ok to write
        }

        unset(key) {
          if (key === undefined) {
            return;
          }

          const ok = this.reload(); // reload before making changes

          lodash_unset__WEBPACK_IMPORTED_MODULE_0___default()(this.config, key);

          ok && this.sync(); // it is ok to write
        }

      }

      const configstore = new ConfigStore();
/* harmony default export */ __webpack_exports__["a"] = (configstore);

      /***/
    }),
/* 3 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      const normalize = str => str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/#/g, '#').replace(/:\//g, '://');

      const urljoin = function urljoin() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        let joined = [].slice.call(args, 0).join('/');
        return normalize(joined);
      };

/* harmony default export */ __webpack_exports__["a"] = (urljoin);

      /***/
    }),
/* 4 */
/***/ (function (module, exports) {

      module.exports = require("lodash/get");

      /***/
    }),
/* 5 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      var api_version_namespaceObject = {};
      __webpack_require__.r(api_version_namespaceObject);
      __webpack_require__.d(api_version_namespaceObject, "getLatestVersion", function () { return getLatestVersion; });
      var api_state_namespaceObject = {};
      __webpack_require__.r(api_state_namespaceObject);
      __webpack_require__.d(api_state_namespaceObject, "get", function () { return get; });
      __webpack_require__.d(api_state_namespaceObject, "unset", function () { return unset; });
      __webpack_require__.d(api_state_namespaceObject, "set", function () { return set; });
      var api_gcode_namespaceObject = {};
      __webpack_require__.r(api_gcode_namespaceObject);
      __webpack_require__.d(api_gcode_namespaceObject, "upload", function () { return upload; });
      __webpack_require__.d(api_gcode_namespaceObject, "fetch", function () { return fetch; });
      __webpack_require__.d(api_gcode_namespaceObject, "download", function () { return download; });
      var api_controllers_namespaceObject = {};
      __webpack_require__.r(api_controllers_namespaceObject);
      __webpack_require__.d(api_controllers_namespaceObject, "get", function () { return api_controllers_get; });
      var api_watch_namespaceObject = {};
      __webpack_require__.r(api_watch_namespaceObject);
      __webpack_require__.d(api_watch_namespaceObject, "getFiles", function () { return getFiles; });
      __webpack_require__.d(api_watch_namespaceObject, "readFile", function () { return readFile; });
      var api_commands_namespaceObject = {};
      __webpack_require__.r(api_commands_namespaceObject);
      __webpack_require__.d(api_commands_namespaceObject, "fetch", function () { return api_commands_fetch; });
      __webpack_require__.d(api_commands_namespaceObject, "create", function () { return create; });
      __webpack_require__.d(api_commands_namespaceObject, "read", function () { return read; });
      __webpack_require__.d(api_commands_namespaceObject, "update", function () { return update; });
      __webpack_require__.d(api_commands_namespaceObject, "__delete", function () { return __delete; });
      __webpack_require__.d(api_commands_namespaceObject, "run", function () { return run; });
      var api_events_namespaceObject = {};
      __webpack_require__.r(api_events_namespaceObject);
      __webpack_require__.d(api_events_namespaceObject, "fetch", function () { return api_events_fetch; });
      __webpack_require__.d(api_events_namespaceObject, "create", function () { return api_events_create; });
      __webpack_require__.d(api_events_namespaceObject, "read", function () { return api_events_read; });
      __webpack_require__.d(api_events_namespaceObject, "update", function () { return api_events_update; });
      __webpack_require__.d(api_events_namespaceObject, "__delete", function () { return api_events_delete; });
      var api_machines_namespaceObject = {};
      __webpack_require__.r(api_machines_namespaceObject);
      __webpack_require__.d(api_machines_namespaceObject, "fetch", function () { return api_machines_fetch; });
      __webpack_require__.d(api_machines_namespaceObject, "create", function () { return api_machines_create; });
      __webpack_require__.d(api_machines_namespaceObject, "read", function () { return api_machines_read; });
      __webpack_require__.d(api_machines_namespaceObject, "update", function () { return api_machines_update; });
      __webpack_require__.d(api_machines_namespaceObject, "__delete", function () { return api_machines_delete; });
      var api_macros_namespaceObject = {};
      __webpack_require__.r(api_macros_namespaceObject);
      __webpack_require__.d(api_macros_namespaceObject, "fetch", function () { return api_macros_fetch; });
      __webpack_require__.d(api_macros_namespaceObject, "create", function () { return api_macros_create; });
      __webpack_require__.d(api_macros_namespaceObject, "read", function () { return api_macros_read; });
      __webpack_require__.d(api_macros_namespaceObject, "update", function () { return api_macros_update; });
      __webpack_require__.d(api_macros_namespaceObject, "__delete", function () { return api_macros_delete; });
      var api_mdi_namespaceObject = {};
      __webpack_require__.r(api_mdi_namespaceObject);
      __webpack_require__.d(api_mdi_namespaceObject, "fetch", function () { return api_mdi_fetch; });
      __webpack_require__.d(api_mdi_namespaceObject, "create", function () { return api_mdi_create; });
      __webpack_require__.d(api_mdi_namespaceObject, "read", function () { return api_mdi_read; });
      __webpack_require__.d(api_mdi_namespaceObject, "update", function () { return api_mdi_update; });
      __webpack_require__.d(api_mdi_namespaceObject, "bulkUpdate", function () { return bulkUpdate; });
      __webpack_require__.d(api_mdi_namespaceObject, "__delete", function () { return api_mdi_delete; });
      var api_users_namespaceObject = {};
      __webpack_require__.r(api_users_namespaceObject);
      __webpack_require__.d(api_users_namespaceObject, "signin", function () { return signin; });
      __webpack_require__.d(api_users_namespaceObject, "fetch", function () { return api_users_fetch; });
      __webpack_require__.d(api_users_namespaceObject, "create", function () { return api_users_create; });
      __webpack_require__.d(api_users_namespaceObject, "read", function () { return api_users_read; });
      __webpack_require__.d(api_users_namespaceObject, "update", function () { return api_users_update; });
      __webpack_require__.d(api_users_namespaceObject, "__delete", function () { return api_users_delete; });
      var api_file_namespaceObject = {};
      __webpack_require__.r(api_file_namespaceObject);
      __webpack_require__.d(api_file_namespaceObject, "uploadFile", function () { return uploadFile; });

      // EXTERNAL MODULE: external "url"
      var external_url_ = __webpack_require__(37);
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






      const pkgName = 'cncjs4marlin';
      const getLatestVersion = (req, res) => {
        const scope = pkgName.split('/')[0];
        const regUrl = external_registry_url_default()(scope);
        const pkgUrl = external_url_default.a.resolve(regUrl, encodeURIComponent(pkgName).replace(/^%40/, '@'));
        const authInfo = external_registry_auth_token_default()(regUrl);
        const headers = {};

        if (authInfo) {
          headers.Authorization = "".concat(authInfo.type, " ").concat(authInfo.token);
        }

        external_superagent_default.a.get(pkgUrl).set(headers).end((err, _res) => {
          if (err) {
            res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
              msg: "Failed to connect to ".concat(pkgUrl, ": code=").concat(err.code)
            });
            return;
          }

          const {
            body: data = {}
          } = _objectSpread({}, _res);

          data.time = data.time || {};
          data['dist-tags'] = data['dist-tags'] || {};
          data.versions = data.versions || {};
          const time = data.time[latest];
          const latest = data['dist-tags'].latest;

          const {
            name,
            version,
            description,
            homepage
          } = _objectSpread({}, data.versions[latest]);

          res.send({
            time,
            name,
            version,
            description,
            homepage
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


      function api_state_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function api_state_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_state_ownKeys(Object(source), true).forEach(function (key) { api_state_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_state_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function api_state_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




      const get = (req, res) => {
        const query = req.query || {};

        if (!query.key) {
          res.send(configstore["a" /* default */].get('state'));
          return;
        }

        const key = "state.".concat(query.key);

        if (!configstore["a" /* default */].has(key)) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const value = configstore["a" /* default */].get(key);
        res.send(value);
      };
      const unset = (req, res) => {
        const query = req.query || {};

        if (!query.key) {
          res.send(configstore["a" /* default */].get('state'));
          return;
        }

        const key = "state.".concat(query.key);

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
      const set = (req, res) => {
        const query = req.query || {};

        const data = api_state_objectSpread({}, req.body);

        if (query.key) {
          configstore["a" /* default */].set("state.".concat(query.key), data);
          res.send({
            err: false
          });
          return;
        }

        external_deep_keys_default()(data).forEach(key => {
          const oldValue = configstore["a" /* default */].get("state.".concat(key));

          const newValue = get_default()(data, key);

          if (typeof oldValue === 'object' && typeof newValue === 'object') {
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




      const upload = (req, res) => {
        const {
          port,
          name,
          gcode,
          context = {}
        } = req.body;

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

        const controller = store["a" /* default */].get('controllers["' + port + '"]');

        if (!controller) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'Controller not found'
          });
          return;
        } // Load G-code


        controller.command('gcode:load', name, gcode, context, (err, state) => {
          if (err) {
            res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
              msg: 'Failed to load G-code: ' + err
            });
            return;
          }

          res.send(api_gcode_objectSpread({}, state));
        });
      };
      const fetch = (req, res) => {
        const port = req.query.port;

        if (!port) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'No port specified'
          });
          return;
        }

        const controller = store["a" /* default */].get('controllers["' + port + '"]');

        if (!controller) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'Controller not found'
          });
          return;
        }

        const {
          sender
        } = controller;
        res.send(api_gcode_objectSpread(api_gcode_objectSpread({}, sender.toJSON()), {}, {
          data: sender.state.gcode
        }));
      };
      const download = (req, res) => {
        const port = get_default()(req, 'query.port') || get_default()(req, 'body.port');

        if (!port) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'No port specified'
          });
          return;
        }

        const controller = store["a" /* default */].get('controllers["' + port + '"]');

        if (!controller) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'Controller not found'
          });
          return;
        }

        const {
          sender
        } = controller;
        const filename = sender.state.name || 'noname.txt';
        const content = sender.state.gcode || '';
        res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent(filename));
        res.setHeader('Connection', 'close');
        res.write(content);
        res.end();
      };
      // CONCATENATED MODULE: ./api/api.controllers.js

      const api_controllers_get = (req, res) => {
        const list = [];
        const controllers = store["a" /* default */].get('controllers');
        Object.keys(controllers).forEach(port => {
          const controller = controllers[port];

          if (controller) {
            list.push(controller.status);
          }
        });
        res.send(list);
      };
      // EXTERNAL MODULE: ./services/monitor/index.js + 1 modules
      var monitor = __webpack_require__(23);

      // CONCATENATED MODULE: ./api/api.watch.js


      const getFiles = (req, res) => {
        const path = req.body.path || req.query.path || '';
        const files = monitor["a" /* default */].getFiles(path);
        res.send({
          path: path,
          files: files
        });
      };
      const readFile = (req, res) => {
        const file = req.body.file || req.query.file || '';
        monitor["a" /* default */].readFile(file, (err, data) => {
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
      var isPlainObject_ = __webpack_require__(14);
      var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_);

      // EXTERNAL MODULE: external "uuid"
      var external_uuid_ = __webpack_require__(16);
      var external_uuid_default = /*#__PURE__*/__webpack_require__.n(external_uuid_);

      // EXTERNAL MODULE: ./config/settings.js
      var settings = __webpack_require__(0);

      // EXTERNAL MODULE: ./lib/logger.js
      var logger = __webpack_require__(7);

      // EXTERNAL MODULE: ./services/taskrunner/index.js + 1 modules
      var taskrunner = __webpack_require__(21);

      // CONCATENATED MODULE: ./api/paging.js
      const getPagingRange = _ref => {
        let {
          page = 1,
          pageLength = 10,
          totalRecords = 0
        } = _ref;
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

        const begin = (page - 1) * pageLength;
        const end = Math.min((page - 1) * pageLength + pageLength, totalRecords);
        return [begin, end];
      };
      // CONCATENATED MODULE: ./api/api.commands.js
      function api_commands_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function api_commands_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_commands_ownKeys(Object(source), true).forEach(function (key) { api_commands_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_commands_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function api_commands_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











      const log = Object(logger["a" /* default */])('api:commands');
      const CONFIG_KEY = 'commands';

      const getSanitizedRecords = () => {
        const records = castArray_default()(configstore["a" /* default */].get(CONFIG_KEY, []));
        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const api_commands_fetch = (req, res) => {
        const records = getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => {
              const {
                id,
                mtime,
                enabled,
                title,
                commands
              } = api_commands_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                title,
                commands
              };
            })
          });
        } else {
          res.send({
            records: records.map(record => {
              const {
                id,
                mtime,
                enabled,
                title,
                commands
              } = api_commands_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                title,
                commands
              };
            })
          });
        }
      };
      const create = (req, res) => {
        const {
          enabled = true,
          title = '',
          commands = ''
        } = api_commands_objectSpread({}, req.body);

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
          const records = getSanitizedRecords();
          const record = {
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
      const read = (req, res) => {
        const id = req.params.id;
        const records = getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          mtime,
          enabled,
          title,
          commands
        } = api_commands_objectSpread({}, record);

        res.send({
          id,
          mtime,
          enabled,
          title,
          commands
        });
      };
      const update = (req, res) => {
        const id = req.params.id;
        const records = getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          enabled = record.enabled,
          title = record.title,
          commands = record.commands
        } = api_commands_objectSpread({}, req.body); // Skip validation for "enabled", "title", and "commands"


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
      const __delete = (req, res) => {
        const id = req.params.id;
        const records = getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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
      const run = (req, res) => {
        const id = req.params.id;
        const records = getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const title = record.title;
        const commands = record.commands;
        log.info("run: title=\"".concat(title, "\", commands=\"").concat(commands, "\""));
        const taskId = taskrunner["a" /* default */].run(commands, title);
        res.send({
          taskId: taskId
        });
      };
      // CONCATENATED MODULE: ./api/api.events.js
      function api_events_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function api_events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_events_ownKeys(Object(source), true).forEach(function (key) { api_events_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_events_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function api_events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










      const api_events_log = Object(logger["a" /* default */])('api:events');
      const api_events_CONFIG_KEY = 'events';

      const api_events_getSanitizedRecords = () => {
        const records = castArray_default()(configstore["a" /* default */].get(api_events_CONFIG_KEY, []));
        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const api_events_fetch = (req, res) => {
        const records = api_events_getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => {
              const {
                id,
                mtime,
                enabled,
                event,
                trigger,
                commands
              } = api_events_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                event,
                trigger,
                commands
              };
            })
          });
        } else {
          res.send({
            records: records.map(record => {
              const {
                id,
                mtime,
                enabled,
                event,
                trigger,
                commands
              } = api_events_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                event,
                trigger,
                commands
              };
            })
          });
        }
      };
      const api_events_create = (req, res) => {
        const {
          enabled = true,
          event = '',
          trigger = '',
          commands = ''
        } = api_events_objectSpread({}, req.body);

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
          const records = api_events_getSanitizedRecords();
          const record = {
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
      const api_events_read = (req, res) => {
        const id = req.params.id;
        const records = api_events_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          mtime,
          enabled,
          event,
          trigger,
          commands
        } = api_events_objectSpread({}, record);

        res.send({
          id,
          mtime,
          enabled,
          event,
          trigger,
          commands
        });
      };
      const api_events_update = (req, res) => {
        const id = req.params.id;
        const records = api_events_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          enabled = record.enabled,
          event = record.event,
          trigger = record.trigger,
          commands = record.commands
        } = api_events_objectSpread({}, req.body); // Skip validation for "enabled", "event", "trigger", and "commands"


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
      const api_events_delete = (req, res) => {
        const id = req.params.id;
        const records = api_events_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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
      var ensure_type = __webpack_require__(17);

      // CONCATENATED MODULE: ./api/api.machines.js
      function api_machines_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function api_machines_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_machines_ownKeys(Object(source), true).forEach(function (key) { api_machines_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_machines_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function api_machines_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













      const api_machines_log = Object(logger["a" /* default */])('api:machines');
      const api_machines_CONFIG_KEY = 'machines';

      const api_machines_getSanitizedRecords = () => {
        const records = castArray_default()(configstore["a" /* default */].get(api_machines_CONFIG_KEY, []));

        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const ensureMachineProfile = payload => {
        const {
          id,
          name,
          limits
        } = api_machines_objectSpread({}, payload);

        const {
          xmin = 0,
          xmax = 0,
          ymin = 0,
          ymax = 0,
          zmin = 0,
          zmax = 0
        } = api_machines_objectSpread({}, limits);

        return {
          id,
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

      const api_machines_fetch = (req, res) => {
        const records = api_machines_getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => ensureMachineProfile(record))
          });
        } else {
          res.send({
            records: records.map(record => ensureMachineProfile(record))
          });
        }
      };
      const api_machines_create = (req, res) => {
        const record = api_machines_objectSpread({}, req.body);

        if (!record.name) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'The "name" parameter must not be empty'
          });
          return;
        }

        try {
          const records = api_machines_getSanitizedRecords();
          records.push(ensureMachineProfile(record));
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
      const api_machines_read = (req, res) => {
        const id = req.params.id;
        const records = api_machines_getSanitizedRecords();

        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        res.send(ensureMachineProfile(record));
      };
      const api_machines_update = (req, res) => {
        const id = req.params.id;
        const records = api_machines_getSanitizedRecords();

        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const nextRecord = req.body;
          [// [key, ensureType]
            ['name', ensure_type["b" /* ensureString */]], ['limits.xmin', ensure_type["a" /* ensureNumber */]], ['limits.xmax', ensure_type["a" /* ensureNumber */]], ['limits.ymin', ensure_type["a" /* ensureNumber */]], ['limits.ymax', ensure_type["a" /* ensureNumber */]], ['limits.zmin', ensure_type["a" /* ensureNumber */]], ['limits.zmax', ensure_type["a" /* ensureNumber */]]].forEach(it => {
              const [key, ensureType] = it;

              const defaultValue = get_default()(record, key);

              const value = get_default()(nextRecord, key, defaultValue);

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
      const api_machines_delete = (req, res) => {
        const id = req.params.id;
        const records = api_machines_getSanitizedRecords();

        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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










      const api_macros_log = Object(logger["a" /* default */])('api:macros');
      const api_macros_CONFIG_KEY = 'macros';

      const api_macros_getSanitizedRecords = () => {
        const records = castArray_default()(configstore["a" /* default */].get(api_macros_CONFIG_KEY, []));
        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const api_macros_fetch = (req, res) => {
        const records = api_macros_getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => {
              const {
                id,
                mtime,
                name,
                content,
                description,
                column,
                rowIndex
              } = api_macros_objectSpread({}, record);

              return {
                id,
                mtime,
                name,
                content,
                description,
                column,
                rowIndex
              };
            })
          });
        } else {
          res.send({
            records: records.map(record => {
              const {
                id,
                mtime,
                name,
                content,
                description,
                column,
                rowIndex
              } = api_macros_objectSpread({}, record);

              return {
                id,
                mtime,
                name,
                content,
                description,
                column,
                rowIndex
              };
            })
          });
        }
      };
      const api_macros_create = (req, res) => {
        const {
          name,
          content,
          description = ''
        } = api_macros_objectSpread({}, req.body);

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
          const records = api_macros_getSanitizedRecords();
          let column, rowIndex;
          const column1Length = records.filter(macro => macro.column === 'column1').sort((a, b) => a.rowIndex - b.rowIndex).length;
          const column2Length = records.filter(macro => macro.column === 'column2').sort((a, b) => a.rowIndex - b.rowIndex).length;

          if (column2Length >= column1Length) {
            column = 'column1';
            rowIndex = column1Length;
          } else {
            column = 'column2';
            rowIndex = column2Length;
          }

          const record = {
            id: external_uuid_default.a.v4(),
            mtime: new Date().getTime(),
            name,
            content,
            description,
            column,
            rowIndex
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
      const api_macros_read = (req, res) => {
        const id = req.params.id;
        const records = api_macros_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          mtime,
          name,
          content,
          description,
          column,
          rowIndex
        } = api_macros_objectSpread({}, record);

        res.send({
          id,
          mtime,
          name,
          content,
          description,
          column,
          rowIndex
        });
      };
      const api_macros_update = (req, res) => {
        const id = req.params.id;
        const records = api_macros_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          name = record.name,
          content = record.content,
          description = record.description,
          column = record.column,
          rowIndex = record.rowIndex
        } = api_macros_objectSpread({}, req.body);
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
      const api_macros_delete = (req, res) => {
        const id = req.params.id;
        const records = api_macros_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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










      const api_mdi_log = Object(logger["a" /* default */])('api:mdi');
      const api_mdi_CONFIG_KEY = 'mdi';

      const api_mdi_getSanitizedRecords = () => {
        const records = external_ensure_array_default()(configstore["a" /* default */].get(api_mdi_CONFIG_KEY, []));
        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const api_mdi_fetch = (req, res) => {
        const records = api_mdi_getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => {
              const {
                id,
                name,
                command,
                grid = {}
              } = api_mdi_objectSpread({}, record);

              return {
                id,
                name,
                command,
                grid
              };
            })
          });
        } else {
          res.send({
            records: records.map(record => {
              const {
                id,
                name,
                command,
                grid = {}
              } = api_mdi_objectSpread({}, record);

              return {
                id,
                name,
                command,
                grid
              };
            })
          });
        }
      };
      const api_mdi_create = (req, res) => {
        const {
          name,
          command,
          grid = {}
        } = api_mdi_objectSpread({}, req.body);

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
          const records = api_mdi_getSanitizedRecords();
          const record = {
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
      const api_mdi_read = (req, res) => {
        const id = req.params.id;
        const records = api_mdi_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          name,
          command,
          grid = {}
        } = api_mdi_objectSpread({}, record);

        res.send({
          id,
          name,
          command,
          grid
        });
      };
      const api_mdi_update = (req, res) => {
        const id = req.params.id;
        const records = api_mdi_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          name = record.name,
          command = record.command,
          grid = record.grid
        } = api_mdi_objectSpread({}, req.body);
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
      const bulkUpdate = (req, res) => {
        const {
          records
        } = api_mdi_objectSpread({}, req.body);

        if (!records) {
          res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'The "records" parameter must not be empty'
          });
          return;
        }

        const filteredRecords = external_ensure_array_default()(records).filter(record => isPlainObject_default()(record));

        for (let i = 0; i < filteredRecords.length; ++i) {
          const record = filteredRecords[i];

          const {
            id,
            name,
            command,
            grid = {}
          } = api_mdi_objectSpread({}, record);

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
      const api_mdi_delete = (req, res) => {
        const id = req.params.id;
        const records = api_mdi_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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
      function api_users_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function api_users_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_users_ownKeys(Object(source), true).forEach(function (key) { api_users_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_users_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function api_users_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













      const api_users_log = Object(logger["a" /* default */])('api:users');
      const api_users_CONFIG_KEY = 'users'; // Generate access token
      // https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
      // Note. Do not use password and other sensitive fields in the payload

      const api_users_generateAccessToken = function generateAccessToken(payload) {
        let secret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : settings["a" /* default */].secret;
        const token = external_jsonwebtoken_default.a.sign(payload, secret, {
          expiresIn: settings["a" /* default */].accessTokenLifetime
        });
        return token;
      };

      const api_users_getSanitizedRecords = () => {
        const records = external_ensure_array_default()(configstore["a" /* default */].get(api_users_CONFIG_KEY, []));
        let shouldUpdate = false;

        for (let i = 0; i < records.length; ++i) {
          if (!isPlainObject_default()(records[i])) {
            records[i] = {};
          }

          const record = records[i];

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

      const signin = (req, res) => {
        const {
          token = '',
          name = '',
          password = ''
        } = api_users_objectSpread({}, req.body);

        const users = api_users_getSanitizedRecords();
        const enabledUsers = users.filter(user => {
          return user.enabled;
        });

        if (enabledUsers.length === 0) {
          const user = {
            id: '',
            name: ''
          };

          const payload = api_users_objectSpread({}, user);

          const token = api_users_generateAccessToken(payload, settings["a" /* default */].secret); // generate access token

          res.send({
            enabled: false,
            // session is disabled
            token: token,
            name: user.name // empty name

          });
          return;
        }

        if (!token) {
          const user = find_default()(enabledUsers, {
            name: name
          });
          const valid = user && external_bcrypt_nodejs_default.a.compareSync(password, user.password);

          if (!valid) {
            res.status(constants["g" /* ERR_UNAUTHORIZED */]).send({
              msg: 'Authentication failed'
            });
            return;
          }

          const payload = {
            id: user.id,
            name: user.name
          };
          const token = api_users_generateAccessToken(payload, settings["a" /* default */].secret); // generate access token

          res.send({
            enabled: true,
            // session is enabled
            token: token,
            // new token
            name: user.name
          });
          return;
        }

        external_jsonwebtoken_default.a.verify(token, settings["a" /* default */].secret, (err, user) => {
          if (err) {
            res.status(constants["d" /* ERR_INTERNAL_SERVER_ERROR */]).send({
              msg: 'Internal server error'
            });
            return;
          }

          const iat = new Date(user.iat * 1000).toISOString();
          const exp = new Date(user.exp * 1000).toISOString();
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
      const api_users_fetch = (req, res) => {
        const records = api_users_getSanitizedRecords();
        const paging = !!req.query.paging;

        if (paging) {
          const {
            page = 1,
            pageLength = 10
          } = req.query;
          const totalRecords = records.length;
          const [begin, end] = getPagingRange({
            page,
            pageLength,
            totalRecords
          });
          const pagedRecords = records.slice(begin, end);
          res.send({
            pagination: {
              page: Number(page),
              pageLength: Number(pageLength),
              totalRecords: Number(totalRecords)
            },
            records: pagedRecords.map(record => {
              const {
                id,
                mtime,
                enabled,
                name
              } = api_users_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                name
              };
            })
          });
        } else {
          res.send({
            records: records.map(record => {
              const {
                id,
                mtime,
                enabled,
                name
              } = api_users_objectSpread({}, record);

              return {
                id,
                mtime,
                enabled,
                name
              };
            })
          });
        }
      };
      const api_users_create = (req, res) => {
        const {
          enabled = true,
          name = '',
          password = ''
        } = api_users_objectSpread({}, req.body);

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

        const records = api_users_getSanitizedRecords();

        if (find_default()(records, {
          name: name
        })) {
          res.status(constants["b" /* ERR_CONFLICT */]).send({
            msg: 'The specified user already exists'
          });
          return;
        }

        try {
          const salt = external_bcrypt_nodejs_default.a.genSaltSync();
          const hash = external_bcrypt_nodejs_default.a.hashSync(password.trim(), salt);
          const records = api_users_getSanitizedRecords();
          const record = {
            id: external_uuid_default.a.v4(),
            mtime: new Date().getTime(),
            enabled: enabled,
            name: name,
            password: hash
          };
          records.push(record);
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
      const api_users_read = (req, res) => {
        const id = req.params.id;
        const records = api_users_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          mtime,
          enabled,
          name
        } = api_users_objectSpread({}, record);

        res.send({
          id,
          mtime,
          enabled,
          name
        });
      };
      const api_users_update = (req, res) => {
        const id = req.params.id;
        const records = api_users_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        const {
          enabled = record.enabled,
          name = record.name,
          oldPassword = '',
          newPassword = ''
        } = api_users_objectSpread({}, req.body);

        const willChangePassword = oldPassword && newPassword; // Skip validation for "enabled" and "name"

        if (willChangePassword && !external_bcrypt_nodejs_default.a.compareSync(oldPassword, record.password)) {
          res.status(constants["f" /* ERR_PRECONDITION_FAILED */]).send({
            msg: 'Incorrect password'
          });
          return;
        }

        const inuse = record => {
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
            const salt = external_bcrypt_nodejs_default.a.genSaltSync();
            const hash = external_bcrypt_nodejs_default.a.hashSync(newPassword.trim(), salt);
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
      const api_users_delete = (req, res) => {
        const id = req.params.id;
        const records = api_users_getSanitizedRecords();
        const record = find_default()(records, {
          id: id
        });

        if (!record) {
          res.status(constants["e" /* ERR_NOT_FOUND */]).send({
            msg: 'Not found'
          });
          return;
        }

        try {
          const filteredRecords = records.filter(record => {
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
      var cncengine = __webpack_require__(43);

      // CONCATENATED MODULE: ./api/api.file.js

      // Upload files using superagent:
      // https://stackoverflow.com/questions/31748936/how-to-send-files-with-superagent

      const uploadFile = (req, res) => {
        const {
          port,
          visualizer
        } = req.body;
        let {
          file
        } = req;

        if (!file) {
          return res.status(constants["a" /* ERR_BAD_REQUEST */]).send({
            msg: 'No file attached'
          });
        }

        const {
          buffer
        } = file;
        const gcode = buffer.toString();
        cncengine["a" /* default */].load({
          gcode,
          port,
          name: file.originalname,
          size: file.size,
          visualizer
        });
        return res.send({
          msg: 'Successfully loaded file'
        });
      };
// CONCATENATED MODULE: ./api/index.js
/* concated harmony reexport version */__webpack_require__.d(__webpack_exports__, "k", function () { return api_version_namespaceObject; });
/* concated harmony reexport state */__webpack_require__.d(__webpack_exports__, "i", function () { return api_state_namespaceObject; });
/* concated harmony reexport gcode */__webpack_require__.d(__webpack_exports__, "e", function () { return api_gcode_namespaceObject; });
/* concated harmony reexport controllers */__webpack_require__.d(__webpack_exports__, "b", function () { return api_controllers_namespaceObject; });
/* concated harmony reexport watch */__webpack_require__.d(__webpack_exports__, "l", function () { return api_watch_namespaceObject; });
/* concated harmony reexport commands */__webpack_require__.d(__webpack_exports__, "a", function () { return api_commands_namespaceObject; });
/* concated harmony reexport events */__webpack_require__.d(__webpack_exports__, "c", function () { return api_events_namespaceObject; });
/* concated harmony reexport machines */__webpack_require__.d(__webpack_exports__, "f", function () { return api_machines_namespaceObject; });
/* concated harmony reexport macros */__webpack_require__.d(__webpack_exports__, "g", function () { return api_macros_namespaceObject; });
/* concated harmony reexport mdi */__webpack_require__.d(__webpack_exports__, "h", function () { return api_mdi_namespaceObject; });
/* concated harmony reexport users */__webpack_require__.d(__webpack_exports__, "j", function () { return api_users_namespaceObject; });
/* concated harmony reexport files */__webpack_require__.d(__webpack_exports__, "d", function () { return api_file_namespaceObject; });














      /***/
    }),
/* 6 */
/***/ (function (module, exports) {

      module.exports = require("lodash/find");

      /***/
    }),
/* 7 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* unused harmony export levels */
/* unused harmony export getLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return setLevel; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



      // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

      const getStackTrace = () => {
        const obj = {};
        Error.captureStackTrace(obj, getStackTrace);
        return (obj.stack || '').split('\n');
      };

      const VERBOSITY_MAX = 3; // -vvv

      const {
        combine,
        colorize,
        timestamp,
        printf
      } = winston__WEBPACK_IMPORTED_MODULE_2___default.a.format; // https://github.com/winstonjs/winston/blob/master/README.md#creating-your-own-logger

      const logger = winston__WEBPACK_IMPORTED_MODULE_2___default.a.createLogger({
        exitOnError: false,
        level: _config_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].winston.level,
        silent: false,
        transports: [new winston__WEBPACK_IMPORTED_MODULE_2___default.a.transports.Console({
          format: combine(colorize(), timestamp(), printf(log => "".concat(log.timestamp, " - ").concat(log.level, " ").concat(log.message))),
          handleExceptions: true
        }), new winston__WEBPACK_IMPORTED_MODULE_2___default.a.transports.File({
          filename: 'cncjs4marlin4Marlin_server_log.txt',
          level: 'info'
        })]
      }); // https://github.com/winstonjs/winston/blob/master/README.md#logging-levels
      // npm logging levels are prioritized from 0 to 5 (highest to lowest):

      const levels = ['error', // 0
        'warn', // 1
        'info', // 2
        'verbose', // 3
        'debug', // 4
        'silly' // 5
      ];
      const getLevel = () => logger.level;
      const setLevel = level => {
        logger.level = level;
      };
/* harmony default export */ __webpack_exports__["a"] = (function () {
        let namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        namespace = String(namespace);
        return levels.reduce((acc, level) => {
          acc[level] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (_config_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].verbosity >= VERBOSITY_MAX && level !== 'silly') {
              args = args.concat(getStackTrace()[2]);
            }

            return namespace.length > 0 ? logger[level](chalk__WEBPACK_IMPORTED_MODULE_1___default.a.cyan(namespace) + ' ' + util__WEBPACK_IMPORTED_MODULE_0___default.a.format(...args)) : logger[level](util__WEBPACK_IMPORTED_MODULE_0___default.a.format(...args));
          };

          return acc;
        }, {});
      });

      /***/
    }),
/* 8 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      // EXTERNAL MODULE: external "lodash/unset"
      var unset_ = __webpack_require__(39);
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
      var external_events_ = __webpack_require__(15);
      var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

      // CONCATENATED MODULE: ./lib/ImmutableStore.js






      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



      class ImmutableStore_ImmutableStore extends external_events_default.a.EventEmitter {
        constructor() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          super();

          _defineProperty(this, "state", {});

          this.state = state;
        }

        get(key, defaultValue) {
          return get_default()(this.state, key, defaultValue);
        }

        set(key, value) {
          this.state = merge_default()({}, this.state, set_default()({}, key, value));
          this.emit('change', this.state);
          return this.state;
        }

        unset(key) {
          let state = extend_default()({}, this.state);

          unset_default()(state, key);

          this.state = state;
          this.emit('change', this.state);
          return this.state;
        }

        replace(key, value) {
          this.unset(key);
          this.set(key, value);
        }

        clear() {
          this.state = {};
          this.emit('change', this.state);
          return this.state;
        }

      }

/* harmony default export */ var lib_ImmutableStore = (ImmutableStore_ImmutableStore);
      // CONCATENATED MODULE: ./store/index.js

      const defaultState = {
        controllers: {}
      };
      const store = new lib_ImmutableStore(defaultState);
/* harmony default export */ var store_0 = __webpack_exports__["a"] = (store);

      /***/
    }),
/* 9 */
/***/ (function (module, exports) {

      module.exports = require("ensure-array");

      /***/
    }),
/* 10 */
/***/ (function (module, exports) {

      module.exports = require("chalk");

      /***/
    }),
/* 11 */
/***/ (function (module, exports) {

      module.exports = require("lodash/set");

      /***/
    }),
/* 12 */
/***/ (function (module, exports) {

      module.exports = require("lodash/has");

      /***/
    }),
/* 13 */
/***/ (function (module, exports) {

      module.exports = require("lodash/includes");

      /***/
    }),
/* 14 */
/***/ (function (module, exports) {

      module.exports = require("lodash/isPlainObject");

      /***/
    }),
/* 15 */
/***/ (function (module, exports) {

      module.exports = require("events");

      /***/
    }),
/* 16 */
/***/ (function (module, exports) {

      module.exports = require("uuid");

      /***/
    }),
/* 17 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* unused harmony export ensureBoolean */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return ensureString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ensureNumber; });
      const ensureBoolean = function ensureBoolean(value) {
        let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (value === undefined || value === null) {
          return Boolean(defaultValue);
        }

        return typeof value === 'boolean' ? value : Boolean(value);
      };
      const ensureString = function ensureString(value) {
        let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        if (value === undefined || value === null) {
          return String(defaultValue);
        }

        return typeof value === 'string' ? value : String(value);
      };
      const ensureNumber = function ensureNumber(value) {
        let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (value === undefined || value === null) {
          return Number(defaultValue);
        }

        return typeof value === 'number' ? value : Number(value);
      };

      /***/
    }),
/* 18 */
/***/ (function (module, exports) {

      module.exports = require("path");

      /***/
    }),
/* 19 */
/***/ (function (module, exports) {

      module.exports = require("lodash/isEqual");

      /***/
    }),
/* 20 */
/***/ (function (module, exports) {

      module.exports = require("fs");

      /***/
    }),
/* 21 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      // EXTERNAL MODULE: external "events"
      var external_events_ = __webpack_require__(15);
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

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






      const log = Object(logger["a" /* default */])('service:taskrunner');

      class TaskRunner_TaskRunner extends external_events_default.a.EventEmitter {
        constructor() {
          super(...arguments);

          _defineProperty(this, "tasks", []);
        }

        run(command, title, options) {
          if (options === undefined && typeof title === 'object') {
            options = title;
            title = '';
          }

          const taskId = external_shortid_default.a.generate(); // task id

          const child = external_spawn_default_shell_default.a.spawn(command, _objectSpread({
            detached: true
          }, options));
          child.unref();
          this.tasks.push(taskId);
          this.emit('start', taskId);
          child.stdout.on('data', data => {
            process.stdout.write("PID:".concat(child.pid, "> ").concat(data));
          });
          child.stderr.on('data', data => {
            process.stderr.write("PID:".concat(child.pid, "> ").concat(data));
          });
          child.on('error', err => {
            // Listen for error event can prevent from throwing an unhandled exception
            log.error("Failed to start a child process: err=".concat(JSON.stringify(err)));
            this.tasks = without_default()(this.tasks, taskId);
            this.emit('error', taskId, err);
          }); // The 'exit' event is emitted after the child process ends.
          // Note that the 'exit' event may or may not fire after an error has occurred.
          // It is important to guard against accidentally invoking handler functions multiple times.

          child.on('exit', code => {
            if (this.contains(taskId)) {
              this.tasks = without_default()(this.tasks, taskId);
              this.emit('finish', taskId, code);
            }
          });
          return taskId;
        }

        contains(taskId) {
          return this.tasks.indexOf(taskId) >= 0;
        }

      }

/* harmony default export */ var taskrunner_TaskRunner = (TaskRunner_TaskRunner);
      // CONCATENATED MODULE: ./services/taskrunner/index.js

      const taskRunner = new taskrunner_TaskRunner();
/* harmony default export */ var taskrunner = __webpack_exports__["a"] = (taskRunner);

      /***/
    }),
/* 22 */
/***/ (function (module, exports) {

      module.exports = require("lodash/noop");

      /***/
    }),
/* 23 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      // EXTERNAL MODULE: external "fs"
      var external_fs_ = __webpack_require__(20);
      var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

      // EXTERNAL MODULE: external "path"
      var external_path_ = __webpack_require__(18);
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

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



      class FSMonitor_FSMonitor {
        constructor() {
          _defineProperty(this, "root", '');

          _defineProperty(this, "monitor", null);

          _defineProperty(this, "files", {});
        }

        watch(root) {
          external_watch_default.a.createMonitor(root, monitor => {
            this.unwatch();
            this.root = root;
            this.monitor = monitor;
            this.files = _objectSpread({}, monitor.files);
            monitor.on('created', (f, stat) => {
              this.files[f] = stat;
            });
            monitor.on('changed', (f, curr, prev) => {
              this.files[f] = curr;
            });
            monitor.on('removed', (f, stat) => {
              delete this.files[f];
            });
          });
        }

        unwatch() {
          if (this.monitor) {
            this.monitor.stop(); // Stop watching

            this.monitor = null;
          }

          this.files = {};
        }

      }

/* harmony default export */ var monitor_FSMonitor = (FSMonitor_FSMonitor);
      // CONCATENATED MODULE: ./services/monitor/index.js




      const monitor = new monitor_FSMonitor();

      const start = _ref => {
        let {
          watchDirectory
        } = _ref;
        monitor.watch(watchDirectory);
      };

      const stop = () => {
        monitor.unwatch();
      };

      const getFiles = searchPath => {
        const root = monitor.root;
        const files = Object.keys(monitor.files);
        const pattern = external_path_default.a.join(root, searchPath, '*');

        if (!root || pattern.indexOf(root) !== 0) {
          return [];
        }

        return external_minimatch_default.a.match(files, pattern, {
          matchBase: true
        }).map(file => {
          const stat = monitor.files[file] || {};
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

      const readFile = (file, callback) => {
        const root = monitor.root;
        file = external_path_default.a.join(root, file);
        external_fs_default.a.readFile(file, 'utf8', callback);
      };

/* harmony default export */ var services_monitor = __webpack_exports__["a"] = ({
        start,
        stop,
        getFiles,
        readFile
      });

      /***/
    }),
/* 24 */
/***/ (function (module, exports) {

      module.exports = require("bcrypt-nodejs");

      /***/
    }),
/* 25 */
/***/ (function (module, exports) {

      module.exports = require("lodash/intersection");

      /***/
    }),
/* 26 */
/***/ (function (module, exports) {

      module.exports = require("lodash/castArray");

      /***/
    }),
/* 27 */
/***/ (function (module, exports) {

      module.exports = require("gcode-parser");

      /***/
    }),
/* 28 */
/***/ (function (module, exports) {

      module.exports = require("os");

      /***/
    }),
/* 29 */
/***/ (function (module, exports) {

      module.exports = require("lodash/map");

      /***/
    }),
/* 30 */
/***/ (function (module, exports) {

      module.exports = require("lodash/trim");

      /***/
    }),
/* 31 */
/***/ (function (module, exports) {

      module.exports = require("lodash/isEmpty");

      /***/
    }),
/* 32 */
/***/ (function (module, exports) {

      module.exports = require("lodash/merge");

      /***/
    }),
/* 33 */
/***/ (function (module, exports) {

      module.exports = require("jsonwebtoken");

      /***/
    }),
/* 34 */
/***/ (function (module, exports) {

      module.exports = require("serialport");

      /***/
    }),
/* 35 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return authorizeIPAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return validateUser; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
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





      const whitelist = [// IPv4 reserved space
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
      const authorizeIPAddress = ipaddr => new Promise((resolve, reject) => {
        let pass = !!_config_settings__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].allowRemoteAccess;
        pass = pass || whitelist.some(test => range_check__WEBPACK_IMPORTED_MODULE_3___default.a.inRange(ipaddr, test));

        if (pass) {
          resolve();
        } else {
          reject(new Error("Unauthorized IP address: ipaddr=".concat(ipaddr)));
        }
      });
      const validateUser = user => new Promise((resolve, reject) => {
        const {
          id = null,
          name = null
        } = _objectSpread({}, user);

        const users = ensure_array__WEBPACK_IMPORTED_MODULE_2___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].get('users')).filter(user => lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(user)).map(user => _objectSpread(_objectSpread({}, user), {}, {
          // Defaults to true if not explicitly initialized
          enabled: user.enabled !== false
        }));
        const enabledUsers = users.filter(user => user.enabled);

        if (enabledUsers.length === 0 || lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(enabledUsers, {
          id: id,
          name: name
        })) {
          resolve();
        } else {
          reject(new Error("Unauthorized user: user.id=".concat(id, ", user.name=").concat(name)));
        }
      });

      /***/
    }),
/* 36 */
/***/ (function (module, exports) {

      module.exports = require("winston");

      /***/
    }),
/* 37 */
/***/ (function (module, exports) {

      module.exports = require("url");

      /***/
    }),
/* 38 */
/***/ (function (module, exports) {

      module.exports = require("express");

      /***/
    }),
/* 39 */
/***/ (function (module, exports) {

      module.exports = require("lodash/unset");

      /***/
    }),
/* 40 */
/***/ (function (module, exports) {

      module.exports = require("lodash/throttle");

      /***/
    }),
/* 41 */
/***/ (function (module, exports) {

      module.exports = require("gcode-toolpath");

      /***/
    }),
/* 42 */
/***/ (function (module, exports) {

      module.exports = require("esprima");

      /***/
    }),
/* 43 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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



      const noop = () => { };

      class EventTrigger_EventTrigger {
        constructor() {
          let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
          this.callback = callback || noop;
        }

        trigger(eventKey) {
          let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (!eventKey) {
            return;
          }

          const events = configstore["a" /* default */].get('events', []);
          events.filter(event => event && event.event === eventKey).forEach(options => {
            const {
              enabled = false,
              event,
              trigger,
              commands
            } = _objectSpread({}, options);

            if (!enabled) {
              return;
            }

            if (typeof this.callback === 'function') {
              this.callback(event, trigger, commands);
            }
          });
        }

      }

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
      var throttle_ = __webpack_require__(40);
      var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

      // EXTERNAL MODULE: external "lodash/find"
      var find_ = __webpack_require__(6);
      var find_default = /*#__PURE__*/__webpack_require__.n(find_);

      // EXTERNAL MODULE: external "lodash/get"
      var get_ = __webpack_require__(4);
      var get_default = /*#__PURE__*/__webpack_require__.n(get_);

      // EXTERNAL MODULE: external "lodash/includes"
      var includes_ = __webpack_require__(13);
      var includes_default = /*#__PURE__*/__webpack_require__.n(includes_);

      // EXTERNAL MODULE: external "lodash/intersection"
      var intersection_ = __webpack_require__(25);
      var intersection_default = /*#__PURE__*/__webpack_require__.n(intersection_);

      // EXTERNAL MODULE: external "gcode-parser"
      var external_gcode_parser_ = __webpack_require__(27);

      // EXTERNAL MODULE: external "gcode-toolpath"
      var external_gcode_toolpath_ = __webpack_require__(41);
      var external_gcode_toolpath_default = /*#__PURE__*/__webpack_require__.n(external_gcode_toolpath_);

      // EXTERNAL MODULE: external "lodash/map"
      var map_ = __webpack_require__(29);
      var map_default = /*#__PURE__*/__webpack_require__.n(map_);

      // EXTERNAL MODULE: external "events"
      var external_events_ = __webpack_require__(15);
      var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

      // CONCATENATED MODULE: ./lib/SerialConnection.js
      const _excluded = ["writeFilter"],
        _excluded2 = ["path"];

      function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

      function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

      function SerialConnection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function SerialConnection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SerialConnection_ownKeys(Object(source), true).forEach(function (key) { SerialConnection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SerialConnection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function SerialConnection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



      const Readline = external_serialport_default.a.parsers.Readline; // Validation

      const DATABITS = Object.freeze([5, 6, 7, 8]);
      const STOPBITS = Object.freeze([1, 2]);
      const PARITY = Object.freeze(['none', 'even', 'mark', 'odd', 'space']);
      const FLOWCONTROLS = Object.freeze(['rtscts', 'xon', 'xoff', 'xany']);
      const defaultSettings = Object.freeze({
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1,
        parity: 'none',
        rtscts: false,
        xon: false,
        xoff: false,
        xany: false
      });

      const toIdent = options => {
        // Only the path option is required for generating the ident property
        const {
          path
        } = SerialConnection_objectSpread({}, options);

        return JSON.stringify({
          type: 'serial',
          path: path
        });
      };

      class SerialConnection_SerialConnection extends external_events_["EventEmitter"] {
        // Readline parser
        // SerialPort
        constructor(options) {
          super();

          SerialConnection_defineProperty(this, "type", 'serial');

          SerialConnection_defineProperty(this, "parser", null);

          SerialConnection_defineProperty(this, "port", null);

          SerialConnection_defineProperty(this, "writeFilter", data => data);

          SerialConnection_defineProperty(this, "eventListener", {
            data: _data => {
              this.emit('data', _data);
            },
            open: () => {
              this.emit('open');
            },
            close: err => {
              this.emit('close', err);
            },
            error: err => {
              this.emit('error', err);
            }
          });

          const _options = SerialConnection_objectSpread({}, options),
            {
              writeFilter
            } = _options,
            rest = _objectWithoutProperties(_options, _excluded);

          if (writeFilter) {
            if (typeof writeFilter !== 'function') {
              throw new TypeError("\"writeFilter\" must be a function: ".concat(writeFilter));
            }

            this.writeFilter = writeFilter;
          }

          const settings = Object.assign({}, defaultSettings, rest);

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

          FLOWCONTROLS.forEach(control => {
            if (typeof settings[control] !== 'boolean') {
              throw new TypeError("\"".concat(control, "\" is not boolean: ").concat(settings[control]));
            }
          });
          Object.defineProperties(this, {
            settings: {
              enumerable: true,
              value: settings,
              writable: false
            }
          });
        }

        get ident() {
          return toIdent(this.settings);
        }

        get isOpen() {
          return this.port && this.port.isOpen;
        }

        get isClose() {
          return !this.isOpen;
        } // @param {function} callback The error-first callback.


        open(callback) {
          if (this.port) {
            const err = new Error("Cannot open serial port \"".concat(this.settings.path, "\""));
            callback(err);
            return;
          }

          const _this$settings = this.settings,
            {
              path
            } = _this$settings,
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


        close(callback) {
          if (!this.port) {
            const err = new Error("Cannot close serial port \"".concat(this.settings.path, "\""));
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

        write(data, context) {
          if (!this.port) {
            return;
          }

          data = this.writeFilter(data, context);
          this.port.write(data);
        }

      }


/* harmony default export */ var lib_SerialConnection = (SerialConnection_SerialConnection);
      // CONCATENATED MODULE: ./lib/Feeder.js
      function Feeder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



      class Feeder_Feeder extends external_events_default.a.EventEmitter {
        // @param {object} [options] The options object.
        // @param {function} [options.dataFilter] A function to be used to handle the data. The function accepts two arguments: The data to be sent to the controller, and the context.
        constructor(options) {
          super();

          Feeder_defineProperty(this, "state", {
            hold: false,
            holdReason: null,
            queue: [],
            pending: false,
            changed: false,
            outstanding: 0,
            interval: null
          });

          Feeder_defineProperty(this, "dataFilter", null);

          if (typeof options.dataFilter === 'function') {
            this.dataFilter = options.dataFilter;
          }

          this.on('change', () => {
            this.state.changed = true;
          });
        }

        toJSON() {
          return {
            hold: this.state.hold,
            holdReason: this.state.holdReason,
            queue: this.state.queue.length,
            pending: this.state.pending,
            changed: this.state.changed
          };
        }

        feed() {
          let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          // Clear pending state when the feeder queue is empty
          if (this.state.queue.length === 0) {
            this.state.pending = false;
          }

          data = [].concat(data);

          if (data.length > 0) {
            this.state.queue = this.state.queue.concat(data.map(command => {
              return {
                command: command,
                context: context
              };
            }));
            this.emit('change');
          }
        }

        hold(reason) {
          if (this.state.hold) {
            return;
          }

          this.state.hold = true;
          this.state.holdReason = reason;
          this.emit('hold');
          this.emit('change');
        }

        unhold() {
          if (!this.state.hold) {
            return;
          }

          this.state.hold = false;
          this.state.holdReason = null;
          this.emit('unhold');
          this.emit('change');
        }

        clear() {
          this.state.queue = [];
          this.state.pending = false;
          this.state.outstanding = 0;
          this.state.interval && clearInterval(this.state.interval);
          this.emit('change');
        }

        reset() {
          this.state.hold = false;
          this.state.holdReason = null;
          this.state.queue = [];
          this.state.pending = false;
          this.state.outstanding = 0;
          clearInterval(this.state.interval);
          this.state.interval = null;
          this.emit('change');
        }

        size() {
          return this.state.queue.length;
        }

        next() {
          while (!this.state.hold && this.state.queue.length > 0) {
            let {
              command,
              context
            } = this.state.queue.shift();

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

        isPending() {
          return this.state.pending;
        } // Returns true if any state have changes


        peek() {
          const changed = this.state.changed;
          this.state.changed = false;
          return changed;
        }

        ack() {
          if (this.state.outstanding > 0) {
            this.state.outstanding--;
          }
        }

        hasOutstanding() {
          return this.state.outstanding > 0;
        }

        repeatCommand(command) {
          let timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

          if (!this.state.interval) {
            this.state.interval = setInterval(() => {
              if (!this.hasOutstanding()) {
                this.feed(command);

                if (!this.isPending()) {
                  this.next();
                }
              }
            }, timer);
          } else {
            clearInterval(this.state.interval);
            this.state.interval = null;
          }
        }

      }

/* harmony default export */ var lib_Feeder = (Feeder_Feeder);
      // CONCATENATED MODULE: ./lib/Sender.js
      function Sender_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      /* eslint max-classes-per-file: 0 */

      const SP_TYPE_SEND_RESPONSE = 0;
      const SP_TYPE_CHAR_COUNTING = 1;

      const Sender_noop = () => { };

      class SPSendResponse {
        constructor(options) {
          let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Sender_noop;

          Sender_defineProperty(this, "callback", null);

          if (typeof options === 'function') {
            callback = options;
            options = {};
          }

          if (typeof callback === 'function') {
            this.callback = callback;
          }
        }

        process() {
          this.callback && this.callback(this);
        }

        clear() {// Do nothing
        }

        get type() {
          return SP_TYPE_SEND_RESPONSE;
        }

      }

      class SPCharCounting {
        constructor(options) {
          let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Sender_noop;

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


          const bufferSize = Number(options.bufferSize);

          if (bufferSize && bufferSize > 0) {
            this.state.bufferSize = bufferSize;
          }

          if (typeof callback === 'function') {
            this.callback = callback;
          }
        }

        process() {
          this.callback && this.callback(this);
        }

        reset() {
          this.state.bufferSize = 128; // Defaults to 128

          this.state.dataLength = 0;
          this.state.queue = [];
          this.state.line = '';
        }

        clear() {
          this.state.dataLength = 0;
          this.state.queue = [];
          this.state.line = '';
        }

        get type() {
          return SP_TYPE_CHAR_COUNTING;
        }

        get bufferSize() {
          return this.state.bufferSize;
        }

        set bufferSize(bufferSize) {
          if (bufferSize === void 0) {
            bufferSize = 0;
          }

          bufferSize = Number(bufferSize);

          if (!bufferSize) {
            return;
          } // The buffer size cannot be reduced below the size of the data within the buffer.


          this.state.bufferSize = Math.max(bufferSize, this.state.dataLength);
        }

        get dataLength() {
          return this.state.dataLength;
        }

        set dataLength(dataLength) {
          this.state.dataLength = dataLength;
        }

        get queue() {
          return this.state.queue;
        }

        set queue(queue) {
          this.state.queue = queue;
        }

        get line() {
          return this.state.line;
        }

        set line(line) {
          this.state.line = line;
        }

      }

      class Sender_Sender extends external_events_default.a.EventEmitter {
        // streaming protocol
        // @param {number} [type] Streaming protocol type. 0 for send-response, 1 for character-counting.
        // @param {object} [options] The options object.
        // @param {number} [options.bufferSize] The buffer size used in character-counting streaming protocol. Defaults to 127.
        // @param {function} [options.dataFilter] A function to be used to handle the data. The function accepts two arguments: The data to be sent to the controller, and the context.
        constructor() {
          let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SP_TYPE_SEND_RESPONSE;
          let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          super();

          Sender_defineProperty(this, "sp", null);

          Sender_defineProperty(this, "state", {
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

          Sender_defineProperty(this, "stateChanged", false);

          Sender_defineProperty(this, "dataFilter", null);

          if (typeof options.dataFilter === 'function') {
            this.dataFilter = options.dataFilter;
          } // character-counting


          if (type === SP_TYPE_CHAR_COUNTING) {
            this.sp = new SPCharCounting(options, sp => {
              if (sp.queue.length > 0) {
                const lineLength = sp.queue.shift();
                sp.dataLength -= lineLength;
              }

              while (!this.state.hold && this.state.sent < this.state.total) {
                // Remove leading and trailing whitespace from both ends of a string
                sp.line = sp.line || this.state.lines[this.state.sent].trim();

                if (this.dataFilter) {
                  sp.line = this.dataFilter(sp.line, this.state.context) || '';
                } // The newline character (\n) consumed the RX buffer space


                if (sp.line.length > 0 && sp.dataLength + sp.line.length + 1 >= sp.bufferSize) {
                  break;
                }

                this.state.sent++;
                this.emit('change');

                if (sp.line.length === 0) {
                  this.ack(); // ack empty line

                  continue;
                }

                const line = sp.line + '\n';
                sp.line = '';
                sp.dataLength += line.length;
                sp.queue.push(line.length);
                this.emit('data', line, this.state.context);
              }
            });
          } // send-response


          if (type === SP_TYPE_SEND_RESPONSE) {
            this.sp = new SPSendResponse(options, sp => {
              while (!this.state.hold && this.state.sent < this.state.total) {
                // Remove leading and trailing whitespace from both ends of a string
                let line = this.state.lines[this.state.sent].trim();

                if (this.dataFilter) {
                  line = this.dataFilter(line, this.state.context) || '';
                }

                this.state.sent++;
                this.emit('change');

                if (line.length === 0) {
                  this.ack(); // ack empty line

                  continue;
                }

                this.emit('data', line + '\n', this.state.context);
                break;
              }
            });
          }

          this.on('change', () => {
            this.stateChanged = true;
          });
        }

        getContext() {
          return this.state.context;
        }

        toJSON() {
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

        hold(reason) {
          if (this.state.hold) {
            return;
          }

          this.state.hold = true;
          this.state.holdReason = reason;
          this.emit('hold');
          this.emit('change');
        }

        unhold() {
          if (!this.state.hold) {
            return;
          }

          this.state.hold = false;
          this.state.holdReason = null;
          this.emit('unhold');
          this.emit('change');
        } // @return {boolean} Returns true on success, false otherwise.


        load(name) {
          let gcode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (typeof gcode !== 'string' || !gcode) {
            return false;
          }
          /*const comments = ['#', '(', '%'];
          const lines = gcode.split('\n');
          lines.filter(line => (line.trim().length > 0))
              .filter(line => !comments.some(comment => line.includes(comment)));
          console.log(lines);*/


          let lines = gcode.split('\n');

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

        unload() {
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


        ack() {
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


        next() {
          let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          const {
            lineToStartFrom
          } = options;

          if (!this.state.gcode) {
            return false;
          }

          const now = new Date().getTime();

          const handleStart = () => {
            this.state.startTime = now;
            this.state.finishTime = 0;
            this.state.elapsedTime = 0;
            this.state.remainingTime = 0;
            this.emit('start', this.state.startTime);
            this.emit('change');
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
            const timePerCode = this.state.elapsedTime / this.state.received;
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


        rewind() {
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


        peek() {
          const stateChanged = this.stateChanged;
          this.stateChanged = false;
          return stateChanged;
        }

      }

/* harmony default export */ var lib_Sender = (Sender_Sender);
      // CONCATENATED MODULE: ./lib/Workflow.js
      function Workflow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      // Workflow State

      const WORKFLOW_STATE_RUNNING = 'running';
      const WORKFLOW_STATE_PAUSED = 'paused';
      const WORKFLOW_STATE_IDLE = 'idle';

      class Workflow_Workflow extends external_events_default.a.EventEmitter {
        constructor() {
          super(...arguments);

          Workflow_defineProperty(this, "state", WORKFLOW_STATE_IDLE);
        }

        isRunning() {
          return this.state === WORKFLOW_STATE_RUNNING;
        }

        isPaused() {
          return this.state === WORKFLOW_STATE_PAUSED;
        }

        isIdle() {
          return this.state === WORKFLOW_STATE_IDLE;
        }

        start() {
          if (this.state !== WORKFLOW_STATE_RUNNING) {
            this.state = WORKFLOW_STATE_RUNNING;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            this.emit('start', ...args);
          }
        }

        stop() {
          if (this.state !== WORKFLOW_STATE_IDLE) {
            this.state = WORKFLOW_STATE_IDLE;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            this.emit('stop', ...args);
          }
        }

        stopTesting() {
          this.state = WORKFLOW_STATE_IDLE;
          this.emit('stop');
        }

        resumeTesting() {
          if (this.state === WORKFLOW_STATE_PAUSED) {
            this.state = WORKFLOW_STATE_RUNNING;
            this.emit('resume');
          }
        }

        pause() {
          if (this.state === WORKFLOW_STATE_RUNNING) {
            this.state = WORKFLOW_STATE_PAUSED;
          }

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this.emit('pause', ...args);
        }

        resume() {
          if (this.state === WORKFLOW_STATE_PAUSED) {
            this.state = WORKFLOW_STATE_RUNNING;
          }

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          this.emit('resume', ...args);
        }

      }

/* harmony default export */ var lib_Workflow = (Workflow_Workflow);
      // CONCATENATED MODULE: ./lib/delay.js
      const delay = (t, v) => new Promise(resolve => {
        setTimeout(resolve.bind(null, v), t);
      });

/* harmony default export */ var lib_delay = (delay);
      // CONCATENATED MODULE: ./lib/ensure-positive-number.js
      const ensurePositiveNumber = function ensurePositiveNumber(value) {
        let minimumValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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
      var external_esprima_ = __webpack_require__(42);

      // EXTERNAL MODULE: external "escodegen"
      var external_escodegen_ = __webpack_require__(89);

      // CONCATENATED MODULE: ./lib/evaluate-expression.js
      function evaluate_expression_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function evaluate_expression_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { evaluate_expression_ownKeys(Object(source), true).forEach(function (key) { evaluate_expression_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { evaluate_expression_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function evaluate_expression_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

      /* eslint no-bitwise: 0 */



      const log = Object(logger["a" /* default */])('evaluate-expression');
      const UNRESOLVED = Symbol('unresolved');

      const evaluateExpression = (src, vars) => {
        if (!vars || typeof vars !== 'object') {
          vars = evaluate_expression_objectSpread({}, vars);
        }

        const walk = node => {
          if (node.type === 'Literal') {
            return node.value;
          }

          if (node.type === 'UnaryExpression') {
            const val = walk(node.argument);

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
            const xs = [];

            for (let i = 0, l = node.elements.length; i < l; i++) {
              const x = walk(node.elements[i]);

              if (x === UNRESOLVED) {
                return UNRESOLVED;
              }

              xs.push(x);
            }

            return xs;
          }

          if (node.type === 'ObjectExpression') {
            const obj = {};

            for (let i = 0; i < node.properties.length; i++) {
              const prop = node.properties[i];
              const value = prop.value === null ? prop.value : walk(prop.value);

              if (value === UNRESOLVED) {
                return UNRESOLVED;
              }

              obj[prop.key.value || prop.key.name] = value;
            }

            return obj;
          }

          if (node.type === 'BinaryExpression' || node.type === 'LogicalExpression') {
            const l = walk(node.left);

            if (l === UNRESOLVED) {
              return UNRESOLVED;
            }

            const r = walk(node.right);

            if (r === UNRESOLVED) {
              return UNRESOLVED;
            }

            const op = node.operator;

            if (op === '==') {
              return l == r; // eslint-disable-line eqeqeq
            }

            if (op === '===') {
              return l === r;
            }

            if (op === '!=') {
              return l != r; // eslint-disable-line eqeqeq
            }

            if (op === '!==') {
              return l !== r;
            }

            if (op === '+') {
              return l + r;
            }

            if (op === '-') {
              return l - r;
            }

            if (op === '*') {
              return l * r;
            }

            if (op === '/') {
              return l / r;
            }

            if (op === '%') {
              return l % r;
            }

            if (op === '<') {
              return l < r;
            }

            if (op === '<=') {
              return l <= r;
            }

            if (op === '>') {
              return l > r;
            }

            if (op === '>=') {
              return l >= r;
            }

            if (op === '|') {
              return l | r;
            }

            if (op === '&') {
              return l & r;
            }

            if (op === '^') {
              return l ^ r;
            }

            if (op === '&&') {
              return l && r;
            }

            if (op === '||') {
              return l || r;
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
            const callee = walk(node.callee);

            if (callee === UNRESOLVED) {
              return UNRESOLVED;
            }

            if (typeof callee !== 'function') {
              return UNRESOLVED;
            }

            let ctx = node.callee.object ? walk(node.callee.object) : UNRESOLVED;

            if (ctx === UNRESOLVED) {
              ctx = null;
            }

            const args = [];

            for (let i = 0, l = node.arguments.length; i < l; i++) {
              const x = walk(node.arguments[i]);

              if (x === UNRESOLVED) {
                return UNRESOLVED;
              }

              args.push(x);
            }

            return callee.apply(ctx, args);
          }

          if (node.type === 'MemberExpression') {
            const obj = walk(node.object);

            if (obj === UNRESOLVED) {
              return UNRESOLVED;
            }

            if (node.property.type === 'Identifier') {
              return obj[node.property.name];
            }

            const prop = walk(node.property);

            if (prop === UNRESOLVED) {
              return UNRESOLVED;
            }

            return obj[prop];
          }

          if (node.type === 'ConditionalExpression') {
            const val = walk(node.test);

            if (val === UNRESOLVED) {
              return UNRESOLVED;
            }

            return val ? walk(node.consequent) : walk(node.alternate);
          }

          if (node.type === 'ExpressionStatement') {
            const val = walk(node.expression);

            if (val === UNRESOLVED) {
              return UNRESOLVED;
            }

            return val;
          }

          if (node.type === 'ReturnStatement') {
            return walk(node.argument);
          }

          if (node.type === 'FunctionExpression') {
            const bodies = node.body.body; // Create a "scope" for our arguments

            const oldVars = {};
            Object.keys(vars).forEach(element => {
              oldVars[element] = vars[element];
            });

            for (let i = 0; i < node.params.length; i++) {
              const key = node.params[i];

              if (key.type !== 'Identifier') {
                return UNRESOLVED;
              }

              vars[key.name] = null;
            }

            for (let i in bodies) {
              if (walk(bodies[i]) === UNRESOLVED) {
                return UNRESOLVED;
              }
            } // restore the vars and scope after walk


            vars = oldVars;
            const keys = Object.keys(vars);
            const vals = keys.map(key => {
              return vars[key];
            });
            return Function(keys.join(', '), 'return ' + Object(external_escodegen_["generate"])(node)).apply(null, vals); // eslint-disable-line no-new-func
          }

          if (node.type === 'TemplateLiteral') {
            let str = '';
            let i = 0;

            for (i = 0; i < node.expressions.length; i++) {
              str += walk(node.quasis[i]);
              str += walk(node.expressions[i]);
            }

            str += walk(node.quasis[i]);
            return str;
          }

          if (node.type === 'TaggedTemplateExpression') {
            const tag = walk(node.tag);
            const quasi = node.quasi;
            const strings = quasi.quasis.map(walk);
            const values = quasi.expressions.map(walk);
            return tag.apply(null, [strings].concat(values));
          }

          if (node.type === 'TemplateElement') {
            return node.value.cooked;
          }

          return UNRESOLVED;
        };

        let result = UNRESOLVED;

        try {
          let ast;

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

/* harmony default export */ var evaluate_expression = (evaluateExpression);
      // CONCATENATED MODULE: ./lib/evaluate-assignment-expression.js




      const evaluate_assignment_expression_log = Object(logger["a" /* default */])('evaluate-assignment-expression');

      const isStaticMemberExpression = node => typeof node === 'object' && node.type === 'MemberExpression' && !node.computed;

      const isComputedMemberExpression = node => typeof node === 'object' && node.type === 'MemberExpression' && !!node.computed;

      const lookupObjectPath = (node, vars) => {
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
          return [...lookupObjectPath(node.object, vars), evaluate_expression(node.property, vars)];
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
            return [...lookupObjectPath(node.object, vars), node.property.name];
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
            return [...lookupObjectPath(node.object, vars), node.property.value];
          }

          return [...lookupObjectPath(node.object, vars), evaluate_expression(node.property, vars)];
        }

        return [node.name];
      };

      const walkAssignmentExpression = (node, vars) => {
        console.assert(node && node.type === 'AssignmentExpression');
        const path = lookupObjectPath(node.left, vars);

        if (path) {
          const value = evaluate_expression(node.right, vars);

          set_default()(vars, path, value);
        }
      };

      const walkSequenceExpression = (node, vars) => {
        console.assert(node && node.type === 'SequenceExpression');
        node.expressions.forEach(expr => {
          if (expr.type === 'AssignmentExpression') {
            walkAssignmentExpression(expr, vars);
            return;
          }

          evaluate_expression(expr, vars);
        });
      };

      const evaluate_assignment_expression_evaluateAssignmentExpression = function evaluateAssignmentExpression(src) {
        let vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!src) {
          return vars;
        }

        try {
          const ast = Object(external_esprima_["parse"])(src).body[0].expression;

          if (ast.type === 'AssignmentExpression') {
            walkAssignmentExpression(ast, vars);
          } else if (ast.type === 'SequenceExpression') {
            walkSequenceExpression(ast, vars);
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


      const translate_expression_log = Object(logger["a" /* default */])('translate-expression');
      const re = new RegExp(/\[[^\]]+\]/g);

      const translate_expression_translateExpression = function translateExpression(data) {
        let vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!data) {
          return '';
        }

        try {
          data = String(data).replace(re, match => {
            const src = match.slice(1, -1);
            const value = evaluate_expression(src, vars);
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





      const outlineService_log = Object(logger["a" /* default */])('service:outline'); // Generate an ordered pair - we don't care about Z index for outline purposes so it's removed

      function vertex(x, y) {
        return [x.toFixed(2), y.toFixed(2)];
      }

      function getOutlineGcode(gcode) {
        let concavity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
        const vertices = [];
        const toolpath = new external_gcode_toolpath_default.a({
          addLine: (_ref, v1, v2) => {
            let {
              motion
            } = _ref;

            // We ignore G0 movements since they generally aren't cutting movements
            if (motion === 'G1') {
              //vertices.push(vertex(v1.x, v1.y));
              vertices.push(vertex(v2.x, v2.y));
            }
          },
          addArcCurve: (_ref2, v1, v2, v0) => {
            let {
              motion,
              plane
            } = _ref2;
            const isClockwise = motion === 'G2';
            const radius = Math.sqrt((v1.x - v0.x) ** 2 + (v1.y - v0.y) ** 2);
            let startAngle = Math.atan2(v1.y - v0.y, v1.x - v0.x);
            let endAngle = Math.atan2(v2.y - v0.y, v2.x - v0.x); // Draw full circle if startAngle and endAngle are both zero

            if (startAngle === endAngle) {
              endAngle += 2 * Math.PI;
            }

            const arcCurve = new external_three_["ArcCurve"](v0.x, // aX
              v0.y, // aY
              radius, // aRadius
              startAngle, // aStartAngle
              endAngle, // aEndAngle
              isClockwise // isClockwise
            );
            const divisions = 30;
            const points = arcCurve.getPoints(divisions);
            vertices.push(vertex(v1.x, v1.y));

            for (let i = 0; i < points.length; ++i) {
              const point = points[i];
              const z = (v2.z - v1.z) / points.length * i + v1.z;

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
        const uniqueVertices = uniqBy_default()(vertices, v => JSON.stringify(v));
        outlineService_log.debug("Dataset reduced from ".concat(vertices.length, " to ").concat(uniqueVertices.length, " points."));
        outlineService_log.debug("Generating hull with accuracy of ".concat(concavity));
        const fileHull = external_hull_js_default()(uniqueVertices, concavity);
        const gCode = convertPointsToGCode(fileHull);
        return gCode;
      }

      function convertPointsToGCode(points) {
        const gCode = [];
        gCode.push('G21 G91 G0 Z5');
        points.forEach(point => {
          const [x, y] = point;
          gCode.push("G21 G90 G0 X".concat(x, " Y").concat(y));
        });
        gCode.push('G21 G91 G0 Z-5');
        return gCode;
      }
      // CONCATENATED MODULE: ./controllers/constants.js
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      const GLOBAL_OBJECTS = {
        // Function properties
        parseFloat,
        parseInt,
        // Fundamental objects
        Object,
        Function,
        Boolean,
        // Numbers and dates
        Number,
        Math,
        Date,
        // Text processing
        String,
        RegExp,
        // Structured data
        JSON
      }; // Write Source

      const WRITE_SOURCE_CLIENT = 'client';
      const WRITE_SOURCE_SERVER = 'server';
      const WRITE_SOURCE_FEEDER = 'feeder';
      const WRITE_SOURCE_SENDER = 'sender';
      // EXTERNAL MODULE: external "lodash/each"
      var each_ = __webpack_require__(54);
      var each_default = /*#__PURE__*/__webpack_require__.n(each_);

      // EXTERNAL MODULE: external "lodash/has"
      var has_ = __webpack_require__(12);
      var has_default = /*#__PURE__*/__webpack_require__.n(has_);

      // CONCATENATED MODULE: ./lib/decimal-places.js
      // http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
      const decimalPlaces = num => {
        const match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

        if (!match) {
          return 0;
        } // Number of digits right of decimal point.


        const digits = match[1] ? match[1].length : 0; // Adjust for scientific notation.

        const E = match[2] ? +match[2] : 0;
        return Math.max(0, digits - E);
      };

/* harmony default export */ var decimal_places = (decimalPlaces);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultStatus.js



      //https://github.com/grbl/grbl/blob/master/grbl/report.c
      class GrblLineParserResultStatus_GrblLineParserResultStatus {
        // * Grbl v0.9
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
        static parse(line) {
          const r = line.match(/^<(.+)>$/);

          if (!r) {
            return null;
          }

          const payload = {}; //const pattern = /[a-zA-Z]+(:[0-9\.\-]+(,[0-9\.\-]+){0,5})?/g;

          const pattern = /[a-zA-Z]+(:[a-zA-Z0-9\.\-]+(,[0-9\.\-[a]+){0,5})?/g;
          const params = r[1].match(pattern);
          const result = {};
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
            const states = (params.shift() || '').split(':');
            payload.activeState = states[0] || '';
            payload.subState = Number(states[1] || '');
          }

          for (let param of params) {
            const nv = param.match(/^(.+):(.+)/);

            if (nv) {
              let type = nv[1];
              let value = nv[2].split(',');
              result[type] = value;
            }
          } // Machine Position (v0.9, v1.1)


          if (has_default()(result, 'MPos')) {
            const axes = ['x', 'y', 'z', 'a', 'b', 'c'];

            const mPos = get_default()(result, 'MPos', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


            payload.mpos = {};

            for (let i = 0; i < mPos.length; ++i) {
              payload.mpos[axes[i]] = mPos[i];
            }
          } // Work Position (v0.9, v1.1)


          if (has_default()(result, 'WPos')) {
            const axes = ['x', 'y', 'z', 'a', 'b', 'c'];

            const wPos = get_default()(result, 'WPos', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


            payload.wpos = {};

            for (let i = 0; i < wPos.length; ++i) {
              payload.wpos[axes[i]] = wPos[i];
            }
          } // Work Coordinate Offset (v1.1)


          if (has_default()(result, 'WCO')) {
            const axes = ['x', 'y', 'z', 'a', 'b', 'c'];

            const wco = get_default()(result, 'WCO', ['0.000', '0.000', '0.000']); // Defaults to [x, y, z]


            payload.wco = {};

            for (let i = 0; i < wco.length; ++i) {
              payload.wco[axes[i]] = wco[i];
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
            const value = Number(get_default()(result, 'Lim[0]', 0));
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
            const pins = get_default()(result, 'Pn[0]', '');

            payload.pinState = {};
            pins.split('').forEach(pin => {
              payload.pinState[pin] = true;
            });
          } // Override Values (v1.1)
          // Ov:100,100,100 indicates current override values in percent of programmed values for feed, rapids, and spindle speed, respectively.


          if (has_default()(result, 'Ov')) {
            payload.ov = get_default()(result, 'Ov', []).map(v => Number(v));
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
            type: GrblLineParserResultStatus_GrblLineParserResultStatus,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultStatus = (GrblLineParserResultStatus_GrblLineParserResultStatus);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultOk.js
      class GrblLineParserResultOk {
        static parse(line) {
          const r = line.match(/^ok$/);

          if (!r) {
            return null;
          }

          const payload = {};
          return {
            type: GrblLineParserResultOk,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultOk = (GrblLineParserResultOk);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultError.js
      // https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#grbl-response-meanings
      class GrblLineParserResultError {
        static parse(line) {
          const r = line.match(/^error:\s*(.+)$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultError,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultError = (GrblLineParserResultError);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultAlarm.js
      // https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#alarms
      class GrblLineParserResultAlarm {
        static parse(line) {
          const r = line.match(/^ALARM:\s*(.+)$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultAlarm,
            payload: payload
          };
        }

      }

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
      const GRBL = 'Grbl'; // Active State

      const GRBL_ACTIVE_STATE_IDLE = 'Idle';
      const GRBL_ACTIVE_STATE_RUN = 'Run';
      const GRBL_ACTIVE_STATE_HOLD = 'Hold';
      const GRBL_ACTIVE_STATE_DOOR = 'Door';
      const GRBL_ACTIVE_STATE_HOME = 'Home';
      const GRBL_ACTIVE_STATE_SLEEP = 'Sleep';
      const GRBL_ACTIVE_STATE_ALARM = 'Alarm';
      const GRBL_ACTIVE_STATE_CHECK = 'Check'; // Real-time Commands: ~, !, ?, and Ctrl-x

      const GRBL_REALTIME_COMMANDS = ['~', // Cycle Start
        '!', // Feed Hold
        '?', // Current Status
        '\x18' // Reset Grbl (Ctrl-X)
      ]; // https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.9
      // http://linuxcnc.org/docs/html/gcode/overview.html#cap:modal-groups

      const GRBL_MODAL_GROUPS = [{
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

      const GRBL_ERRORS = [{
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

      const GRBL_ALARMS = [{
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

      const GRBL_SETTINGS = [{
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









      class GrblLineParserResultParserState_GrblLineParserResultParserState {
        // * Grbl v0.9
        //   [G38.2 G54 G17 G21 G91 G94 M0 M5 M9 T0 F20. S0.]
        // * Grbl v1.1
        //   [GC:G0 G54 G17 G21 G90 G94 M0 M5 M9 T0 S0.0 F500.0]
        static parse(line) {
          const r = line.match(/^\[(?:GC:)?((?:[a-zA-Z][0-9]+(?:\.[0-9]*)?\s*)+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {};

          const words = compact_default()(r[1].split(' ')).map(word => {
            return trim_default()(word);
          });

          for (let i = 0; i < words.length; ++i) {
            const word = words[i]; // Gx, Mx

            if (word.indexOf('G') === 0 || word.indexOf('M') === 0) {
              const r = find_default()(GRBL_MODAL_GROUPS, group => {
                return includes_default()(group.modes, word);
              });

              if (!r) {
                continue;
              }

              const prevWord = get_default()(payload, 'modal.' + r.group, '');

              if (prevWord) {
                set_default()(payload, 'modal.' + r.group, external_ensure_array_default()(prevWord).concat(word));
              } else {
                set_default()(payload, 'modal.' + r.group, word);
              }

              continue;
            } // T: tool number


            if (word.indexOf('T') === 0) {
              set_default()(payload, 'tool', word.substring(1));

              continue;
            } // F: feed rate


            if (word.indexOf('F') === 0) {
              set_default()(payload, 'feedrate', word.substring(1));

              continue;
            } // S: spindle speed


            if (word.indexOf('S') === 0) {
              set_default()(payload, 'spindle', word.substring(1));

              continue;
            }
          }

          return {
            type: GrblLineParserResultParserState_GrblLineParserResultParserState,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultParserState = (GrblLineParserResultParserState_GrblLineParserResultParserState);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultParameters.js
      class GrblLineParserResultParameters {
        static parse(line) {
          const r = line.match(/^\[(G54|G55|G56|G57|G58|G59|G28|G30|G92|TLO|PRB):(.+)\]$/);

          if (!r) {
            return null;
          }

          const name = r[1];
          const value = r[2];
          const payload = {
            name: name,
            value: ''
          }; // [Gxx:0.000]

          const re = /^G\d+$/i;

          if (re.test(name)) {
            const axes = ['x', 'y', 'z', 'a', 'b', 'c'];
            const list = value.split(',');
            payload.value = {};

            for (let i = 0; i < list.length; ++i) {
              payload.value[axes[i]] = list[i];
            }
          } // [TLO:0.000]


          if (name === 'TLO') {
            payload.value = value;
          } // [PRB:0.000,0.000,1.492:1]


          if (name === 'PRB') {
            const axes = ['x', 'y', 'z', 'a', 'b', 'c'];
            const [str, result] = value.split(':');
            const list = str.split(',');
            payload.value = {};
            payload.value.result = Number(result);

            for (let i = 0; i < list.length; ++i) {
              payload.value[axes[i]] = list[i];
            }
          }

          return {
            type: GrblLineParserResultParameters,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultParameters = (GrblLineParserResultParameters);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultHelp.js
      class GrblLineParserResultHelp {
        static parse(line) {
          // * Grbl v1.1
          //   [HLP:]
          const r = line.match(/^\[(?:HLP:)(.+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultHelp,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultHelp = (GrblLineParserResultHelp);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultVersion.js
      class GrblLineParserResultVersion {
        static parse(line) {
          // * Grbl v1.1
          //   [VER:]
          const r = line.match(/^\[(?:VER:)(.+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultVersion,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultVersion = (GrblLineParserResultVersion);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultOption.js
      class GrblLineParserResultOption {
        static parse(line) {
          // * Grbl v1.1
          //   [OPT:]
          const r = line.match(/^\[(?:OPT:)(.+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultOption,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultOption = (GrblLineParserResultOption);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultEcho.js
      class GrblLineParserResultEcho {
        static parse(line) {
          // * Grbl v1.1
          //   [echo:]
          const r = line.match(/^\[(?:echo:)(.+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultEcho,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultEcho = (GrblLineParserResultEcho);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultFeedback.js
      // https://github.com/grbl/grbl/wiki/Interfacing-with-Grbl#feedback-messages
      class GrblLineParserResultFeedback {
        // * Grbl v0.9
        //   []
        // * Grbl v1.1
        //   [MSG:]
        static parse(line) {
          const r = line.match(/^\[(?:MSG:)?(.+)\]$/);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: GrblLineParserResultFeedback,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultFeedback = (GrblLineParserResultFeedback);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultSettings.js


      class GrblLineParserResultSettings_GrblLineParserResultSettings {
        static parse(line) {
          const r = line.match(/^(\$[^=]+)=([^ ]*)\s*(.*)/);

          if (!r) {
            return null;
          }

          const payload = {
            name: r[1],
            value: r[2],
            message: trim_default()(r[3], '()')
          };
          return {
            type: GrblLineParserResultSettings_GrblLineParserResultSettings,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultSettings = (GrblLineParserResultSettings_GrblLineParserResultSettings);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParserResultStartup.js

      const GrblLineParserResultStartup_pattern = new RegExp(/^([a-zA-Z0-9]+)\s+((?:\d+\.){1,2}\d+[a-zA-Z0-9\-\.]*)([^\[]*\[[^\]]+\].*)?/);

      class GrblLineParserResultStartup_GrblLineParserResultStartup {
        // Grbl 0.9j ['$' for help]
        // Grbl 1.1d ['$' for help]
        // Grbl 1.1
        // Grbl 1.1h: LongMill build ['$' for help]
        // Grbl 1.1h ['$' for help] LongMill build Feb 25, 2020
        // gCarvin 2.0.0 ['$' for help]
        static parse(line) {
          const r = line.match(GrblLineParserResultStartup_pattern);

          if (!r) {
            return null;
          }

          const firmware = r[1];
          const version = r[2];

          const message = trim_default()(r[3]);

          const payload = {
            firmware,
            version,
            message
          };
          return {
            type: GrblLineParserResultStartup_GrblLineParserResultStartup,
            payload: payload
          };
        }

      }

/* harmony default export */ var Grbl_GrblLineParserResultStartup = (GrblLineParserResultStartup_GrblLineParserResultStartup);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblLineParser.js













      // Grbl v1.1
      // https://github.com/gnea/grbl/blob/edge/doc/markdown/interface.md

      class GrblLineParser_GrblLineParser {
        parse(line) {
          const parsers = [// <>
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

          for (let parser of parsers) {
            const result = parser.parse(line);

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

      }

/* harmony default export */ var Grbl_GrblLineParser = (GrblLineParser_GrblLineParser);
      // CONCATENATED MODULE: ./controllers/Grbl/GrblRunner.js





      function GrblRunner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function GrblRunner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GrblRunner_ownKeys(Object(source), true).forEach(function (key) { GrblRunner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GrblRunner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function GrblRunner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















      class GrblRunner_GrblRunner extends external_events_default.a.EventEmitter {
        constructor() {
          super(...arguments);

          GrblRunner_defineProperty(this, "state", {
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

          GrblRunner_defineProperty(this, "settings", {
            version: '',
            parameters: {},
            settings: {}
          });

          GrblRunner_defineProperty(this, "parser", new Grbl_GrblLineParser());
        }

        parse(data) {
          data = ('' + data).replace(/\s+$/, '');

          if (!data) {
            return;
          }

          this.emit('raw', {
            raw: data
          });
          const result = this.parser.parse(data) || {};
          const {
            type,
            payload
          } = result;
          const {
            raw
          } = payload;

          if (type === Grbl_GrblLineParserResultStatus) {
            // Grbl v1.1
            // WCO:0.000,10.000,2.500
            // A current work coordinate offset is now sent to easily convert
            // between position vectors, where WPos = MPos - WCO for each axis.
            if (has_default()(payload, 'mpos') && !has_default()(payload, 'wpos')) {
              payload.wpos = payload.wpos || {};

              each_default()(payload.mpos, (mpos, axis) => {
                const digits = decimal_places(mpos);

                const wco = get_default()(payload.wco || this.state.status.wco, axis, 0);

                payload.wpos[axis] = (Number(mpos) - Number(wco)).toFixed(digits);
              });
            } else if (has_default()(payload, 'wpos') && !has_default()(payload, 'mpos')) {
              payload.mpos = payload.mpos || {};

              each_default()(payload.wpos, (wpos, axis) => {
                const digits = decimal_places(wpos);

                const wco = get_default()(payload.wco || this.state.status.wco, axis, 0);

                payload.mpos[axis] = (Number(wpos) + Number(wco)).toFixed(digits);
              });
            }

            const probeActive = raw.includes('Pn:P');

            const nextState = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
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
            const nextState = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
              status: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state.status), {}, {
                activeState: GRBL_ACTIVE_STATE_ALARM,
                alarmCode: Number(payload.message)
              })
            });

            if (!isEqual_default()(this.state.status, nextState.status)) {
              this.state = nextState; // enforce change
            }

            this.emit('alarm', payload);
            return;
          }

          if (type === Grbl_GrblLineParserResultParserState) {
            const {
              modal,
              tool,
              feedrate,
              spindle
            } = payload;

            const nextState = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.state), {}, {
              parserstate: {
                modal: modal,
                tool: tool,
                feedrate: feedrate,
                spindle: spindle
              }
            });

            if (!isEqual_default()(this.state.parserstate, nextState.parserstate)) {
              this.state = nextState; // enforce change
            }

            this.emit('parserstate', payload);
            return;
          }

          if (type === Grbl_GrblLineParserResultParameters) {
            const {
              name,
              value
            } = payload;

            const nextSettings = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
              parameters: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings.parameters), {}, {
                [name]: value
              })
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
            const {
              name,
              value
            } = payload;

            const nextSettings = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
              settings: GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings.settings), {}, {
                [name]: value
              })
            });

            if (this.settings.settings[name] !== nextSettings.settings[name]) {
              this.settings = nextSettings; // enforce change
            }

            this.emit('settings', payload);
            return;
          }

          if (type === Grbl_GrblLineParserResultStartup) {
            const {
              version
            } = payload;

            const nextSettings = GrblRunner_objectSpread(GrblRunner_objectSpread({}, this.settings), {}, {
              version: version
            });

            if (!isEqual_default()(this.settings.version, nextSettings.version)) {
              this.settings = nextSettings; // enforce change
            }

            this.emit('startup', payload);
            return;
          }

          if (data.length > 0) {
            this.emit('others', payload);
            return;
          }
        }

        getMachinePosition() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return get_default()(state, 'status.mpos', {});
        }

        getWorkPosition() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return get_default()(state, 'status.wpos', {});
        }

        getModalGroup() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return get_default()(state, 'parserstate.modal', {});
        }

        getTool() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return Number(get_default()(state, 'parserstate.tool')) || 0;
        }

        isAlarm() {
          const activeState = get_default()(this.state, 'status.activeState');

          return activeState === GRBL_ACTIVE_STATE_ALARM;
        }

        isIdle() {
          const activeState = get_default()(this.state, 'status.activeState');

          return activeState === GRBL_ACTIVE_STATE_IDLE;
        }

      }

/* harmony default export */ var Grbl_GrblRunner = (GrblRunner_GrblRunner);
      // CONCATENATED MODULE: ../app/constants/index.js
      // AXIS
      const AXIS_E = 'e';
      const AXIS_X = 'x';
      const AXIS_Y = 'y';
      const AXIS_Z = 'z';
      const AXIS_A = 'a';
      const AXIS_B = 'b';
      const AXIS_C = 'c'; // Imperial System

      const IMPERIAL_UNITS = 'in';
      const IMPERIAL_STEPS = [0.0001, 0.0002, 0.0003, 0.0005, 0.001, 0.002, 0.003, 0.005, 0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.3, 0.5, 1, // Default
        2, 3, 5, 10, 20]; // Metric System

      const METRIC_UNITS = 'mm';
      const METRIC_STEPS = [0.001, 0.002, 0.003, 0.005, 0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.3, 0.5, 1, // Default
        2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500]; // Controller

      const constants_GRBL = 'Grbl';
      const MARLIN = 'Marlin'; // Workflow State

      const constants_WORKFLOW_STATE_IDLE = 'idle';
      const constants_WORKFLOW_STATE_PAUSED = 'paused';
      const constants_WORKFLOW_STATE_RUNNING = 'running'; // Grbl Active State

      const constants_GRBL_ACTIVE_STATE_IDLE = 'Idle';
      const constants_GRBL_ACTIVE_STATE_RUN = 'Run';
      const constants_GRBL_ACTIVE_STATE_HOLD = 'Hold';
      const constants_GRBL_ACTIVE_STATE_DOOR = 'Door';
      const constants_GRBL_ACTIVE_STATE_HOME = 'Home';
      const constants_GRBL_ACTIVE_STATE_SLEEP = 'Sleep';
      const constants_GRBL_ACTIVE_STATE_ALARM = 'Alarm';
      const constants_GRBL_ACTIVE_STATE_CHECK = 'Check';
      const GRBL_ACTIVE_STATE_JOG = 'Jog';
      const GRBL_ACTIVE_STATE_TESTING = 'Testing File';
      const LASER_MODE = 'laser';
      const SPINDLE_MODE = 'spindle';
      const CARVING_CATEGORY = 'Carving';
      const OVERRIDES_CATEGORY = 'Overrides';
      const VISUALIZER_CATEGORY = 'Visualizer';
      const LOCATION_CATEGORY = 'Location';
      const JOGGING_CATEGORY = 'Jogging';
      const MACRO_CATEGORY = 'Macros';
      const PROBING_CATEGORY = 'Probing';
      const SPINDLE_LASER_CATEGORY = 'Spindle/Laser';
      const GENERAL_CATEGORY = 'General';
      const TOOLBAR_CATEGORY = 'Toolbar';
      const RENDER_NO_FILE = 'RENDER_NO_FILE';
      const RENDER_LOADING = 'RENDER_LOADNG';
      const RENDER_RENDERING = 'RENDER_RENDERING';
      const RENDER_RENDERED = 'RENDER_RENDERED';
      const SPIRAL_MOVEMENT = 'SPIRAL_MOVEMENT';
      const ZIG_ZAG_MOVEMENT = 'ZIG_ZAG_MOVEMENT';
      const START_POSITION_BACK_LEFT = 'START_POSITION_BACK_LEFT';
      const START_POSITION_BACK_RIGHT = 'START_POSITION_BACK_RIGHT';
      const START_POSITION_FRONT_LEFT = 'START_POSITION_FRONT_LEFT';
      const START_POSITION_FRONT_RIGHT = 'START_POSITION_FRONT_RIGHT';
      const SURFACING_VISUALIZER_CONTAINER_ID = 'SURFACING_VISUALIZER_CONTAINER_ID';
      const VISUALIZER_PRIMARY = 'VISUALIZER_PRIMARY';
      const VISUALIZER_SECONDARY = 'VISUALIZER_SECONDARY';
      // EXTERNAL MODULE: external "avrgirl-arduino"
      var external_avrgirl_arduino_ = __webpack_require__(94);
      var external_avrgirl_arduino_default = /*#__PURE__*/__webpack_require__.n(external_avrgirl_arduino_);

      // EXTERNAL MODULE: C:/GitHub/gsender/node_modules/file-loader/dist/cjs.js!./lib/Firmware/Flashing/grblsept15.hex
      var grblsept15 = __webpack_require__(95);
      var grblsept15_default = /*#__PURE__*/__webpack_require__.n(grblsept15);

      // CONCATENATED MODULE: ./lib/Firmware/Flashing/firmwareflashing.js




      const firmwareflashing_log = Object(logger["a" /* default */])('FlashLib: ');

      const FlashingFirmware = recievedPortNumber => {
        if (!recievedPortNumber) {
          firmwareflashing_log.error('No port specified');
          return;
        }

        const controller = store["a" /* default */].get('controllers["' + recievedPortNumber + '"]');

        try {
          let avrgirl = new external_avrgirl_arduino_default.a({
            board: 'uno',
            port: recievedPortNumber
          });
          avrgirl.flash(grblsept15_default.a, error => {
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

/* harmony default export */ var firmwareflashing = (FlashingFirmware);
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/DefaultGrblSettings.txt
/* harmony default export */ var DefaultGrblSettings = ("{\"$0\":\"10\",\"$1\":\"255\",\"$2\":\"0\",\"$3\":\"3\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"3\",\"$11\":\"0.020\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"750.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"40.000\",\"$101\":\"40.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"235.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill12X12.txt
/* harmony default export */ var Sienci_Long_Mill12X12 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"304.000\",\"$131\":\"304.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill12X30.txt
/* harmony default export */ var Sienci_Long_Mill12X30 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"304.000\",\"$131\":\"812.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Long Mill30X30.txt
/* harmony default export */ var Sienci_Long_Mill30X30 = ("{\"$0\":\"10\",\"$1\":\"100\",\"$2\":\"1\",\"$3\":\"5\",\"$4\":true,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"3\",\"$24\":\"25.000\",\"$25\":\"1500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"3000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"4000.000\",\"$111\":\"4000.000\",\"$112\":\"3000.000\",\"$120\":\"750.000\",\"$121\":\"750.000\",\"$122\":\"500.000\",\"$130\":\"762.000\",\"$131\":\"812.000\",\"$132\":\"105.000\"}");
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Mill One.txt
/* harmony default export */ var Sienci_Mill_One = ("{\"$0\":\"10\",\"$1\":\"25\",\"$2\":\"0\",\"$3\":\"6\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"235.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
// CONCATENATED MODULE: C:/GitHub/gsender/node_modules/raw-loader/dist/cjs.js!./lib/Firmware/Profiles/EepromFiles/Sienci Mill OneV3.txt
/* harmony default export */ var Sienci_Mill_OneV3 = ("{\"$0\":\"10\",\"$1\":\"25\",\"$2\":\"0\",\"$3\":\"6\",\"$4\":false,\"$5\":false,\"$6\":false,\"$10\":\"1\",\"$11\":\"0.010\",\"$12\":\"0.002\",\"$13\":false,\"$20\":false,\"$21\":false,\"$22\":false,\"$23\":\"0\",\"$24\":\"25.000\",\"$25\":\"500.000\",\"$26\":\"250\",\"$27\":\"1.000\",\"$30\":\"1000\",\"$31\":\"0\",\"$32\":false,\"$100\":\"200.000\",\"$101\":\"200.000\",\"$102\":\"200.000\",\"$110\":\"1800.000\",\"$111\":\"1800.000\",\"$112\":\"600.000\",\"$120\":\"30.000\",\"$121\":\"30.000\",\"$122\":\"15.000\",\"$130\":\"257.000\",\"$131\":\"185.000\",\"$132\":\"100.000\"}");
      // CONCATENATED MODULE: ./lib/Firmware/Profiles/ApplyFirmwareProfile.js









      const ApplyFirmwareProfile = (nameOfMachine, typeOfMachine, recievedPortNumber) => {
        const gcode = (cmd, params) => {
          const s = map_default()(params, (value, letter) => String(letter + value)).join('=');
          return s.length > 0 ? cmd + '' + s : cmd;
        };

        const controller = store["a" /* default */].get('controllers["' + recievedPortNumber + '"]');
        let settings = DefaultGrblSettings;

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

        const obj = JSON.parse(settings);
        let values = Object.values(obj);

        if (values.length === 34) {
          for (let i = 0; i < values.length; i++) {
            if (values[i] === true) {
              values[i] = '1';
            }

            if (values[i] === false) {
              values[i] = '0';
            }
          }

          let keys = Object.keys(obj);
          let finalStrings = [];
          const valuesToSubmit = [];

          for (let i = 0; i < keys.length; i++) {
            valuesToSubmit.push([keys[i], values[i]]);
          }

          let gCoded = gcode(valuesToSubmit);

          for (let j = 0; j < gCoded.length; j++) {
            finalStrings[j] = gCoded[j].join('=');
          }

          controller.command('gcode', finalStrings);
          controller.command('gcode', '$$');
        }
      };

/* harmony default export */ var Profiles_ApplyFirmwareProfile = (ApplyFirmwareProfile);
      // CONCATENATED MODULE: ./lib/homing.js

      const FRONT_RIGHT = 'FR';
      const FRONT_LEFT = 'FL';
      const BACK_RIGHT = 'BR';
      const BACK_LEFT = 'BL';
      const POSITIVE_DIRECTION = 1;
      const NEGATIVE_DIRECTION = -1;
      const getHomingLocation = setting => {
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
      const determineMaxMovement = (position, movementDirection, limitLocation, limit) => {
        const OFFSET = 0.1;
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
      const getAxisMaximumLocation = homingMask => {
        const homingLocation = getHomingLocation(homingMask);

        if (homingLocation === BACK_RIGHT) {
          return [NEGATIVE_DIRECTION, NEGATIVE_DIRECTION];
        } else if (homingLocation === BACK_LEFT) {
          return [POSITIVE_DIRECTION, NEGATIVE_DIRECTION];
        } else if (homingLocation === FRONT_RIGHT) {
          return [NEGATIVE_DIRECTION, POSITIVE_DIRECTION];
        }

        return [POSITIVE_DIRECTION, POSITIVE_DIRECTION];
      };
      const determineMachineZeroFlagSet = (res, settings) => {
        const homingMask = get_default()(settings, 'settings.$23');
        const mpos = get_default()(res, 'mpos');
        const homingLocation = getHomingLocation(homingMask);
        const xPos = parseInt(mpos.x, 10);
        const yPos = parseInt(mpos.y, 10);
        const zPos = parseInt(mpos.z, 10);

        if (homingLocation !== BACK_RIGHT) {
          if (xPos === 0 && yPos === 0 && zPos === 0) {
            return true;
          }
        }

        return false;
      };
      // CONCATENATED MODULE: ./controllers/Grbl/GrblController.js









      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

      function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

      function GrblController_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function GrblController_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GrblController_ownKeys(Object(source), true).forEach(function (key) { GrblController_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GrblController_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function GrblController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























      // % commands

      const WAIT = '%wait';
      const PREHOOK_COMPLETE = '%pre_complete';
      const POSTHOOK_COMPLETE = '%post_complete';
      const GrblController_log = Object(logger["a" /* default */])('controller:Grbl');
      const GrblController_noop = noop_default.a;

      class GrblController_GrblController {
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
        constructor(engine, options) {
          var _this = this;

          GrblController_defineProperty(this, "type", GRBL);

          GrblController_defineProperty(this, "engine", null);

          GrblController_defineProperty(this, "sockets", {});

          GrblController_defineProperty(this, "connection", null);

          GrblController_defineProperty(this, "connectionEventListener", {
            data: _data => {
              GrblController_log.silly("< ".concat(_data));
              this.runner.parse('' + _data);
            },
            close: err => {
              this.ready = false;

              if (err) {
                GrblController_log.warn("Disconnected from serial port \"".concat(this.options.port, "\":"), err);
              }

              this.close(err => {
                // Remove controller from store
                const port = this.options.port;
                store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

                this.destroy();
              });
            },
            error: err => {
              this.ready = false;

              if (err) {
                GrblController_log.error("Unexpected error while reading/writing serial port \"".concat(this.options.port, "\":"), err);
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

          const {
            port: _port,
            baudrate,
            rtscts
          } = GrblController_objectSpread({}, options);

          this.options = GrblController_objectSpread(GrblController_objectSpread({}, this.options), {}, {
            port: _port,
            baudrate: baudrate,
            rtscts: rtscts
          }); // Connection

          this.connection = new lib_SerialConnection({
            path: _port,
            baudRate: baudrate,
            rtscts: rtscts,
            writeFilter: data => {
              const line = data.trim();

              if (!line) {
                return data;
              }

              {
                // Grbl settings: $0-$255
                const r = line.match(/^(\$\d{1,3})=([\d\.]+)$/);

                if (r) {
                  const name = r[1];
                  const value = Number(r[2]);

                  if (name === '$13' && value >= 0 && value <= 65535) {
                    const nextSettings = GrblController_objectSpread(GrblController_objectSpread({}, this.runner.settings), {}, {
                      settings: GrblController_objectSpread(GrblController_objectSpread({}, this.runner.settings.settings), {}, {
                        [name]: value ? '1' : '0'
                      })
                    });

                    this.runner.settings = nextSettings; // enforce change
                  }
                }
              }
              return data;
            }
          }); // Event Trigger

          this.event = new lib_EventTrigger((event, trigger, commands) => {
            GrblController_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

            if (trigger === 'system') {
              taskrunner["a" /* default */].run(commands);
            } else {
              this.command('gcode', commands);
            }
          }); // Feeder

          this.feeder = new lib_Feeder({
            dataFilter: (line, context) => {
              // Remove comments that start with a semicolon `;`
              line = line.replace(/\s*;.*/g, '').trim();
              context = this.populateContext(context);

              if (line[0] === '%') {
                // %wait
                if (line === WAIT) {
                  GrblController_log.debug('Wait for the planner to empty');
                  return 'G4 P0.5'; // dwell
                }

                if (line === PREHOOK_COMPLETE) {
                  GrblController_log.debug('Finished Pre-hook');
                  this.feeder.hold({
                    data: '%toolchange'
                  });
                  this.emit('toolchange:preHookComplete');
                  return '(Pre-Hook complete)';
                }

                if (line === POSTHOOK_COMPLETE) {
                  GrblController_log.debug('Finished Post-hook, resuming program');
                  this.workflow.resume();
                  return '(Post-Hook complete)';
                } // Expression
                // %_x=posx,_y=posy,_z=posz


                evaluate_assignment_expression(line.slice(1), context);
                return '';
              } // line="G0 X[posx - 8] Y[ymax]"
              // > "G0 X2 Y50"


              line = translate_expression(line, context);
              const data = external_gcode_parser_["parseLine"](line, {
                flatten: true
              });
              const words = external_ensure_array_default()(data.words);
              {
                // Program Mode: M0, M1
                const programMode = intersection_default()(words, ['M0', 'M1'])[0];

                if (programMode === 'M0') {
                  GrblController_log.debug('M0 Program Pause');
                  this.feeder.hold({
                    data: 'M0'
                  }); // Hold reason
                } else if (programMode === 'M1') {
                  GrblController_log.debug('M1 Program Pause');
                  this.feeder.hold({
                    data: 'M1'
                  }); // Hold reason
                }
              } // More aggressive updating of spindle modals for safety

              const spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

              if (spindleCommand) {
                this.updateSpindleModal(spindleCommand);
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
            let line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
            dataFilter: (line, context) => {
              // Remove comments that start with a semicolon `;`
              line = line.replace(/\s*;.*/g, '').trim();
              context = this.populateContext(context);
              const {
                sent,
                received
              } = this.sender.state;

              if (line[0] === '%') {
                // %wait
                if (line === WAIT) {
                  GrblController_log.debug("Wait for the planner to empty: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                  this.sender.hold({
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
              const data = external_gcode_parser_["parseLine"](line, {
                flatten: true
              });
              const words = external_ensure_array_default()(data.words);
              {
                // Program Mode: M0, M1
                const programMode = intersection_default()(words, ['M0', 'M1'])[0];

                if (programMode === 'M0') {
                  GrblController_log.debug("M0 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received)); // Workaround for Carbide files - prevent M0 early from pausing program

                  if (sent > 10) {
                    this.workflow.pause({
                      data: 'M0'
                    });
                    this.emit('workflow:pause', {
                      data: 'M0'
                    });
                  }

                  return line.replace('M0', '(M0)');
                } else if (programMode === 'M1') {
                  GrblController_log.debug("M1 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                  this.workflow.pause({
                    data: 'M1'
                  });
                  this.emit('workflow:pause', {
                    data: 'M1'
                  });
                  return line.replace('M1', '(M1)');
                }
              }
              const machineProfile = store["a" /* default */].get('machineProfile'); //const preferences = store.get('preferences');

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


              const spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

              if (spindleCommand) {
                this.updateSpindleModal(spindleCommand);
              }
              /* Emit event to UI for toolchange handler */


              if (includes_default()(words, 'M6')) {
                GrblController_log.debug("M6 Tool Change: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                const {
                  toolChangeOption
                } = this.toolChangeContext; // Handle specific cases for macro and pause, ignore is default and comments line out with no other action

                if (toolChangeOption === 'Pause') {
                  this.workflow.pause({
                    data: 'M6'
                  });
                  this.emit('gcode:toolChange', {
                    line: sent + 1,
                    block: line,
                    option: toolChangeOption
                  });
                } else if (toolChangeOption === 'Code') {
                  this.workflow.pause({
                    data: 'M6'
                  });
                  this.emit('toolchange:start');
                  this.runPreChangeHook(this.populateContext());
                }

                line = line.replace('M6', '(M6)');
              }

              return line;
            }
          });
          this.sender.on('data', function () {
            let line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
          this.sender.on('start', startTime => {
            this.actionTime.senderFinishTime = 0;
          });
          this.sender.on('end', finishTime => {
            this.actionTime.senderFinishTime = finishTime;
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
              const reason = GrblController_objectSpread({}, arguments.length <= 0 ? undefined : arguments[0]);

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
          this.runner.on('status', res => {
            if (this.homingStarted) {
              this.homingFlagSet = determineMachineZeroFlagSet(res, this.settings);
              this.emit('homing:flag', this.homingFlagSet);
              this.homingStarted = false;
            } // console.log(`runner on status ${res}`);


            this.actionMask.queryStatusReport = false;

            if (this.actionMask.replyStatusReport) {
              this.actionMask.replyStatusReport = false;
              this.emit('serialport:read', res.raw);
            } // Check if the receive buffer is available in the status report


            const rx = Number(get_default()(res, 'buf.rx', 0)) || 0;

            if (rx > 0) {
              // Do not modify the buffer size when running a G-code program
              if (this.workflow.state !== WORKFLOW_STATE_IDLE) {
                return;
              } // Check if the streaming protocol is character-counting streaming protocol


              if (this.sender.sp.type !== SP_TYPE_CHAR_COUNTING) {
                return;
              } // Check if the queue is empty


              if (this.sender.sp.dataLength !== 0) {
                return;
              } // Deduct the receive buffer length to prevent from buffer overrun


              const bufferSize = rx - 8; // TODO

              if (bufferSize > this.sender.sp.bufferSize) {
                this.sender.sp.bufferSize = bufferSize;
              }
            }
          });
          this.runner.on('ok', res => {
            if (this.actionMask.queryParserState.reply) {
              if (this.actionMask.replyParserState) {
                this.actionMask.replyParserState = false;
                this.emit('serialport:read', res.raw);
              }

              this.actionMask.queryParserState.reply = false;
              return;
            }

            const {
              hold,
              sent,
              received
            } = this.sender.state;

            if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
              this.emit('serialport:read', res.raw);

              if (hold && received + 1 >= sent) {
                GrblController_log.debug("Continue sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
                this.sender.unhold();
              }

              this.sender.ack();
              this.sender.next();
              return;
            }

            if (this.workflow.state === WORKFLOW_STATE_PAUSED && received < sent) {
              this.emit('serialport:read', res.raw);

              if (!hold) {
                GrblController_log.error('The sender does not hold off during the paused state');
              }

              if (received + 1 >= sent) {
                GrblController_log.debug("Stop sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
              }

              this.sender.ack();
              this.sender.next();
              return;
            }

            this.emit('serialport:read', res.raw); // Feeder

            this.feeder.ack();
            this.feeder.next();
          });
          this.runner.on('error', res => {
            const code = Number(res.message) || undefined;

            const error = find_default()(GRBL_ERRORS, {
              code: code
            });

            if (this.workflow.state === WORKFLOW_STATE_RUNNING || this.workflow.state === WORKFLOW_STATE_PAUSED) {
              const {
                lines,
                received
              } = this.sender.state;
              const line = lines[received] || '';
              const preferences = store["a" /* default */].get('preferences') || {
                showLineWarnings: false
              };
              this.emit('serialport:read', "error:".concat(code, " (").concat(error.message, ")"));

              if (error) {
                if (preferences.showLineWarnings === false) {
                  this.emit('gcode_error', error, code, line);
                  this.workflow.pause({
                    err: "error:".concat(code, " (").concat(error.message, ")")
                  });
                }

                if (preferences.showLineWarnings) {
                  this.workflow.pause({
                    err: "error:".concat(code, " (").concat(error.message, ")")
                  });
                  this.emit('workflow:state', this.workflow.state, {
                    validLine: false,
                    line: "".concat(lines.length, " ").concat(line)
                  });
                  return;
                }
              } else {
                this.emit('serialport:read', res.raw);
              }

              this.sender.ack();
              this.sender.next();
              return;
            }

            if (error) {
              // Grbl v1.1
              this.emit('serialport:read', "error:".concat(code, " (").concat(error.message, ")"));
            } else {
              // Grbl v0.9
              this.emit('serialport:read', res.raw);
            } // Feeder


            this.feeder.ack();
            this.feeder.next();
          });
          this.runner.on('alarm', res => {
            const code = Number(res.message) || undefined;

            const alarm = find_default()(GRBL_ALARMS, {
              code: code
            });

            if (alarm) {
              // Grbl v1.1
              this.emit('serialport:read', "ALARM:".concat(code, " (").concat(alarm.message, ")")); // Force propogation of current state on alarm

              this.state = this.runner.state;
              this.emit('controller:state', GRBL, this.state);
            } else {
              // Grbl v0.9
              this.emit('serialport:read', res.raw);
            }
          });
          this.runner.on('parserstate', res => {
            //finished searching gCode file for errors
            if (this.sender.state.finishTime > 0 && this.runner.state.status.activeState === 'Check') {
              this.command('gcode', '$c');
              this.workflow.stopTesting();
              this.emit('gcode_error_checking_file', this.sender.state, 'finished');
              return;
            }

            this.actionMask.queryParserState.state = false;
            this.actionMask.queryParserState.reply = true;

            if (this.actionMask.replyParserState) {
              this.emit('serialport:read', res.raw);
            }
          });
          this.runner.on('parameters', res => {
            this.emit('serialport:read', res.raw);
          });
          this.runner.on('feedback', res => {
            this.emit('serialport:read', res.raw);
          });
          this.runner.on('settings', res => {
            const setting = find_default()(GRBL_SETTINGS, {
              setting: res.name
            });

            if (!res.message && setting) {
              // Grbl v1.1
              this.emit('serialport:read', "".concat(res.name, "=").concat(res.value, " (").concat(setting.message, ", ").concat(setting.units, ")"));
            } else {
              // Grbl v0.9
              this.emit('serialport:read', res.raw);
            }
          });
          this.runner.on('startup', res => {
            this.emit('serialport:read', res.raw); // The startup message always prints upon startup, after a reset, or at program end.
            // Setting the initial state when Grbl has completed re-initializing all systems.

            this.clearActionValues(); // Set ready flag to true when a startup message has arrived

            this.ready = true; // Clear sender - for physical buttons
            //this.sender.unload();

            if (!this.initialized) {
              this.initialized = true; // Initialize controller

              this.initController();
            }
          });
          this.runner.on('others', res => {
            this.emit('serialport:read', res.raw);
          });

          const queryStatusReport = () => {
            // Check the ready flag
            if (!this.ready) {
              return;
            }

            const now = new Date().getTime(); // The status report query (?) is a realtime command, it does not consume the receive buffer.

            const lastQueryTime = this.actionTime.queryStatusReport;

            if (lastQueryTime > 0) {
              const timespan = Math.abs(now - lastQueryTime);
              const toleranceTime = 5000; // 5 seconds
              // Check if it has not been updated for a long time

              if (timespan >= toleranceTime) {
                GrblController_log.debug("Continue status report query: timespan=".concat(timespan, "ms"));
                this.actionMask.queryStatusReport = false;
              }
            }

            if (this.actionMask.queryStatusReport) {
              return;
            }

            if (this.isOpen()) {
              this.actionMask.queryStatusReport = true;
              this.actionTime.queryStatusReport = now;
              this.connection.write('?');
            }
          };

          const queryParserState = throttle_default()(() => {
            // Check the ready flag
            if (!this.ready) {
              return;
            }

            const now = new Date().getTime(); // Do not force query parser state ($G) when running a G-code program,
            // it will consume 3 bytes from the receive buffer in each time period.

            if (this.workflow.state === WORKFLOW_STATE_IDLE && this.runner.isIdle()) {
              const lastQueryTime = this.actionTime.queryParserState;

              if (lastQueryTime > 0) {
                const timespan = Math.abs(now - lastQueryTime);
                const toleranceTime = 10000; // 10 seconds
                // Check if it has not been updated for a long time

                if (timespan >= toleranceTime) {
                  GrblController_log.debug("Continue parser state query: timespan=".concat(timespan, "ms"));
                  this.actionMask.queryParserState.state = false;
                  this.actionMask.queryParserState.reply = false;
                }
              }
            }

            if (this.actionMask.queryParserState.state || this.actionMask.queryParserState.reply) {
              return;
            }

            if (this.isOpen()) {
              this.actionMask.queryParserState.state = true;
              this.actionMask.queryParserState.reply = false;
              this.actionTime.queryParserState = now;
              this.connection.write('$G\n');
            }
          }, 500);

          this.queryTimer = setInterval(() => {
            if (this.isClose()) {
              // Serial port is closed
              return;
            } // Feeder


            if (this.feeder.peek()) {
              this.emit('feeder:status', this.feeder.toJSON());
            } // Sender


            if (this.sender.peek()) {
              this.emit('sender:status', this.sender.toJSON());
            }

            const zeroOffset = isEqual_default()(this.runner.getWorkPosition(this.state), this.runner.getWorkPosition(this.runner.state)); // Grbl settings


            if (this.settings !== this.runner.settings) {
              this.settings = this.runner.settings;
              this.emit('controller:settings', GRBL, this.settings);
              this.emit('Grbl:settings', this.settings); // Backward compatibility
            } // Grbl state


            if (this.state !== this.runner.state) {
              this.state = this.runner.state;
              this.emit('controller:state', GRBL, this.state);
              this.emit('Grbl:state', this.state); // Backward compatibility
            } // Check the ready flag


            if (!this.ready) {
              return;
            } // ? - Status Report


            queryStatusReport(); // $G - Parser State

            queryParserState(); // Check if the machine has stopped movement after completion

            if (this.actionTime.senderFinishTime > 0) {
              const machineIdle = zeroOffset && this.runner.isIdle();
              const now = new Date().getTime();
              const timespan = Math.abs(now - this.actionTime.senderFinishTime);
              const toleranceTime = 500; // in milliseconds

              if (!machineIdle) {
                // Extend the sender finish time
                this.actionTime.senderFinishTime = now;
              } else if (timespan > toleranceTime) {
                GrblController_log.silly("Finished sending G-code: timespan=".concat(timespan));
                this.actionTime.senderFinishTime = 0; // Stop workflow

                this.command('gcode:stop');
              }
            }
          }, 250); // Load file if it exists in CNC engine (AKA it was loaded before connection
        }

        initController() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // $13=0 (report in mm)
            // $13=1 (report in inches)
            _this2.writeln('$$');

            yield lib_delay(50);

            _this2.event.trigger('controller:ready');
          })();
        }

        populateContext() {
          let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Machine position
          const {
            x: mposx,
            y: mposy,
            z: mposz,
            a: mposa,
            b: mposb,
            c: mposc
          } = this.runner.getMachinePosition(); // Work position

          const {
            x: posx,
            y: posy,
            z: posz,
            a: posa,
            b: posb,
            c: posc
          } = this.runner.getWorkPosition(); // Modal group

          const modal = this.runner.getModalGroup(); // Tool

          const tool = this.runner.getTool();
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

        clearActionValues() {
          this.actionMask.queryParserState.state = false;
          this.actionMask.queryParserState.reply = false;
          this.actionMask.queryStatusReport = false;
          this.actionMask.replyParserState = false;
          this.actionMask.replyStatusReport = false;
          this.actionTime.queryParserState = 0;
          this.actionTime.queryStatusReport = 0;
          this.actionTime.senderFinishTime = 0;
        }

        destroy() {
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

        get status() {
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

        open() {
          let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GrblController_noop;
          const {
            port,
            baudrate
          } = this.options; // Assertion check

          if (this.isOpen()) {
            GrblController_log.error("Cannot open serial port \"".concat(port, "\""));
            return;
          }

          this.connection.on('data', this.connectionEventListener.data);
          this.connection.on('close', this.connectionEventListener.close);
          this.connection.on('error', this.connectionEventListener.error);
          this.connection.open(err => {
            if (err) {
              GrblController_log.error("Error opening serial port \"".concat(port, "\":"), err);
              this.emit('serialport:error', {
                err: err,
                port: port
              });
              callback(err); // notify error

              return;
            }

            this.emit('serialport:open', {
              port: port,
              baudrate: baudrate,
              controllerType: this.type,
              inuse: true
            }); // Emit a change event to all connected sockets

            if (this.engine.io) {
              this.engine.io.emit('serialport:change', {
                port: port,
                inuse: true
              });
            }

            callback(); // register controller

            GrblController_log.debug("Connected to serial port \"".concat(port, "\""));
            this.workflow.stop(); // Clear action values

            this.clearActionValues();
          });
        }

        close(callback) {
          const {
            port
          } = this.options; // Assertion check

          if (!this.connection) {
            const err = "Serial port \"".concat(port, "\" is not available");
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

        isOpen() {
          return this.connection && this.connection.isOpen;
        }

        isClose() {
          return !this.isOpen();
        }

        loadFile(gcode, _ref) {
          let {
            name
          } = _ref;
          GrblController_log.debug("Loading file '".concat(name, "' to controller"));
          this.command('gcode:load', name, gcode);
        }

        addConnection(socket) {
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

        removeConnection(socket) {
          if (!socket) {
            GrblController_log.error('The socket parameter is not specified');
            return;
          }

          GrblController_log.debug("Remove socket connection: id=".concat(socket.id));
          this.sockets[socket.id] = undefined;
          delete this.sockets[socket.id];
        }

        emit(eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          Object.keys(this.sockets).forEach(id => {
            const socket = this.sockets[id];
            socket.emit(eventName, ...args);
          });
        }

        command(cmd) {
          var _this3 = this;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          const handler = {
            'flash:start': () => {
              let [port] = args;

              if (!port) {
                this.emit('task:error', 'No port specified - make sure you connect to you device at least once before attempting flashing');
                return;
              }

              this.close(() => {
                firmwareflashing(port);
              });
            },
            'flashing:success': () => {
              let [data] = args;
              this.emit('message', data);
            },
            'flashing:failed': () => {
              let [error] = args;
              this.emit('task:error', error);
            },
            'firmware:recievedProfiles': () => {
              let [files] = args;
              this.emit('task:finish', files);
            },
            'firmware:applyProfileSettings': () => {
              let [nameOfMachine, typeOfMachine, port] = args;
              Profiles_ApplyFirmwareProfile(nameOfMachine, typeOfMachine, port);
            },
            'firmware:grabMachineProfile': () => {
              // let [values] = args;
              const machineProfile = store["a" /* default */].get('machineProfile');
              this.emit('sender:status', machineProfile);
            },
            'gcode:load': () => {
              let [name, gcode, context = {}, callback = GrblController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              } // G4 P0 or P with a very small value will empty the planner queue and then
              // respond with an ok when the dwell is complete. At that instant, there will
              // be no queued motions, as long as no more commands were sent after the G4.
              // This is the fastest way to do it without having to check the status reports.


              const dwell = '%wait ; Wait for the planner to empty';
              const ok = this.sender.load(name, gcode + '\n' + dwell, context);

              if (!ok) {
                callback(new Error("Invalid G-code: name=".concat(name)));
                return;
              } //this.emit('gcode:load', name, gcode, context);
              //this.event.trigger('gcode:load');


              GrblController_log.debug("Load G-code: name=\"".concat(this.sender.state.name, "\", size=").concat(this.sender.state.gcode.length, ", total=").concat(this.sender.state.total));
              this.workflow.stop();
              callback(null, this.sender.toJSON());
            },
            'gcode:unload': () => {
              this.workflow.stop();
              this.engine.unload(); // Sender

              this.sender.unload();
              this.emit('file:unload');
              this.event.trigger('file:unload');
            },
            'start': () => {
              GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:start');
            },
            'gcode:start': () => {
              const [lineToStartFrom] = args;
              const totalLines = this.sender.state.total;

              if (lineToStartFrom && lineToStartFrom <= totalLines) {
                const {
                  lines = []
                } = this.sender.state;
                const firstHalf = lines.slice(0, lineToStartFrom);
                let feedRate = 200;
                let spindleRate = 0;

                const getWordValue = (token, words) => {
                  for (let wordPair of words) {
                    const [word, value] = wordPair;

                    if (word === token) {
                      return value;
                    }
                  }

                  return 0;
                };

                const toolpath = new external_gcode_toolpath_default.a();
                toolpath.loadFromStringSync(firstHalf.join('\n'), data => {
                  const {
                    words,
                    line
                  } = data;

                  if (line.includes('F')) {
                    feedRate = getWordValue('F', words);
                  }

                  if (line.includes('S')) {
                    spindleRate = getWordValue('S', words);
                  }
                });
                const modal = toolpath.getModal();
                const position = toolpath.getPosition();
                const {
                  x: xVal,
                  y: yVal,
                  z: zVal
                } = position;
                const modalGCode = []; // Move up and then to cut start position

                modalGCode.push('G0 G90 G21 Z10');
                modalGCode.push("G0 G90 G21 X".concat(xVal, " Y").concat(yVal));
                modalGCode.push("G0 G90 G21 Z".concat(zVal)); // Set modals based on what's parsed so far in the file

                modalGCode.push("".concat(modal.units, " ").concat(modal.distance, " ").concat(modal.arc, " ").concat(modal.feedrate, " ").concat(modal.wcs, " ").concat(modal.plane));
                modalGCode.push("F".concat(feedRate, " S").concat(spindleRate));
                this.command('gcode', modalGCode);
              } //Allow the prepend commands to register before resuming job


              setTimeout(() => {
                this.event.trigger('gcode:start');
                this.workflow.start(); // Feeder

                this.feeder.reset(); // Sender

                this.sender.next({
                  lineToStartFrom
                });
              }, 100);
            },
            'stop': () => {
              GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:stop', ...args);
            },
            // @param {object} options The options object.
            // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
            'gcode:stop': function () {
              var _gcodeStop = _asyncToGenerator(function* () {
                _this3.event.trigger('gcode:stop');

                _this3.workflow.stop();

                const [options] = args;

                const {
                  force = false
                } = GrblController_objectSpread({}, options);

                if (force) {
                  let activeState;
                  activeState = get_default()(_this3.state, 'status.activeState', '');

                  if (activeState === GRBL_ACTIVE_STATE_RUN) {
                    _this3.write('!'); // hold

                  }

                  yield lib_delay(500); // delay 500ms

                  activeState = get_default()(_this3.state, 'status.activeState', '');

                  if (activeState === GRBL_ACTIVE_STATE_HOLD) {
                    _this3.write('\x18'); // ^x

                  }
                }
              });

              function gcodeStop() {
                return _gcodeStop.apply(this, arguments);
              }

              return gcodeStop;
            }(),
            'pause': () => {
              GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:pause');
            },
            'gcode:pause': () => {
              this.event.trigger('gcode:pause');
              this.workflow.pause();
              this.write('!');
            },
            'resume': () => {
              GrblController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:resume');
            },
            'gcode:resume': () => {
              this.event.trigger('gcode:resume');
              this.write('~');
              this.workflow.resume();
            },
            'feeder:feed': () => {
              const [commands, context = {}] = args;
              this.command('gcode', commands, context);
            },
            'feeder:start': () => {
              if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
                return;
              }

              this.write('~');
              this.feeder.unhold();
              this.feeder.next();
            },
            'feeder:stop': () => {
              this.feeder.reset();
            },
            'feedhold': () => {
              this.event.trigger('feedhold');
              this.write('!');
            },
            'cyclestart': () => {
              this.event.trigger('cyclestart');
              this.write('~');
            },
            'statusreport': () => {
              this.write('?');
            },
            'homing': () => {
              this.event.trigger('homing');
              this.homingStarted = true; // Update homing cycle as having started

              this.writeln('$H');
              this.state.status.activeState = GRBL_ACTIVE_STATE_HOME;
              this.emit('controller:state', GRBL, this.state);
            },
            'sleep': () => {
              this.event.trigger('sleep');
              this.writeln('$SLP');
            },
            'unlock': () => {
              this.writeln('$X');
            },
            'reset': () => {
              this.workflow.stop();
              this.feeder.reset();
              this.write('\x18'); // ^x
            },
            'reset:limit': () => {
              this.workflow.stop();
              this.feeder.reset();
              this.write('\x18'); // ^x

              this.writeln('$X');
            },
            // Feed Overrides
            // @param {number} value The amount of percentage increase or decrease.
            //   0: Set 100% of programmed rate.
            //  10: Increase 10%
            // -10: Decrease 10%
            //   1: Increase 1%
            //  -1: Decrease 1%
            'feedOverride': () => {
              const [value] = args;

              if (value === 0) {
                this.write('\x90');
              } else if (value === 10) {
                this.write('\x91');
              } else if (value === -10) {
                this.write('\x92');
              } else if (value === 1) {
                this.write('\x93');
              } else if (value === -1) {
                this.write('\x94');
              }
            },
            // Spindle Speed Overrides
            // @param {number} value The amount of percentage increase or decrease.
            //   0: Set 100% of programmed spindle speed
            //  10: Increase 10%
            // -10: Decrease 10%
            //   1: Increase 1%
            //  -1: Decrease 1%
            'spindleOverride': () => {
              const [value] = args;

              if (value === 0) {
                this.write('\x99');
              } else if (value === 10) {
                this.write('\x9a');
              } else if (value === -10) {
                this.write('\x9b');
              } else if (value === 1) {
                this.write('\x9c');
              } else if (value === -1) {
                this.write('\x9d');
              }
            },
            // Rapid Overrides
            // @param {number} value A percentage value of 25, 50, or 100. A value of zero will reset to 100%.
            // 100: Set to 100% full rapid rate.
            //  50: Set to 50% of rapid rate.
            //  25: Set to 25% of rapid rate.
            'rapidOverride': () => {
              const [value] = args;

              if (value === 0 || value === 100) {
                this.write('\x95');
              } else if (value === 50) {
                this.write('\x96');
              } else if (value === 25) {
                this.write('\x97');
              }
            },
            'lasertest:on': () => {
              const [power = 0, duration = 0, maxS = 1000] = args;
              const commands = [// https://github.com/gnea/grbl/wiki/Grbl-v1.1-Laser-Mode
                // The laser will only turn on when Grbl is in a G1, G2, or G3 motion mode.
                'G1F1 M3 S' + ensure_positive_number(maxS * (power / 100))];

              if (duration > 0) {
                commands.push('G4P' + ensure_positive_number(duration));
                commands.push('M5 S0');
              }

              this.state.parserstate.modal.spindle = 'M3';
              this.emit('controller:state', GRBL, this.state);
              this.command('gcode', commands);
            },
            'lasertest:off': () => {
              const commands = ['M5S0'];
              this.command('gcode', commands);
            },
            'gcode': () => {
              const [commands, context] = args;
              const data = external_ensure_array_default()(commands).join('\n').split(/\r?\n/).filter(line => {
                if (typeof line !== 'string') {
                  return false;
                }

                return line.trim().length > 0;
              });
              this.feeder.feed(data, context);

              if (!this.feeder.isPending()) {
                this.feeder.next();
              }
            },
            'gcode:safe': () => {
              const [commands, prefUnits] = args;
              const deviceUnits = this.state.parserstate.modal.units;
              let code = [];

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

              this.command('gcode', code);
            },
            'jog:start': () => {
              let [axes, feedrate = 1000, units = METRIC_UNITS] = args; //const JOG_COMMAND_INTERVAL = 80;

              let unitModal = units === METRIC_UNITS ? 'G21' : 'G20';
              let {
                $20,
                $130,
                $131,
                $132,
                $23
              } = this.settings.settings;
              let jogFeedrate;

              if ($20 === '1') {
                $130 = Number($130);
                $131 = Number($131);
                $132 = Number($132); // Convert feedrate to metric if working in imperial - easier to convert feedrate and treat everything else as MM than opposite

                if (units !== METRIC_UNITS) {
                  feedrate = (feedrate * 25.4).toFixed(2);
                  unitModal = 'G21';
                }

                const OFFSET = 0.1;
                const FIXED = 2; //If we are moving on the positive direction, we don't need to subtract
                //the max travel by it as we are moving towards the zero position, but if
                //we are moving in the negative direction we need to subtract the max travel
                //by it to reach the maximum amount in that direction

                const calculateAxisValue = _ref2 => {
                  let {
                    direction,
                    position,
                    maxTravel
                  } = _ref2;

                  if (position === 0) {
                    return ((maxTravel - OFFSET) * direction).toFixed(FIXED);
                  }

                  if (direction === 1) {
                    return Number((position * direction - OFFSET).toFixed(FIXED));
                  } else {
                    return Number(-(maxTravel - position - OFFSET).toFixed(FIXED));
                  }
                };

                let {
                  mpos
                } = this.state.status;
                Object.keys(mpos).forEach(axis => {
                  mpos[axis] = Number(mpos[axis]);
                });

                if (this.homingFlagSet) {
                  const [xMaxLoc, yMaxLoc] = getAxisMaximumLocation($23);

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
                Object.keys(axes).forEach(axis => {
                  axes[axis] *= jogFeedrate;
                });
              }

              axes.F = feedrate;

              if (axes.Z) {
                axes.F *= 0.8;
                axes.F = axes.F.toFixed(3);
              }

              const jogCommand = "$J=".concat(unitModal, "G91 ") + map_default()(axes, (value, letter) => '' + letter.toUpperCase() + value).join(' ');
              this.command('gcode', jogCommand);
            },
            'jog:stop': () => {
              this.feeder.reset();
              this.command('jog:cancel');
              this.feeder.reset();
            },
            'jog:cancel': () => {
              this.command('gcode', '\x85');
            },
            'macro:run': () => {
              let [id, context = {}, callback = GrblController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              }

              const macros = configstore["a" /* default */].get('macros');

              const macro = find_default()(macros, {
                id: id
              });

              if (!macro) {
                GrblController_log.error("Cannot find the macro: id=".concat(id));
                return;
              }

              this.event.trigger('macro:run');
              this.command('gcode', macro.content, context);
              callback(null);
            },
            'macro:load': () => {
              let [id, context = {}, callback = GrblController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              }

              const macros = configstore["a" /* default */].get('macros');

              const macro = find_default()(macros, {
                id: id
              });

              if (!macro) {
                GrblController_log.error("Cannot find the macro: id=".concat(id));
                return;
              }

              this.event.trigger('macro:load');
              this.command('gcode:load', macro.name, macro.content, context, callback);
            },
            'watchdir:load': () => {
              const [file, callback = GrblController_noop] = args;
              const context = {}; // empty context

              monitor["a" /* default */].readFile(file, (err, data) => {
                if (err) {
                  callback(err);
                  return;
                }

                this.command('gcode:load', file, data, context, callback);
              });
            },
            'machineprofile:load': () => {
              const [machineProfile] = args;
              store["a" /* default */].set('machineProfile', machineProfile);
            },
            'settings:updated': () => {
              const [newSettings = {}] = args;
              const currentSettings = store["a" /* default */].get('preferences') || {};

              const updated = GrblController_objectSpread(GrblController_objectSpread({}, currentSettings), newSettings);

              store["a" /* default */].set('preferences', updated);
            },
            'toolchange:context': () => {
              const [context] = args;
              this.toolChangeContext = context;
            },
            'toolchange:pre': () => {
              GrblController_log.debug('Starting pre hook');
              this.runPreChangeHook();
            },
            'toolchange:post': () => {
              GrblController_log.debug('starting post hook');
              this.command('feeder:start');
              this.runPostChangeHook();
            },
            'gcode:outline': () => {
              const [gcode = '', concavity = Infinity] = args;
              const toRun = getOutlineGcode(gcode, concavity);
              GrblController_log.debug('Running outline');
              this.emit('outline:start');
              this.command('gcode', toRun);
            }
          }[cmd];

          if (!handler) {
            GrblController_log.error("Unknown command: ".concat(cmd));
            return;
          }

          handler();
        }

        write(data, context) {
          // Assertion check
          if (this.isClose()) {
            GrblController_log.error("Serial port \"".concat(this.options.port, "\" is not accessible"));
            return;
          }

          const cmd = data.trim();
          this.actionMask.replyStatusReport = cmd === '?' || this.actionMask.replyStatusReport;
          this.actionMask.replyParserState = cmd === '$G' || this.actionMask.replyParserState;
          this.emit('serialport:write', data, GrblController_objectSpread(GrblController_objectSpread({}, context), {}, {
            source: WRITE_SOURCE_CLIENT
          }));
          this.connection.write(data);
          GrblController_log.silly("> ".concat(data));
        }

        writeln(data, context) {
          if (includes_default()(GRBL_REALTIME_COMMANDS, data)) {
            this.write(data, context);
          } else {
            this.write(data + '\n', context);
          }
        }

        convertGcodeToArray(gcode) {
          //Clean up lines and remove ones that are comments and headers
          const lines = gcode.split('\n').filter(line => line.trim().length > 0);
          return lines;
        }

        updateSpindleModal(modal) {
          this.state.parserstate.modal.spindle = modal;
          this.emit('controller:state', GRBL, this.state);
        }
        /* Runs specified code segment on M6 command before alerting the UI as to what's happened */


        runPreChangeHook() {
          const {
            preHook
          } = this.toolChangeContext || '';
          const block = this.convertGcodeToArray(preHook);
          block.push(PREHOOK_COMPLETE);
          this.command('gcode', block);
        }

        runPostChangeHook() {
          const {
            postHook
          } = this.toolChangeContext || '';
          const block = this.convertGcodeToArray(postHook);
          block.push(POSTHOOK_COMPLETE);
          this.command('gcode', block);
        }

      }

/* harmony default export */ var Grbl_GrblController = (GrblController_GrblController);
      // EXTERNAL MODULE: external "lodash/uniq"
      var uniq_ = __webpack_require__(96);
      var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq_);

      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultEcho.js
      class MarlinLineParserResultEcho {
        // echo:
        static parse(line) {
          const r = line.match(/^echo:\s*(.+)$/i);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: MarlinLineParserResultEcho,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultEcho = (MarlinLineParserResultEcho);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultError.js
      class MarlinLineParserResultError {
        // Error:Printer halted. kill() called!
        static parse(line) {
          const r = line.match(/^Error:\s*(.+)$/i);

          if (!r) {
            return null;
          }

          const payload = {
            message: r[1]
          };
          return {
            type: MarlinLineParserResultError,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultError = (MarlinLineParserResultError);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultFirmware.js
      class MarlinLineParserResultFirmware {
        // FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff
        static parse(line) {
          let r = line.match(/^FIRMWARE_NAME:.*/i);

          if (!r) {
            return null;
          }

          const payload = {};
          {
            // FIRMWARE_NAME
            const r = line.match(/FIRMWARE_NAME:([a-zA-Z\_\-]+(\s+[\d\.]+)?)/);

            if (r) {
              payload.firmwareName = r[1];
            }
          }
          {
            // PROTOCOL_VERSION
            const r = line.match(/PROTOCOL_VERSION:([\d\.]+)/);

            if (r) {
              payload.protocolVersion = r[1];
            }
          }
          {
            // MACHINE_TYPE
            const r = line.match(/MACHINE_TYPE:(\w+)/);

            if (r) {
              payload.machineType = r[1];
            }
          }
          {
            // EXTRUDER_COUNT
            const r = line.match(/EXTRUDER_COUNT:(\d+)/);

            if (r) {
              payload.extruderCount = Number(r[1]);
            }
          }
          {
            // UUID
            const r = line.match(/UUID:([a-zA-Z0-9\-]+)/);

            if (r) {
              payload.uuid = r[1];
            }
          }
          return {
            type: MarlinLineParserResultFirmware,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultFirmware = (MarlinLineParserResultFirmware);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultOk.js
      class MarlinLineParserResultOk {
        // ok
        static parse(line) {
          const r = line.match(/^ok$/);

          if (!r) {
            return null;
          }

          const payload = {};
          return {
            type: MarlinLineParserResultOk,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultOk = (MarlinLineParserResultOk);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultPosition.js


      class MarlinLineParserResultPosition_MarlinLineParserResultPosition {
        // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
        static parse(line) {
          const r = line.match(/^(?:(?:X|Y|Z|E):[0-9\.\-]+\s+)+/i);

          if (!r) {
            return null;
          }

          const payload = {
            pos: {}
          };
          const pattern = /((X|Y|Z|E):[0-9\.\-]+)+/gi;
          const params = r[0].match(pattern);

          for (let param of params) {
            const nv = param.match(/^(.+):(.+)/);

            if (nv) {
              const axis = nv[1].toLowerCase();
              const pos = nv[2];
              const digits = decimal_places(pos);
              payload.pos[axis] = Number(pos).toFixed(digits);
            }
          }

          return {
            type: MarlinLineParserResultPosition_MarlinLineParserResultPosition,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultPosition = (MarlinLineParserResultPosition_MarlinLineParserResultPosition);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParserResultStart.js
      class MarlinLineParserResultStart {
        // start
        static parse(line) {
          const r = line.match(/^(?:echo:)?start$/i);

          if (!r) {
            return null;
          }

          const payload = {};
          return {
            type: MarlinLineParserResultStart,
            payload: payload
          };
        }

      }

/* harmony default export */ var Marlin_MarlinLineParserResultStart = (MarlinLineParserResultStart);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinLineParser.js








      class MarlinLineParser_MarlinLineParser {
        parse(line) {
          const parsers = [// start
            Marlin_MarlinLineParserResultStart, // FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff
            Marlin_MarlinLineParserResultFirmware, // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
            Marlin_MarlinLineParserResultPosition, // ok
            Marlin_MarlinLineParserResultOk, // echo:
            Marlin_MarlinLineParserResultEcho, // Error:Printer halted. kill() called!
            Marlin_MarlinLineParserResultError];

          for (let parser of parsers) {
            const result = parser.parse(line);

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

      }

/* harmony default export */ var Marlin_MarlinLineParser = (MarlinLineParser_MarlinLineParser);
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinRunner.js



      function MarlinRunner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function MarlinRunner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarlinRunner_ownKeys(Object(source), true).forEach(function (key) { MarlinRunner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarlinRunner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function MarlinRunner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










      class MarlinRunner_MarlinRunner extends external_events_default.a.EventEmitter {
        constructor() {
          super(...arguments);

          MarlinRunner_defineProperty(this, "state", {
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

          MarlinRunner_defineProperty(this, "settings", {});

          MarlinRunner_defineProperty(this, "parser", new Marlin_MarlinLineParser());
        }

        parse(data) {
          data = ('' + data).replace(/\s+$/, '');

          if (!data) {
            return;
          }

          this.emit('raw', {
            raw: data
          });
          const result = this.parser.parse(data) || {};
          const {
            type,
            payload
          } = result; // const { raw } = payload;

          if (type === Marlin_MarlinLineParserResultStart) {
            this.emit('start', payload);
            return;
          }

          if (type === Marlin_MarlinLineParserResultFirmware) {
            const {
              firmwareName,
              protocolVersion,
              machineType,
              extruderCount,
              uuid
            } = payload;

            const nextSettings = MarlinRunner_objectSpread(MarlinRunner_objectSpread({}, this.settings), {}, {
              firmwareName,
              protocolVersion,
              machineType,
              extruderCount,
              uuid
            });

            if (!isEqual_default()(this.settings, nextSettings)) {
              this.settings = nextSettings; // enforce change
            }

            this.emit('firmware', payload);
            return;
          }

          if (type === Marlin_MarlinLineParserResultPosition) {
            const nextState = MarlinRunner_objectSpread(MarlinRunner_objectSpread({}, this.state), {}, {
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

        getPosition() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return get_default()(state, 'pos', {});
        }

        getModalGroup() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          return get_default()(state, 'modal', {});
        }

        getTool() {
          let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
          // Not supported
          return 0;
        }

        isAlarm() {
          // Not supported
          return false;
        }

        isIdle() {
          // Not supported
          return false;
        }

      }

/* harmony default export */ var Marlin_MarlinRunner = (MarlinRunner_MarlinRunner);
      // CONCATENATED MODULE: ./controllers/Marlin/interpret.js



      const fromPairs = pairs => {
        let index = -1;
        const length = !pairs ? 0 : pairs.length;
        const result = {};

        while (++index < length) {
          const pair = pairs[index];
          result[pair[0]] = pair[1];
        }

        return result;
      };

      const partitionWordsByGroup = function partitionWordsByGroup() {
        let words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        const groups = [];

        for (let i = 0; i < words.length; ++i) {
          const word = words[i];
          const letter = word[0];

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

      const interpret = function () {
        let cmd = '';
        return function (line, callback) {
          const data = Object(external_gcode_parser_["parseLine"])(line);
          const groups = partitionWordsByGroup(external_ensure_array_default()(data.words));

          for (let i = 0; i < groups.length; ++i) {
            const words = groups[i];
            const word = words[0] || [];
            const letter = word[0];
            const arg = word[1];

            if (letter === 'G' || letter === 'M') {
              cmd = letter + arg;
              const params = fromPairs(words.slice(1));
              callback(cmd, params);
            } else {
              // Use previous command if the line does not start with Gxx or Mxx
              // G0 XZ0.25
              //   X-0.5 Y0
              //   Z0.1
              const params = fromPairs(words);
              callback(cmd, params);
            }
          }
        };
      }();

/* harmony default export */ var Marlin_interpret = (interpret);
      // CONCATENATED MODULE: ./controllers/Marlin/constants.js
      // Marlin
      const constants_MARLIN = 'Marlin';
      const QUERY_TYPE_POSITION = 'position';
      const QUERY_TYPE_TEMPERATURE = 'temperature';
      // CONCATENATED MODULE: ./controllers/Marlin/MarlinController.js









      function MarlinController_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function MarlinController_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MarlinController_ownKeys(Object(source), true).forEach(function (key) { MarlinController_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MarlinController_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function MarlinController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


      // import Toolpath from 'gcode-toolpath';






      // import delay from '../../lib/delay';















      // % commands

      const MarlinController_WAIT = '%wait';
      const MarlinController_log = Object(logger["a" /* default */])('controller:Marlin');
      const MarlinController_noop = noop_default.a;

      class MarlinController_MarlinController {
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
        constructor(engine, options) {
          var _this = this;

          MarlinController_defineProperty(this, "type", constants_MARLIN);

          MarlinController_defineProperty(this, "engine", null);

          MarlinController_defineProperty(this, "sockets", {});

          MarlinController_defineProperty(this, "connection", null);

          MarlinController_defineProperty(this, "connectionEventListener", {
            data: _data => {
              MarlinController_log.silly("< ".concat(_data));
              this.runner.parse('' + _data);
            },
            close: err => {
              this.ready = false;

              if (err) {
                MarlinController_log.warn("Disconnected from serial port \"".concat(this.options.port, "\":"), err);
              }

              this.close(err => {
                // Remove controller from store
                const port = this.options.port;
                store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

                this.destroy();
              });
            },
            error: err => {
              this.ready = false;

              if (err) {
                MarlinController_log.error("Unexpected error while reading/writing serial port \"".concat(this.options.port, "\":"), err);
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
            issue: () => {
              if (!this.query.type) {
                return;
              }

              const now = new Date().getTime();

              if (this.query.type === QUERY_TYPE_POSITION) {
                this.connection.write('M114\n', {
                  source: WRITE_SOURCE_SERVER
                });
                this.query.lastQueryTime = now;
              } else {
                MarlinController_log.error('Unsupported query type:', this.query.type);
              }

              this.query.type = null;
            }
          });

          MarlinController_defineProperty(this, "queryPosition", (() => {
            let lastQueryTime = 0;
            return throttle_default()(() => {
              // Check the ready flag
              if (!this.ready) {
                return;
              }

              const now = new Date().getTime();

              if (!this.query.type) {
                this.query.type = QUERY_TYPE_POSITION;
                lastQueryTime = now;
              } else if (lastQueryTime > 0) {
                const timespan = Math.abs(now - lastQueryTime);
                const toleranceTime = 5000; // 5 seconds

                if (timespan >= toleranceTime) {
                  MarlinController_log.silly("Reschedule current position query: now=".concat(now, "ms, timespan=").concat(timespan, "ms"));
                  this.query.type = QUERY_TYPE_POSITION;
                  lastQueryTime = now;
                }
              }
            }, 500);
          })());

          if (!engine) {
            throw new Error('engine must be specified');
          }

          this.engine = engine;

          const {
            port: _port,
            baudrate,
            rtscts
          } = MarlinController_objectSpread({}, options);

          this.options = MarlinController_objectSpread(MarlinController_objectSpread({}, this.options), {}, {
            port: _port,
            baudrate: baudrate,
            rtscts: rtscts
          }); // Connection

          this.connection = new lib_SerialConnection({
            path: _port,
            baudRate: baudrate,
            rtscts: rtscts,
            writeFilter: (data, context) => {
              const {
                source = null
              } = MarlinController_objectSpread({}, context);

              const line = data.trim(); // Update write history

              this.history.writeSource = source;
              this.history.writeLine = line;

              if (!line) {
                return data;
              }

              const nextState = MarlinController_objectSpread(MarlinController_objectSpread({}, this.runner.state), {}, {
                modal: MarlinController_objectSpread({}, this.runner.state.modal)
              });

              Marlin_interpret(line, (cmd, params) => {
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
                  const coolant = nextState.modal.coolant; // M7: Mist coolant, M8: Flood coolant, M9: Coolant off, [M7,M8]: Both on

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

              if (!isEqual_default()(this.runner.state, nextState)) {
                this.runner.state = nextState; // enforce change
              }

              return data;
            }
          }); // Event Trigger

          this.event = new lib_EventTrigger((event, trigger, commands) => {
            MarlinController_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

            if (trigger === 'system') {
              taskrunner["a" /* default */].run(commands);
            } else {
              this.command('gcode', commands);
            }
          }); // Feeder

          this.feeder = new lib_Feeder({
            dataFilter: (line, context) => {
              // Remove comments that start with a semicolon `;`
              line = line.replace(/\s*;.*/g, '').trim();
              context = this.populateContext(context);

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
              const data = external_gcode_parser_["parseLine"](line, {
                flatten: true
              });
              const words = external_ensure_array_default()(data.words);
              {
                // Program Mode: M0, M1
                const programMode = intersection_default()(words, ['M0', 'M1'])[0];

                if (programMode === 'M0') {
                  MarlinController_log.debug('M0 Program Pause');
                  this.workflow.pause({
                    data: 'M0'
                  });
                  this.emit('workflow:pause', {
                    data: 'M0'
                  });
                  return line.replace('M0', '(M0)');
                } else if (programMode === 'M1') {
                  MarlinController_log.debug('M1 Program Pause');
                  this.workflow.pause({
                    data: 'M1'
                  });
                  this.emit('workflow:pause', {
                    data: 'M1'
                  });
                  return line.replace('M1', '(M1)');
                }
              } // M6 Tool Change

              if (includes_default()(words, 'M6')) {
                MarlinController_log.debug('M6 Tool Change');
                this.feeder.hold({
                  data: 'M6'
                }); // Hold reason
              } // More aggressive updating of spindle modals for safety


              const spindleCommand = intersection_default()(words, ['M3', 'M4'])[0];

              if (spindleCommand) {
                this.updateSpindleModal(spindleCommand);
              }

              return line;
            }
          });
          this.feeder.on('data', function () {
            let line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
            dataFilter: (line, context) => {
              // Remove comments that start with a semicolon `;`
              line = line.replace(/\s*;.*/g, '').trim();
              context = this.populateContext(context);
              const {
                sent,
                received
              } = this.sender.state;

              if (line[0] === '%') {
                // %wait
                if (line === MarlinController_WAIT) {
                  MarlinController_log.debug("Wait for the planner to empty: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                  this.sender.hold({
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
              const data = external_gcode_parser_["parseLine"](line, {
                flatten: true
              });
              const words = external_ensure_array_default()(data.words);
              {
                // Program Mode: M0, M1
                const programMode = intersection_default()(words, ['M0', 'M1'])[0];

                if (programMode === 'M0') {
                  MarlinController_log.debug("M0 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received)); // Workaround for Carbide files - prevent M0 early from pausing program

                  if (sent > 10) {
                    this.workflow.pause({
                      data: 'M0'
                    });
                    this.emit('workflow:pause', {
                      data: 'M0'
                    });
                  }

                  return line.replace('M0', '(M0)');
                } else if (programMode === 'M1') {
                  MarlinController_log.debug("M1 Program Pause: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                  this.workflow.pause({
                    data: 'M1'
                  });
                  this.emit('workflow:pause', {
                    data: 'M1'
                  });
                  return line.replace('M1', '(M1)');
                }
              } // M6 Tool Change

              if (includes_default()(words, 'M6')) {
                MarlinController_log.debug("M6 Tool Change: line=".concat(sent + 1, ", sent=").concat(sent, ", received=").concat(received));
                this.workflow.pause({
                  data: 'M6'
                });
              }

              return line;
            }
          });
          this.sender.on('data', function () {
            let line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
          this.sender.on('start', startTime => {
            this.senderFinishTime = 0;
          });
          this.sender.on('end', finishTime => {
            this.senderFinishTime = finishTime;
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
              const reason = MarlinController_objectSpread({}, arguments.length <= 0 ? undefined : arguments[0]);

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
          this.runner.on('start', res => {
            this.emit('serialport:read', res.raw); // Marlin sends 'start' as the first message after
            // power-on, but not when the serial port is closed and
            // then re-opened.  Marlin has no software-initiated
            // restart, so 'start' is not dependable as a readiness
            // indicator.  Instead, we send M115 on connection open
            // to request a firmware report, whose response signals
            // Marlin readiness.  On initial power-up, Marlin might
            // miss that first M115 as it boots, so we send this
            // possibly-redundant M115 when we see 'start'.

            this.connection.write('M115\n', {
              source: WRITE_SOURCE_SERVER
            });
          });
          this.runner.on('echo', res => {
            this.emit('serialport:read', res.raw);
          });
          this.runner.on('firmware', res => {
            this.emit('serialport:read', res.raw);

            if (!this.ready) {
              this.ready = true; // Initialize controller

              this.event.trigger('controller:ready');
            }
          });
          this.runner.on('pos', res => {
            MarlinController_log.silly("controller.on('pos'): source=".concat(this.history.writeSource, ", line=").concat(JSON.stringify(this.history.writeLine), ", res=").concat(JSON.stringify(res)));

            if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
              this.emit('serialport:read', res.raw);
            }
          });
          this.runner.on('temperature', res => {
            MarlinController_log.silly("controller.on('temperature'): source=".concat(this.history.writeSource, ", line=").concat(JSON.stringify(this.history.writeLine), ", res=").concat(JSON.stringify(res)));

            if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
              this.emit('serialport:read', res.raw);
            }
          });
          this.runner.on('ok', res => {
            MarlinController_log.silly("controller.on('ok'): source=".concat(this.history.writeSource, ", line=").concat(JSON.stringify(this.history.writeLine), ", res=").concat(JSON.stringify(res)));

            if (res) {
              if (includes_default()([WRITE_SOURCE_CLIENT, WRITE_SOURCE_FEEDER], this.history.writeSource)) {
                this.emit('serialport:read', res.raw);
              } else if (!this.history.writeSource) {
                this.emit('serialport:read', res.raw);
                MarlinController_log.error('"history.writeSource" should not be empty');
              }
            }

            this.history.writeSource = null;
            this.history.writeLine = ''; // Perform preemptive query to prevent starvation

            const now = new Date().getTime();
            const timespan = Math.abs(now - this.query.lastQueryTime);

            if (this.query.type && timespan > 2000) {
              this.query.issue();
              return;
            }

            const {
              hold,
              sent,
              received
            } = this.sender.state;

            if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
              this.emit('serialport:read', res.raw);

              if (hold && received + 1 >= sent) {
                MarlinController_log.debug("Continue sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
                this.sender.unhold();
              }

              this.sender.ack();
              this.sender.next();
              return;
            }

            if (this.workflow.state === WORKFLOW_STATE_PAUSED && received < sent) {
              this.emit('serialport:read', res.raw);

              if (!hold) {
                MarlinController_log.error('The sender does not hold off during the paused state');
              }

              if (received + 1 >= sent) {
                MarlinController_log.debug("Stop sending G-code: hold=".concat(hold, ", sent=").concat(sent, ", received=").concat(received + 1));
              }

              this.sender.ack();
              this.sender.next();
              return;
            } // Feeder


            if (this.feeder.next()) {
              return;
            }

            this.query.issue();
          });
          this.runner.on('error', res => {
            // Sender
            if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
              const ignoreErrors = configstore["a" /* default */].get('state.controller.exception.ignoreErrors');
              const pauseError = !ignoreErrors;
              const {
                lines,
                received
              } = this.sender.state;
              const line = lines[received] || '';
              this.emit('serialport:read', "> ".concat(line.trim(), " (line=").concat(received + 1, ")"));
              this.emit('serialport:read', res.raw);

              if (pauseError) {
                this.workflow.pause({
                  err: res.raw
                });
              }

              this.sender.ack();
              this.sender.next();
              return;
            }

            this.emit('serialport:read', res.raw); // Feeder

            this.feeder.next();
          });
          this.runner.on('others', res => {
            this.emit('serialport:read', res.raw);
          });
          this.queryTimer = setInterval(() => {
            if (this.isClose()) {
              // Serial port is closed
              return;
            } // Feeder


            if (this.feeder.peek()) {
              this.emit('feeder:status', this.feeder.toJSON());
            } // Sender


            if (this.sender.peek()) {
              this.emit('sender:status', this.sender.toJSON());
            }

            const zeroOffset = isEqual_default()(this.runner.getPosition(this.state), this.runner.getPosition(this.runner.state)); // Marlin settings


            if (this.settings !== this.runner.settings) {
              this.settings = this.runner.settings;
              this.emit('controller:settings', constants_MARLIN, this.settings);
              this.emit('Marlin:settings', this.settings); // Backward compatibility
            } // Marlin state


            if (this.state !== this.runner.state) {
              this.state = this.runner.state;
              this.emit('controller:state', constants_MARLIN, this.state);
              this.emit('Marlin:state', this.state); // Backward compatibility
            } // Check the ready flag


            if (!this.ready) {
              return;
            } // M114: Get Current Position


            this.queryPosition();
            {
              // The following criteria must be met to issue a query
              const notBusy = !this.history.writeSource;
              const senderIdle = this.sender.state.sent === this.sender.state.received;
              const feederEmpty = this.feeder.size() === 0;

              if (notBusy && senderIdle && feederEmpty) {
                this.query.issue();
              }
            } // Check if the machine has stopped movement after completion

            if (this.senderFinishTime > 0) {
              const machineIdle = zeroOffset;
              const now = new Date().getTime();
              const timespan = Math.abs(now - this.senderFinishTime);
              const toleranceTime = 500; // in milliseconds

              if (!machineIdle) {
                // Extend the sender finish time
                this.senderFinishTime = now;
              } else if (timespan > toleranceTime) {
                MarlinController_log.silly("Finished sending G-code: timespan=".concat(timespan));
                this.senderFinishTime = 0; // Stop workflow

                this.command('gcode:stop');
              }
            }
          }, 250); // Load file if it exists in CNC engine (AKA it was loaded before connection
        }

        populateContext(context) {
          // Work position
          const {
            x: posx,
            y: posy,
            z: posz,
            e: pose
          } = this.runner.getPosition(); // Modal group

          const modal = this.runner.getModalGroup(); // Tool

          const tool = this.runner.getTool();
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

        destroy() {
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

        get status() {
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

        open() {
          let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MarlinController_noop;
          const {
            port,
            baudrate
          } = this.options; // Assertion check

          if (this.isOpen()) {
            MarlinController_log.error("Cannot open serial port \"".concat(port, "\""));
            return;
          }

          this.connection.on('data', this.connectionEventListener.data);
          this.connection.on('close', this.connectionEventListener.close);
          this.connection.on('error', this.connectionEventListener.error);
          this.connection.open(err => {
            if (err) {
              MarlinController_log.error("Error opening serial port \"".concat(port, "\":"), err);
              this.emit('serialport:error', {
                err: err,
                port: port
              });
              callback(err); // notify error

              return;
            }

            this.emit('serialport:open', {
              port: port,
              baudrate: baudrate,
              controllerType: this.type,
              inuse: true
            }); // Emit a change event to all connected sockets

            if (this.engine.io) {
              this.engine.io.emit('serialport:change', {
                port: port,
                inuse: true
              });
            }

            callback(); // register controller

            MarlinController_log.debug("Connected to serial port \"".concat(port, "\"")); // M115: Get firmware version and capabilities
            // The response to this will take us to the ready state

            this.connection.write('M115\n', {
              source: WRITE_SOURCE_SERVER
            });
            this.workflow.stop();

            if (this.sender.state.gcode) {
              // Unload G-code
              this.command('unload');
            }
          });
        }

        close(callback) {
          const {
            port
          } = this.options; // Assertion check

          if (!this.connection) {
            const err = "Serial port \"".concat(port, "\" is not available");
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

        isOpen() {
          return this.connection && this.connection.isOpen;
        }

        isClose() {
          return !this.isOpen();
        }

        loadFile(gcode, _ref) {
          let {
            name
          } = _ref;
          MarlinController_log.debug("Loading file '".concat(name, "' to controller"));
          this.command('gcode:load', name, gcode);
        }

        addConnection(socket) {
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
            const {
              name,
              gcode,
              context
            } = this.sender.state;

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

        removeConnection(socket) {
          if (!socket) {
            MarlinController_log.error('The socket parameter is not specified');
            return;
          }

          MarlinController_log.debug("Remove socket connection: id=".concat(socket.id));
          this.sockets[socket.id] = undefined;
          delete this.sockets[socket.id];
        }

        emit(eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          Object.keys(this.sockets).forEach(id => {
            const socket = this.sockets[id];
            socket.emit.apply(socket, [eventName].concat(args));
          });
        }

        command(cmd) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          const handler = {
            'flash:start': () => {// unsupported
            },
            'flashing:success': () => {// unsupported
            },
            'flashing:failed': () => {// unsupported
            },
            'firmware:recievedProfiles': () => {// unsupported
            },
            'firmware:applyProfileSettings': () => {// unsupported
            },
            'firmware:grabMachineProfile': () => {// unsupported
            },
            'gcode:load': () => {
              let [name, gcode, context = {}, callback = MarlinController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              } // G4 P0 or P with a very small value will empty the planner queue and then
              // respond with an ok when the dwell is complete. At that instant, there will
              // be no queued motions, as long as no more commands were sent after the G4.
              // This is the fastest way to do it without having to check the status reports.


              const dwell = '%wait ; Wait for the planner to empty';
              const ok = this.sender.load(name, gcode + '\n' + dwell, context);

              if (!ok) {
                callback(new Error("Invalid G-code: name=".concat(name)));
                return;
              } //this.emit('gcode:load', name, gcode, context);
              //this.event.trigger('gcode:load');


              MarlinController_log.debug("Load G-code: name=\"".concat(this.sender.state.name, "\", size=").concat(this.sender.state.gcode.length, ", total=").concat(this.sender.state.total));
              this.workflow.stop();
              callback(null, this.sender.toJSON());
            },
            'gcode:unload': () => {
              this.workflow.stop();
              this.engine.unload(); // Sender

              this.sender.unload();
              this.emit('file:unload');
              this.event.trigger('file:unload');
            },
            'start': () => {
              MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:start');
            },
            'gcode:start': () => {
              this.event.trigger('gcode:start');
              this.workflow.start(); // Feeder

              this.feeder.reset(); // Sender

              this.sender.next();
            },
            'stop': () => {
              MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:stop', ...args);
            },
            // @param {object} options The options object.
            // @param {boolean} [options.force] Whether to force stop a G-code program. Defaults to false.
            'gcode:stop': () => {
              this.event.trigger('gcode:stop');
              this.workflow.stop();
            },
            'pause': () => {
              MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:pause');
            },
            'gcode:pause': () => {
              this.event.trigger('gcode:pause');
              this.workflow.pause();
            },
            'resume': () => {
              MarlinController_log.warn("Warning: The \"".concat(cmd, "\" command is deprecated and will be removed in a future release."));
              this.command('gcode:resume');
            },
            'gcode:resume': () => {
              this.event.trigger('gcode:resume');
              this.workflow.resume();
            },
            'feeder:feed': () => {
              const [commands, context = {}] = args;
              this.command('gcode', commands, context);
            },
            'feeder:start': () => {
              if (this.workflow.state === WORKFLOW_STATE_RUNNING) {
                return;
              }

              this.feeder.unhold();
              this.feeder.next();
            },
            'feeder:stop': () => {
              this.feeder.reset();
            },
            'feedhold': () => {
              this.event.trigger('feedhold');
            },
            'cyclestart': () => {
              this.event.trigger('cyclestart');
            },
            'homing': () => {
              this.event.trigger('homing');
              this.writeln('G28.2 X Y Z');
            },
            'sleep': () => {
              this.event.trigger('sleep'); // Unupported
            },
            'unlock': () => {// Unsupported
            },
            'reset': () => {
              this.workflow.stop();
              this.feeder.reset(); // M112: Emergency Stop

              this.writeln('M112');
            },
            // Feed Overrides
            // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
            'feedOverride': () => {
              const [value] = args;
              let feedOverride = this.runner.state.ovF;

              if (value === 0) {
                feedOverride = 100;
              } else if (feedOverride + value > 500) {
                feedOverride = 500;
              } else if (feedOverride + value < 10) {
                feedOverride = 10;
              } else {
                feedOverride += value;
              } // M220: Set speed factor override percentage


              this.command('gcode', 'M220 S' + feedOverride); // enforce state change

              this.runner.state = MarlinController_objectSpread(MarlinController_objectSpread({}, this.runner.state), {}, {
                ovF: feedOverride
              });
            },
            // Spindle Speed Overrides
            // @param {number} value A percentage value between 10 and 500. A value of zero will reset to 100%.
            'spindleOverride': () => {
              const [value] = args;
              let spindleOverride = this.runner.state.ovS;

              if (value === 0) {
                spindleOverride = 100;
              } else if (spindleOverride + value > 500) {
                spindleOverride = 500;
              } else if (spindleOverride + value < 10) {
                spindleOverride = 10;
              } else {
                spindleOverride += value;
              } // M221: Set extruder factor override percentage


              this.command('gcode', 'M221 S' + spindleOverride); // enforce state change

              this.runner.state = MarlinController_objectSpread(MarlinController_objectSpread({}, this.runner.state), {}, {
                ovS: spindleOverride
              });
            },
            'rapidOverride': () => {// Unsupported
            },
            'motor:enable': () => {
              // M17 Enable all stepper motors
              this.command('gcode', 'M17');
            },
            'motor:disable': () => {
              // M18/M84 Disable steppers immediately (until the next move)
              this.command('gcode', 'M18');
            },
            'laser:on': () => {
              const [power = 0, maxS = 255] = args;
              const commands = ['M3 S' + ensure_positive_number(maxS * (power / 100))];
              this.command('gcode', commands);
            },
            'lasertest:on': () => {
              const [power = 0, duration = 0, maxS = 255] = args;
              const commands = ['M3 S' + ensure_positive_number(maxS * (power / 100))];

              if (duration > 0) {
                // G4 [P<time in ms>] [S<time in sec>]
                // If both S and P are included, S takes precedence.
                commands.push('G4 P' + ensure_positive_number(duration));
                commands.push('M5');
              }

              this.command('gcode', commands);
            },
            'lasertest:off': () => {
              this.writeln('M5');
            },
            'gcode': () => {
              const [commands, context] = args;
              const data = external_ensure_array_default()(commands).join('\n').split(/\r?\n/).filter(line => {
                if (typeof line !== 'string') {
                  return false;
                }

                return line.trim().length > 0;
              });
              this.feeder.feed(data, context);
              {
                // The following criteria must be met to trigger the feeder
                const notBusy = !this.history.writeSource;
                const senderIdle = this.sender.state.sent === this.sender.state.received;
                const feederIdle = !this.feeder.isPending();

                if (notBusy && senderIdle && feederIdle) {
                  this.feeder.next();
                }
              }
            },
            'gcode:safe': () => {
              const [commands, prefUnits] = args;
              const deviceUnits = this.state.parserstate.modal.units;
              let code = [];

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

              this.command('gcode', code);
            },
            'jog:start': () => {
              let [axes, feedrate = 1000, units = METRIC_UNITS] = args; //const JOG_COMMAND_INTERVAL = 80;

              let unitModal = units === METRIC_UNITS ? 'G21' : 'G20';
              let {
                $20,
                $130,
                $131,
                $132,
                $23
              } = this.settings.settings;
              let jogFeedrate;

              if ($20 === '1') {
                $130 = Number($130);
                $131 = Number($131);
                $132 = Number($132); // Convert feedrate to metric if working in imperial - easier to convert feedrate and treat everything else as MM than opposite

                if (units !== METRIC_UNITS) {
                  feedrate = (feedrate * 25.4).toFixed(2);
                  unitModal = 'G21';
                }

                const OFFSET = 0.1;
                const FIXED = 2; //If we are moving on the positive direction, we don't need to subtract
                //the max travel by it as we are moving towards the zero position, but if
                //we are moving in the negative direction we need to subtract the max travel
                //by it to reach the maximum amount in that direction

                const calculateAxisValue = _ref2 => {
                  let {
                    direction,
                    position,
                    maxTravel
                  } = _ref2;

                  if (position === 0) {
                    return ((maxTravel - OFFSET) * direction).toFixed(FIXED);
                  }

                  if (direction === 1) {
                    return Number((position * direction - OFFSET).toFixed(FIXED));
                  } else {
                    return Number(-(maxTravel - position - OFFSET).toFixed(FIXED));
                  }
                };

                let {
                  mpos
                } = this.state.status;
                Object.keys(mpos).forEach(axis => {
                  mpos[axis] = Number(mpos[axis]);
                });

                if (this.homingFlagSet) {
                  const [xMaxLoc, yMaxLoc] = getAxisMaximumLocation($23);

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
                Object.keys(axes).forEach(axis => {
                  axes[axis] *= jogFeedrate;
                });
              }

              axes.F = feedrate;

              if (axes.Z) {
                axes.F *= 0.8;
                axes.F = axes.F.toFixed(3);
              }

              const jogCommand = "$J=".concat(unitModal, "G91 ") + map_default()(axes, (value, letter) => '' + letter.toUpperCase() + value).join(' ');
              this.command('gcode', jogCommand);
            },
            'jog:stop': () => {
              this.feeder.reset();
              this.command('jog:cancel');
              this.feeder.reset();
            },
            'jog:cancel': () => {
              this.command('gcode', '\x85');
            },
            'macro:run': () => {
              let [id, context = {}, callback = MarlinController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              }

              const macros = configstore["a" /* default */].get('macros');

              const macro = find_default()(macros, {
                id: id
              });

              if (!macro) {
                MarlinController_log.error("Cannot find the macro: id=".concat(id));
                return;
              }

              this.event.trigger('macro:run');
              this.command('gcode', macro.content, context);
              callback(null);
            },
            'macro:load': () => {
              let [id, context = {}, callback = MarlinController_noop] = args;

              if (typeof context === 'function') {
                callback = context;
                context = {};
              }

              const macros = configstore["a" /* default */].get('macros');

              const macro = find_default()(macros, {
                id: id
              });

              if (!macro) {
                MarlinController_log.error("Cannot find the macro: id=".concat(id));
                return;
              }

              this.event.trigger('macro:load');
              this.command('gcode:load', macro.name, macro.content, context, callback);
            },
            'watchdir:load': () => {
              const [file, callback = MarlinController_noop] = args;
              const context = {}; // empty context

              monitor["a" /* default */].readFile(file, (err, data) => {
                if (err) {
                  callback(err);
                  return;
                }

                this.command('gcode:load', file, data, context, callback);
              });
            },
            'machineprofile:load': () => {
              const [machineProfile] = args;
              store["a" /* default */].set('machineProfile', machineProfile);
            },
            'settings:updated': () => {
              const [newSettings = {}] = args;
              const currentSettings = store["a" /* default */].get('preferences') || {};

              const updated = MarlinController_objectSpread(MarlinController_objectSpread({}, currentSettings), newSettings);

              store["a" /* default */].set('preferences', updated);
            },
            'toolchange:context': () => {
              const [context] = args;
              this.toolChangeContext = context;
            },
            'toolchange:pre': () => { },
            'toolchange:post': () => { },
            'gcode:outline': () => {
              const [gcode = '', concavity = Infinity] = args;
              const toRun = getOutlineGcode(gcode, concavity);
              MarlinController_log.debug('Running outline');
              this.emit('outline:start');
              this.command('gcode', toRun);
            }
          }[cmd];

          if (!handler) {
            MarlinController_log.error("Unknown command: ".concat(cmd));
            return;
          }

          handler();
        }

        write(data, context) {
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

        writeln(data, context) {
          this.write(data + '\n', context);
        }

      }

/* harmony default export */ var Marlin_MarlinController = (MarlinController_MarlinController);
      // CONCATENATED MODULE: ./controllers/index.js



      // EXTERNAL MODULE: ./access-control.js
      var access_control = __webpack_require__(35);

      // CONCATENATED MODULE: ./services/cncengine/CNCEngine.js
      const CNCEngine_excluded = ["port", "gcode"];

      function CNCEngine_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CNCEngine_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

      function CNCEngine_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

      function CNCEngine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function CNCEngine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CNCEngine_ownKeys(Object(source), true).forEach(function (key) { CNCEngine_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CNCEngine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

      function CNCEngine_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CNCEngine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

      function CNCEngine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


      // import partition from 'lodash/partition';


      //import socketioJwt from 'socketio-jwt';


      //import settings from '../../config/settings';








      const CNCEngine_log = Object(logger["a" /* default */])('service:cncengine'); // Case-insensitive equality checker.
      // @param {string} str1 First string to check.
      // @param {string} str2 Second string to check.
      // @return {boolean} True if str1 and str2 are the same string, ignoring case.

      const caseInsensitiveEquals = (str1, str2) => {
        str1 = str1 ? (str1 + '').toUpperCase() : '';
        str2 = str2 ? (str2 + '').toUpperCase() : '';
        return str1 === str2;
      };

      const isValidController = controller => // Grbl
        caseInsensitiveEquals(GRBL, controller) || // Marlin
        caseInsensitiveEquals(constants_MARLIN, controller);

      class CNCEngine_CNCEngine {
        constructor() {
          var _this = this;

          CNCEngine_defineProperty(this, "controllerClass", {});

          CNCEngine_defineProperty(this, "listener", {
            taskStart: function taskStart() {
              if (_this.io) {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this.io.emit('task:start', ...args);
              }
            },
            taskFinish: function taskFinish() {
              if (_this.io) {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                _this.io.emit('task:finish', ...args);
              }
            },
            taskError: function taskError() {
              if (_this.io) {
                for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = arguments[_key3];
                }

                _this.io.emit('task:error', ...args);
              }
            },
            configChange: function configChange() {
              if (_this.io) {
                for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                  args[_key4] = arguments[_key4];
                }

                _this.io.emit('config:change', ...args);
              }
            }
          });

          CNCEngine_defineProperty(this, "server", null);

          CNCEngine_defineProperty(this, "io", null);

          CNCEngine_defineProperty(this, "sockets", []);

          CNCEngine_defineProperty(this, "gcode", null);

          CNCEngine_defineProperty(this, "meta", null);

          CNCEngine_defineProperty(this, "event", new lib_EventTrigger((event, trigger, commands) => {
            CNCEngine_log.debug("EventTrigger: event=\"".concat(event, "\", trigger=\"").concat(trigger, "\", commands=\"").concat(commands, "\""));

            if (trigger === 'system') {
              taskrunner["a" /* default */].run(commands);
            }
          }));
        }

        // @param {object} server The HTTP server instance.
        // @param {string} controller Specify CNC controller.
        start(server) {
          var _this2 = this;

          let controller = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          // Fallback to an empty string if the controller is not valid
          if (!isValidController(controller)) {
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

          const loadedControllers = Object.keys(this.controllerClass);
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
            var _ref = CNCEngine_asyncToGenerator(function* (socket, next) {
              try {
                // IP Address Access Control
                const ipaddr = socket.handshake.address;
                yield Object(access_control["a" /* authorizeIPAddress */])(ipaddr); // User Validation
                //const user = socket.decoded_token || {};
                //await validateUser(user);
              } catch (err) {
                CNCEngine_log.warn(err);
                next(err);
                return;
              }

              next();
            });

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
          this.io.on('connection', socket => {
            const address = socket.handshake.address;
            const user = socket.decoded_token || {};
            CNCEngine_log.debug("New connection from ".concat(address, ": id=").concat(socket.id, ", user.id=").concat(user.id, ", user.name=").concat(user.name)); // Add to the socket pool

            this.sockets.push(socket);
            socket.emit('startup', {
              loadedControllers: Object.keys(this.controllerClass),
              // User-defined baud rates and ports
              baudrates: external_ensure_array_default()(configstore["a" /* default */].get('baudrates', [])),
              ports: external_ensure_array_default()(configstore["a" /* default */].get('ports', []))
            });
            socket.on('disconnect', () => {
              CNCEngine_log.debug("Disconnected from ".concat(address, ": id=").concat(socket.id, ", user.id=").concat(user.id, ", user.name=").concat(user.name));
              const controllers = store["a" /* default */].get('controllers', {});
              Object.keys(controllers).forEach(port => {
                const controller = controllers[port];

                if (!controller) {
                  return;
                }

                controller.removeConnection(socket);
              }); // Remove from socket pool

              this.sockets.splice(this.sockets.indexOf(socket), 1);
            });
            socket.on('reconnect', port => {
              let controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

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

            socket.on('list', () => {
              CNCEngine_log.debug("socket.list(): id=".concat(socket.id));
              external_serialport_default.a.list().then(ports => {
                ports = ports.concat(external_ensure_array_default()(configstore["a" /* default */].get('ports', [])));
                const controllers = store["a" /* default */].get('controllers', {});
                const portsInUse = Object.keys(controllers).filter(port => {
                  const controller = controllers[port];
                  return controller && controller.isOpen();
                });
                ports = ports.map(port => {
                  return {
                    port: port.path,
                    manufacturer: port.manufacturer,
                    inuse: portsInUse.indexOf(port.path) >= 0
                  };
                });
                socket.emit('serialport:list', ports);
              }).catch(err => {
                CNCEngine_log.error(err);
              });
            }); // Open serial port

            socket.on('open', function (port, options) {
              let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop_default.a;

              if (typeof callback !== 'function') {
                callback = noop_default.a;
              }

              CNCEngine_log.debug("socket.open(\"".concat(port, "\", ").concat(JSON.stringify(options), "): id=").concat(socket.id));
              let controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

              if (!controller) {
                let {
                  controllerType = constants_MARLIN,
                  baudrate,
                  rtscts
                } = CNCEngine_objectSpread({}, options);

                const Controller = _this2.controllerClass[controllerType];

                if (!Controller) {
                  const err = "Not supported controller: ".concat(controllerType);
                  CNCEngine_log.error(err);
                  callback(new Error(err));
                  return;
                }

                const engine = _this2;
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
                let err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
              let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop_default.a;

              if (typeof callback !== 'function') {
                callback = noop_default.a;
              }

              CNCEngine_log.debug("socket.close(\"".concat(port, "\"): id=").concat(socket.id));
              const controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

              if (!controller) {
                const err = "Serial port \"".concat(port, "\" not accessible");
                CNCEngine_log.error(err);
                callback(new Error(err));
                return;
              } // System Trigger: Close a serial port


              _this2.event.trigger('port:close'); // Leave the room


              socket.leave(port);
              controller.close(err => {
                // Remove controller from store
                store["a" /* default */].unset("controllers[".concat(JSON.stringify(port), "]")); // Destroy controller

                controller.destroy();
                callback(null);
              });
            });
            socket.on('command', function (port, cmd) {
              CNCEngine_log.debug("socket.command(\"".concat(port, "\", \"").concat(cmd, "\"): id=").concat(socket.id));
              const controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

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
              let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              CNCEngine_log.debug("socket.write(\"".concat(port, "\", \"").concat(data, "\", ").concat(JSON.stringify(context), "): id=").concat(socket.id));
              const controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

              if (!controller || controller.isClose()) {
                CNCEngine_log.error("Serial port \"".concat(port, "\" not accessible"));
                return;
              }

              controller.write(data, context);
            });
            socket.on('writeln', function (port, data) {
              let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              CNCEngine_log.debug("socket.writeln(\"".concat(port, "\", \"").concat(data, "\", ").concat(JSON.stringify(context), "): id=").concat(socket.id));
              const controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

              if (!controller || controller.isClose()) {
                CNCEngine_log.error("Serial port \"".concat(port, "\" not accessible"));
                return;
              }

              controller.writeln(data, context);
            });
            socket.on('hPing', () => {
              CNCEngine_log.debug("Health check received at ".concat(new Date().toLocaleTimeString()));
              socket.emit('hPong');
            });
            socket.on('file:fetch', () => {
              socket.emit('file:fetch', this.gcode, this.meta);
            });
            socket.on('file:unload', () => {
              CNCEngine_log.debug('Socket unload called');
              this.unload();
            });
          });
        }

        stop() {
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


        emit(msg) {
          for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            args[_key6 - 1] = arguments[_key6];
          }

          this.sockets.forEach(socket => {
            socket.emit(msg, ...args);
          });
        }
        /* Functions related to loading file through server */
        // If gcode is going to live in CNCengine, we need functions to access or unload it.


        load(_ref2) {
          let {
            port,
            gcode
          } = _ref2,
            meta = CNCEngine_objectWithoutProperties(_ref2, CNCEngine_excluded);

          this.gcode = gcode;
          this.meta = meta; // Load the file to the sender if controller connection exists

          if (port) {
            const controller = store["a" /* default */].get("controllers[\"".concat(port, "\"]"));

            if (controller) {
              controller.loadFile(this.gcode, this.meta);
            }
          }

          CNCEngine_log.info("Loaded file '".concat(meta.name, "' to CNCEngine"));
          this.emit('file:load', gcode, meta.size, meta.name, meta.visualizer);
        }

        unload() {
          CNCEngine_log.info('Unloading file from CNCEngine');
          this.gcode = null;
          this.meta = null;
          this.emit('file:unload');
        }

        fetchGcode() {
          return [this.gcode, this.meta];
        }

        hasFileLoaded() {
          return this.gcode !== null;
        }

      }

/* harmony default export */ var cncengine_CNCEngine = (CNCEngine_CNCEngine);
      // CONCATENATED MODULE: ./services/cncengine/index.js

      const cncengine = new cncengine_CNCEngine();

      const start = (server, controller) => {
        cncengine.start(server, controller);
      };

      const stop = () => {
        cncengine.stop();
      };

      const load = gcode => {
        cncengine.load(gcode);
      };

      const unload = () => {
        cncengine.unload();
      };

/* harmony default export */ var services_cncengine = __webpack_exports__["a"] = ({
        start,
        stop,
        load,
        unload
      });

      /***/
    }),
/* 44 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
        var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(45, 1);
/* harmony import */ var _build_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _build_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_config__WEBPACK_IMPORTED_MODULE_2__);



        const RC_FILE = '.cnc_rc';
        const SESSION_PATH = '.cncjs-sessions'; // Secret

        const secret = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;

        const getUserHome = () => process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

/* harmony default export */ __webpack_exports__["a"] = ({
          rcfile: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(getUserHome(), RC_FILE),
          verbosity: 0,
          version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version,
          // The secret key is loaded from the config file (defaults to "~/.cncrc")
          // @see "src/app/index.js"
          secret: secret,
          // Access Token Lifetime
          accessTokenLifetime: '30d',
          // https://github.com/zeit/ms
          // Allow Remote Access
          allowRemoteAccess: true,
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
        /* WEBPACK VAR INJECTION */
      }.call(this, "config"))

      /***/
    }),
/* 45 */
/***/ (function (module) {

      module.exports = { "name": "cncjs4marlin", "version": "0.0.1", "productName": "CNCjs_for_Marlin", "description": "Web-based gCode sender", "author": { "name": "Edward W <CNCjs@webbsense.com>", "email": "cncjs4marlin@webbsense.com" }, "license": "MIT", "repository": { "type": "git", "url": "https://github.com/Domush/cncjs4marlin" }, "main": "main.js", "dependencies": { "@babel/polyfill": "~7.4.3", "@babel/runtime": "~7.4.3", "avrgirl-arduino": "^5.0.1", "bcrypt-nodejs": "0.0.3", "body-parser": "~1.18.3", "chalk": "~2.4.2", "commander": "~2.20.0", "compression": "~1.7.4", "connect-restreamer": "~1.0.3", "consolidate": "~0.15.1", "cookie-parser": "~1.4.4", "debug": "~4.1.1", "deep-keys": "~0.5.0", "electron-log": "^4.3.5", "electron-store": "~3.2.0", "electron-updater": "^4.3.8", "ensure-array": "~1.0.0", "errorhandler": "~1.5.0", "escodegen": "~1.11.1", "esprima": "~4.0.1", "expand-tilde": "~2.0.2", "express": "~4.16.4", "express-jwt": "~5.3.1", "express-session": "~1.16.1", "gcode-parser": "~1.3.6", "gcode-toolpath": "~2.2.0", "hogan.js": "~3.0.2", "http-proxy": "~1.18.1", "hull.js": "^1.0.1", "i18next": "~15.0.9", "i18next-express-middleware": "~1.8.0", "i18next-node-fs-backend": "~2.1.3", "is-electron": "~2.2.0", "is-online": "^9.0.1", "jsonwebtoken": "~8.5.1", "method-override": "~3.0.0", "minimatch": "~3.0.4", "mkdirp": "~0.5.1", "morgan": "~1.9.1", "multer": "^1.4.2", "range_check": "~1.4.0", "registry-auth-token": "~3.4.0", "registry-url": "~5.1.0", "rimraf": "~2.6.3", "serve-favicon": "~2.5.0", "serve-static": "~1.13.2", "session-file-store": "~1.2.0", "shortid": "~2.2.14", "socket.io": "^4.1.3", "spawn-default-shell": "~2.0.0", "superagent": "^6.1.0", "three": "^0.132.2", "uuid": "~3.3.2", "watch": "~1.0.2", "webappengine": "~1.2.0", "winston": "~3.2.1" } };

      /***/
    }),
/* 46 */
/***/ (function (module, exports) {

      module.exports = require("body-parser");

      /***/
    }),
/* 47 */
/***/ (function (module, exports) {

      module.exports = require("multer");

      /***/
    }),
/* 48 */
/***/ (function (module, exports) {

      module.exports = require("express-session");

      /***/
    }),
/* 49 */
/***/ (function (module, exports) {

      module.exports = require("i18next");

      /***/
    }),
/* 50 */
/***/ (function (module, exports) {

      module.exports = require("morgan");

      /***/
    }),
/* 51 */
/***/ (function (module, exports) {

      module.exports = require("i18next-express-middleware");

      /***/
    }),
/* 52 */
/***/ (function (module, exports) {

      module.exports = require("util");

      /***/
    }),
/* 53 */
/***/ (function (module, exports) {

      module.exports = require("lodash/without");

      /***/
    }),
/* 54 */
/***/ (function (module, exports) {

      module.exports = require("lodash/each");

      /***/
    }),
/* 55 */
/***/ (function (module, exports) {

      module.exports = require("dns");

      /***/
    }),
/* 56 */
/***/ (function (module, exports) {

      module.exports = require("expand-tilde");

      /***/
    }),
/* 57 */
/***/ (function (module, exports) {

      module.exports = require("http-proxy");

      /***/
    }),
/* 58 */
/***/ (function (module, exports) {

      module.exports = require("lodash/escapeRegExp");

      /***/
    }),
/* 59 */
/***/ (function (module, exports) {

      module.exports = require("lodash/size");

      /***/
    }),
/* 60 */
/***/ (function (module, exports) {

      module.exports = require("lodash/trimEnd");

      /***/
    }),
/* 61 */
/***/ (function (module, exports) {

      module.exports = require("lodash/uniqWith");

      /***/
    }),
/* 62 */
/***/ (function (module, exports) {

      module.exports = require("webappengine");

      /***/
    }),
/* 63 */
/***/ (function (module, exports) {

      module.exports = {
        languages: ['en' // English (default)
        ],
        analytics: {
          trackingId: 'UA-107017110-1'
        }
      };

      /***/
    }),
/* 64 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (__dirname) {/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


        const maxAge = 0;
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
        /* WEBPACK VAR INJECTION */
      }.call(this, "config"))

      /***/
    }),
/* 65 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (__dirname) {/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_urljoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



        const publicPath = "/2b5a2f1b/" || false; // see gulp/task/app.js

        const maxAge = 365 * 24 * 60 * 60 * 1000; // one year

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
        /* WEBPACK VAR INJECTION */
      }.call(this, "config"))

      /***/
    }),
/* 66 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (__dirname) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var connect_restreamer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69);
/* harmony import */ var connect_restreamer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(connect_restreamer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var consolidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var consolidate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(consolidate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var errorhandler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(errorhandler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(105);
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hogan_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72);
/* harmony import */ var i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73);
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50);
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
/* harmony import */ var i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51);
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
























        const log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"])('app');

        const renderPage = function renderPage() {
          let view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'index';
          let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash_noop__WEBPACK_IMPORTED_MODULE_22___default.a;
          return (req, res, next) => {
            // Override IE's Compatibility View Settings
            // http://stackoverflow.com/questions/6156639/x-ua-compatible-is-set-to-ie-edge-but-it-still-doesnt-stop-compatibility-mode
            res.set({
              'X-UA-Compatible': 'IE=edge'
            });

            const locals = _objectSpread({}, cb(req, res));

            res.render(view, locals);
          };
        };

        const appMain = () => {
          const app = express__WEBPACK_IMPORTED_MODULE_9___default()();
          {
            // Settings
            if (false) { } else {
              // a custom "verbose errors" setting which can be used in the templates via settings['verbose errors']
              app.disable('verbose errors'); // Disables verbose errors in production

              app.enable('view cache'); // Enables view template compilation caching in production
            }

            app.enable('trust proxy'); // Enables reverse proxy support, disabled by default

            app.enable('case sensitive routing'); // Enable case sensitivity, disabled by default, treating "/Foo" and "/foo" as the same

            app.disable('strict routing'); // Enable strict routing, by default "/foo" and "/foo/" are treated the same by the router

            app.disable('x-powered-by'); // Enables the X-Powered-By: Express HTTP header, enabled by default

            for (let i = 0; i < _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines.length; ++i) {
              const extension = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines[i].extension;
              const template = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.engines[i].template;
              app.engine(extension, consolidate__WEBPACK_IMPORTED_MODULE_7___default.a[template]);
            }

            app.set('view engine', _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].view.defaultExtension); // The default engine extension to use when omitted

            app.set('views', [path.resolve(__dirname, '../app'), path.resolve(__dirname, 'views')]); // The view directory path

            log.debug('app.settings: %j', app.settings);
          } // Setup i18n (i18next)

          i18next__WEBPACK_IMPORTED_MODULE_13___default.a.use(i18next_node_fs_backend__WEBPACK_IMPORTED_MODULE_14___default.a).use(i18next_express_middleware__WEBPACK_IMPORTED_MODULE_24__["LanguageDetector"]).init(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].i18next);
          app.use( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (req, res, next) {
              try {
                // IP Address Access Control
                const ipaddr = req.ip || req.connection.remoteAddress;
                yield Object(_access_control__WEBPACK_IMPORTED_MODULE_34__[/* authorizeIPAddress */ "a"])(ipaddr);
              } catch (err) {
                log.warn(err);
                res.status(_constants__WEBPACK_IMPORTED_MODULE_35__[/* ERR_FORBIDDEN */ "c"]).end('Forbidden Access');
                return;
              }

              next();
            });

            return function (_x, _x2, _x3) {
              return _ref.apply(this, arguments);
            };
          }()); // Removes the 'X-Powered-By' header in earlier versions of Express

          app.use((req, res, next) => {
            res.removeHeader('X-Powered-By');
            next();
          }); // Middleware
          // https://github.com/senchalabs/connect

          try {
            // https://github.com/valery-barysok/session-file-store
            const path = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.session.path; // Defaults to './sienci-sessions'

            rimraf__WEBPACK_IMPORTED_MODULE_23___default.a.sync(path);
            fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(path);
            const FileStore = session_file_store__WEBPACK_IMPORTED_MODULE_20___default()(express_session__WEBPACK_IMPORTED_MODULE_11___default.a);
            app.use(express_session__WEBPACK_IMPORTED_MODULE_11___default()({
              // https://github.com/expressjs/session#secret
              secret: _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].secret,
              // https://github.com/expressjs/session#resave
              resave: true,
              // https://github.com/expressjs/session#saveuninitialized
              saveUninitialized: true,
              store: new FileStore({
                path: path,
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

          app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_18___default()(path.join(lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], 'assets.app.path', ''), 'favicon.ico')));
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
            morgan__WEBPACK_IMPORTED_MODULE_17___default.a.token('id', (req, res) => {
              return req.session.id;
            });
            app.use(morgan__WEBPACK_IMPORTED_MODULE_17___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.morgan.format));
          }

          app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].middleware.compression));
          Object.keys(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].assets).forEach(name => {
            const asset = _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].assets[name];
            log.debug('assets: name=%s, asset=%s', name, JSON.stringify(asset));

            if (!asset.path) {
              log.error('asset path is not defined');
              return;
            }

            asset.routes.forEach(assetRoute => {
              const route = Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route || '/', assetRoute || '');
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
              var _ref2 = _asyncToGenerator(function* (err, req, res, next) {
                let bypass = !(err && err.name === 'UnauthorizedError'); // Check whether the app is running in development mode

                bypass = bypass || "production" === 'development'; // Check whether the request path is not restricted

                const whitelist = [// Also see "src/app/api/index.js"
                  Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/signin')];
                bypass = bypass || whitelist.some(path => {
                  return req.path.indexOf(path) === 0;
                });

                if (!bypass) {
                  // Check whether the provided credential is correct
                  const token = lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(req, 'query.token') || lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(req, 'body.token');

                  try {
                    // User Validation
                    const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_15___default.a.verify(token, _config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].secret) || {};
                    yield Object(_access_control__WEBPACK_IMPORTED_MODULE_34__[/* validateUser */ "b"])(user);
                    bypass = true;
                  } catch (err) {
                    log.warn(err);
                  }
                }

                if (!bypass) {
                  const ipaddr = req.ip || req.connection.remoteAddress;
                  log.warn("Forbidden: ipaddr=".concat(ipaddr, ", code=\"").concat(err.code, "\", message=\"").concat(err.message, "\""));
                  res.status(_constants__WEBPACK_IMPORTED_MODULE_35__[/* ERR_FORBIDDEN */ "c"]).end('Forbidden Access');
                  return;
                }

                next();
              });

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
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/state'), _api__WEBPACK_IMPORTED_MODULE_28__[/* state */ "i"].unset); // G-code

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
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].__delete);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/commands/run/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* commands */ "a"].run); // Events

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].fetch);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].create);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].read);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].update);
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/events/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* events */ "c"].__delete); // Machines

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].fetch);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].create);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].read);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].update);
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/machines/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* machines */ "f"].__delete); // Macros

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].fetch);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].create);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].read);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].update);
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/macros/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* macros */ "g"].__delete); // MDI

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].fetch);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].create);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].bulkUpdate);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].read);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].update);
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/mdi/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* mdi */ "h"].__delete); // Users

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].fetch);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].create);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].read);
            app.put(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].update);
            app.delete(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/users/:id'), _api__WEBPACK_IMPORTED_MODULE_28__[/* users */ "j"].__delete); // Watch

            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/files'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].getFiles);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/files'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].getFiles);
            app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/file'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].readFile);
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/watch/file'), _api__WEBPACK_IMPORTED_MODULE_28__[/* watch */ "l"].readFile); // Files - with multer

            const storage = multer__WEBPACK_IMPORTED_MODULE_5___default.a.memoryStorage();
            const upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({
              storage
            });
            app.post(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, 'api/file'), upload.single('gcode'), _api__WEBPACK_IMPORTED_MODULE_28__[/* files */ "d"].uploadFile);
          } // page

          app.get(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].route, '/'), renderPage('index.hbs', (req, res) => {
            const webroot = lodash_get__WEBPACK_IMPORTED_MODULE_21___default()(_config_settings__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"], 'assets.app.routes[0]', ''); // with trailing slash


            const lng = req.language;
            const t = req.t;
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
              view: path.join('common', '404.hogan'),
              error: 'Not found'
            }));
            app.use(_lib_middleware_errserver__WEBPACK_IMPORTED_MODULE_32___default()({
              view: path.join('common', '500.hogan'),
              error: 'Internal server error'
            }));
          }
          return app;
        };

/* harmony default export */ __webpack_exports__["a"] = (appMain);
        /* WEBPACK VAR INJECTION */
      }.call(this, ""))

      /***/
    }),
/* 67 */
/***/ (function (module, exports) {

      module.exports = require("compression");

      /***/
    }),
/* 68 */
/***/ (function (module, exports) {

      module.exports = require("cookie-parser");

      /***/
    }),
/* 69 */
/***/ (function (module, exports) {

      module.exports = require("connect-restreamer");

      /***/
    }),
/* 70 */
/***/ (function (module, exports) {

      module.exports = require("consolidate");

      /***/
    }),
/* 71 */
/***/ (function (module, exports) {

      module.exports = require("express-jwt");

      /***/
    }),
/* 72 */
/***/ (function (module, exports) {

      module.exports = require("i18next-node-fs-backend");

      /***/
    }),
/* 73 */
/***/ (function (module, exports) {

      module.exports = require("method-override");

      /***/
    }),
/* 74 */
/***/ (function (module, exports) {

      module.exports = require("serve-favicon");

      /***/
    }),
/* 75 */
/***/ (function (module, exports) {

      module.exports = require("serve-static");

      /***/
    }),
/* 76 */
/***/ (function (module, exports) {

      module.exports = require("session-file-store");

      /***/
    }),
/* 77 */
/***/ (function (module, exports) {

      module.exports = require("rimraf");

      /***/
    }),
/* 78 */
/***/ (function (module, exports) {

      module.exports = require("registry-url");

      /***/
    }),
/* 79 */
/***/ (function (module, exports) {

      module.exports = require("registry-auth-token");

      /***/
    }),
/* 80 */
/***/ (function (module, exports) {

      module.exports = require("superagent");

      /***/
    }),
/* 81 */
/***/ (function (module, exports) {

      module.exports = require("deep-keys");

      /***/
    }),
/* 82 */
/***/ (function (module, exports) {

      module.exports = require("lodash/extend");

      /***/
    }),
/* 83 */
/***/ (function (module, exports) {

      module.exports = require("minimatch");

      /***/
    }),
/* 84 */
/***/ (function (module, exports) {

      module.exports = require("watch");

      /***/
    }),
/* 85 */
/***/ (function (module, exports) {

      module.exports = require("spawn-default-shell");

      /***/
    }),
/* 86 */
/***/ (function (module, exports) {

      module.exports = require("shortid");

      /***/
    }),
/* 87 */
/***/ (function (module, exports) {

      module.exports = require("lodash/some");

      /***/
    }),
/* 88 */
/***/ (function (module, exports) {

      module.exports = require("socket.io");

      /***/
    }),
/* 89 */
/***/ (function (module, exports) {

      module.exports = require("escodegen");

      /***/
    }),
/* 90 */
/***/ (function (module, exports) {

      module.exports = require("hull.js");

      /***/
    }),
/* 91 */
/***/ (function (module, exports) {

      module.exports = require("lodash/uniqBy");

      /***/
    }),
/* 92 */
/***/ (function (module, exports) {

      module.exports = require("three");

      /***/
    }),
/* 93 */
/***/ (function (module, exports) {

      module.exports = require("lodash/compact");

      /***/
    }),
/* 94 */
/***/ (function (module, exports) {

      module.exports = require("avrgirl-arduino");

      /***/
    }),
/* 95 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__.p + "1a9a23f8958ef3213db16a3c3dd8fe5b.hex";

      /***/
    }),
/* 96 */
/***/ (function (module, exports) {

      module.exports = require("lodash/uniq");

      /***/
    }),
/* 97 */
/***/ (function (module, exports) {

      module.exports = require("range_check");

      /***/
    }),
/* 98 */
/***/ (function (module, exports) {

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
      const errclient = options => {
        options = options || {};
        let error = options.error || '';
        return (err, req, res, next) => {
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

      /***/
    }),
/* 99 */
/***/ (function (module, exports) {

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
      const errlog = () => {
        return (err, req, res, next) => {
          console.error(err.stack);
          next(err);
        };
      };

      module.exports = errlog;

      /***/
    }),
/* 100 */
/***/ (function (module, exports) {

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
      const errnotfound = options => {
        options = options || {};
        let view = options.view || '404',
          error = options.error || '';
        return (req, res, next) => {
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

      /***/
    }),
/* 101 */
/***/ (function (module, exports) {

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
      const errserver = options => {
        options = options || {};
        let view = options.view || '500',
          error = options.error || '';
        return (err, req, res, next) => {
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

      /***/
    }),
/* 102 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(103);


      /***/
    }),
/* 103 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServer", function () { return createServer; });
/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var ensure_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ensure_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var expand_tilde__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var expand_tilde__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(expand_tilde__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
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
/* harmony import */ var _services_cncengine__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43);
/* harmony import */ var _services_monitor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23);
/* harmony import */ var _services_configstore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2);
/* harmony import */ var _lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7);
/* harmony import */ var _lib_urljoin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3);
      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























      const log = Object(_lib_logger__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"])('init');

      const createServer = (options, callback) => {
        options = _objectSpread({}, options);
        {
          // verbosity
          const verbosity = options.verbosity; // https://github.com/winstonjs/winston#logging-levels

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
        const rcfile = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(options.configFile || _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].rcfile); // configstore service

        log.info("Loading configuration from ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(JSON.stringify(rcfile))));
        _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].load(rcfile); // rcfile

        _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].rcfile = rcfile;
        {
          // secret
          if (!_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('secret')) {
            // generate a secret key
            const secret = bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_5___default.a.genSaltSync(); // TODO: use a strong secret

            _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].set('secret', secret);
          }

          _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].secret = _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('secret', _config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].secret);
        }
        {
          // watchDirectory
          const watchDirectory = options.watchDirectory || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('watchDirectory');

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
          const accessTokenLifetime = options.accessTokenLifetime || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('accessTokenLifetime');

          if (accessTokenLifetime) {
            lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'accessTokenLifetime', accessTokenLifetime);
          }
        }
        {
          // allowRemoteAccess
          const allowRemoteAccess = options.allowRemoteAccess || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('allowRemoteAccess', true);

          if (allowRemoteAccess) {
            if (lodash_size__WEBPACK_IMPORTED_MODULE_14___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('users')) === 0) {
              log.warn('You\'ve enabled remote access to the server. It\'s recommended to create an user account to protect against malicious attacks.');
            }

            lodash_set__WEBPACK_IMPORTED_MODULE_13___default()(_config_settings__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], 'allowRemoteAccess', allowRemoteAccess);
          }
        }
        const {
          port = 0,
          host,
          backlog
        } = options;
        const mountPoints = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_16___default()([...ensure_array__WEBPACK_IMPORTED_MODULE_7___default()(options.mountPoints), ...ensure_array__WEBPACK_IMPORTED_MODULE_7___default()(_services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('mountPoints'))], lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default.a).filter(mount => {
          if (!mount || !mount.route || mount.route === '/') {
            log.error("Must specify a valid route path ".concat(JSON.stringify(mount.route), "."));
            return false;
          }

          return true;
        });
        const routes = [];
        mountPoints.forEach(mount => {
          if (Object(_lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__[/* ensureString */ "b"])(mount.target).match(/^(http|https):\/\//i)) {
            log.info("Starting a proxy server to proxy all requests starting with ".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(mount.route), " to ").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(mount.target)));
            routes.push({
              type: 'server',
              route: mount.route,
              server: options => {
                const {
                  route = '/'
                } = _objectSpread({}, options);

                const routeWithoutTrailingSlash = lodash_trimEnd__WEBPACK_IMPORTED_MODULE_15___default()(route, '/');
                const target = mount.target;
                const targetPathname = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(target).pathname;
                const proxyPathPattern = new RegExp('^' + lodash_escapeRegExp__WEBPACK_IMPORTED_MODULE_11___default()(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(targetPathname, routeWithoutTrailingSlash)), 'i');
                log.debug("> route=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(route)));
                log.debug("> routeWithoutTrailingSlash=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(routeWithoutTrailingSlash)));
                log.debug("> target=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(target)));
                log.debug("> targetPathname=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(targetPathname)));
                log.debug("> proxyPathPattern=RegExp(".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(proxyPathPattern), ")"));
                const proxy = http_proxy__WEBPACK_IMPORTED_MODULE_10___default.a.createProxyServer({
                  // Change the origin of the host header to the target URL
                  changeOrigin: true,
                  // Do not verify the SSL certificate for self-signed certs
                  //secure: false,
                  target: target
                });
                proxy.on('proxyReq', (proxyReq, req, res, options) => {
                  const originalPath = proxyReq.path || '';
                  proxyReq.path = originalPath.replace(proxyPathPattern, targetPathname).replace('//', '/');
                  log.debug("proxy.on('proxyReq'): modifiedPath=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(proxyReq.path), ", originalPath=").concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(originalPath)));
                });
                proxy.on('proxyRes', (proxyRes, req, res) => {
                  log.debug("proxy.on('proxyRes'): headers=".concat(JSON.stringify(proxyRes.headers, true, 2)));
                });
                const app = express__WEBPACK_IMPORTED_MODULE_9___default()(); // Matched routes:
                //   /widget/
                //   /widget/v1/

                app.all(Object(_lib_urljoin__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"])(routeWithoutTrailingSlash, '*'), (req, res) => {
                  const url = req.url;
                  log.debug("proxy.web(): url=".concat(chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow(url)));
                  proxy.web(req, res);
                }); // Matched routes:
                //   /widget

                app.all(routeWithoutTrailingSlash, (req, res, next) => {
                  const url = req.url; // Redirect URL with a trailing slash

                  if (url.indexOf(routeWithoutTrailingSlash) === 0 && url.indexOf(routeWithoutTrailingSlash + '/') < 0) {
                    const redirectUrl = routeWithoutTrailingSlash + '/' + url.slice(routeWithoutTrailingSlash.length);
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
            const directory = expand_tilde__WEBPACK_IMPORTED_MODULE_8___default()(Object(_lib_ensure_type__WEBPACK_IMPORTED_MODULE_23__[/* ensureString */ "b"])(mount.target)).trim();
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
          server: () => Object(_app__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])()
        });
        webappengine__WEBPACK_IMPORTED_MODULE_17___default()({
          port,
          host,
          backlog,
          routes
        }).on('ready', server => {
          // cncengine service
          _services_cncengine__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"].start(server, options.controller || _services_configstore__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"].get('controller', 'Marlin'));
          const address = server.address().address;
          const port = server.address().port;
          callback && callback(null, {
            address,
            port,
            mountPoints
          });

          if (address !== '0.0.0.0') {
            log.info('Starting the server at ' + chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow("http://".concat(address, ":").concat(port)));
            return;
          }

          dns__WEBPACK_IMPORTED_MODULE_0___default.a.lookup(os__WEBPACK_IMPORTED_MODULE_2___default.a.hostname(), {
            family: 4,
            all: true
          }, (err, addresses) => {
            if (err) {
              log.error('Can\'t resolve host name:', err);
              return;
            }

            addresses.forEach(_ref => {
              let {
                address,
                family
              } = _ref;
              log.info('Starting the server at ' + chalk__WEBPACK_IMPORTED_MODULE_6___default.a.yellow("http://".concat(address, ":").concat(port)));
            });
          });
        }).on('error', err => {
          callback && callback(err);
          log.error(err);
        });
      };



      /***/
    }),
/* 104 */
/***/ (function (module, exports) {

      module.exports = require("errorhandler");

      /***/
    }),
/* 105 */
/***/ (function (module, exports) {

      module.exports = require("hogan.js");

      /***/
    })
/******/]);
//# sourceMappingURL=index.js.map