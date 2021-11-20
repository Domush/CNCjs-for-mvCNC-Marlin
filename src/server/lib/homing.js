import get from 'lodash/get';

export const FRONT_RIGHT = 'FR';
export const FRONT_LEFT = 'FL';
export const BACK_RIGHT = 'BR';
export const BACK_LEFT = 'BL';
export const POSITIVE_DIRECTION = 1;
export const NEGATIVE_DIRECTION = -1;

export const getHomingLocation = (setting) => {
  if (setting === '0') {
    return BACK_RIGHT;
  } else if (setting === '1') {
    return BACK_LEFT;
  } else if (setting === '2') {
    return FRONT_RIGHT;
  } else if (setting === '3') {
    return FRONT_LEFT;
  }
  return BACK_RIGHT;
};

export const determineMaxMovement = (position, movementDirection, limitLocation, limit) => {
  const OFFSET = 0.1;
  limit -= OFFSET; // We reduce limit to account for bumping into edges

  if (position === 0) {
    return (limit * movementDirection).toFixed(2);
  }

  if (movementDirection === POSITIVE_DIRECTION) {
    if (limitLocation === POSITIVE_DIRECTION) {
      return (limit - position).toFixed(2);
    } else {
      return (position - OFFSET).toFixed(2);
    }
  } else if (movementDirection === NEGATIVE_DIRECTION) {
    if (limitLocation === POSITIVE_DIRECTION) {
      return (-1 * (position - OFFSET)).toFixed(2);
    } else {
      return (-1 * (limit - position)).toFixed(2);
    }
  }
  return 0;
};

export const getAxisMaximumLocation = (homingMask) => {
  const homingLocation = getHomingLocation(homingMask);
  if (homingLocation === BACK_RIGHT) {
    return [NEGATIVE_DIRECTION, NEGATIVE_DIRECTION];
  } else if (homingLocation === BACK_LEFT) {
    return [POSITIVE_DIRECTION, NEGATIVE_DIRECTION];
  } else if (homingLocation === FRONT_RIGHT) {
    return [NEGATIVE_DIRECTION, POSITIVE_DIRECTION];
  }
  return [POSITIVE_DIRECTION, POSITIVE_DIRECTION];
};

export const determineMachineZeroFlagSet = (res, settings) => {
  const homingMask = get(settings, 'settings.$23');
  const mpos = get(res, 'mpos');
  const homingLocation = getHomingLocation(homingMask);
  const xPos = parseInt(mpos.x, 10);
  const yPos = parseInt(mpos.y, 10);
  const zPos = parseInt(mpos.z, 10);

  if (homingLocation !== BACK_RIGHT) {
    if (xPos === 0 && yPos === 0 && zPos === 0) {
      return true;
    }
  }

  return false;
};
