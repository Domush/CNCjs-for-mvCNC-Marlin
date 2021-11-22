const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-radio/dist/react-radio.css');

export { RadioButton, RadioGroup } from '@trendmicro/react-radio';
