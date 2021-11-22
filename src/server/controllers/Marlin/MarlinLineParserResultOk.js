class MarlinLineParserResultOk {
  // ok
  static parse(line) {
    const r = line.match(/^(?:ok|ok P\d+ B\d+)$/);
    if (!r) {
      return null;
    }

    const payload = {};

    return {
      type: MarlinLineParserResultOk,
      payload: payload,
    };
  }
}

export default MarlinLineParserResultOk;
