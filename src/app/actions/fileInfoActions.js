
import constants from 'namespace-constants';
import { createAction } from 'redux-action';

export const {
    UPDATE_FILE_INFO,
    UNLOAD_FILE_INFO,
    UPDATE_FILE_CONTENT,
    UPDATE_FILE_PROCESSING,
    UPDATE_FILE_RENDER_STATE,
} = constants('file', [
    'UPDATE_FILE_INFO',
    'UNLOAD_FILE_INFO',
    'UPDATE_FILE_CONTENT',
    'UPDATE_FILE_PROCESSING',
    'UPDATE_FILE_RENDER_STATE',
]);

export const updateFileInfo = createAction(UPDATE_FILE_INFO);
export const unloadFileInfo = createAction(UNLOAD_FILE_INFO);
export const updateFileContent = createAction(UPDATE_FILE_CONTENT);
export const updateFileProcessing = createAction(UPDATE_FILE_PROCESSING);
export const updateFileRenderState = createAction(UPDATE_FILE_RENDER_STATE);
