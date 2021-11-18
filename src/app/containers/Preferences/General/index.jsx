
import React from 'react';
import JoggingPresets from './JoggingPresets';
import MachineProfile from './MachineProfile';
import SettingWrapper from '../components/SettingWrapper';
import Connection from './Connection';
import GeneralArea from '../components/GeneralArea';
import Workspace from './Workspace';
import Movement from './Movement';
import Settings from './Settings';

const General = ({ active, state, actions }) => {
    return (
        <SettingWrapper title="General" show={active}>
            <GeneralArea>

                <GeneralArea.Half>
                    <Connection state={state} actions={actions} />
                    <Workspace state={state} actions={actions} />
                    <JoggingPresets />
                </GeneralArea.Half>

                <GeneralArea.Half>
                    <MachineProfile state={state} />
                    <Movement state={state} actions={actions} />
                    <Settings />
                </GeneralArea.Half>

            </GeneralArea>
        </SettingWrapper>
    );
};

export default General;
