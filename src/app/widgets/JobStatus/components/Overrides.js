import React from 'react';
import PropTypes from 'prop-types';

import ProgressArea from './ProgressArea.js';
import SettingsArea from './SettingsArea.js';
import styles from './Overrides.styl.js';

/**
 * Override component responsible for allowing feed rate and spindle overrides as well as displaying their values
 * @prop {Object} state Default state given from parent component
 *
 */
const Overrides = ({ state }) => (
  <div className={styles.wrapper}>
    <ProgressArea state={state} />
    <div className={styles.seperator} />
    <SettingsArea state={state} />
  </div>
);

Overrides.propTypes = {
  state: PropTypes.object,
};

export default Overrides;
