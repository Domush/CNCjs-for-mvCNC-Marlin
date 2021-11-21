import mapValues from 'lodash/mapValues';
import pubsub from 'pubsub-js';
import store from 'app/store';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { mapPositionToPreferredUnits } from 'app/lib/units';
import WidgetConfig from '../WidgetConfig';
import JobStatus from './JobStatus';
import { METRIC_UNITS, SPINDLE_MODE, WORKFLOW_STATE_IDLE, WORKFLOW_STATE_PAUSED } from '../../constants';
import FileProcessingLoader from './components/FileProcessingLoader';
import styles from './index.styl';

class JobStatusWidget extends PureComponent {
  static propTypes = {
    widgetId: PropTypes.string.isRequired,
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
    toggleFullscreen: () => {
      const { minimized, isFullscreen } = this.state;
      this.setState({
        minimized: isFullscreen ? minimized : false,
        isFullscreen: !isFullscreen,
      });
    },
    toggleMinimized: () => {
      const { minimized } = this.state;
      this.setState({ minimized: !minimized });
    },
  };

  pubsubTokens = [];

  componentDidMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    const { minimized, spindleSpeed } = this.state;
    const prevSenderStatus = prevProps.senderStatus;
    const { senderStatus } = this.props;

    if (
      senderStatus &&
      prevSenderStatus &&
      prevSenderStatus.finishTime !== senderStatus.finishTime &&
      senderStatus.finishTime > 0
    ) {
      this.config.set('lastFile', senderStatus.name);
      this.config.set('lastFileSize', senderStatus.size);
      this.config.set('lastFileRunLength', senderStatus.elapsedTime);
      this.setState({
        lastFileRan: senderStatus.name,
        lastFileSize: senderStatus.size,
        lastFileRunLength: senderStatus.elapsedTime,
      });
    }

    this.config.set('minimized', minimized);
    this.config.set('speed', spindleSpeed);
  }

  getSpindleOverrideLabel() {
    const mode = store.get('widgets.spindle.mode', SPINDLE_MODE);
    if (mode === SPINDLE_MODE) {
      return 'Spindle';
    }
    return 'Laser';
  }

  getInitialState() {
    return {
      lastFileRan: this.config.get('lastFile', ''),
      lastFileSize: this.config.get('lastFileSize', ''),
      lastFileRunLength: this.config.get('lastFileRunLength', ''),
      minimized: this.config.get('minimized', false),
      spindleSpeed: this.config.get('speed', 1000),
      spindleOverrideLabel: this.getSpindleOverrideLabel(),
      isFullscreen: false,
      fileModal: METRIC_UNITS,
      units: store.get('workspace.units'),
      estimatedTime: 0,
      // G-code Status (from server)
      pausedTime: 0, //
    };
  }

  subscribe() {
    const tokens = [
      pubsub.subscribe('units:change', (msg, units) => {
        this.setState({
          units: units,
        });
      }),
      pubsub.subscribe('spindle:mode', (msg, mode) => {
        this.setState({
          spindleOverrideLabel: this.getSpindleOverrideLabel(),
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

  isRunningJob() {
    const { workflow } = this.props;

    return workflow.state !== WORKFLOW_STATE_IDLE;
  }

  jobIsPaused() {
    const { workflow } = this.props;
    return workflow.state === WORKFLOW_STATE_PAUSED;
  }

  render() {
    const { units } = this.state;
    const { workflow, isConnected, senderStatus, bbox, fileProcessing, fileModal } = this.props;
    const state = {
      ...this.state,
      workflow,
      senderStatus,
      isRunningJob: this.isRunningJob(),
      jobIsPaused: this.jobIsPaused(),
      bbox: mapValues(bbox, (position) => {
        return mapValues(position, (pos, axis) => {
          return mapPositionToPreferredUnits(pos, fileModal, units);
        });
      }),
      isConnected,
    };

    const actions = this.actions;

    return (
      <div className={styles['job-status-wrapper']}>
        {fileProcessing ? <FileProcessingLoader /> : <JobStatus state={state} actions={actions} />}
      </div>
    );
  }
}

export default connect((store) => {
  const workflow = get(store, 'controller.workflow');
  const senderStatus = get(store, 'controller.sender.status');
  const isConnected = get(store, 'connection.isConnected');
  const bbox = get(store, 'file.bbox');
  const fileProcessing = get(store, 'file.fileProcessing');
  const fileModal = get(store, 'file.fileModal');
  return {
    workflow,
    senderStatus,
    isConnected,
    bbox,
    fileProcessing,
    fileModal,
  };
})(JobStatusWidget);
