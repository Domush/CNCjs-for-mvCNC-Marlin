import classNames from 'classnames';
import React from 'react';
import styles from './index.styl.js';

const Title = ({ className, ...props }) => <div {...props} className={classNames(className, styles.widgetTitle)} />;

export default Title;
