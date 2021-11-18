
import { GCodeProcessor } from '../lib/gcodeProcessor/GCodeProcessor';

onmessage = function({ data }) {
    const { content, name, size, feedArray = null, accelArray = null } = data;

    const processor = new GCodeProcessor({ axisLabels: ['x', 'y', 'z'], maxFeed: feedArray, acceleration: accelArray });
    processor.process(content);

    postMessage({
        name,
        size,
        total: processor.vmState.lineCounter,
        toolSet: processor.vmState.tools,
        spindleSet: processor.vmState.spindleRates,
        movementSet: processor.vmState.feedrates,
        invalidGcode: processor.vmState.invalidGcode,
        estimatedTime: processor.vmState.totalTime,
        bbox: processor.getBBox(),
        fileModal: processor.vmState.units
    });
};
