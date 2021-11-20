import React from 'react';
import styles from './index.styl';

const CategoryTag = ({ category }) => {
  return <div className={styles[`category-tag-${category}`]}>{category}</div>;
};

export default CategoryTag;
