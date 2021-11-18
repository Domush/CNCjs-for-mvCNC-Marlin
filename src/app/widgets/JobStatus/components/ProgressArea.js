
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './Overrides.styl';
import GaugeChart from '../GaugeChart';

/**
 * Progress Area component to display running job information
 * @prop {Object} state Default state given from parent component
 *
 */
const ProgressArea = ({ state }) => {
    const { senderStatus } = state;
    const { total, received, elapsedTime, remainingTime, startTime } = senderStatus;

    /**
     * Format given time value to display minutes and seconds
     * @param {Number} givenTime given time value
     */
    const outputFormattedTime = (givenTime) => {
        if (startTime === 0 || !givenTime || givenTime < 0) {
            return '-';
        }

        //Given time is a unix timestamp to be compared to unix timestamp 0
        const elapsedMinute = moment(moment(givenTime)).diff(moment.unix(0), 'minutes');
        const elapsedSecond = String((moment(moment(givenTime)).diff(moment.unix(0), 'seconds')));

        //Grab last two characters in the elapsedSecond variable, which represent the seconds that have passed
        const strElapsedSecond = `${(elapsedSecond[elapsedSecond.length - 2] !== undefined ? elapsedSecond[elapsedSecond.length - 2] : '')}${String(elapsedSecond[elapsedSecond.length - 1])}`;
        const formattedSeconds = Number(strElapsedSecond) < 59 ? Number(strElapsedSecond) : `${Number(strElapsedSecond) - 60}`;

        return `${elapsedMinute}m ${Math.abs(formattedSeconds)}s`;
    };

    // eslint-disable-next-line no-restricted-globals
    const percentageValue = isNaN(((received / total) * 100).toFixed(0)) ? 0 : ((received / total) * 100).toFixed(0);


    return (
        <div style={{ width: '100%' }}>
            <div className={styles.progressArea}>
                <div className={styles.progressItemsWrapper}>
                    <div className={styles.progressItem}>
                        <span className={styles.progressItemTime}>{outputFormattedTime(elapsedTime)}</span>
                        <span>Time Cutting</span>
                        <span style={{ color: 'black' }}>{received} Lines</span>
                    </div>
                    <GaugeChart color="#3e85c7" value={percentageValue} />
                    <div className={styles.progressItem}>
                        <span className={styles.progressItemTime}>{outputFormattedTime(remainingTime)}</span>
                        <span>Remaining</span>
                        <span style={{ color: 'black' }}>{total - received} Lines</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
ProgressArea.propTypes = {
    state: PropTypes.object,
};

export default ProgressArea;
