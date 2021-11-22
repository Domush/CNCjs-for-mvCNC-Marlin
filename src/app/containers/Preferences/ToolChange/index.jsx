import React from 'react';
import SettingWrapper from '../components/SettingWrapper.js';
import GeneralArea from '../components/GeneralArea.js';
import ToolChange from './ToolChange.js';

const EventWidget = ({ active }) => (
  <SettingWrapper title="Tool Change" show={active}>
    <GeneralArea>
      <ToolChange />
    </GeneralArea>
  </SettingWrapper>
);

export default EventWidget;
