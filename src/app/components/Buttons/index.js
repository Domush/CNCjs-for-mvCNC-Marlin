const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-buttons/dist/react-buttons.css');

export { Button, ButtonGroup, ButtonToolbar } from '@trendmicro/react-buttons';
