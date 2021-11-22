#!/usr/bin/env node

const launchServer =
  process.env.NODE_ENV === 'development'
    ? require('../output/server-cli.js').default
    : require('../dist/cncjs4marlin/server-cli.js').default;

launchServer().catch((err) => {
  console.error('Error:', err);
});
