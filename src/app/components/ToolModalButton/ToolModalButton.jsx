import React from 'react';
import cx from 'classnames';
import styles from './index.styl.js';

const ToolModalButton = ({ className, icon = 'fas fa-info', children, ...props }) => (
  <button className={cx(styles.toolModalButton, className)} {...props}>
    <div className={styles.toolModalButtonIcon}>
      <i className={icon} />
    </div>
    <div className={styles.toolModalButtonContent}>{children}</div>
  </button>
);

export default ToolModalButton;
