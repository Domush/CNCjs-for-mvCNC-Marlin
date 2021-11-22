import AvrgirlArduino from 'avrgirl-arduino';
import hex from '!file-loader!./grblsept15.hex.js';
import logger from '../../logger.js';
import store from '../../../store.js';

const log = logger('FlashLib: ');
const FlashingFirmware = (recievedPortNumber) => {
  if (!recievedPortNumber) {
    log.error('No port specified');
    return;
  }
  const controller = store.get('controllers["' + recievedPortNumber + '"]');
  try {
    let avrgirl = new AvrgirlArduino({
      board: 'uno',
      port: recievedPortNumber,
    });

    avrgirl.flash(hex, (error) => {
      if (error) {
        if (controller) {
          controller.command('flashing:failed', error);
        }
        log.debug(`${error} Error flashing board`);
      } else {
        if (controller) {
          controller.command('flashing:success');
        }
        log.debug('Flash successful');
      }
    });
  } catch (error) {
    log.debug(`${error} Error flashing board`);
  }
};

export default FlashingFirmware;
