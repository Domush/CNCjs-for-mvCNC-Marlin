import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.styl.js';

const NavSidebarLink = ({ label, url = '#', icon, onClick, className, disabled = false }) => (
  <button onClick={onClick} className={cx(styles.linkButton, className)} disabled={disabled}>
    <i className={String(icon)} /> {label}
  </button>
);

NavSidebarLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default NavSidebarLink;
