import React from 'react';
import styles from '../index.styl.js';

const Half = ({ children }) => (
  <div
    className={styles.halfContainer}
    style={{ justifyContent: children.length > 2 ? 'space-between' : 'flex-start' }}
  >
    {children}
  </div>
);

const GeneralArea = ({ children }) => <div className={styles.generalArea}>{children}</div>;

GeneralArea.Half = Half;

export default GeneralArea;
