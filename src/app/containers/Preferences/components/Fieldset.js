import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../index.styl.js';

const Fieldset = ({ children, legend, className }) => (
  <fieldset className={classnames(styles.fieldset, className)}>
    <legend className={styles.fieldsetLegend}>{legend}</legend>
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  legend: PropTypes.string,
  className: PropTypes.string,
};

export default Fieldset;
