const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-grid-system/dist/react-grid-system.css');

export { Provider, Container, Row, Col } from '@trendmicro/react-grid-system';
export { default as FlexContainer } from './FlexContainer';
