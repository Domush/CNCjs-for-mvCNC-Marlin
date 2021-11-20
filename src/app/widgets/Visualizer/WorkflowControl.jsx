/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import get from 'lodash/get';
import includes from 'lodash/includes';
import store from 'app/store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isElectron from 'is-electron';
import reduxStore from 'app/store/redux';
import controller from 'app/lib/controller';
import React, { PureComponent } from 'react';
import api from 'app/api';
import pubsub from 'pubsub-js';
import i18n from 'app/lib/i18n';
import Modal from 'app/components/Modal';
import Input from 'app/containers/Preferences/components/Input';
import CameraDisplay from './CameraDisplay/CameraDisplay';
import FunctionButton from '../../components/FunctionButton/FunctionButton';
//import ReaderWorker from './FileReader.worker';
import {
  Toaster,
  TOASTER_SUCCESS,
  TOASTER_DANGER,
  TOASTER_WARNING,
  TOASTER_UNTIL_CLOSE,
  TOASTER_INFO,
} from '../../lib/toaster/ToasterLib';
import {
  GRBL_ACTIVE_STATE_IDLE,
  GRBL_ACTIVE_STATE_CHECK,
  GRBL_ACTIVE_STATE_HOLD,
  WORKFLOW_STATE_IDLE,
  WORKFLOW_STATE_PAUSED,
  WORKFLOW_STATE_RUNNING,
  VISUALIZER_PRIMARY,
} from '../../constants';
// import { NOTIFICATION_PROGRAM_ERROR } from './constants';
import styles from './workflow-control.styl';
import RecentFileButton from './RecentFileButton';
import { addRecentFile, createRecentFile, createRecentFileFromRawPath } from './ClientRecentFiles';
import { UPDATE_FILE_INFO } from '../../actions/fileInfoActions';

