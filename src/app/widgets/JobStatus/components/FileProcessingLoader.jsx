import React from 'react';
import styles from '../index.styl';
import idleStyles from './IdleInfo.styl';
import LoaderBar from './LoaderBar';

const FileProcessingLoader = () => {
  return (
    <div className={idleStyles.idleInfo}>
      <div>
        <span className={idleStyles.fileName}>Parsing File Attributes</span>
      </div>
      <div className={styles.processingLoader}>
        <LoaderBar />
      </div>
    </div>
  );
};

export default FileProcessingLoader;
