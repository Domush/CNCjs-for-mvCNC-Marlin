import classNames from 'classnames';
import React from 'react';
import styles from './index.styl.js';

const ChildComponent = ({ className, active, ...props }) => (
  <div {...props} className={classNames(className, styles.tabChild, { [styles.notActive]: !active })} />
);

export default ChildComponent;
