
import constants from 'namespace-constants';
import { createAction } from 'redux-action';

export const {
    OPEN_CONNECTION,
    CLOSE_CONNECTION,
    LIST_PORTS,
} = constants('connection', [
    'OPEN_CONNECTION',
    'CLOSE_CONNECTION',
    'LIST_PORTS'
]);

export const openConnection = createAction(OPEN_CONNECTION);
export const closeConnection = createAction(CLOSE_CONNECTION);
export const listPorts = createAction(LIST_PORTS);
