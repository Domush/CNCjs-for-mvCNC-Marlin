import debug from 'debug';

import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const pkg = require('../package.json');

const log = {
  debug: debug(pkg + ':debug'),
  info: debug(pkg + ':info'),
  warn: debug(pkg + ':warn'),
  error: debug(pkg + ':error'),
  fatal: debug(pkg + ':fatal'),
};

export default log;
