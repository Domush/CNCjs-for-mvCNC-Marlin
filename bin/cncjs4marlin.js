#!/usr/bin/env node
import { env } from 'process';

import _serverDev from '../output/server-cli.js';
// const serverDev = _serverDev.default;

import _serverProd from '../dist/cncjs4marlin/server-cli.js';
// const serverProd = _serverProd.default;

const launchServer = process.argv[3] === 'start-dev' ? _serverDev.default : _serverProd.default;
// const launchServer = env.NODE_ENV === 'development' ? _serverDev.default : _serverProd.default;

launchServer().catch((err) => {
  console.error('Error:', err);
});
