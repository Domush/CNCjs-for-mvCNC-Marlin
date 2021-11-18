
import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import FunctionButton from 'app/components/FunctionButton/FunctionButton';

import Keypad from '../JogControl';

const ToolIntroduction = ({ readyHandler, isConnected }) => {
    const buttonText = isConnected ? 'Ready to start' : 'You must be connected to a device';
    return (
        <>
            <div>
                <div style={{ fontSize: '1rem' }}>
                    <p>Reasonable care during assembly will give an adequately square CNC machine, but if you’re looking to more finely tune your setup then this tool is for you.</p>

                    <p>Prepare your router collet by placing a tipped geometry inside, this could be a tapered bit, a v-bit, or even a sharpened dowel. Also have 3 squares of tape that you’ve marked with an ‘X’ and a long straight-edge ruler or measuring tape on hand.</p>

                    <p>Before starting, please jog your machine to a spot on the front, left corner of the wasteboard, with the tip only slightly offset from the board.</p>
                </div>
                <Keypad />
            </div>
            <FunctionButton primary disabled={!isConnected} onClick={readyHandler}>{ buttonText }</FunctionButton>
        </>
    );
};

ToolIntroduction.propTypes = {
    readyHandler: PropTypes.func,
    isConnected: PropTypes.bool
};

export default connect((store) => {
    const isConnected = get(store, 'connection.isConnected');
    return {
        isConnected
    };
})(ToolIntroduction);
