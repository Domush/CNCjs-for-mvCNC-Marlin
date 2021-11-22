const Breadcrumbs = require('@trendmicro/react-breadcrumbs');

const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css');

export default Breadcrumbs;
