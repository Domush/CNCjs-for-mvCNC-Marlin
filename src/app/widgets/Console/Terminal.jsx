import cx from 'classnames';
// import trimEnd from 'lodash/trimEnd';
import PerfectScrollbar from 'perfect-scrollbar';
import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { debounce } from 'lodash';
import store from 'app/store';
import controller from 'app/lib/controller';
import Button from 'app/components/FunctionButton/FunctionButton';
import { MAX_TERMINAL_INPUT_ARRAY_SIZE } from 'app/lib/constants';
import History from './History.js';
import styles from './index.styl.js';

class TerminalWrapper extends PureComponent {
  static propTypes = {
    cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cursorBlink: PropTypes.bool,
    scrollback: PropTypes.number,
    tabStopWidth: PropTypes.number,
    onData: PropTypes.func,
    active: PropTypes.bool,
  };

  static defaultProps = {
    cols: 'auto',
    rows: 'auto',
    cursorBlink: false,
    scrollback: 1000,
    tabStopWidth: 4,
    onData: () => {},
  };

  state = {
    terminalInputHistory: store.get('workspace.terminal.inputHistory', []),
    terminalInputIndex: store.get('workspace.terminal.inputHistory')?.length,
  };

  prompt = ' ';

  history = new History(1000);

  verticalScrollbar = null;

  terminalContainer = null;

  term = null;

  fitAddon = null;

  debounce = debounce;

  inputRef = React.createRef();

  eventHandler = {
    onKey: (() => async (event) => {
      const term = this.term;
      const line = term.getSelection();

      if (!line) {
        return;
      }

      // Ctrl-C copy - ctrl + c on windows/linux, meta-c on mac
      if ((event.ctrlKey || event.metaKey) && event.code === 'KeyC') {
        await navigator.clipboard.writeText(line);
        return;
      }
    })(),
  };

  componentDidMount() {
    const { scrollback, tabStopWidth } = this.props;
    this.term = new Terminal({ scrollback, tabStopWidth, cursorStyle: 'underline' });

    this.fitAddon = new FitAddon();

    this.term.loadAddon(this.fitAddon);
    this.term.prompt = () => {
      this.term.write('\r\n');
      //this.term.write(color.white(this.prompt));
    };

    const el = ReactDOM.findDOMNode(this.terminalContainer);

    this.term.open(el);
    this.term.focus(false);

    this.term.setOption(
      'fontFamily',
      'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'
    );
    this.term.setOption('fontSize', 14);

    this.term.attachCustomKeyEventHandler(this.eventHandler.onKey);

    const xtermElement = el.querySelector('.xterm');
    xtermElement.style.paddingLeft = '3px';

    const viewportElement = el.querySelector('.xterm-viewport');
    this.verticalScrollbar = new PerfectScrollbar(viewportElement);

    window.addEventListener(
      'resize',
      this.debounce(() => {
        if (this.props.active) {
          this.refitTerminal();
        }
      }, 150)
    );
  }

  componentDidUpdate(_, prevState) {
    if (this.props.active) {
      setTimeout(() => {
        this.refitTerminal();
      }, 150);
    }

    if (this.state.terminalInputIndex !== prevState.terminalInputIndex) {
      const { terminalInputHistory } = this.state;

      if (terminalInputHistory.length === 0) {
        return;
      }

      // const inputSize = [...terminalInputHistory[this.state.terminalInputIndex] || ''].length;

      this.inputRef.current.focus();
      this.inputRef.current.value = terminalInputHistory[this.state.terminalInputIndex] || '';
    }
  }

  componentWillUnmount() {
    if (this.verticalScrollbar) {
      this.verticalScrollbar.destroy();
      this.verticalScrollbar = null;
    }
    if (this.term) {
      this.term.onKey(null);
      this.term = null;
      this.fitAddon = null;
    }

    window.removeEventListener('resize', this.debounce);
  }

