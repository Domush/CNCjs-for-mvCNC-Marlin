const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-checkbox/dist/react-checkbox.css');

export { Checkbox, CheckboxGroup } from '@trendmicro/react-checkbox';
