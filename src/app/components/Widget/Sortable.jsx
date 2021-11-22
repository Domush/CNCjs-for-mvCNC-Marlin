import classNames from 'classnames';
import React from 'react';
import styles from './index.styl.js';

const Sortable = (props) => {
  const { className, style } = props;

  return <div className={classNames(className, styles.widgetSortable)} style={style} />;
};

export default Sortable;
