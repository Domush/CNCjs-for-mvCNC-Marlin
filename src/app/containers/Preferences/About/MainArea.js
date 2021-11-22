import React from 'react';
import classnames from 'classnames';

import { team, timeline } from './tools.js';

import TimelineItem from './TimelineItem.js';
import TimelineArrow from './TimelineArrow.js';
import styles from './index.styl.js';

const MainArea = () => (
  <div>
    <div className={styles.section}>
      <p style={{ marginTop: '1rem' }}>
        CNCjs4Marlin is a a free Marlin CNC control software that is Feature-packed and is designed to be clean and easy
        to learn while retaining a depth of capabilities for advanced users. It is made for out-of-the-box use on the
        LongMill CNC and other Marlin-based machines and addition it has emphasis on cross-system support, reliable
        operation, and great depth of features.
      </p>
    </div>
    <div className={styles.section}>
      <h3>CNCjs4Marlin Team</h3>

      <p>
        {team.map(({ id, name, title, isLastInList }) => (
          <span key={id}>
            <strong>{name}</strong> ({title}){!isLastInList && ','}{' '}
          </span>
        ))}
      </p>
    </div>
    <div className={classnames(styles.section, styles.last)}>
      <h3>Project Timeline</h3>

      <div className={styles.timeline}>
        {timeline.map(({ id, date, text, isLastInList }) => (
          <React.Fragment key={id}>
            <TimelineItem date={date} text={text} />
            {!isLastInList && <TimelineArrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default MainArea;
