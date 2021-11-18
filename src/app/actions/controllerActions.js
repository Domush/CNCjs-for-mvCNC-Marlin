
import constants from 'namespace-constants';
import { createAction } from 'redux-action';

export const {
    UPDATE_CONTROLLER_STATE,
    UPDATE_CONTROLLER_SETTINGS,
    UPDATE_FEEDER_STATUS,
    UPDATE_SENDER_STATUS,
    UPDATE_WORKFLOW_STATE,
    TOOL_CHANGE,
    UPDATE_HOMING_FLAG
} = constants('controller', [
    'UPDATE_CONTROLLER_STATE',
    'UPDATE_CONTROLLER_SETTINGS',
    'UPDATE_FEEDER_STATUS',
    'UPDATE_SENDER_STATUS',
    'UPDATE_WORKFLOW_STATE',
    'TOOL_CHANGE',
    'UPDATE_HOMING_FLAG'
]);

export const updateControllerState = createAction(UPDATE_CONTROLLER_STATE);
export const updateControllerSettings = createAction(UPDATE_CONTROLLER_SETTINGS);
export const updateFeederStatus = createAction(UPDATE_FEEDER_STATUS);
export const updateSenderStatus = createAction(UPDATE_SENDER_STATUS);
export const updateWorkflowState = createAction(UPDATE_WORKFLOW_STATE);
export const toolChange = createAction(TOOL_CHANGE);
export const updateHomingFlag = createAction(UPDATE_HOMING_FLAG);
