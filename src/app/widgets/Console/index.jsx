
import cx from 'classnames';
import color from 'cli-color';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import uuid from 'uuid';
import settings from 'app/config/settings';
//import Space from 'app/components/Space';
import Widget from 'app/components/Widget';
import controller from 'app/lib/controller';
import i18n from 'app/lib/i18n';
import WidgetConfig from '../WidgetConfig';
import Console from './Console';
import styles from './index.styl';

// The buffer starts with 254 bytes free. The terminating <LF> or <CR> counts as a byte.
const TERMINAL_COLS = 50;
const TERMINAL_ROWS = 12;

class ConsoleWidget extends PureComponent {
    static propTypes = {
        widgetId: PropTypes.string.isRequired,
        onFork: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
        sortable: PropTypes.object,
        embedded: PropTypes.bool,
        active: PropTypes.bool
    };

    senderId = uuid.v4();

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
            this.setState(state => ({
                minimized: state.isFullscreen ? state.minimized : false,
                isFullscreen: !state.isFullscreen,
                terminal: {
                    ...state.terminal,
                    rows: state.isFullscreen ? TERMINAL_ROWS : 'auto'
                }
            }));
        },
        toggleMinimized: () => {
            this.setState(state => ({
                minimized: !state.minimized
            }));
        },
        clearAll: () => {
            this.terminal && this.terminal.clear();
        },
        onTerminalData: (data) => {
            const context = {
                __sender__: this.senderId
            };
            controller.write(data, context);
        }
    };

    controllerEvents = {
        'serialport:open': (options) => {
            const { port, baudrate } = options;
            this.setState({ port: port });

            if (this.terminal) {
                this.terminal.refitTerminal();
                const { productName, version } = settings;
                this.terminal.writeln(color.white.bold(`${productName} ${version} [${controller.type}]`));
                this.terminal.writeln(color.white(i18n._('Connected to {{-port}} with a baud rate of {{baudrate}}', { port: color.yellowBright(port), baudrate: color.blueBright(baudrate) })));
            }
        },
        'serialport:close': (options) => {
            this.actions.clearAll();

            const initialState = this.getInitialState();
            this.setState({ ...initialState });
        },
        'serialport:write': (data, context) => {
            const { source, __sender__ } = { ...context };

            if (__sender__ === this.senderId) {
                // Do not write to the terminal console if the sender is the widget itself
                return;
            }

            if (!this.terminal) {
                return;
            }

            data = String(data).trim();
            // Handle non-ascii characters more gracefully
            data = data.replace(/[^\x20-\x7E]/g, (m) => {
                return '\\x' + m.charCodeAt(0).toString(16);
            });

            if (source) {
                this.terminal.writeln(color.blackBright(source) + color.white(this.terminal.prompt + data));
            } else {
                this.terminal.writeln(color.white(this.terminal.prompt + data));
            }
        },
        'serialport:read': (data) => {
            if (!this.terminal) {
                return;
            }

            this.terminal.writeln(data);
        }
    };

    terminal = null;

    pubsubTokens = [];

    componentDidMount() {
        this.addControllerEvents();
    }

    componentWillUnmount() {
        this.removeControllerEvents();
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            minimized
        } = this.state;

        this.config.set('minimized', minimized);
    }

    getInitialState() {
        return {
            minimized: this.config.get('minimized', false),
            isFullscreen: false,
            port: controller.port,

            // Terminal
            terminal: {
                cols: TERMINAL_COLS,
                rows: TERMINAL_ROWS,
                cursorBlink: true,
                scrollback: 1000,
                tabStopWidth: 4
            }
        };
    }


    addControllerEvents() {
        Object.keys(this.controllerEvents).forEach(eventName => {
            const callback = this.controllerEvents[eventName];
            controller.addListener(eventName, callback);
        });
    }

    removeControllerEvents() {
        Object.keys(this.controllerEvents).forEach(eventName => {
            const callback = this.controllerEvents[eventName];
            controller.removeListener(eventName, callback);
        });
    }

    render() {
        const { widgetId, embedded, active } = this.props;
        const { minimized, isFullscreen } = this.state;
        const isForkedWidget = widgetId.match(/\w+:[\w\-]+/);
        const state = {
            ...this.state
        };
        const actions = {
            ...this.actions
        };

        return (
            <Widget fullscreen={isFullscreen}>
                <Widget.Header embedded={embedded}>
                    <Widget.Title>
                        {isForkedWidget &&
                        <i className="fa fa-code-fork" style={{ marginRight: 5 }} />
                        }
                        {i18n._('Console')}
                    </Widget.Title>
                    <Widget.Controls>
                    </Widget.Controls>
                </Widget.Header>
                <Widget.Content
                    className={cx(
                        styles.widgetContent,
                        styles.terminalContent,
                        { [styles.hidden]: minimized },
                        { [styles.fullscreen]: isFullscreen }
                    )}
                    style={{ width: '100%' }}
                >
                    <Console
                        ref={node => {
                            if (node) {
                                this.terminal = node.terminal;
                            }
                        }}
                        state={state}
                        actions={actions}
                        active={active}
                    />
                </Widget.Content>
            </Widget>
        );
    }
}

export default ConsoleWidget;
