import store from 'app/store';
import get from 'lodash/get';
import { METRIC_UNITS } from 'app/constants';
import map from 'lodash/map';

const PROBE_COMMAND = 'G38.2';

const gcode = (cmd, params) => {
  const s = map(params, (value, letter) => String(letter + value)).join(' ');
  return s.length > 0 ? cmd + ' ' + s : cmd;
};

const generateAutoProbe = (axes, wcs) => [];

const generateTipProbe = (axes, wcs) => [];

const generateSingleAxisProbe = (params, axis, tool) => {
  const code = [];
  const { retractionDistance, normalFeedrate, quickFeedrate, xyThickness, zThickness, units, wcs } = params;

  let probeDistance = getProbeTravelDistance(axis, units);
  probeDistance = axis === 'Z' ? -1 * Math.abs(probeDistance) : probeDistance;
  let retractDistance = axis === 'Z' ? retractionDistance : retractionDistance * -1;
  let thickness = axis === 'Z' ? zThickness : xyThickness;

  code.push(
    gcode(`; ${axis}-Probe`),
    // Fast probe for initial touch
    gcode(PROBE_COMMAND, {
      [axis]: probeDistance,
      F: quickFeedrate,
    }),
    // Retract after initial touch
    gcode('G91'),
    gcode('G0', {
      [axis]: retractDistance,
    }),
    // Slow probe for second more accurate touch
    gcode(PROBE_COMMAND, {
      [axis]: probeDistance,
      F: normalFeedrate,
    }),
    // Wait a tick
    gcode('G4', {
      P: this.DWELL_TIME,
    })
  );

  if (axis === 'Z') {
    code.push(
      // Absolute, set Zero for this axis
      gcode('G10', {
        L: 20,
        P: wcs,
        [axis]: thickness,
      })
    );
  } else {
    const toolDiameter = tool;
    const toolRadius = toolDiameter / 2;
    const toolCompensatedThickness = -1 * toolRadius - thickness;
    code.push(
      gcode('G91'),
      // Absolute, set Zero for this axis
      gcode('G10', {
        L: 20,
        P: wcs,
        [axis]: toolCompensatedThickness,
      })
    );
  }

  return code;
};

const generateStandardProbe = (axes, tool = null, wcs) => {
  const params = getTouchplateParameters(wcs);
  const code = [];
  axes.forEach((axis) => {
    code.push(generateSingleAxisProbe(params, axis, tool));
    // Handle glue movements
  });

  return code.flat();
};

const getProbeTravelDistance = (axis, units) => {
  const metricDistances = {
    X: 50,
    Y: 50,
    Z: 30,
  };

  const imperialDistances = {
    X: 2,
    Y: 2,
    Z: 1.5,
  };

  return units === METRIC_UNITS ? metricDistances[axis] : imperialDistances[axis];
};

const getTouchplateParameters = (wcs) => {
  let zThickness;
  let xyThickness;
  let feedrate;
  let fastFeedrate;
  let retractDistance;
  const touchplate = get(store, 'workspace.probeProfile', {});
  const probeFeedrate = get(store, 'widgets.probe.probeFeedrate');
  const probeFastFeedrate = get(store, 'widgets.probe.probeFastFeedrate');
  const retractionDistance = get(store, 'widgets.probe.retractionDistance');
  const units = get(store, 'workspace.units');

  const modal = units === METRIC_UNITS ? '21' : '20';

  if (units === METRIC_UNITS) {
    zThickness = touchplate.zThickness.mm;
    xyThickness = touchplate.xyThickness.mm;
    feedrate = probeFeedrate.mm;
    fastFeedrate = probeFastFeedrate.mm;
    retractDistance = retractionDistance.mm;
  } else {
    zThickness = touchplate.zThickness.in;
    xyThickness = touchplate.xyThickness.in;
    feedrate = probeFeedrate.in;
    fastFeedrate = probeFastFeedrate.in;
    retractDistance = retractionDistance.in;
  }

  return {
    zThickness,
    xyThickness,
    feedrate,
    fastFeedrate,
    retractDistance,
    units,
    modal,
    wcs,
  };
};

export const generateProbeProfile = (axes, tool, wcs) => {
  let code;

  if (tool === 'Auto') {
    code = generateAutoProbe(axes, wcs);
  } else if (tool === 'Tip') {
    code = generateTipProbe(axes, wcs);
  } else {
    code = generateStandardProbe(axes, tool, wcs);
  }

  return code;
};
