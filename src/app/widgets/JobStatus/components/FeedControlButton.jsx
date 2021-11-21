import React from 'react';
import styles from './Overrides.styl';

const FeedControlButton = ({ children, ...props }) => (
  <button className={styles.feedControlButton} {...props}>
    {children}
  </button>
);

export default FeedControlButton;
