/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/heading-has-content */

import ensureArray from 'ensure-array';
import includes from 'lodash/includes';
import MachinePositionInput from 'app/widgets/Location/components/MachinePositionInput';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import controller from 'app/lib/controller';
import store from 'app/store';
import { getHomingLocation, getMovementGCode } from 'app/widgets/Location/RapidPosition';
import Panel from './components/Panel';
import PositionLabel from './components/PositionLabel';
import GoToButton from './components/GoToButton';

import {
  AXIS_E,
  AXIS_X,
  AXIS_Y,
  AXIS_Z,
  AXIS_A,
  AXIS_B,
  AXIS_C,
  IMPERIAL_UNITS,
  METRIC_UNITS,
  GRBL_ACTIVE_STATE_IDLE,
  WORKFLOW_STATE_RUNNING,
  GRBL_ACTIVE_STATE_ALARM,
} from '../../constants';
import styles from './index.styl';
import AxisButton from './components/AxisButton';
import FunctionButton from '../../components/FunctionButton/FunctionButton';
import QuickPositionButton from './components/QuickPositionButton';

class DisplayPanel extends PureComponent {
  static propTypes = {
    canClick: PropTypes.bool,
    units: PropTypes.oneOf([IMPERIAL_UNITS, METRIC_UNITS]),
    axes: PropTypes.array,
    machinePosition: PropTypes.object,
    workPosition: PropTypes.object,
    jog: PropTypes.object,
    actions: PropTypes.object,
    safeRetractHeight: PropTypes.number,
  };

  controllerEvents = {
    'controller:state': (type, controllerState) => {
      if (type === 'Marlin') {
        this.setState((state) => ({
          controller: {
            ...state.controller,
            type: type,
            state: controllerState,
          },
        }));
      } else if (type === 'Grbl') {
        this.setState((state) => ({
          controller: {
            ...state.controller,
            type: type,
            state: controllerState,
          },
        }));
        let controllerAlarmState = this.state.controllerAlarmState;
        let hardStopAlarm = controllerState.status.alarmCode;
        this.setState((prevState) => ({
          controllerAlarmState: hardStopAlarm,
        }));
        if (controllerAlarmState === '1') {
          controller.command('gcode:stop', { force: true });
        }
      }
    },
    'controller:settings': (type, controllerSettings) => {
      if (type === 'Marlin') {
        this.setState((state) => ({
          controller: {
            ...state.controller,
            type: type,
            settings: controllerSettings,
          },
        }));
      }
      if (type === 'Grbl') {
        this.setState((state) => ({
          controller: {
            ...state.controller,
            type: type,
            settings: controllerSettings,
            homePosition: controllerSettings.settings.$23,
          },
        }));
      }
    },
  };

  componentWillUnmount() {
    this.removeControllerEvents();
  }

  addControllerEvents() {
    Object.keys(this.controllerEvents).forEach((eventName) => {
      const callback = this.controllerEvents[eventName];
      controller.addListener(eventName, callback);
    });
  }

  removeControllerEvents() {
    Object.keys(this.controllerEvents).forEach((eventName) => {
      const callback = this.controllerEvents[eventName];
      controller.removeListener(eventName, callback);
    });
  }

  state = {
    homingRun: false,
    controllerAlarmState: null,
    positionInput: {
      [AXIS_E]: false,
      [AXIS_X]: false,
      [AXIS_Y]: false,
      [AXIS_Z]: false,
      [AXIS_A]: false,
      [AXIS_B]: false,
      [AXIS_C]: false,
    },
    machineProfile: store.get('workspace.machineProfile'),
  };

  handleSelect = (eventKey) => {
    const commands = ensureArray(eventKey);
    commands.forEach((command) => controller.command('gcode', command));
  };

  showPositionInput = (axis) => () => {
    this.setState((state) => ({
      positionInput: {
        ...state.positionInput,
        [axis]: true,
      },
    }));
  };

  hidePositionInput = (axis) => () => {
    this.setState((state) => ({
      positionInput: {
        ...state.positionInput,
        [axis]: false,
      },
    }));
  };

