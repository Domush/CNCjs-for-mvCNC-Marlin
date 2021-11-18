
import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import FunctionButton from 'app/components/FunctionButton/FunctionButton';
import controller from 'app/lib/controller';
import { GRBL_ACTIVE_STATE_IDLE } from 'app/constants';
import styles from './index.styl';


const sendM7 = () => {
    controller.command('gcode', 'M7');
};
const sendM8 = () => {
    controller.command('gcode', 'M8');
};
const sendM9 = () => {
    controller.command('gcode', 'M9');
};

const CoolantControls = ({ canClick }) => {
    return (
        <div className={styles.flexRow}>
            <FunctionButton onClick={sendM7} disabled={!canClick}>
                <i className="fa fa-shower" />
                Mist (M7)
            </FunctionButton>
            <FunctionButton onClick={sendM8} disabled={!canClick}>
                <i className="fa fa-water" />
                Flood (M8)
            </FunctionButton>
            <FunctionButton onClick={sendM9} disabled={!canClick}>
                <i className="fa fa-ban" />
                Off (M9)
            </FunctionButton>
        </div>
    );
};

export default connect((store) => {
    const isConnected = get(store, 'connection.isConnected');
    const activeState = get(store, 'controller.state.status.activeState');
    const canClick = isConnected && activeState === GRBL_ACTIVE_STATE_IDLE;
    return {
        canClick
    };
})(CoolantControls);
