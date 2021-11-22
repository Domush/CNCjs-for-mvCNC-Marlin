import classNames from 'classnames';
import React from 'react';
import styles from './index.styl.js';

const Panel = ({ className, ...props }) => (
  <div {...props} className={classNames(className, styles.panel, styles.panelDefault)} />
);

export default Panel;
