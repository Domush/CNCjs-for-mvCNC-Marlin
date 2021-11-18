
import CNCEngine from './CNCEngine';

const cncengine = new CNCEngine();

const start = (server, controller) => {
    cncengine.start(server, controller);
};

const stop = () => {
    cncengine.stop();
};

const load = (gcode) => {
    cncengine.load(gcode);
};

const unload = () => {
    cncengine.unload();
};

export default {
    start,
    stop,
    load,
    unload
};
