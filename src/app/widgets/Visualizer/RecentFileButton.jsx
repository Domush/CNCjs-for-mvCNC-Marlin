// import both default and named
import React from 'react';
import { useState, useEffect } from 'react';
import pubsub from 'pubsub-js';
import styles from './RecentFileList.styl.js';
import RecentFileList from './RecentFileList.js';
import { getRecentFiles } from './ClientRecentFiles.js';

const RecentFileButton = () => {
  const [showPullout, setShowPullout] = useState(false);
  const [recentFiles, setRecentFiles] = useState([]);

  useEffect(() => {
    setRecentFiles(getRecentFiles());
    pubsub.subscribe((msg, files) => {
      setRecentFiles(files);
    });
  });

  const toggle = () => setShowPullout(!showPullout);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div role="button" aria-label="Recent Files" className={styles.recentFilesButton} onClick={toggle} tabIndex={0}>
      <i className="fas fa-chevron-right" />
      <RecentFileList visible={showPullout} recentFiles={recentFiles} setShowPullout={setShowPullout} />
    </div>
  );
};

export default RecentFileButton;
