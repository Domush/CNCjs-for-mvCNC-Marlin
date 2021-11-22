const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-navs/dist/react-navs.css');

export { Nav, NavItem, NavDropdown, MenuItem } from '@trendmicro/react-navs';