  // http://www.alexandre-gomes.com/?p=115
  getScrollbarWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    const w2 = w1 === inner.offsetWidth ? outer.clientWidth : inner.offsetWidth;
    document.body.removeChild(outer);

    return w1 - w2;
  }

  refitTerminal() {
    if (this.fitAddon) {
      this.fitAddon.fit();
    }
  }

  clear() {
    this.term.clear();
  }

  selectAll() {
    this.term.selectAll();
  }

  clearSelection() {
    this.term.clearSelection();
  }

  write(data) {
    this.term.write(data);
  }

  writeln(data) {
    this.term.write('\r');
    this.term.write(data);
    this.term.prompt();
  }

  handleCommandExecute = () => {
    const command = this.inputRef.current.value;

    if (!command) {
      return;
    }

    controller.writeln(command);

    const { terminalInputHistory = [] } = this.state;

    const newTerminalInputHistory = terminalInputHistory.slice();

    if (terminalInputHistory.length === MAX_TERMINAL_INPUT_ARRAY_SIZE) {
      newTerminalInputHistory.shift();
    }

    store.replace('workspace.terminal.inputHistory', [...newTerminalInputHistory, command]);

    this.setState({
      terminalInputHistory: [...newTerminalInputHistory, command],
      terminalInputIndex: newTerminalInputHistory.length + 1,
    });

    this.inputRef.current.value = '';
  };

  updateInputHistoryIndex = (index) => {
    const { terminalInputHistory } = this.state;
    if (index < 0) {
      return;
    }

    if (index >= terminalInputHistory.length) {
      this.setState((current) => ({ terminalInputIndex: current.terminalInputHistory.length }));
      this.inputRef.current.value = '';
      return;
    }

    this.setState({ terminalInputIndex: index });
  };

  resetTerminalInputIndex = () => {
    this.setState((current) => ({ terminalInputIndex: current.terminalInputHistory.length }));
    this.inputRef.current.value = '';
  };

  render() {
    const { className, style } = this.props;
    const { terminalInputIndex } = this.state;

    return (
      <div style={{ display: 'grid', width: '100%', gridTemplateRows: '11fr 1fr' }}>
        <div
          ref={(node) => {
            this.terminalContainer = node;
          }}
          className={cx(className, styles.terminalContainer)}
          style={style}
        />

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 18fr 5fr', alignItems: 'center', textAlign: 'center' }}
        >
          <span style={{ opacity: '0.6' }}>&gt;</span>
          <input
            onKeyDown={(e) => {
              switch (e.key) {
                case 'Backspace': {
                  const { value } = e.target;
                  //If there is only one character left and the user has pressed the backspace,
                  //this will mean the value is empty now
                  if (!value || value.slice().length === 1) {
                    this.resetTerminalInputIndex();
                  }
                  break;
                }
                case 'Enter': {
                  this.handleCommandExecute();
                  break;
                }

                case 'ArrowUp': {
                  this.updateInputHistoryIndex(terminalInputIndex - 1);
                  break;
                }

                case 'ArrowDown': {
                  this.updateInputHistoryIndex(terminalInputIndex + 1);
                  break;
                }

                case 'g': {
                  e.key = 'G';
                  break;
                }

                case 'm': {
                  e.key = 'M';
                  break;
                }

                default: {
                  break;
                }
              }
            }}
            onChange={(e) => {
              if (!e.target.value) {
                this.resetTerminalInputIndex();
              }
            }}
            type="text"
            ref={this.inputRef}
            style={{
              border: 'none',
              background: '#e5e7eb',
              outline: 'none',
            }}
            placeholder="Enter G-Code Here..."
          />
          <Button
            onClick={this.handleCommandExecute}
            primary
            style={{
              margin: '0px',
              height: '100%',
              border: 'none',
              borderRadius: '0px',
            }}
          >
            Run
          </Button>
        </div>
      </div>
    );
  }
}

export default TerminalWrapper;
