import classNames from 'classnames';
import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import styles from './index.styl.js';

class TogglerIcon extends PureComponent {
  static propTypes = {
    expanded: PropTypes.bool,
  };

  static defaultProps = {
    expanded: false,
  };

  render() {
    const { expanded, className, ...props } = this.props;

    return (
      <i
        {...props}
        className={classNames(
          className,
          styles.togglerIcon,
          'fa',
          { 'fa-chevron-up': expanded },
          { 'fa-chevron-down': !expanded }
        )}
      />
    );
  }
}

export default TogglerIcon;
