
import React from 'react';
import classNames from 'classnames';
import styles from '../index.styl';
import FunctionButton from '../../../components/FunctionButton/FunctionButton';
import Slider from './Slider';


const LaserControls = ({ actions, state }) => {
    const { laser, canClick } = state;

    return (
        <div className={styles.controlContainer}>
            <div className={styles.controlRow}>
                <FunctionButton onClick={actions.sendLaserM3} disabled={!canClick}>
                    <i className="fas fa-lightbulb" />
                    Laser On
                </FunctionButton>
                <FunctionButton onClick={actions.runLaserTest} disabled={!canClick}>
                    <i className="fas fa-satellite-dish" />
                    Laser Test
                </FunctionButton>
                <FunctionButton onClick={actions.sendM5} disabled={!canClick}>
                    <i className="far fa-lightbulb" />
                    Laser Off
                </FunctionButton>
            </div>
            <Slider
                label="Power"
                unitString="%"
                value={laser.power}
                max={100}
                step={1}
                onChange={actions.handleLaserPowerChange}
            />
            <div className={classNames('form-group', styles.durationWrapper)}>
                <label>Test Duration:</label>
                <div className="input-group">
                    <input
                        value={laser.duration}
                        onChange={actions.handleLaserDurationChange}
                        className={classNames('form-control', styles.durationInput)}
                    />
                    <span className="input-group-addon">s</span>
                </div>
            </div>
        </div>
    );
};

export default LaserControls;
