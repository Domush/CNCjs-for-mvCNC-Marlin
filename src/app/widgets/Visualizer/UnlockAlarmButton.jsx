import React from 'react';
import classnames from 'classnames';
import styles from './index.styl.js';

const UnlockAlarmButton = ({ onClick, newMessage, alarmCode }) => {
  let message = 'Click to Unlock Machine';
  if (alarmCode === 'Homing') {
    message = 'Click to Run Homing';
  }
  return newMessage ? (
    <div className={styles.alarmButtonWrap}>
      <button className={styles.alarmButton} type="button" onClick={onClick}>
        <i
          className={classnames('fas', alarmCode !== 'Homing' ? 'fa-unlock' : 'fa-home')}
          role="button"
          tabIndex={-1}
        />
        {newMessage}
      </button>
    </div>
  ) : (
    <div className={styles.alarmButtonWrap}>
      <button className={styles.alarmButton} type="button" onClick={onClick}>
        <i
          className={classnames('fas', alarmCode !== 'Homing' ? 'fa-unlock' : 'fa-home')}
          role="button"
          tabIndex={-1}
        />
        {message}
      </button>
    </div>
  );
};

export default UnlockAlarmButton;
