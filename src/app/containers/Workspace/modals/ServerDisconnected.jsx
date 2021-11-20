import React from 'react';
import { Button } from 'app/components/Buttons';
import ModalTemplate from 'app/components/ModalTemplate';
import controller from 'app/lib/controller';
import Modal from 'app/components/Modal';
import i18n from 'app/lib/i18n';

const attemptReconnect = (forcedReload = true) => {
  controller.reconnect();
};

const ServerDisconnected = (props) => (
  <Modal size="xs" disableOverlay={true} showCloseButton={false}>
    <Modal.Body>
      <ModalTemplate type="error">
        <h5>{i18n._('Server Connection Lost')}</h5>
        <p>{i18n._('It looks like the server connection has been lost - attempt to reconnect?')}</p>
      </ModalTemplate>
    </Modal.Body>
    <Modal.Footer>
      <Button btnStyle="primary" onClick={attemptReconnect}>
        {i18n._('Attempt Reconnect')}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ServerDisconnected;
