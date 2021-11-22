import classNames from 'classnames';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { connect } from 'react-redux';
import includes from 'lodash/includes';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import _ from 'lodash';
import api from 'app/api';
import store from 'app/store';
import Space from 'app/components/Space';
import Widget from 'app/components/Widget';
import controller from 'app/lib/controller';
import combokeys from 'app/lib/combokeys';
import i18n from 'app/lib/i18n';
import log from 'app/lib/log';
import WidgetConfig from '../WidgetConfig.js';
import Macro from './Macro.js';
import AddMacro from './AddMacro.js';
import EditMacro from './EditMacro.js';
import RunMacro from './RunMacro.js';
import FunctionButton from '../../components/FunctionButton/FunctionButton.js';
import { Toaster, TOASTER_SUCCESS, TOASTER_DANGER } from '../../lib/toaster/ToasterLib.js';
import {
  GRBL,
  GRBL_ACTIVE_STATE_IDLE,
  GRBL_ACTIVE_STATE_RUN,
  MARLIN,
  WORKFLOW_STATE_RUNNING,
} from '../../constants.js';
import { MODAL_NONE, MODAL_ADD_MACRO, MODAL_EDIT_MACRO, MODAL_RUN_MACRO } from './constants.js';
import styles from './index.styl.js';

class MacroWidget extends PureComponent {
  static propTypes = {
    widgetId: PropTypes.string.isRequired,
    onFork: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    sortable: PropTypes.object,
    embedded: PropTypes.bool,
  };

  toast = _.throttle(
    ({ msg, type }) => {
      Toaster.pop({
        msg,
        type,
      });
    },
    3000,
    { trailing: false }
  );

