import React from 'react';
import classNames from 'classnames';

import styles from '../index.styl.js';

const SettingWrapper = ({ children, show, title }) => (
  <div className={classNames(styles.hidden, styles['settings-wrapper'], { [styles.visible]: show })}>
    {title && <h3 className={styles['settings-title']}>{title}</h3>}
    {children}
  </div>
);

export default SettingWrapper;
