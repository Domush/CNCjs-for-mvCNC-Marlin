// AXIS
export const AXIS_E = 'e';
export const AXIS_X = 'x';
export const AXIS_Y = 'y';
export const AXIS_Z = 'z';
export const AXIS_A = 'a';
export const AXIS_B = 'b';
export const AXIS_C = 'c';

// Imperial System
export const IMPERIAL_UNITS = 'in';
export const IMPERIAL_STEPS = [
    0.0001,
    0.0002,
    0.0003,
    0.0005,
    0.001,
    0.002,
    0.003,
    0.005,
    0.01,
    0.02,
    0.03,
    0.05,
    0.1,
    0.2,
    0.3,
    0.5,
    1, // Default
    2,
    3,
    5,
    10,
    20
];

// Metric System
export const METRIC_UNITS = 'mm';
export const METRIC_STEPS = [
    0.001,
    0.002,
    0.003,
    0.005,
    0.01,
    0.02,
    0.03,
    0.05,
    0.1,
    0.2,
    0.3,
    0.5,
    1, // Default
    2,
    3,
    5,
    10,
    20,
    30,
    50,
    100,
    200,
    300,
    500
];

// Controller
export const GRBL = 'Grbl';
export const MARLIN = 'Marlin';

// Workflow State
export const WORKFLOW_STATE_IDLE = 'idle';
export const WORKFLOW_STATE_PAUSED = 'paused';
export const WORKFLOW_STATE_RUNNING = 'running';

// Grbl Active State
export const GRBL_ACTIVE_STATE_IDLE = 'Idle';
export const GRBL_ACTIVE_STATE_RUN = 'Run';
export const GRBL_ACTIVE_STATE_HOLD = 'Hold';
export const GRBL_ACTIVE_STATE_DOOR = 'Door';
export const GRBL_ACTIVE_STATE_HOME = 'Home';
export const GRBL_ACTIVE_STATE_SLEEP = 'Sleep';
export const GRBL_ACTIVE_STATE_ALARM = 'Alarm';
export const GRBL_ACTIVE_STATE_CHECK = 'Check';
export const GRBL_ACTIVE_STATE_JOG = 'Jog';
export const GRBL_ACTIVE_STATE_TESTING = 'Testing File';

export const LASER_MODE = 'laser';
export const SPINDLE_MODE = 'spindle';

export const CARVING_CATEGORY = 'Carving';
export const OVERRIDES_CATEGORY = 'Overrides';
export const VISUALIZER_CATEGORY = 'Visualizer';
export const LOCATION_CATEGORY = 'Location';
export const JOGGING_CATEGORY = 'Jogging';
export const MACRO_CATEGORY = 'Macros';
export const PROBING_CATEGORY = 'Probing';
export const SPINDLE_LASER_CATEGORY = 'Spindle/Laser';
export const GENERAL_CATEGORY = 'General';
export const TOOLBAR_CATEGORY = 'Toolbar';

export const RENDER_NO_FILE = 'RENDER_NO_FILE';
export const RENDER_LOADING = 'RENDER_LOADNG';
export const RENDER_RENDERING = 'RENDER_RENDERING';
export const RENDER_RENDERED = 'RENDER_RENDERED';

export const SPIRAL_MOVEMENT = 'SPIRAL_MOVEMENT';
export const ZIG_ZAG_MOVEMENT = 'ZIG_ZAG_MOVEMENT';

export const START_POSITION_BACK_LEFT = 'START_POSITION_BACK_LEFT';
export const START_POSITION_BACK_RIGHT = 'START_POSITION_BACK_RIGHT';
export const START_POSITION_FRONT_LEFT = 'START_POSITION_FRONT_LEFT';
export const START_POSITION_FRONT_RIGHT = 'START_POSITION_FRONT_RIGHT';

export const SURFACING_VISUALIZER_CONTAINER_ID = 'SURFACING_VISUALIZER_CONTAINER_ID';
export const VISUALIZER_PRIMARY = 'VISUALIZER_PRIMARY';
export const VISUALIZER_SECONDARY = 'VISUALIZER_SECONDARY';
