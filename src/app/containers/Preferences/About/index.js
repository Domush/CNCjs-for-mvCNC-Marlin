import React from 'react';
import PropTypes from 'prop-types';

import SettingWrapper from '../components/SettingWrapper.js';
import HeaderArea from './HeaderArea.js';
import MainArea from './MainArea.js';

const About = ({ modalClose, active }) => (
  <SettingWrapper show={active}>
    <HeaderArea />
    <MainArea />
  </SettingWrapper>
);
About.propTypes = {
  modalClose: PropTypes.func,
};

export default About;