class WorkflowControl extends PureComponent {
  static propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
    invalidGcode: PropTypes.string,
  };

  fileInputEl = null;

  state = this.getInitialState();

  pubsubTokens = [];

  getInitialState() {
    return {
      testStarted: false,
      fileLoaded: true,
      closeFile: false,
      showRecent: false,
      showLoadFile: false,
      runHasStarted: false,
      startFromLine: {
        showModal: false,
        value: 1,
      },
    };
  }

  handleClickUpload = () => {
    if (isElectron()) {
      window.ipcRenderer.send('open-upload-dialog');
    } else {
      this.fileInputEl.value = null;
      this.fileInputEl.click();
    }
  };

  handleCloseFile = () => {
    this.setState({ closeFile: true });
  };

  handleReaderResponse = ({ data }) => {
    const { actions } = this.props;
    const { meta, result } = data;
    actions.uploadFile(result, meta);
  };

  handleChangeFile = async (event) => {
    const files = event.target.files;
    const file = files[0];

    const hooks = store.get('workspace.toolChangeHooks', {});
    const toolChangeOption = store.get('workspace.toolChangeOption', 'Ignore');
    const toolChangeContext = {
      ...hooks,
      toolChangeOption,
    };

    controller.command('toolchange:context', toolChangeContext);
    await api.file.upload(file, controller.port, VISUALIZER_PRIMARY);
  };

  handleElectronFileUpload = async (file) => {
    const serializedFile = new File([file.data], file.name, { path: file.path });

    if (isElectron()) {
      const recentFile = createRecentFileFromRawPath(file.path, file.name);
      addRecentFile(recentFile);
    }

    try {
      await api.file.upload(serializedFile, controller.port, VISUALIZER_PRIMARY);
      reduxStore.dispatch({
        type: UPDATE_FILE_INFO,
        payload: { path: file.path },
      });
    } catch (e) {
      console.log(e);
    }
  };

  loadRecentFile = async (fileMetadata) => {
    if (fileMetadata === null) {
      Toaster.pop({
        type: TOASTER_DANGER,
        msg: 'Unable to load file - file may have been moved or renamed.',
      });
      return;
    }
    const { result, name } = fileMetadata;
    const serializedFile = new File([result], name);
    try {
      await api.file.upload(serializedFile, controller.port, VISUALIZER_PRIMARY);
      reduxStore.dispatch({
        type: UPDATE_FILE_INFO,
        payload: { path: fileMetadata.fullPath },
      });
    } catch (e) {
      console.log(e);
    }
  };

  canRun() {
    const { isConnected, fileLoaded, workflowState, activeState } = this.props;

    if (!isConnected) {
      return false;
    }
    if (!fileLoaded) {
      return false;
    }

    if (activeState === GRBL_ACTIVE_STATE_HOLD) {
      return true;
    }

    if (!includes([WORKFLOW_STATE_IDLE, WORKFLOW_STATE_PAUSED], workflowState)) {
      return false;
    }
    const states = [GRBL_ACTIVE_STATE_IDLE, GRBL_ACTIVE_STATE_HOLD];

    if (
      includes([GRBL_ACTIVE_STATE_CHECK], activeState) &&
      !includes([WORKFLOW_STATE_PAUSED, WORKFLOW_STATE_IDLE], workflowState)
    ) {
      return false;
    }

    return includes(states, activeState);
  }

  handleOnStop = () => {
    const {
      actions: { handlePause, handleStop },
      controllerState,
      senderStatus,
    } = this.props;
    const { status } = controllerState;

    const { received } = senderStatus;
    handlePause();
    handleStop();
    this.setState((prev) => ({ runHasStarted: false, startFromLine: { ...prev.startFromLine, value: received } }));
    if (status.activeState === 'Check') {
      controller.command('gcode', '$C');
    }
  };

  handleTestFile = () => {
    const { gcode, actions } = this.props;
    this.setState({ runHasStarted: true });
    const comments = ['#', ';', '(', '%'];
    const lines = gcode
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .filter((line) => !comments.some((comment) => line.includes(comment)));
    const testLines = ['$C', ...lines, '$C'];
    controller.command('gcode', testLines);
    actions.onRunClick();
  };

  startRun = () => {
    const { activeState } = this.props;

    Toaster.clear();

    if (activeState === GRBL_ACTIVE_STATE_CHECK) {
      this.setState({ testStarted: true, runHasStarted: true });

      controller.command('gcode:resume');
      return;
    }
    this.setState({ fileLoaded: true });
    this.setState({ runHasStarted: true });
    const { actions } = this.props;
    actions.onRunClick();
  };

  componentDidMount() {
    if (isElectron()) {
      window.ipcRenderer.on('loaded-recent-file', (msg, fileMetaData) => {
        this.loadRecentFile(fileMetaData);
        const recentFile = createRecentFile(fileMetaData);
        addRecentFile(recentFile);
      });
      window.ipcRenderer.on('returned-upload-dialog-data', (msg, file) => {
        this.handleElectronFileUpload(file);
      });
    }
    this.subscribe();
  }

  componentDidUpdate(prevProps) {
    const { activeState: prevActiveState, state: prevState } = prevProps;
    const { activeState: currentActiveState, state: currentState, fileCompletion } = this.props;

    const {
      gcode: { content: prevGcode },
    } = prevState;
    const {
      gcode: { content: currentGcode },
    } = currentState;

    if (
      (prevActiveState === GRBL_ACTIVE_STATE_CHECK && currentActiveState !== GRBL_ACTIVE_STATE_CHECK) ||
      prevGcode !== currentGcode
    ) {
      this.setState({ runHasStarted: false });
    }
    if (prevProps.fileCompletion === 0 && fileCompletion !== 0) {
      this.setState({
        startFromLine: {
          showModal: false,
          value: 1,
        },
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  finishedTestingFileToast = () => {
    Toaster.pop({
      msg: `Finished Checking ${this.state.CurrentGCodeFile}!`,
      type: TOASTER_UNTIL_CLOSE,
      duration: 10000,
    });
  };

  errorInGCodeToast = () => {
    Toaster.pop({
      msg: `Error found at line: ${this.state.CurrentGCodeError}`,
      type: TOASTER_UNTIL_CLOSE,
      duration: 20000,
    });
  };

  runOutline = () => {
    const { gcode } = this.props;
    Toaster.pop({
      TYPE: TOASTER_INFO,
      duration: TOASTER_UNTIL_CLOSE,
      msg: 'Generating outline for current file',
    });
    controller.command('gcode:outline', gcode, 300);
  };

  startFromLinePrompt = () => {
    const { received } = this.props.senderStatus;
    this.setState((prev) => ({
      startFromLine: { showModal: true, value: received !== 0 ? received : prev.startFromLine.value },
    }));
  };

  handleStartFromLine = () => {
    this.setState((prev) => ({ startFromLine: { ...prev.startFromLine, showModal: false } }));

    controller.command('gcode:start', this.state.startFromLine.value);

    Toaster.pop({
      msg: 'Running Start From Specific Line Command',
      type: TOASTER_SUCCESS,
      duration: 2000,
    });
  };

  subscribe() {
    const tokens = [
      pubsub.subscribe('gcode:toolChange', () => {
        Toaster.pop({
          msg: 'Program execution paused due to M6 command',
          type: TOASTER_WARNING,
        });
      }),
    ];
    this.pubsubTokens = this.pubsubTokens.concat(tokens);
  }

  unsubscribe() {
    this.pubsubTokens.forEach((token) => {
      pubsub.unsubscribe(token);
    });
    this.pubsubTokens = [];
  }

  render() {
    const { cameraPosition } = this.props.state;
    const { camera } = this.props.actions;
    const { handleOnStop } = this;
    const { runHasStarted } = this.state;
    const { fileLoaded, actions, workflowState, isConnected, senderInHold, activeState, lineTotal } = this.props;
    const canClick = !!isConnected;
    const isReady = canClick && fileLoaded;
    const canRun = this.canRun();
    const canPause =
      (isReady && activeState !== GRBL_ACTIVE_STATE_HOLD && includes([WORKFLOW_STATE_RUNNING], workflowState)) ||
      (isReady &&
        includes([GRBL_ACTIVE_STATE_CHECK], activeState) &&
        includes([WORKFLOW_STATE_RUNNING], workflowState));
    const canStop = isReady && includes([WORKFLOW_STATE_RUNNING, WORKFLOW_STATE_PAUSED], workflowState);
    const activeHold = activeState === GRBL_ACTIVE_STATE_HOLD;
    const workflowPaused = runHasStarted && (workflowState === WORKFLOW_STATE_PAUSED || senderInHold || activeHold);

    const { showModal, value } = this.state.startFromLine;

    return (
      <div className={styles.workflowControl}>
        <input
          // The ref attribute adds a reference to the component to
          // this.refs when the component is mounted.
          ref={(node) => {
            this.fileInputEl = node;
          }}
          type="file"
          style={{ display: 'none' }}
          multiple={false}
          onChange={this.handleChangeFile}
          accept=".gcode,.gc,.nc,.tap,.cnc"
        />

        <div className={styles.relativeWrapper}>
          {workflowState !== WORKFLOW_STATE_RUNNING && (
            <>
              <button
                type="button"
                className={`${styles['workflow-button-upload']}`}
                title={i18n._('Load File')}
                onClick={this.handleClickUpload}
                // style={{ writingMode: 'vertical-lr' }}
              >
                {i18n._('Load File')} <i className="fa fa-folder-open" style={{ writingMode: 'horizontal-tb' }} />
              </button>
              <RecentFileButton />
              <div
                role="button"
                className={fileLoaded ? `${styles.closeFileButton}` : `${styles['workflow-button-disabled']}`}
                onClick={this.handleCloseFile}
              >
                <i className="fas fa-times" />
              </div>
            </>
          )}
        </div>

        {!workflowPaused && (
          <div className={styles.splitContainer}>
            <button
              type="button"
              className={!canRun ? `${styles['workflow-button-disabled']}` : `${styles['workflow-button-test']}`}
              title={i18n._('Outline')}
              onClick={this.runOutline}
              disabled={!canRun}
              style={{ writingMode: 'vertical-lr' }}
            >
              {i18n._('Outline')} <i className="fas fa-vector-square" style={{ writingMode: 'horizontal-tb' }} />
            </button>
            <button
              type="button"
              className={!canRun ? `${styles['workflow-button-disabled']}` : `${styles['workflow-button-test']}`}
              title={i18n._('Test Run')}
              onClick={this.handleTestFile}
              disabled={!canRun}
              style={{ writingMode: 'vertical-lr' }}
            >
              {i18n._('Test Run')} <i className="fa fa-tachometer-alt" style={{ writingMode: 'horizontal-tb' }} />
            </button>
          </div>
        )}
        {canRun && (
          <div className={styles.relativeWrapper}>
            <button
              type="button"
              className={styles['workflow-button-play']}
              title={workflowPaused ? i18n._('Resume') : i18n._('Run')}
              onClick={this.startRun}
              disabled={!isConnected}
            >
              {i18n._(`${workflowPaused ? 'Resume' : 'Start'} Job`)}{' '}
              <i className="fa fa-play" style={{ writingMode: 'horizontal-tb' }} />
            </button>
            {!workflowPaused && (
              <div role="button" className={styles['start-from-line-button']} onClick={this.startFromLinePrompt}>
                <i className="fas fa-list-ol" />
              </div>
            )}
          </div>
        )}
        {this.state.closeFile && (
          <Modal showCloseButton={false}>
            <Modal.Header className={styles.modalHeader}>
              <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className={styles.runProbeBody}>
                <div className={styles.left}>
                  <div className={styles.greyText}>
                    <p>Close this gcode File?</p>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <FunctionButton
                      primary
                      onClick={() => {
                        this.setState({ closeFile: false });
                        actions.closeModal();
                        actions.unloadGCode();
                        actions.reset();
                      }}
                    >
                      Yes
                    </FunctionButton>
                    <FunctionButton
                      className={styles.activeButton}
                      onClick={() => {
                        this.setState({ closeFile: false });
                        actions.closeModal();
                      }}
                    >
                      No
                    </FunctionButton>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
        {showModal && (
          <Modal
            onClose={() => {
              this.setState((prev) => ({ startFromLine: { ...prev.startFromLine, showModal: false } }));
              actions.closeModal();
            }}
          >
            <Modal.Header className={styles.modalHeader}>
              <Modal.Title>Start From Line</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className={styles.runProbeBody}>
                <div className={styles.left}>
                  <div className={styles.greyText}>
                    <Input
                      label="Start at this line in gcode file:"
                      value={value}
                      onChange={(e) =>
                        e.target.value <= lineTotal &&
                        e.target.value > 0 &&
                        this.setState((prev) => ({
                          startFromLine: { ...prev.startFromLine, value: Math.ceil(Number(e.target.value)) },
                        }))
                      }
                      additionalProps={{ type: 'number' }}
                    />
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <p>Start from line will take into account all movements prior to this line.</p>
                      <p>
                        For this file, the maximum line number is: <strong>{lineTotal}</strong>
                      </p>

                      {value && (
                        <p>
                          The last job was stopped on line number: <strong>{value}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <button
                      type="button"
                      className={styles['workflow-button-play']}
                      title="Start from Line"
                      onClick={this.handleStartFromLine}
                      disabled={!isConnected}
                    >
                      Start from Line
                      <i className="fa fa-play" style={{ writingMode: 'horizontal-tb' }} />
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
        {canPause && (
          <button
            type="button"
            className={styles['workflow-button-pause']}
            title={i18n._('Pause')}
            onClick={actions.handlePause}
            disabled={!canPause}
          >
            {i18n._('Pause Job')} <i className="fa fa-pause" style={{ writingMode: 'vertical-lr' }} />
          </button>
        )}

        {canStop && (
          <button
            type="button"
            className={styles['workflow-button-stop']}
            title={i18n._('Stop')}
            onClick={handleOnStop}
            disabled={!canStop}
          >
            {i18n._('Stop Job')} <i className="fa fa-stop" style={{ writingMode: 'vertical-lr' }} />
          </button>
        )}

        <CameraDisplay camera={camera} cameraPosition={cameraPosition} />
      </div>
    );
  }
}

export default connect(
  (store) => {
    const fileLoaded = get(store, 'file.fileLoaded', false);
    const isConnected = get(store, 'connection.isConnected', false);
    const senderInHold = get(store, 'controller.sender.status.hold', false);
    const senderStatus = get(store, 'controller.sender.status');
    const workflowState = get(store, 'controller.workflow.state');
    const activeState = get(store, 'controller.state.status.activeState');
    const controllerState = get(store, 'controller.state');
    const lineTotal = get(store, 'file.total');
    const port = get(store, 'connection.port');
    const gcode = get(store, 'file.content');
    const fileCompletion = get(store, 'controller.sender.status.finishTime', 0);
    return {
      fileLoaded,
      isConnected,
      senderInHold,
      workflowState,
      activeState,
      senderStatus,
      controllerState,
      port,
      lineTotal,
      gcode,
      fileCompletion,
    };
  },
  null,
  null,
  { forwardRef: true }
)(WorkflowControl);
