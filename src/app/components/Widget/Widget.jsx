import classNames from 'classnames';
import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import styles from './index.styl.js';

class Widget extends PureComponent {
  static propTypes = {
    borderless: PropTypes.bool,
    fullscreen: PropTypes.bool,
  };

  static defaultProps = {
    borderless: false,
    fullscreen: false,
  };

  render() {
    const { borderless, fullscreen, className, ...props } = this.props;

    return (
      <div
        {...props}
        className={classNames(
          className,
          styles.widget,
          { [styles.widgetBorderless]: borderless },
          { [styles.widgetFullscreen]: fullscreen }
        )}
      />
    );
  }
}

export default Widget;
