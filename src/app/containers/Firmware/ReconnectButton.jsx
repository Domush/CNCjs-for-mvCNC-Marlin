import React from 'react';
import styles from './index.styl.js';

const ReconnectButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.reconnectButton}>
    <div className={styles.reconnectIcon}>
      <i className="fas fa-plug" />
    </div>
    <div className={styles.reconnectButtonText}>Connect on last active port</div>
  </button>
);

export default ReconnectButton;
