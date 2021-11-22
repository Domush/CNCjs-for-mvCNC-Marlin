import classNames from 'classnames';
import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import Anchor from '../Anchor.js';
import styles from './index.styl.js';

class Toggler extends PureComponent {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
  };

  render() {
    const { onToggle, className, ...props } = this.props;

    return (
      <Anchor
        {...props}
        className={classNames(className, styles.toggler)}
        onClick={(event) => {
          onToggle(event);
        }}
      />
    );
  }
}

export default Toggler;
