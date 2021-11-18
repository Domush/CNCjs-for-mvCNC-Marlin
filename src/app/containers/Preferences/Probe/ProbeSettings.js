
import React from 'react';

import Tooltip from 'app/components/TooltipCustom/ToolTip';
import ToggleSwitch from 'app/components/ToggleSwitch';
// import { TOUCHPLATE_TYPE_AUTOZERO, TOUCHPLATE_TYPE_STANDARD } from 'app/lib/constants';
import { TOUCHPLATE_TYPE_AUTOZERO } from 'app/lib/constants';

import Fieldset from '../components/Fieldset';
import Input from '../components/Input';

import styles from '../index.styl';

const ProbeSettings = ({ state, probeActions, values, type }) => {
    const { probeSettings, units } = state;

    return (
        <Fieldset legend="Probing Settings">

            {
                type !== TOUCHPLATE_TYPE_AUTOZERO && (
                    <>
                        <Tooltip content="Specify starting point between Touch Plate and Tool" location="default">
                            <Input
                                label="Fast Find"
                                value={values.fastFeedrate}
                                onChange={probeActions.changeFastFeedrate}
                                additionalProps={{ type: 'number', id: 'fastFeedrate' }}
                                units={units}
                            />
                        </Tooltip>
                        <Tooltip content="Specify starting point between Touch Plate and Tool" location="default">
                            <Input
                                label="Slow Find"
                                value={values.normalFeedrate}
                                onChange={probeActions.changeNormalFeedrate}
                                additionalProps={{ type: 'number', id: 'normalFeedrate' }}
                                units={units}
                            />
                        </Tooltip>
                        <Tooltip content="Specify how high the head lifts while probing" location="default">
                            <Input
                                label="Retraction"
                                value={values.retractionDistance}
                                onChange={probeActions.changeRetractionDistance}
                                additionalProps={{ type: 'number', id: 'retraction' }}
                                units={units}
                            />
                        </Tooltip>
                    </>
                )
            }
            <Tooltip content="Toggle check to see if your probe is connected correctly" location="default">
                <div className={styles.inputSpread}>
                    <label htmlFor="probeConnectivityTest">Probe connectivity test</label>
                    <ToggleSwitch
                        checked={probeSettings.connectivityTest}
                        onChange={probeActions.changeConnectivityTest}
                    />
                </div>
            </Tooltip>
        </Fieldset>
    );
};

export default ProbeSettings;
