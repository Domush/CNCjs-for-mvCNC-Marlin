import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import i18n from 'app/lib/i18n';
import Terminal from './Terminal.js';
import styles from './index.styl.js';

class Console extends PureComponent {
  static propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
    active: PropTypes.bool,
  };

  terminal = null;

  render() {
    const { state, actions } = this.props;
    const { port } = state;

    if (!port) {
      return <div className={styles.noSerialConnection}>{i18n._('Not connected to a device')}</div>;
    }

    return (
      <Terminal
        ref={(node) => {
          if (node) {
            this.terminal = node;
          }
        }}
        cols={state.terminal.cols}
        rows={state.terminal.rows}
        cursorBlink={state.terminal.cursorBlink}
        scrollback={state.terminal.scrollback}
        tabStopWidth={state.terminal.tabStopWidth}
        onData={actions.onTerminalData}
        active={this.props.active}
      />
    );
  }
}

export default Console;
