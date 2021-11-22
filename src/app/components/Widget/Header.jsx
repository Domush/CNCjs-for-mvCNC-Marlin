import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.styl.js';

const Header = ({ fixed, className, embedded = false, ...props }) => (
  <div
    {...props}
    className={classNames(
      className,
      styles.widgetHeader,
      { [styles.widgetHeaderFixed]: fixed },
      { [styles.hidden]: embedded }
    )}
  />
);

Header.propTypes = {
  fixed: PropTypes.bool,
};
Header.defaultProps = {
  fixed: false,
};

export default Header;
