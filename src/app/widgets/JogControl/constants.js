
import constants from 'namespace-constants';

// Modal
export const {
    MODAL_NONE,
    MODAL_SETTINGS
} = constants('widgets/JogControl', [
    'MODAL_NONE',
    'MODAL_SETTINGS'
]);

// JogControl
export const DEFAULT_AXES = ['x', 'y', 'z'];

// Speed selection
export const SPEED_RAPID = 'rapid';
export const SPEED_NORMAL = 'normal';
export const SPEED_PRECISE = 'precise';
