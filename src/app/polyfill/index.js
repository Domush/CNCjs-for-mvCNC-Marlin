import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

/* eslint-disable */

// ES5
import('es5-shim/es5-shim');
import('es5-shim/es5-sham');

// Babel polyfill
import('babel-polyfill');

// console (IE9)
import('./console');

import('imports-loader?self=>window!js-polyfills/web'); // deps: Symbol
