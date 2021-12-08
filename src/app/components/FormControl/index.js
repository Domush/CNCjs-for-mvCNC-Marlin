const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-form-control/dist/react-form-control.css');
const FormControl = require('@trendmicro/react-form-control');

const { Input: Input, Select: Select, Textarea: Textarea } = FormControl;

export { Input, Select, Textarea };
export default FormControl;
