import decimalPlaces from '../../lib/decimal-places';

class MarlinLineParserResultPosition {
  // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
  static parse(line) {
    const r = line.match(/^(?:[EX-Z]:[\d\.\-]+\s+)+/i);
    if (!r) {
      return null;
    }

    const payload = {
      pos: {},
    };
    const pattern = /(([EX-Z]):[\d\.\-]+)+/gi;
    const params = r[0].match(pattern);

    for (let param of params) {
      const nv = param.match(/^(.+):(.+)/);
      if (nv) {
        const axis = nv[1].toLowerCase();
        const pos = nv[2];
        const digits = decimalPlaces(pos);
        payload.pos[axis] = Number(pos).toFixed(digits);
      }
    }

    return {
      type: MarlinLineParserResultPosition,
      payload: payload,
    };
  }
}

export default MarlinLineParserResultPosition;
