import React from 'react';
import styles from './index.styl.js';
import ReconnectButton from './ReconnectButton.js';

const NotConnectedWarning = ({ handleConnect }) => (
  <div>
    <h1 className={styles.warningHeader}>You must be connected to change the Marlin EEPROM settings.</h1>
    <p className={styles.warningExplanation}>
      Connect to your last connected device using the button below or exit this window and connect to a different
      device.
    </p>
    <ReconnectButton onClick={handleConnect} />
  </div>
);

export default NotConnectedWarning;
