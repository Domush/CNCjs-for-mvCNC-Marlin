import React from 'react';
import cx from 'classnames';
import styles from './index.styl.js';

const MiniCircuitStatus = ({ probeActive }) => (
  <span className={cx(styles.miniCircuitStatus, { [styles.circuitClosed]: probeActive })} />
);

export default MiniCircuitStatus;
