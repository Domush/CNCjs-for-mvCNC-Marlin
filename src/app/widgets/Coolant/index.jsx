import React from 'react';
import Widget from 'app/components/Widget';
import { connect } from 'react-redux';
import CoolantControls from 'app/widgets/Coolant/CoolantControls';
import CoolantActiveIndicator from 'app/widgets/Coolant/CoolantActiveIndicator';

const CoolantWidget = ({ widgetId, embedded }) => (
  <Widget>
    <Widget.Header embedded={embedded} />
    <Widget.Content>
      <CoolantActiveIndicator />
      <CoolantControls />
    </Widget.Content>
  </Widget>
);

export default connect((store) => ({}))(CoolantWidget);
