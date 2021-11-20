import React, { PureComponent } from 'react';
import classNames from 'classnames';
import includes from 'lodash/includes';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import pubsub from 'pubsub-js';
import { connect } from 'react-redux';
import gamepad, { runAction } from 'app/lib/gamepad';
import combokeys from 'app/lib/combokeys';
import Widget from 'app/components/Widget';
import controller from 'app/lib/controller';
import WidgetConfig from '../WidgetConfig';
import {
  GRBL,
  GRBL_ACTIVE_STATE_HOLD,
  GRBL_ACTIVE_STATE_IDLE,
  LASER_MODE,
  MARLIN,
  SPINDLE_MODE,
  WORKFLOW_STATE_RUNNING,
} from '../../constants';
import styles from './index.styl';
import SpindleControls from './components/SpindleControls';
import LaserControls from './components/LaserControls';
import ModalToggle from './components/ModalToggle';
import ActiveIndicator from './components/ActiveIndicator';

class SpindleWidget extends PureComponent {
  static propTypes = {
    widgetId: PropTypes.string.isRequired,
    onFork: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    sortable: PropTypes.object,
    embedded: PropTypes.bool,
  };

  shuttleControlEvents = {
    TOGGLE_SPINDLE_LASER_MODE: () => {
      this.actions.handleModeToggle();
    },
    CW_LASER_ON: () => {
      this.state.mode === LASER_MODE ? this.actions.sendLaserM3() : this.actions.sendM3();
    },
    CCW_LASER_TEST: () => {
      this.state.mode === LASER_MODE ? this.actions.runLaserTest() : this.actions.sendM4();
    },
    STOP_LASER_OFF: () => {
      this.actions.sendM5();
    },
  };

  // Public methods
  collapse = () => {
    this.setState({ minimized: true });
  };

  expand = () => {
    this.setState({ minimized: false });
  };

  config = new WidgetConfig(this.props.widgetId);

  state = this.getInitialState();

  actions = {
    handleModeToggle: () => {
      const { mode } = this.state;
      if (mode === LASER_MODE) {
        this.setState({
          mode: SPINDLE_MODE,
        });
        this.enableSpindleMode();
        pubsub.publish('spindle:mode', SPINDLE_MODE);
      } else {
        this.setState({
          mode: LASER_MODE,
        });
        this.enableLaserMode();
        pubsub.publish('spindle:mode', LASER_MODE);
      }
    },
    sendM3: () => {
      const { spindleSpeed, mode } = this.state;
      if (mode === LASER_MODE || spindleSpeed === 0) {
        controller.command('gcode', 'M3');
      } else {
        controller.command('gcode', `M3 S${spindleSpeed}`);
      }
    },
    sendM4: () => {
      const { spindleSpeed, mode } = this.state;
      if (mode === LASER_MODE || spindleSpeed === 0) {
        controller.command('gcode', 'M4');
      } else {
        controller.command('gcode', `M4 S${spindleSpeed}`);
      }
    },
    sendM5: () => {
      controller.command('gcode', 'M5 S0');
    },
    sendLaserM3: () => {
      const { laser } = this.state;
      const { power } = laser;
      const { spindleMax } = this.props;
      const laserPower = spindleMax * (power / 100);

      controller.command('gcode', `G1F1 M3 S${laserPower}`);
    },
    handleSpindleSpeedChange: (e) => {
      const value = Number(e.target.value);
      this.setState({
        spindleSpeed: value,
      });
    },
    handleLaserPowerChange: (e) => {
      const { laser } = this.state;
      const value = Number(e.target.value);
      this.setState({
        laser: {
          ...laser,
          power: value,
        },
      });
    },
    handleLaserDurationChange: (e) => {
      const { laser } = this.state;
      let value = Number(e.target.value) || 0;
      value = Math.abs(value);
      this.setState({
        laser: {
          ...laser,
          duration: value,
        },
      });
    },
    runLaserTest: () => {
      const { laser } = this.state;
      const { spindleMax } = this.props;
      const { power, duration } = laser;

      controller.command('lasertest:on', power, duration, spindleMax);
      setTimeout(() => {
        this.setState({
          active: false,
        });
      }, laser.duration);
    },
  };

  addShuttleControlEvents() {
    combokeys.reload();

    Object.keys(this.shuttleControlEvents).forEach((eventName) => {
      const callback = this.shuttleControlEvents[eventName];
      combokeys.on(eventName, callback);
    });
  }

