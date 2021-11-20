import React from 'react';
import { GRBL_ALARMS } from 'server/controllers/Grbl/constants';
import Tooltip from 'app/components/TooltipCustom/ToolTip';
import styles from './workflow-control.styl';

const getCodeDescription = (code = 1) => {
  const alarm = GRBL_ALARMS.find((alarm) => alarm.code === code);
  if (alarm) {
    return alarm.description;
  }
  return 'Invalid alarm code - no matching description found';
};

const AlarmDescriptionIcon = ({ code = 1 }) => {
  const alarmDescription = getCodeDescription(code);
  return (
    <Tooltip content={alarmDescription} placement="bottom">
      <div className={styles.alarmDescriptionButton}>
        <i className="fa fa-question" />
      </div>
    </Tooltip>
  );
};

export default AlarmDescriptionIcon;
