import _ from 'lodash';
import MarlinLineParserResultEcho from './MarlinLineParserResultEcho';
import MarlinLineParserResultError from './MarlinLineParserResultError';
import MarlinLineParserResultFirmware from './MarlinLineParserResultFirmware';
import MarlinLineParserResultOk from './MarlinLineParserResultOk';
import MarlinLineParserResultPosition from './MarlinLineParserResultPosition';
import MarlinLineParserResultStart from './MarlinLineParserResultStart';

class MarlinLineParser {
    parse(line) {
        const parsers = [
            // start
            MarlinLineParserResultStart,

            // FIRMWARE_NAME:Marlin 1.1.0 (Github) SOURCE_CODE_URL:https://github.com/MarlinFirmware/Marlin PROTOCOL_VERSION:1.0 MACHINE_TYPE:RepRap EXTRUDER_COUNT:1 UUID:cede2a2f-41a2-4748-9b12-c55c62f367ff
            MarlinLineParserResultFirmware,

            // X:0.00 Y:0.00 Z:0.00 E:0.00 Count X:0 Y:0 Z:0
            MarlinLineParserResultPosition,

            // ok
            MarlinLineParserResultOk,

            // echo:
            MarlinLineParserResultEcho,

            // Error:Printer halted. kill() called!
            MarlinLineParserResultError,
        ];

        for (let parser of parsers) {
            const result = parser.parse(line);
            if (result) {
                _.set(result, 'payload.raw', line);
                return result;
            }
        }

        return {
            type: null,
            payload: {
                raw: line
            }
        };
    }
}

export default MarlinLineParser;
