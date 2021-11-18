
import PropTypes from 'prop-types';
import React from 'react';
import Keypad from './Keypad';

const Axes = (props) => {
    const { state, actions } = props;
    return (
        <Keypad
            canClick={state.canClick}
            units={state.units}
            axes={state.axes}
            jog={state.jog}
            actions={actions}
            isJogging={state.isJogging}
            activeState={state.activeState}
            selectedSpeed={state.selectedSpeed}
            canJog={state.canJog}
        />
    );
};

Axes.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default Axes;
