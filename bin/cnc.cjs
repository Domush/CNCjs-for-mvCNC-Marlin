#!/usr/bin/env node

// require('@babel/polyfill');

const chalk = require('chalk');

console.warn(
  chalk.yellow(
    'Warning: The "cnc" executable is deprecated and will be removed in the next major release. Use "cncjs4marlin" instead to avoid deprecation.\n'
  )
);

const launchServer =
  process.env.NODE_ENV === 'development'
    ? require('../output/server-cli').default
    : require('../dist/cncjs4marlin/server-cli').default;

launchServer().catch((err) => {
  console.error('Error:', err);
});
