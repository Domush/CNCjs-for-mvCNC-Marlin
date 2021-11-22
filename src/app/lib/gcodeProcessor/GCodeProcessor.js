import objtools from 'objtools';
import Interpreter from 'gcode-interpreter';
import GCodeBlock from 'app/lib/gcodeProcessor/GCodeBlock';

const isNumber = (a) => typeof a === 'number';

export const INVALID_GCODE_REGEX = /([^\d\s%+\.?FGI-KMNRSX-Z\-])|((G28)|(G29)|(\$H))/gi;

/**
 *
 * https://github.com/CrispyConductor/tightcnc/blob/332a3a67309d5fe258e2d1567f94ac1e172bac47/lib/gcode-vm.js
 *
 */
export const GCodeProcessor = class GCodeProcessor {};
