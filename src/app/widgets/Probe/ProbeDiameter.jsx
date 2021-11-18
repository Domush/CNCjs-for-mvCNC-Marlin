import React from 'react';
import CreatableSelect from 'react-select/creatable';

import store from 'app/store';
import { TOUCHPLATE_TYPE_AUTOZERO, PROBE_TYPE_AUTO, PROBE_TYPE_TIP } from 'app/lib/constants';

import styles from './index.styl';
import { METRIC_UNITS } from '../../constants';


const convertAvailableTools = (tools, units) => {
    const optionLabels = [];

    for (let tool of tools) {
        if (tool !== PROBE_TYPE_AUTO || tool !== PROBE_TYPE_TIP) {
        let diameter = (units === METRIC_UNITS) ? tool.metricDiameter : tool.imperialDiameter;
        optionLabels.push({
            value: diameter,
            label: `${diameter} ${units}`
        });
    }
    }
    return optionLabels;
};

const inputStyle = {
    container: base => ({
        ...base,
        flex: 1
    })
};

const ProbeDiameter = ({ actions, state, probeCommand }) => {
    const { setToolDiameter } = actions;
    let { availableTools, units, toolDiameter } = state;

    if (toolDiameter === 'Tip' || toolDiameter === 'Auto') {
        units = '';
    }

    const handleChange = (value) => {
        setToolDiameter(value);
    };
    const options = [];

    const touchplateType = store.get('workspace.probeProfile.touchplateType');

    if (touchplateType === TOUCHPLATE_TYPE_AUTOZERO) {
        options.push(
            { value: PROBE_TYPE_AUTO, label: PROBE_TYPE_AUTO },
            { value: PROBE_TYPE_TIP, label: PROBE_TYPE_TIP },
        );
    }

    options.push(...convertAvailableTools(availableTools, units));

    return (
        <div className={styles.probeDiameterWrapper}>
            <CreatableSelect
                isClearable
                styles={inputStyle}
                onChange={handleChange}
                value={{ label: `${toolDiameter} ${units}` }}
                options={options}
                menuPlacement="top"
                isDisabled={!probeCommand.tool}
                singleValue
            />
        </div>
    );
};

export default ProbeDiameter;
