
import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider, connect } from 'react-redux';
import reduxStore from 'app/store/redux';
import get from 'lodash/get';
import FunctionButton from 'app/components/FunctionButton/FunctionButton';
import Select from 'react-select';
import Keypad from '../JogControl';
import styles from '../index.styl';


const axisList = [
    { label: 'X', value: 'x' },
    { label: 'Y', value: 'y' },
    { label: 'Z', value: 'z' },
];

const ToolIntroduction = ({ readyHandler, currentAxis, onSelectAxis, isConnected }) => {
    const buttonText = isConnected ? 'Ready to start' : 'You must be connected to a device';

    return (
        <ReduxProvider store={reduxStore}>
            <div className={styles.toolIntro}>
                <p>
                    All CNCs ship with standard settings so the controller knows how much to turn the motors in order to move 1mm,
                     a factor of the specs of the motors and the pitch of the lead screws.
                </p>

                <p>
                    Manufacturing tolerances can make these presets inaccurate, meaning a move of 200mm could move 200.5mm in reality.
                    If you’re looking to use your CNC for more accurate work or run a diagnosis, this tool is for you.
                </p>

                <p>Before starting, you’ll want to have a marker or some tape on hand and a measuring tape to keep track of machine movements.</p>

                <div style={{ marginBottom: '1rem' }}>
                    <Select
                        backspaceRemoves={false}
                        className="sm"
                        clearable={false}
                        menuContainerStyle={{ zIndex: 5 }}
                        name="toolchangeoption"
                        onChange={(selected) => onSelectAxis(selected.value)}
                        options={axisList}
                        value={{ label: currentAxis.toUpperCase(), value: currentAxis }}
                    />
                </div>

                <Keypad />


            </div>
            <FunctionButton primary disabled={!isConnected} onClick={readyHandler}>{ buttonText }</FunctionButton>
        </ReduxProvider>
    );
};

ToolIntroduction.propTypes = {
    readyHandler: PropTypes.func
};

export default connect((store) => {
    const isConnected = get(store, 'connection.isConnected');
    return {
        isConnected
    };
})(ToolIntroduction);
