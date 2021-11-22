import React from 'react';
import JoggingPresets from './JoggingPresets.js';
import MachineProfile from './MachineProfile.js';
import SettingWrapper from '../components/SettingWrapper.js';
import Connection from './Connection.js';
import GeneralArea from '../components/GeneralArea.js';
import Workspace from './Workspace.js';
import Movement from './Movement.js';
import Settings from './Settings.js';

const General = ({ active, state, actions }) => (
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

export default General;
