import store from 'app/store';
import { Toaster, TOASTER_DANGER } from 'app/lib/toaster/ToasterLib';

export const FRONT_RIGHT = 'FR';
export const FRONT_LEFT = 'FL';
export const BACK_RIGHT = 'BR';
export const BACK_LEFT = 'BL';
export const OTHER = 'OT';

const OFFSET_DISTANCE = 0.9;

export const getHomingLocation = (setting) => {
    if (setting === '0') {
        return BACK_RIGHT;
    } else if (setting === '1') {
        return BACK_LEFT;
    } else if (setting === '2') {
        return FRONT_RIGHT;
    } else if (setting === '3') {
        return FRONT_LEFT;
    } else {
        return OTHER;
    }
};

const getMachineMovementLimits = () => {
    const machineProfile = store.get('workspace.machineProfile');
    if (!machineProfile) {
        Toaster.pop({
            msg: 'Unable to find machine profile - make sure it\'s set in preferences',
            type: TOASTER_DANGER
        });
        return [null, null];
    }
    const { limits } = machineProfile;
    const xLimit = Number(limits.xmax * OFFSET_DISTANCE).toFixed(3);
    const yLimit = Number(limits.ymax * OFFSET_DISTANCE).toFixed(3);
    return [xLimit, yLimit];
};

const getPositionMovements = (requestedPosition, homingPosition, homingFlag) => {
    const [xLimit, yLimit] = getMachineMovementLimits();


    // If homing flag not set, we treat all movements as negative space
    if (!homingFlag) {
        homingPosition = BACK_RIGHT;
    }

    if (!xLimit || !yLimit) {
        Toaster.pop({
            msg: 'Unable to find machine limits - make sure they\'re set in preferences',
            type: TOASTER_DANGER
        });
        return [null, null];
    }

    if (homingPosition === FRONT_RIGHT) {
        if (requestedPosition === FRONT_RIGHT) {
            return [0, 0];
        } else if (requestedPosition === FRONT_LEFT) {
            return [xLimit * -1, 0];
        } else if (requestedPosition === BACK_LEFT) {
            return [(xLimit * -1), yLimit];
        } else { // Back Right
            return [0, yLimit];
        }
    } else if (homingPosition === FRONT_LEFT) {
        if (requestedPosition === FRONT_RIGHT) {
            return [xLimit, 0];
        } else if (requestedPosition === FRONT_LEFT) {
            return [0, 0];
        } else if (requestedPosition === BACK_RIGHT) {
            return [xLimit, yLimit];
        } else { // Back Right
            return [0, yLimit];
        }
    } else if (homingPosition === BACK_LEFT) {
        if (requestedPosition === FRONT_RIGHT) {
            return [xLimit, yLimit * -1];
        } else if (requestedPosition === FRONT_LEFT) {
            return [0, yLimit * -1];
        } else if (requestedPosition === BACK_LEFT) {
            return [0, 0];
        } else { // Back Right
            return [xLimit, 0];
        }
    } else if (homingPosition === BACK_RIGHT) {
        if (requestedPosition === FRONT_RIGHT) {
            return [0, yLimit * -1];
        } else if (requestedPosition === FRONT_LEFT) {
            return [xLimit * -1, yLimit * -1];
        } else if (requestedPosition === BACK_LEFT) {
            return [xLimit * -1, 0];
        } else { // Back Right
            return [0, 0];
        }
    }

    return [null, null];
};

export const getMovementGCode = (requestedPosition, homingPositionSetting, homingFlag) => {
    const gcode = [];

    gcode.push(`G53 G21 G0 Z-${OFFSET_DISTANCE}`); // Always move up to the limit of Z travel minus offset
    const homingPosition = getHomingLocation(homingPositionSetting);
    const [xMovement, yMovement] = getPositionMovements(requestedPosition, homingPosition, homingFlag);

    if (xMovement === null || yMovement === null) {
        Toaster.pop({
            msg: 'Unable to calculate position movements based on inputs - check arguments passed',
            type: TOASTER_DANGER
        });
        return [];
    }
    gcode.push(`G53 G21 G0 X${xMovement} Y${yMovement}`);

    return gcode;
};