  inputRef = React.createRef();

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
    openModal: (name = MODAL_NONE, params = {}) => {
      this.setState({
        modal: {
          name: name,
          params: params,
        },
      });
    },
    closeModal: () => {
      this.setState({
        modal: {
          name: MODAL_NONE,
          params: {},
        },
      });
    },
    updateModalParams: (params = {}) => {
      this.setState({
        modal: {
          ...this.state.modal,
          params: {
            ...this.state.modal.params,
            ...params,
          },
        },
      });
    },
    addMacro: async ({ name, content, description }) => {
      try {
        let res;
        res = await api.macros.create({ name, content, description });
        res = await api.macros.fetch();
        const { records: macros } = res.body;
        this.setState({ macros: macros });

        combokeys.reload();

        this.toast({ msg: 'Added New Macro', type: TOASTER_SUCCESS });
      } catch (err) {
        // Ignore error
      }
    },
    deleteMacro: async (id) => {
      try {
        let res;
        res = await api.macros.delete(id);
        res = await api.macros.fetch();
        const { records: macros } = res.body;
        this.setState({ macros: macros });

        const commandKeys = store.get('commandKeys', []);
        const filteredCommandKeys = commandKeys.filter((key) => key.id !== id);

        store.replace('commandKeys', filteredCommandKeys);
        combokeys.reload();

        this.toast({ msg: 'Deleted Macro', type: TOASTER_SUCCESS });
      } catch (err) {
        // Ignore error
      }
    },
    updateMacro: async (id, { name, content, description }) => {
      try {
        let res;
        res = await api.macros.update(id, { name, content, description });
        res = await api.macros.fetch();
        const { records: macros } = res.body;
        this.setState({ macros: macros });
      } catch (err) {
        // Ignore error
      }
    },
    updateMacros: async (macros = []) => {
      try {
        if (macros.length > 0) {
          for await (const macro of macros) {
            const { id, name, content, column, description, rowIndex } = macro;
            api.macros.update(id, { name, content, description, column, rowIndex });
          }

          const updatedMacros = this.state.macros.map((currentMacro) => {
            for (const macro of macros) {
              if (macro.id === currentMacro.id) {
                return macro;
              }
            }
            return currentMacro;
          });

          this.setState({ macros: updatedMacros });
        }
      } catch (err) {
        // Ignore error
      }
    },
    runMacro: (id, { name }) => {
      controller.command('macro:run', id, controller.context, (err, data) => {
        if (err) {
          log.error(`Failed to run the macro: id=${id}, name="${name}"`);
          return;
        }
      });
    },
    loadMacro: async (id, { name }) => {
      try {
        let res;
        res = await api.macros.read(id);
        const { name } = res.body;
        controller.command('macro:load', id, controller.context, (err, data) => {
          if (err) {
            log.error(`Failed to load the macro: id=${id}, name="${name}"`);
            return;
          }

          log.debug(data); // TODO
        });
      } catch (err) {
        // Ignore error
      }
    },
    openAddMacroModal: () => {
      this.actions.openModal(MODAL_ADD_MACRO);
    },
    openRunMacroModal: (id) => {
      api.macros.read(id).then((res) => {
        const { id, name, content } = res.body;
        this.actions.openModal(MODAL_RUN_MACRO, { id, name, content });
      });
    },
    openEditMacroModal: (id) => {
      api.macros.read(id).then((res) => {
        const { id, name, content, description } = res.body;
        this.actions.openModal(MODAL_EDIT_MACRO, { id, name, content, description });
      });
    },
  };

  controllerEvents = {
    'config:change': async () => {
      // await this.fetchMacros();
    },
  };

  fetchMacros = async () => {
    try {
      let res;
      res = await api.macros.fetch();
      const { records: macros } = res.body;
      this.setState({ macros: macros });
    } catch (err) {
      // Ignore error
    }
  };

  exportMacros() {
    if (this.state.macros.length === 0) {
      this.toast({ msg: 'No Macros to Export', type: TOASTER_DANGER });
      return;
    }

    const macrosClean = this.state.macros.map(({ name, content }) => ({ name, content }));
    const macros = JSON.stringify(macrosClean, null, 1);
    const data = new Blob([macros], {
      type: 'application/json',
    });

    const today = new Date();
    const filename = `CNCjs4Marlin-macros-${today.toLocaleDateString()}-${today.toLocaleTimeString()}`;

    // IE11 & Edge
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(data, filename);
    } else {
      // In FF link must be added to DOM to be clicked
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(data);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  importMacros = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (event) => {
        const macros = JSON.parse(event.target.result);

        for (const { name, content } of macros) {
          if (name && content) {
            this.actions.addMacro({ name, content });
          }
        }

        this.toast({ msg: 'Macros Imported Succesfully', type: TOASTER_SUCCESS });
      };
      reader.onerror = () => {
        this.toast({ msg: 'Error Importing Macros', type: TOASTER_DANGER });
      };
    }
  };

  componentDidMount() {
    this.fetchMacros();
    this.addControllerEvents();
  }

  componentWillUnmount() {
    this.removeControllerEvents();
  }

  componentDidUpdate() {
    const { minimized } = this.state;

    this.config.set('minimized', minimized);
  }

  getInitialState() {
    return {
      minimized: this.config.get('minimized', false),
      isFullscreen: false,
      macros: [],
      modal: {
        name: MODAL_NONE,
        params: {},
      },
    };
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

  canClick() {
    const { workflow, isConnected, type, state } = this.props;

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
      const states = [GRBL_ACTIVE_STATE_IDLE, GRBL_ACTIVE_STATE_RUN];
      return includes(states, activeState);
    }
    if (type === MARLIN) {
      // Marlin does not have machine state
    }
    return true;
  }

  render() {
    const { widgetId, embedded } = this.props;
    const { minimized, isFullscreen } = this.state;
    const isForkedWidget = widgetId.match(/\w+:[\w\-]+/);
    const state = {
      ...this.state,
      canClick: this.canClick(),
    };
    const actions = this.actions;

    return (
      <Widget fullscreen={isFullscreen}>
        <Widget.Header embedded={embedded}>
          <Widget.Title>
            {isForkedWidget && <i className="fa fa-code-fork" style={{ marginRight: 5 }} />}
            {i18n._('Macro')}
          </Widget.Title>
          <Widget.Controls>
            <Widget.Button title={i18n._('New Macro')} onClick={actions.openAddMacroModal}>
              <i className="fa fa-plus" />
            </Widget.Button>
            <Widget.Button
              disabled={isFullscreen}
              title={minimized ? i18n._('Expand') : i18n._('Collapse')}
              onClick={actions.toggleMinimized}
            >
              <i className={classNames('fa', { 'fa-chevron-up': !minimized }, { 'fa-chevron-down': minimized })} />
            </Widget.Button>
            <Widget.DropdownButton
              title={i18n._('More')}
              toggle={<i className="fa fa-ellipsis-v" />}
              onSelect={(eventKey) => {
                if (eventKey === 'fullscreen') {
                  actions.toggleFullscreen();
                } else if (eventKey === 'fork') {
                  this.props.onFork();
                } else if (eventKey === 'remove') {
                  this.props.onRemove();
                }
              }}
            >
              <Widget.DropdownMenuItem eventKey="fullscreen">
                <i
                  className={classNames('fa', 'fa-fw', { 'fa-expand': !isFullscreen }, { 'fa-compress': isFullscreen })}
                />
                <Space width="4" />
                {!isFullscreen ? i18n._('Enter Full Screen') : i18n._('Exit Full Screen')}
              </Widget.DropdownMenuItem>
              <Widget.DropdownMenuItem eventKey="fork">
                <i className="fa fa-fw fa-code-fork" />
                <Space width="4" />
                {i18n._('Fork Widget')}
              </Widget.DropdownMenuItem>
              <Widget.DropdownMenuItem eventKey="remove">
                <i className="fa fa-fw fa-times" />
                <Space width="4" />
                {i18n._('Remove Widget')}
              </Widget.DropdownMenuItem>
            </Widget.DropdownButton>
          </Widget.Controls>
        </Widget.Header>
        <Widget.Content
          className={classNames(styles['widget-content'], styles.heightOverride, { [styles.hidden]: minimized })}
        >
          {state.modal.name === MODAL_ADD_MACRO && <AddMacro state={state} actions={actions} />}

          {state.modal.name === MODAL_EDIT_MACRO && <EditMacro state={state} actions={actions} />}

          {state.modal.name === MODAL_RUN_MACRO && <RunMacro state={state} actions={actions} />}

          <Macro state={state} actions={actions} />

          <input
            type="file"
            onChange={this.importMacros}
            onClick={(e) => {
              e.target.value = null;
            }}
            accept=".json"
            style={{ display: 'none' }}
            ref={this.inputRef}
          />

          <div className={styles['action-area']}>
            <FunctionButton type="button" title="Add Macro" onClick={actions.openAddMacroModal}>
              <i className="fas fa-plus" />
            </FunctionButton>
            <FunctionButton
              type="button"
              title="Import Macros"
              onClick={() => {
                this.inputRef.current.click();
              }}
            >
              <i className="fas fa-download" />
            </FunctionButton>
            <FunctionButton
              type="button"
              title="Export Macros"
              onClick={() => {
                this.exportMacros();
              }}
            >
              <i className="fas fa-upload" />
            </FunctionButton>
          </div>
        </Widget.Content>
      </Widget>
    );
  }
}

export default connect((store) => {
  const type = get(store, 'controller.type');
  const state = get(store, 'controller.state');
  const workflow = get(store, 'controller.workflow');
  const isConnected = get(store, 'connection.isConnected');
  return {
    type,
    state,
    workflow,
    isConnected,
  };
})(MacroWidget);
