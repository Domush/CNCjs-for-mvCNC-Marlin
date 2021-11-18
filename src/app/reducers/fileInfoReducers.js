import { createReducer } from 'redux-action';
import { UNLOAD_FILE_INFO, UPDATE_FILE_INFO, UPDATE_FILE_CONTENT, UPDATE_FILE_PROCESSING, UPDATE_FILE_RENDER_STATE } from 'app/actions/fileInfoActions';
import { METRIC_UNITS, RENDER_NO_FILE } from 'app/constants';

const initialState = {
    fileLoaded: false,
    fileProcessing: false,
    renderState: RENDER_NO_FILE,
    name: null,
    path: '',
    size: 0,
    total: 0,
    toolSet: [],
    spindleSet: [],
    movementSet: [],
    invalidGcode: [],
    estimatedTime: 0,
    fileModal: METRIC_UNITS,
    bbox: {
        min: { x: 0, y: 0, z: 0 },
        max: { x: 0, y: 0, z: 0 },
        delta: { x: 0, y: 0, z: 0 }
    },
    content: '',
};

const normalizeBBox = (bbox) => {
    const defaultBBox = {
        min: { x: 0, y: 0, z: 0 },
        max: { x: 0, y: 0, z: 0 },
    };
    return {
        ...defaultBBox,
        ...bbox
    };
};

const reducer = createReducer(initialState, {
    [UNLOAD_FILE_INFO]: (context, reducerState) => {
        return {
            ...initialState
        };
    },
    [UPDATE_FILE_INFO]: (payload, reducerState) => {
        const bbox = payload.bbox ? { bbox: normalizeBBox(payload.bbox) } : {};
        return {
            ...payload,
            fileLoaded: true,
            fileProcessing: false,
            ...bbox
        };
    },
    [UPDATE_FILE_CONTENT]: ({ content, name, size }, reducerState) => {
        return {
            fileLoaded: true,
            content,
            name,
            size
        };
    },
    [UPDATE_FILE_PROCESSING]: ({ value }, reducerState) => {
        return {
            fileProcessing: value
        };
    },
    [UPDATE_FILE_RENDER_STATE]: ({ state }, reducerState) => {
        return {
            renderState: state
        };
    },
});

export default reducer;
