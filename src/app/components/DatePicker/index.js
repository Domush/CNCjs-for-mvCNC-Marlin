const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-datepicker/dist/react-datepicker.css');
const DatePicker = require('@trendmicro/react-datepicker');

export { DateInput, TimeInput } from '@trendmicro/react-datepicker';
export { DateTimeRangePicker } from './DateTimeRangePicker';
export { DateTimeRangePickerDropdown } from './DateTimeRangePickerDropdown';

export default DatePicker;
