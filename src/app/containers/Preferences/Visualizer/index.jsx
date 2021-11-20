import React from 'react';

import SettingWrapper from '../components/SettingWrapper';
import GeneralArea from '../components/GeneralArea';

import VisualizerOptions from './VisualizerOptions';
import Theme from './Theme';

const VisualizerSettings = ({ active, state, actions }) => {
  return (
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
};

export default VisualizerSettings;
