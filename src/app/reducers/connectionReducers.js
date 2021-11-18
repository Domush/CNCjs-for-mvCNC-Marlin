
import { createReducer } from 'redux-action';
import { CLOSE_CONNECTION, LIST_PORTS, OPEN_CONNECTION } from 'app/actions/connectionActions';

const initialState = {
    isConnected: false,
    port: null,
    baudrate: '',
    ports: [],
    unrecognizedPorts: [],
    err: ''
};

const reducer = createReducer(initialState, {
    [OPEN_CONNECTION]: (payload, reducerState) => {
        const { options } = payload;
        const { port, baudrate, inuse } = options;
        const isConnected = inuse;
        return {
            port,
            baudrate,
            isConnected
        };
    },
    [CLOSE_CONNECTION]: (payload, reducerState) => {
        const { options } = payload;
        const { port } = options;
        return {
            port,
            isConnected: false
        };
    },
    [LIST_PORTS]: (payload, reducerState) => {
        const { recognizedPorts, unrecognizedPorts } = payload;
        return {
            ports: recognizedPorts,
            unrecognizedPorts
        };
    }
});

export default reducer;
