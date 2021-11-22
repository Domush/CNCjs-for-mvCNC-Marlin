import merge from 'lodash/merge';
import base from './settings.base.js';
import development from './settings.development.js';
import production from './settings.production.js';

const env = process.env.NODE_ENV || 'production'; // Ensure production environment if empty
const settings = {};

if (env === 'development') {
  merge(settings, base, development, { env: env });
} else {
  merge(settings, base, production, { env: env });
}

export default settings;
