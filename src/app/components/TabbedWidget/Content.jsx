import classNames from 'classnames';
import React from 'react';
import styles from './index.styl.js';

const Content = ({ className, active, ...props }) => (
  <div {...props} className={classNames(className, styles.tabContent)} />
);

export default Content;
