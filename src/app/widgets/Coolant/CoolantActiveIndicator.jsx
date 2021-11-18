
import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import cx from 'classnames';
import styles from './index.styl';

const CoolantActiveIndicator = ({ showIndicator }) => {
    return (
        <div className={styles.indicatorRow}>
            <small>
                {
                    showIndicator ? 'Active' : 'Not Active'
                }
            </small>
            <div className={cx(styles.activeIndicator, { [styles.activeIndicatorOn]: showIndicator })}>
                {
                    showIndicator && <i className={cx('fas fa-tint', styles.activePulse)} />
                }
            </div>
        </div>
    );
};

export default connect((store) => {
    const coolantModal = get(store, 'controller.modal.coolant');
    const isConnected = get(store, 'connection.isConnected');
    const showIndicator = isConnected && coolantModal !== 'M9';

    return {
        showIndicator
    };
})(CoolantActiveIndicator);