  renderAxis = (axis) => {
    const { canClick, machinePosition, workPosition, actions, safeRetractHeight, units, homingEnabled } = this.props;
    const mpos = machinePosition[axis] || '0.000';
    const wpos = workPosition[axis] || '0.000';
    const axisLabel = axis.toUpperCase();
    const showPositionInput = canClick && this.state.positionInput[axis];

    //Function to zero out given axis
    const handleAxisButtonClick = () => {
      const wcs = actions.getWorkCoordinateSystem();

      const p =
        {
          G54: 1,
          G55: 2,
          G56: 3,
          G57: 4,
          G58: 5,
          G59: 6,
        }[wcs] || 0;

      controller.command('gcode', `G10 L20 P${p} ${axisLabel}0`);
    };
    return (
      <tr>
        <td className={styles.coordinate}>
          <GoToButton
            disabled={!canClick}
            onClick={() => {
              const modal = units === METRIC_UNITS ? 'G21' : 'G20';
              if (safeRetractHeight !== 0 && axisLabel !== 'Z') {
                if (homingEnabled) {
                  controller.command('gcode:safe', `G53 G0 Z${Math.abs(safeRetractHeight) * -1}`, modal);
                } else {
                  controller.command('gcode', 'G91');
                  controller.command('gcode:safe', `G0 Z${safeRetractHeight}`, modal); // Retract Z when moving across workspace
                }
              }
              controller.command('gcode', 'G90');
              controller.command('gcode', `G0 ${axisLabel}0`); //Move to Work Position Zero
              // We go down if homing not enabled
              if (safeRetractHeight !== 0 && axisLabel !== 'Z' && !homingEnabled) {
                controller.command('gcode', 'G0 Z0');
              }
            }}
          />
          <AxisButton axis={axisLabel} onClick={handleAxisButtonClick} disabled={!canClick} />
        </td>
        <td className={styles.machinePosition}>
          <MachinePositionInput
            value={wpos}
            handleManualMovement={(value) => actions.handleManualMovement(value, axis)}
          />
          {!showPositionInput && <PositionLabel value={mpos} small />}
        </td>
      </tr>
    );
  };

  /**
   * Function to listen for store changes and re-render accordingly
   */
  updateMachineProfileFromStore = () => {
    const machineProfile = store.get('workspace.machineProfile');

    if (!machineProfile || _isEqual(machineProfile, this.state.machineProfile)) {
      return;
    }

    this.setState({ machineProfile });
  };

  componentDidMount() {
    store.on('change', this.updateMachineProfileFromStore);
    this.addControllerEvents();
  }

  actions = {
    jogtoFRCorner: () => {
      const { homingDirection, homingFlag } = this.props;
      const gcode = getMovementGCode('FR', homingDirection, homingFlag);
      controller.command('gcode', gcode);
    },
    jogtoFLCorner: () => {
      const { homingDirection, homingFlag } = this.props;
      const gcode = getMovementGCode('FL', homingDirection, homingFlag);
      controller.command('gcode', gcode);
    },
    jogtoBRCorner: () => {
      const { homingDirection, homingFlag } = this.props;
      const gcode = getMovementGCode('BR', homingDirection, homingFlag);
      controller.command('gcode', gcode);
    },
    jogtoBLCorner: () => {
      const { homingDirection, homingFlag } = this.props;
      const gcode = getMovementGCode('BL', homingDirection, homingFlag);
      controller.command('gcode', gcode);
    },
    startHoming: () => {
      this.setState({
        homingRun: true,
      });
      controller.command('homing');
    },
  };

