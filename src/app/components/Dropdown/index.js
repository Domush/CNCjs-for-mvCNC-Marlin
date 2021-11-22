const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-dropdown/dist/react-dropdown.css');
const Dropdown = require('@trendmicro/react-dropdown');

export default Dropdown;
export { DropdownToggle, DropdownMenu, DropdownSubMenu, MenuItem, DropdownButton } from '@trendmicro/react-dropdown';
