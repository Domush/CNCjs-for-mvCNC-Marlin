
import { GCodeProcessor } from './helpers/GCodeProcessor';

onmessage = function({ data }) {
    const { lines, name, size, feedArray, accelArray } = data;

    const processor = new GCodeProcessor({ axisLabels: ['x', 'y', 'z'], maxFeed: feedArray, acceleration: accelArray });
    processor.process(lines);

    postMessage({
        name,
        size,
        total: (lines.length + 1),
        toolSet: processor.vmState.tools,
        spindleSet: processor.vmState.spindleRates,
        movementSet: processor.vmState.feedrates,
        invalidGcode: processor.vmState.invalidGcode,
        estimatedTime: processor.vmState.totalTime,
        bbox: processor.getBBox(),
        fileModal: processor.vmState.units
    });
};
