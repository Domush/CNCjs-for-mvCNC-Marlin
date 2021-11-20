import React from 'react';
import SettingWrapper from '../components/SettingWrapper';
import GeneralArea from '../components/GeneralArea';
import ToolChange from './ToolChange';

const EventWidget = ({ active }) => {
  return (
    <SettingWrapper title="Tool Change" show={active}>
      <GeneralArea>
        <ToolChange />
      </GeneralArea>
    </SettingWrapper>
  );
};

export default EventWidget;
