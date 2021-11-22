const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-loader/dist/react-loader.css');
const Loader = require('@trendmicro/react-loader');

export default Loader;
