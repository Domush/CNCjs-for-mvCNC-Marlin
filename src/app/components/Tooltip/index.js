const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-tooltip/dist/react-tooltip.css');

export { Tooltip, Infotip } from '@trendmicro/react-tooltip';
