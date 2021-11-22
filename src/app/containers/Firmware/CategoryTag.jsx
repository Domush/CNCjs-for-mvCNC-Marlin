import React from 'react';
import styles from './index.styl.js';

const CategoryTag = ({ category }) => <div className={styles[`category-tag-${category}`]}>{category}</div>;

export default CategoryTag;
