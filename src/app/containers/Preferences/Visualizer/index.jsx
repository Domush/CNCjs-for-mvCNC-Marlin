import React from 'react';

import SettingWrapper from '../components/SettingWrapper.js';
import GeneralArea from '../components/GeneralArea.js';

import VisualizerOptions from './VisualizerOptions.js';
import Theme from './Theme.js';

const VisualizerSettings = ({ active, state, actions }) => (
  <SettingWrapper title="Visualizer" show={active}>
    <GeneralArea>
      <GeneralArea.Half>
        <VisualizerOptions state={state} actions={actions} />
      </GeneralArea.Half>
      <GeneralArea.Half>
        <Theme state={state} actions={actions} />
      </GeneralArea.Half>
    </GeneralArea>
  </SettingWrapper>
);

export default VisualizerSettings;
