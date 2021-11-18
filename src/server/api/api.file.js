
import CNCEngine from '../services/cncengine';
import { ERR_BAD_REQUEST } from '../constants';

// Upload files using superagent:
// https://stackoverflow.com/questions/31748936/how-to-send-files-with-superagent
export const uploadFile = (req, res) => {
    const { port, visualizer } = req.body;
    let { file } = req;

    if (!file) {
        return res.status(ERR_BAD_REQUEST).send({
            msg: 'No file attached'
        });
    }

    const { buffer } = file;
    const gcode = buffer.toString();

    CNCEngine.load({
        gcode,
        port,
        name: file.originalname,
        size: file.size,
        visualizer,
    });

    return res.send({
        msg: 'Successfully loaded file',
    });
};
