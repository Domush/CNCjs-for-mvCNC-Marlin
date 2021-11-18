
import React, { useState } from 'react';

import store from 'app/store';
import pubsub from 'pubsub-js';
import TouchPlate from './TouchPlate';
import ProbeSettings from './ProbeSettings';
import Tools from './Tools';

import GeneralArea from '../components/GeneralArea';
import SettingWrapper from '../components/SettingWrapper';


const Probe = ({ active, state, actions }) => {
    const [type, setType] = useState(store.get('workspace.probeProfile.touchplateType'));

    const { probeSettings, probe, units } = state;
    const probeActions = actions.probe;

    const values = {
        length: units === 'mm' ? probe.plateLength.mm : probe.plateLength.in,
        width: units === 'mm' ? probe.plateWidth.mm : probe.plateWidth.in,
        xyThickness: units === 'mm' ? probe.xyThickness.mm : probe.xyThickness.in,
        zThickness: units === 'mm' ? probe.zThickness.mm : probe.zThickness.in,
        fastFeedrate: units === 'mm' ? probeSettings.fastFeedrate.mm : probeSettings.fastFeedrate.in,
        normalFeedrate: units === 'mm' ? probeSettings.normalFeedrate.mm : probeSettings.normalFeedrate.in,
        retractionDistance: units === 'mm' ? probeSettings.retractionDistance.mm : probeSettings.retractionDistance.in,
    };

    const handleTouchplateTypeChange = (option) => {
        const { value } = option;
        store.set('workspace.probeProfile.touchplateType', value);
        setType(value);
        pubsub.publish('probe:updated');
    };

    return (
        <SettingWrapper title="Probe" show={active}>
            <GeneralArea>
                <GeneralArea.Half>
                    <TouchPlate
                        actions={actions}
                        state={state}
                        values={values}
                        type={type}
                        onTypeChange={handleTouchplateTypeChange}
                    />
                    <ProbeSettings
                        probeActions={probeActions}
                        state={state}
                        values={values}
                        type={type}
                    />
                </GeneralArea.Half>

                <GeneralArea.Half>
                    <Tools state={state} actions={actions} />
                </GeneralArea.Half>
            </GeneralArea>
        </SettingWrapper>
    );
};

export default Probe;
