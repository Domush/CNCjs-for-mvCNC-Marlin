import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.styl.js';

const GoToButton = ({ onClick, disabled }) => (
  <button tabIndex={-1} disabled={disabled} onClick={onClick} onKeyDown={onClick} className={styles['go-to-button']}>
    <span>Go to</span>
  </button>
);

GoToButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default GoToButton;
