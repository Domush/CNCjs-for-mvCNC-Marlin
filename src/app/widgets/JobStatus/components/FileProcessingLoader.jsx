import React from 'react';
import styles from '../index.styl.js';
import idleStyles from './IdleInfo.styl.js';
import LoaderBar from './LoaderBar.js';

const FileProcessingLoader = () => (
  <div className={idleStyles.idleInfo}>
    <div>
      <span className={idleStyles.fileName}>Parsing File Attributes</span>
    </div>
    <div className={styles.processingLoader}>
      <LoaderBar />
    </div>
  </div>
);

export default FileProcessingLoader;
