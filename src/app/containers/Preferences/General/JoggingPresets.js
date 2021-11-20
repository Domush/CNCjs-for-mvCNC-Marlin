import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import store from 'app/store';
import Tooltip from 'app/components/TooltipCustom/ToolTip';
import { Toaster, TOASTER_SUCCESS } from 'app/lib/toaster/ToasterLib';
import Fieldset from '../components/Fieldset';
import Input from '../components/Input';
import styles from '../index.styl';
import { convertToImperial, convertToMetric } from '../calculate';

export default class JoggingPresets extends Component {
  state = {
    units: store.get('workspace.units'),
    jogSpeeds: this.getJogSpeeds(),
    currentPreset: { name: 'precise', ...this.getJogSpeeds().precise },
  };

  showToast = _.throttle(
    () => {
      Toaster.pop({
        msg: 'Settings Updated',
        type: TOASTER_SUCCESS,
        duration: 3000,
      });
    },
    5000,
    { trailing: false }
  );

  pubsubTokens = [];

  getJogSpeeds() {
    const data = store.get('widgets.axes');

    if (!data) {
      return {};
    }
    const { rapid, normal, precise } = data.jog;

    return { rapid, normal, precise };
  }

  handleJogClick = (selected) => {
    const { jogSpeeds } = this.state;

    const speed = jogSpeeds[selected];

    this.setState({ currentPreset: { name: selected, ...speed } });
  };

  updateState = () => {
    const units = store.get('workspace.units');
    const data = store.get('widgets.axes');
    if (!data) {
      this.setState({ units });
      return;
    }

    this.setState({ units, jogSpeeds: this.getJogSpeeds() });
  };

  handleXYChange = (e) => {
    const id = e.target.id;
    const value = Number(e.target.value);
    const { currentPreset, units } = this.state;

    if (units === 'mm') {
      if (value >= 1000.1) {
        return;
      }
    }

    if (units === 'in') {
      if (value >= 40.1) {
        return;
      }
    }

    if (value <= 0) {
      return;
    }

    const metricValue = units === 'mm' ? value : convertToMetric(value);
    const imperialValue = units === 'in' ? value : convertToImperial(value);

    const newObj = {
      ...currentPreset,
      in: {
        ...currentPreset.in,
        [id]: imperialValue,
      },
      mm: {
        ...currentPreset.mm,
        [id]: metricValue,
      },
    };

    const prev = store.get('widgets.axes');

    const updated = {
      ...prev,
      jog: {
        ...prev.jog,
        [newObj.name]: {
          mm: newObj.mm,
          in: newObj.in,
        },
      },
    };
    this.setState((prev) => ({
      currentPreset: {
        ...prev.currentPreset,
        in: newObj.in,
        mm: newObj.mm,
      },
    }));
    store.replace('widgets.axes', updated);

    this.showToast();
  };

  handleZChange = (e) => {
    const id = e.target.id;
    const value = Number(e.target.value);
    const { currentPreset, units } = this.state;

    if (units === 'mm') {
      if (value > 1000) {
        return;
      }
    }

    if (units === 'in') {
      if (value > 4) {
        return;
      }
    }

    if (value <= 0) {
      return;
    }

    const metricValue = units === 'mm' ? value : convertToMetric(value);
    const imperialValue = units === 'in' ? value : convertToImperial(value);

    const newObj = {
      ...currentPreset,
      in: {
        ...currentPreset.in,
        [id]: imperialValue,
      },
      mm: {
        ...currentPreset.mm,
        [id]: metricValue,
      },
    };

    const prev = store.get('widgets.axes');

    const updated = {
      ...prev,
      jog: {
        ...prev.jog,
        [newObj.name]: {
          mm: newObj.mm,
          in: newObj.in,
        },
      },
    };
    this.setState((prev) => ({
      currentPreset: {
        ...prev.currentPreset,
        in: newObj.in,
        mm: newObj.mm,
      },
    }));
    store.replace('widgets.axes', updated);

    this.showToast();
  };

  handleSpeedChange = (e) => {
    const id = e.target.id;
    const value = Number(e.target.value);
    const { currentPreset, units } = this.state;

    if (units === 'mm') {
      if (value >= 50000.1) {
        return;
      }
    }

    if (units === 'in') {
      if (value >= 2000.1) {
        return;
      }
    }

    if (value <= 0) {
      return;
    }

    const metricValue = units === 'mm' ? value : convertToMetric(value);
    const imperialValue = units === 'in' ? value : convertToImperial(value);

    const newObj = {
      ...currentPreset,
      in: {
        ...currentPreset.in,
        [id]: imperialValue,
      },
      mm: {
        ...currentPreset.mm,
        [id]: metricValue,
      },
    };

    const prev = store.get('widgets.axes');

    const updated = {
      ...prev,
      jog: {
        ...prev.jog,
        [newObj.name]: {
          mm: newObj.mm,
          in: newObj.in,
        },
      },
    };
    this.setState((prev) => ({
      currentPreset: {
        ...prev.currentPreset,
        in: newObj.in,
        mm: newObj.mm,
      },
    }));
    store.replace('widgets.axes', updated);

    this.showToast();
  };

  componentDidMount() {
    store.on('change', this.updateState);
  }

  componentWillUnmount() {
    store.removeListener('change', this.updateState);
  }

  render() {
    const { units, currentPreset } = this.state;
    const { name } = currentPreset;

    const xyValue = currentPreset[units]?.xyStep;
    const zValue = currentPreset[units]?.zStep;
    const speedValue = currentPreset[units]?.feedrate;

    return (
      <Fieldset legend="Jogging Presets">
        <div className={classnames(styles.jogSpeedWrapper, styles.flexRow)}>
          <button
            type="button"
            onClick={() => this.handleJogClick('precise')}
            className={styles[name === 'precise' ? 'jog-speed-active' : 'jog-speed-inactive']}
          >
            Precise
          </button>
          <button
            type="button"
            onClick={() => this.handleJogClick('normal')}
            className={styles[name === 'normal' ? 'jog-speed-active' : 'jog-speed-inactive']}
          >
            Normal
          </button>
          <button
            type="button"
            onClick={() => this.handleJogClick('rapid')}
            className={styles[name === 'rapid' ? 'jog-speed-active' : 'jog-speed-inactive']}
          >
            Rapid
          </button>
        </div>
        <div className={styles['jog-spead-wrapper']}>
          <Tooltip content="Set amount of movement for XY Jog Speed Preset Buttons" location="default">
            <Input
              label="XY Move"
              units={units}
              onChange={this.handleXYChange}
              additionalProps={{ type: 'number', id: 'xyStep' }}
              value={xyValue}
            />
          </Tooltip>
          <Tooltip content="Set amount of movement for Z Jog Speed Preset Buttons" location="default">
            <Input
              label="Z Move"
              units={units}
              onChange={this.handleZChange}
              additionalProps={{ type: 'number', id: 'zStep' }}
              value={zValue}
            />
          </Tooltip>
          <Tooltip content="Set the speed for the Jog Speed Preset Buttons" location="default">
            <Input
              label="Speed"
              units={`${units}/min`}
              onChange={this.handleSpeedChange}
              additionalProps={{ type: 'number', id: 'feedrate' }}
              value={speedValue}
            />
          </Tooltip>
        </div>
      </Fieldset>
    );
  }
}
