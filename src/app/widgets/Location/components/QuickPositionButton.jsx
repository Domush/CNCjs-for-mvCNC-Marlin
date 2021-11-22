import React from 'react';
import cx from 'classnames';
import styles from '../index.styl.js';

const QuickPositionButton = ({ className, icon, rotate, ...props }) => (
  <button type="button" className={cx(className, styles.quickPositionButton)} {...props}>
    <i className={`fas ${icon} fa-rotate-${rotate}`} />
  </button>
);

export default QuickPositionButton;
