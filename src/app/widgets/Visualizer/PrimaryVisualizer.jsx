import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const WebGL = require('app/lib/three/WebGL');
const {
  GRBL_ACTIVE_STATE_ALARM: GRBL_ACTIVE_STATE_ALARM,
  GRBL_ACTIVE_STATE_HOLD: GRBL_ACTIVE_STATE_HOLD,
  WORKFLOW_STATE_IDLE: WORKFLOW_STATE_IDLE,
} = require('app/constants');
const Widget = require('app/components/Widget');
const ToggleSwitch = require('app/components/ToggleSwitch');
const UnlockButton = require('app/widgets/Visualizer/UnlockButton');
const WorkflowControl = require('./WorkflowControl');
const MachineStatusArea = require('./MachineStatusArea');
const ValidationModal = require('./ValidationModal');
const WarningModal = require('./WarningModal');
const Visualizer = require('./Visualizer');
const Loading = require('./Loading');
const Rendering = require('./Rendering');
const WatchDirectory = require('./WatchDirectory');
const { MODAL_WATCH_DIRECTORY: MODAL_WATCH_DIRECTORY } = require('./constants');
const styles = require('./index.styl');

const PrimaryVisualizer = ({
  actions,
  state,
  capable,
  showLoading,
  showRendering,
  showVisualizer,
  visualizerRef,
  workflowRef,
  widgetContentRef,
}) => {
  const { liteMode, modal, cameraPosition, invalidLine, invalidGcode, alarmCode, activeState, workflow, isConnected } =
    state;
  const isHomingAlarm = activeState === GRBL_ACTIVE_STATE_ALARM && alarmCode === 'Homing'; // We are alarmed and
  const holdWithoutWorkflowPause = activeState === GRBL_ACTIVE_STATE_HOLD && workflow.state === WORKFLOW_STATE_IDLE;
  const showUnlockButton = isConnected && (isHomingAlarm || holdWithoutWorkflowPause);
  const { handleLiteModeToggle, handleRun, reset } = actions;

  const containerID = 'visualizer_container';

  return (
    <Widget className={styles.vizWidgetOverride}>
      <Widget.Header className={styles['visualizer-header']}>
        <Widget.Title>Visualizer</Widget.Title>
        <Widget.Controls style={{ top: '-4px' }}>
          <ToggleSwitch
            label="Lightweight Mode"
            checked={liteMode}
            onChange={() => handleLiteModeToggle()}
            className={styles.litetoggle}
            size="md"
          />
        </Widget.Controls>
      </Widget.Header>
      <Widget.Content
        reference={widgetContentRef}
        className={classNames({ [styles.view3D]: capable.view3D }, styles['visualizer-component'])}
        id={containerID}
      >
        {showLoading && <Loading />}
        {showRendering && <Rendering />}
        {modal.name === MODAL_WATCH_DIRECTORY && <WatchDirectory state={state} actions={actions} />}

        {WebGL.isWebGLAvailable() && (
          <div className={styles.visualizerWrapper}>
            {showUnlockButton && <UnlockButton />}
            <MachineStatusArea state={state} actions={actions} />
            <Visualizer
              show={showVisualizer}
              cameraPosition={cameraPosition}
              ref={visualizerRef}
              state={state}
              actions={actions}
              containerID={containerID}
            />

            <WorkflowControl ref={workflowRef} state={state} actions={actions} invalidGcode={invalidLine.line} />

            {invalidGcode.shouldShow && invalidGcode.showModal && (
              <ValidationModal invalidGcode={invalidGcode} onProceed={handleRun} onCancel={reset} />
            )}
            {invalidLine.shouldShow && invalidLine.show && (
              <WarningModal
                onContinue={actions.lineWarning.onContinue}
                onIgnoreWarning={actions.lineWarning.onIgnoreWarning}
                onCancel={actions.lineWarning.onCancel}
                invalidLine={invalidLine.line}
              />
            )}
          </div>
        )}
      </Widget.Content>
    </Widget>
  );
};

PrimaryVisualizer.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
  capable: PropTypes.object,
  showLoading: PropTypes.bool,
  showRendering: PropTypes.bool,
  showVisualizer: PropTypes.bool,
  visualizerRef: PropTypes.func,
  workflowRef: PropTypes.func,
  widgetContentRef: PropTypes.func,
  containerID: PropTypes.string,
};

export default PrimaryVisualizer;
