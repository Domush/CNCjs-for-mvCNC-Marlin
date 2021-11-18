
import React, { PureComponent } from 'react';
import throttle from 'lodash/throttle';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from '../index.styl';

class JogControl extends PureComponent {
    // Time to consider a jog movement to be a continuous movement
    timeout = 250;
    // Timeout function that triggers single jog or continuous jog
    timeoutFunction = null;
    // Throttled version of passed stop jog action
    throttledStopJog = null;
    // Toggle to indicate if we are continuous jogging
    isContinuousJogging = false;
    didClick = false;
    startTime = 0;

    constructor(props) {
        super(props);
        if (props.timeout) {
            this.timeout = props.timeout;
        }

        this.throttledStopJog = throttle(() => {
            props.stopContinuousJog();
        }, (this.timeout - 25), { leading: true, trailing: false });
    }

    static propTypes = {
        disabled: PropTypes.bool,
        className: PropTypes.string,
        jog: PropTypes.func,
        continuousJog: PropTypes.func,
        stopContinuousJog: PropTypes.func,
        timeout: PropTypes.number
    };

    clearTimeout() {
        if (this.timeoutFunction) {
            clearTimeout(this.timeoutFunction);
        }
        this.timeoutFunction = null;
    }

    onMouseUp(e) {
        const { jog } = this.props;
        this.clearTimeout(); // remove timeout function so it doesn't fire if exists
        const timer = new Date() - this.startTime;
        if (timer < this.timeout && this.didClick) {
            jog();
        } else {
            this.isContinuousJogging && this.throttledStopJog();
            this.didClick = false;
            this.isContinuousJogging = false;
            this.startTime = new Date();
        }
    }

    onMouseDown(e) {
        this.startTime = new Date();
        this.didClick = true;
        this.timeoutFunction = setTimeout(() => {
            this.props.continuousJog();
            this.isContinuousJogging = true;
        }, this.timeout);
    }

    onMouseLeave(e) {
        this.clearTimeout();
        const timer = new Date() - this.startTime;
        if (this.didClick && timer >= this.timeout) {
            this.isContinuousJogging && this.throttledStopJog();
            this.didClick = false;
            this.startTime = new Date();
            this.isContinuousJogging = false;
            return;
        }
        // Always check if we're continuous jogging regardless on leave and send cancel command
        if (this.isContinuousJogging) {
            clearTimeout(this.timeoutFunction);
            this.isContinuousJogging && this.throttledStopJog();
            this.isContinuousJogging = false;
        }
    }

    onMouseEnter(e) {
        this.startTime = new Date();
    }

    render() {
        const props = { ...this.props };

        return (
            <button
                className={cx(styles.btnKeypad, props.className)}
                disabled={props.disabled}
                onMouseDown={(e) => this.onMouseDown(e)}
                onMouseUp={(e) => this.onMouseUp(e)}
                onMouseLeave={(e) => this.onMouseLeave(e)}
                onMouseEnter={(e) => this.onMouseEnter(e)}
            >
                {props.children}
            </button>
        );
    }
}

export default JogControl;
