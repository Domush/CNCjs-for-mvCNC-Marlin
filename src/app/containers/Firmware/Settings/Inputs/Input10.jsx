/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ToggleSwitch from 'app/components/ToggleSwitch';
import styles from './index.styl';

class InputTen extends PureComponent {
  static propTypes = {
    switchSettings: PropTypes.object,
    title: PropTypes.string,
    currentSettings: PropTypes.object,
    getUsersNewSettings: PropTypes.func,
    grabNew$10InputSettings: PropTypes.func,
    disableSettingsButton: PropTypes.func,
  };

  state = this.getInitialState();

  getInitialState() {
    return {
      settings: [false, false], // [mpos/wpos], buffer
    };
  }

  componentDidMount = () => {
    this.getCurrentSettings();
  };

  getCurrentSettings = () => {
    let loadedSetting = this.props.currentSettings.$10;
    let options = [
      [false, false], //$10=0
      [true, false],
      [false, true],
      [true, true],
    ];
    let index = Number(loadedSetting);
    index = index > options.length ? 3 : index;
    const setting = options[index];
    this.setState({ settings: setting });
  };

  updateSettings = (value) => {
    const { grabNew$10InputSettings, title, disableSettingsButton } = this.props;
    grabNew$10InputSettings(title, value);
    disableSettingsButton();
  };

  toggleMPos = (value) => {
    const settings = [...this.state.settings];
    settings[0] = value;
    this.setState({
      settings: settings,
    });
    this.updateSettings(settings);
  };

  toggleBuffer = (value) => {
    const settings = [...this.state.settings];
    settings[1] = value;
    this.setState({
      settings: settings,
    });
    this.updateSettings(settings);
  };

  handleSwitch = (event) => {
    let value = event.target.checked;
    let name = event.target.name;
    let currentValue = this.state.defaultSettings;
    if (currentValue[0] === true) {
      currentValue[0] = 1;
    } else if (currentValue[0] === false) {
      currentValue[0] = 0;
    }
    if (currentValue[1] === true) {
      currentValue[1] = 1;
    } else if (currentValue[1] === false) {
      currentValue[1] = 0;
    }

    if (value === true) {
      value = 1;
    }
    if (value === false) {
      value = 0;
    }

    if (name === '10-0') {
      currentValue[0] = value;
    }
    if (name === '10-1') {
      currentValue[1] = value;
    }
    this.props.disableSettingsButton();
    this.props.grabNew$10InputSettings(name, currentValue);
  };

  render() {
    let [wpos, buffer] = this.state.settings;

    return (
      <div className={styles.controlWrapper}>
        <div className={styles.controlGrid}>
          <span className={styles.leftLabel}>WPos</span>
          <div className={styles.centeredControl}>
            <ToggleSwitch checked={wpos} onChange={this.toggleMPos} />
          </div>
          <span>MPos</span>
        </div>
        <div className={styles.controlGrid}>
          <span className={styles.leftLabel}>Buffer</span>
          <div className={styles.centeredControl}>
            <ToggleSwitch checked={buffer} onChange={this.toggleBuffer} />
          </div>
          <span />
        </div>
      </div>
    );
  }
}

export default InputTen;
