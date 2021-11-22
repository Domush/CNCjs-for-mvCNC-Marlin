import classNames from 'classnames';
// import both default and named
import React from 'react';
import { forwardRef } from 'react';
import styles from './index.styl.js';

const Content = ({ className, active, ...props }) => (
  <div {...props} className={classNames(className, styles.widgetContent)} />
);

export default forwardRef((props, ref) => <Content {...props} reference={ref} />);