  removeShuttleControlEvents() {
    Object.keys(this.shuttleControlEvents).forEach((eventName) => {
      const callback = this.shuttleControlEvents[eventName];
      combokeys.removeListener(eventName, callback);
    });
  }

  componentDidMount() {
    this.addShuttleControlEvents();

    gamepad.on('gamepad:button', (event) => runAction({ event, shuttleControlEvents: this.shuttleControlEvents }));
  }

  componentWillUnmount() {
    this.removeShuttleControlEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    const { minimized, spindleSpeed, mode, spindleMax, spindleMin, laser } = this.state;

    this.config.set('laser', laser);
    this.config.set('spindleMax', spindleMax);
    this.config.set('spindleMin', spindleMin);
    this.config.set('mode', mode);
    this.config.set('minimized', minimized);
    this.config.set('speed', spindleSpeed);
  }

  getInitialState() {
    return {
      minimized: this.config.get('minimized', false),
      isFullscreen: false,
      canClick: true, // Defaults to true
      mode: this.config.get('mode'),
      spindleSpeed: this.config.get('speed', 100),
      laser: this.config.get('laser'),
    };
  }

  enableSpindleMode() {
    const active = this.getSpindleActiveState();
    if (active) {
      controller.command('gcode', 'M5');
      this.setInactive();
    }
    if (controller.type === GRBL) {
      controller.command('gcode', '$32=0');
    }
  }

  debouncedSpindleOverride = debounce((spindleSpeed) => {
    controller.command('spindleOverride', spindleSpeed);
  }, 250);

  enableLaserMode() {
    const { active } = this.state;
    if (active) {
      controller.command('gcode', 'M5');
    }
    if (controller.type === GRBL) {
      controller.command('gcode', '$32=1');
    }
  }

  getSpindleActiveState() {
    const { spindleModal } = this.props;
    return spindleModal !== 'M5';
  }

  canClick() {
    const { workflow, isConnected, state, type } = this.props;

    if (!isConnected) {
      return false;
    }
    if (workflow.state === WORKFLOW_STATE_RUNNING) {
      return false;
    }
    if (!includes([GRBL, MARLIN], type)) {
      return false;
    }

    if (type === GRBL) {
      const activeState = get(state, 'status.activeState');
      const states = [GRBL_ACTIVE_STATE_IDLE, GRBL_ACTIVE_STATE_HOLD];
      return includes(states, activeState);
    }
    if (type === MARLIN) {
      // Marlin does not have machine state
    }
    return true;
  }

  render() {
    const { embedded, spindleModal, spindleMin, spindleMax } = this.props;
    const { minimized, isFullscreen } = this.state;
    const state = {
      ...this.state,
      spindleModal,
      spindleMin,
      spindleMax,
      canClick: this.canClick(),
    };
    const actions = {
      ...this.actions,
    };

    const active = this.getSpindleActiveState();

    return (
      <Widget fullscreen={isFullscreen}>
        <Widget.Header embedded={embedded}></Widget.Header>
        <Widget.Content
          className={classNames(styles['widget-content'], styles.heightOverride, { [styles.hidden]: minimized })}
        >
          <div>
            <div className={styles.modalRow}>
              <ModalToggle mode={state.mode} onChange={actions.handleModeToggle} disabled={!this.canClick()} />
              <ActiveIndicator canClick={this.canClick()} active={active} />
            </div>
            <div>
              {state.mode === SPINDLE_MODE ? (
                <SpindleControls state={state} actions={actions} />
              ) : (
                <LaserControls state={state} actions={actions} />
              )}
            </div>
          </div>
        </Widget.Content>
      </Widget>
    );
  }
}

export default connect((store) => {
  const workflow = get(store, 'controller.workflow');
  const state = get(store, 'controller.state');
  const isConnected = get(store, 'connection.isConnected');
  const type = get(store, 'controller.type');
  const spindleModal = get(store, 'controller.modal.spindle', 'M5');
  const settings = get(store, 'controller.settings');
  const spindleMin = Number(get(settings, 'settings.$31', 0));
  const spindleMax = Number(get(settings, 'settings.$30', 100));

  return {
    workflow,
    isConnected,
    state,
    type,
    spindleModal,
    settings,
    spindleMin,
    spindleMax,
  };
})(SpindleWidget);
