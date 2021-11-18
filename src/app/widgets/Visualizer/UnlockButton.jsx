
import React, { useState } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import controller from 'app/lib/controller';
import { GRBL_ACTIVE_STATE_ALARM } from 'app/constants';
import styles from './UnlockButton.styl';


const UnlockButton = ({ activeState, alarmCode }) => {
    const [isHovering, setIsHovering] = useState(false);
    const onMouseOver = () => {
        setIsHovering(true);
    };
    const onMouseOut = () => {
        setIsHovering(false);
    };
    const handleUnlock = () => {
        if (activeState === GRBL_ACTIVE_STATE_ALARM && alarmCode === 'Homing') {
            controller.command('unlock');
        } else {
            controller.command('cyclestart');
        }
    };

    return (
        <button onClick={handleUnlock} className={styles.unlockButton} onMouseOver={onMouseOver} onMouseLeave={onMouseOut}>
            <div className={styles.unlockIndicator}>
                <i className="fas fa-caret-right" />
            </div>
            <i className={isHovering ? 'fas fa-lock-open' : 'fas fa-unlock fa-flip-horizontal'} />
            {
                isHovering &&
                <div className={styles.unlockText}>
                    Unlock Machine
                </div>
            }
        </button>
    );
};

export default connect((store) => {
    const activeState = get(store, 'controller.state.status.activeState');
    const alarmCode = get(store, 'controller.state.status.alarmCode');
    return {
        activeState,
        alarmCode
    };
})(UnlockButton);
