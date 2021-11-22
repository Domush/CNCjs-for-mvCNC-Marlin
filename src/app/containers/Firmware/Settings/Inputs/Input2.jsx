// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Space from 'app/components/Space';
import styles from './index.styl.js';

class InputTwo extends PureComponent {
  static propTypes = {
    switchSettings: PropTypes.object,
    title: PropTypes.string,
    currentSettings: PropTypes.object,
    getUsersNewSettings: PropTypes.func,
    grabNew$2InputSettings: PropTypes.func,
    disableSettingsButton: PropTypes.func,
  };

  state = this.getInitialState();

  getInitialState() {
    return {
      defaultSettings: '',
      usersNewSettings: {},
    };
  }

  componentDidMount = () => {
    this.getCurrentSettings();
  };

  getCurrentSettings = () => {
    let loadedSettings = this.props.currentSettings.$2;
    let $2Options = [
      [false, false, false],
      [true, false, false],
      [false, true, false],
      [true, true, false],
      [false, false, true],
      [true, false, true],
      [false, true, true],
      [true, true, true],
    ];

    if (loadedSettings === '0') {
      loadedSettings = $2Options[0];
      this.setState({ zero: false });
      this.setState({ one: false });
      this.setState({ two: false });
    } else if (loadedSettings === '1') {
      loadedSettings = $2Options[1];
      this.setState({ zero: true });
      this.setState({ one: false });
      this.setState({ two: false });
    } else if (loadedSettings === '2') {
      loadedSettings = $2Options[2];
      this.setState({ zero: false });
      this.setState({ one: true });
      this.setState({ two: false });
    } else if (loadedSettings === '3') {
      loadedSettings = $2Options[3];
      this.setState({ zero: true });
      this.setState({ one: true });
      this.setState({ two: false });
    } else if (loadedSettings === '4') {
      loadedSettings = $2Options[4];
      this.setState({ zero: false });
      this.setState({ one: false });
      this.setState({ two: true });
    } else if (loadedSettings === '5') {
      loadedSettings = $2Options[5];
      this.setState({ zero: true });
      this.setState({ one: false });
      this.setState({ two: true });
    } else if (loadedSettings === '6') {
      loadedSettings = $2Options[6];
      this.setState({ zero: false });
      this.setState({ one: true });
      this.setState({ two: true });
    } else {
      loadedSettings = $2Options[7];
      this.setState({ zero: true });
      this.setState({ one: true });
      this.setState({ two: true });
    }

    this.setState({ defaultSettings: loadedSettings });
  };

  handleSwitch = (event) => {
    let value = event.target.checked;
    let name = event.target.name;
    let currentValue = this.state.defaultSettings;
    if (currentValue[0]) {
      currentValue[0] = 1;
    } else if (!currentValue[0]) {
      currentValue[0] = 0;
    }
    if (currentValue[1]) {
      currentValue[1] = 1;
    } else if (!currentValue[1]) {
      currentValue[1] = 0;
    }
    if (currentValue[2]) {
      currentValue[2] = 1;
    } else if (!currentValue[2]) {
      currentValue[2] = 0;
    }

    if (value) {
      value = 1;
    }
    if (!value) {
      value = 0;
    }

    if (name === '2-0') {
      currentValue[0] = value;
    }
    if (name === '2-1') {
      currentValue[1] = value;
    }
    if (name === '2-2') {
      currentValue[2] = value;
    }

    this.props.grabNew$2InputSettings(name, currentValue);
    this.props.disableSettingsButton();
  };

  render() {
    let settingsZero = this.state.defaultSettings[0];
    let settingsOne = this.state.defaultSettings[1];
    let settingsTwo = this.state.defaultSettings[2];
    return (
      <div className={styles.numberWidth}>
        <div className={styles.maskTwo}>
          <div className={styles.maskTwoTitles}>X: </div>
          <div className={styles.threeToggles}>
            <div className={styles.onoffswitch}>
              <input
                type="checkbox"
                name="2-0"
                className={styles.onoffswitchcheckbox}
                id="2-0"
                tabIndex="0"
                onClick={this.handleSwitch}
                defaultChecked={settingsZero}
              />
              <label className={styles.onoffswitchlabel} htmlFor="2-0" />
            </div>
          </div>
          <div className={styles.maskTwoTitles}>Y: </div>
          <div className={styles.threeToggles}>
            <div className={styles.onoffswitch}>
              <input
                type="checkbox"
                name="2-1"
                className={styles.onoffswitchcheckbox}
                id="2-1"
                tabIndex="0"
                onClick={this.handleSwitch}
                defaultChecked={settingsOne}
              />
              <label className={styles.onoffswitchlabel} htmlFor="2-1" />
            </div>
          </div>
          <div className={styles.maskTwoTitles}>Z: </div>
          <div className={styles.threeToggles}>
            <div className={styles.onoffswitch}>
              <input
                type="checkbox"
                name="2-2"
                className={styles.onoffswitchcheckbox}
                id="2-2"
                tabIndex="0"
                onClick={this.handleSwitch}
                defaultChecked={settingsTwo}
              />
              <label className={styles.onoffswitchlabel} htmlFor="2-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputTwo;