  render() {
    const { axes, actions, canClick, safeRetractHeight, units, homingEnabled, canHome, homingDirection, homingRun } =
      this.props;
    const homingLocation = getHomingLocation(homingDirection);
    const hasAxisX = includes(axes, AXIS_X);
    const hasAxisY = includes(axes, AXIS_Y);
    const hasAxisZ = includes(axes, AXIS_Z);

    return (
      <Panel className={styles.displayPanel}>
        <div className={styles.locationWrapper}>
          <table className={styles.displaypanelTable}>
            <tbody>
              {hasAxisX && this.renderAxis(AXIS_X)}
              {hasAxisY && this.renderAxis(AXIS_Y)}
              {hasAxisZ && this.renderAxis(AXIS_Z)}
            </tbody>
          </table>
          <div className={styles.controlButtons}>
            <FunctionButton
              onClick={() => {
                const wcs = actions.getWorkCoordinateSystem();
                const p =
                  {
                    G54: 1,
                    G55: 2,
                    G56: 3,
                    G57: 4,
                    G58: 5,
                    G59: 6,
                  }[wcs] || 0;

                controller.command('gcode', `G10 L20 P${p} X0 Y0 Z0`);
              }}
              disabled={!canClick}
            >
              <i className="fas fa-bullseye" />
              Zero All
            </FunctionButton>
            <FunctionButton
              onClick={() => {
                const modal = units === METRIC_UNITS ? 'G21' : 'G20';
                if (safeRetractHeight !== 0) {
                  if (homingEnabled) {
                    controller.command('gcode:safe', `G53 G0 Z${Math.abs(safeRetractHeight) * -1}`, modal);
                  } else {
                    controller.command('gcode', 'G91');
                    controller.command('gcode:safe', `G0 Z${safeRetractHeight}`, modal); // Retract Z when moving across workspace
                  }
                }

                controller.command('gcode', 'G90');
                controller.command('gcode', 'G0 X0 Y0'); //Move to Work Position Zero
              }}
              disabled={!canClick}
              className={styles.fontMonospace}
              primary
            >
              <i className="fas fa-chart-line" />
              Go XY0
            </FunctionButton>
          </div>

          {homingEnabled && (
            <div className={styles.endStopActiveControls}>
              <FunctionButton
                primary
                disabled={!canHome}
                onClick={this.actions.startHoming}
                className={styles.runHomeButton}
              >
                <i className="fas fa-home" /> Home
              </FunctionButton>
              <QuickPositionButton
                disabled={!canClick || !homingRun}
                className={styles.QPBL}
                onClick={() => {
                  this.actions.jogtoBLCorner();
                }}
                icon={homingLocation === 'BL' ? 'fa-home' : 'fa-arrow-circle-up'}
              />
              <QuickPositionButton
                disabled={!canClick || !homingRun}
                className={styles.QPBR}
                rotate={45}
                onClick={() => {
                  this.actions.jogtoBRCorner();
                }}
                icon={homingLocation === 'BR' ? 'fa-home' : 'fa-arrow-circle-up'}
              />
              <QuickPositionButton
                disabled={!canClick || !homingRun}
                className={styles.QPFL}
                onClick={() => {
                  this.actions.jogtoFLCorner();
                }}
                icon={homingLocation === 'FL' ? 'fa-home' : 'fa-arrow-circle-up'}
              />
              <QuickPositionButton
                disabled={!canClick || !homingRun}
                className={styles.QPFR}
                onClick={() => {
                  this.actions.jogtoFRCorner();
                }}
                icon={homingLocation === 'FR' ? 'fa-home' : 'fa-arrow-circle-up'}
              />
            </div>
          )}
        </div>
      </Panel>
    );
  }
}

export default connect((store) => {
  const homingSetting = get(store, 'controller.settings.settings.$22', '0');
  const homingDirection = get(store, 'controller.settings.settings.$23', '0');
  const homingFlag = get(store, 'controller.homingFlag', false);
  const homingRun = get(store, 'controller.homingRun', false);
  const homingEnabled = homingSetting === '1';
  const isConnected = get(store, 'connection.isConnected');
  const workflowState = get(store, 'controller.workflow.state');
  const activeState = get(store, 'controller.state.status.activeState');
  const canHome =
    isConnected &&
    [GRBL_ACTIVE_STATE_IDLE, GRBL_ACTIVE_STATE_ALARM].includes(activeState) &&
    workflowState !== WORKFLOW_STATE_RUNNING;
  return {
    homingEnabled,
    canHome,
    homingDirection,
    homingFlag,
    homingRun,
  };
})(DisplayPanel);
