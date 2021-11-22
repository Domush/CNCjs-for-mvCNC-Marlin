const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-modal/dist/react-modal.css');
const Modal = require('@trendmicro/react-modal');
const chainedFunction = require('chained-function');
{
  const React = require('react');

  const { PureComponent: PureComponent } = React;
}

class ModalWrapper extends PureComponent {
  static propTypes = Modal.propTypes;

  static defaultProps = Modal.defaultProps;

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      if (nextProps.show) {
        this.blockScrolling();
      } else {
        this.unblockScrolling();
      }
    }
  }

  componentDidMount() {
    this.blockScrolling();
  }

  componentWillUnmount() {
    this.unblockScrolling();
  }

  blockScrolling() {
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';
  }

  unblockScrolling() {
    const body = document.querySelector('body');
    body.style.overflowY = 'auto';
  }

  render() {
    const { onClose, ...props } = this.props;

    return <Modal {...props} onClose={chainedFunction(onClose, this.unblockScrolling)} />;
  }
}

ModalWrapper.Overlay = Modal.Overlay;
ModalWrapper.Content = Modal.Content;
ModalWrapper.Header = Modal.Header;
ModalWrapper.Title = Modal.Title;
ModalWrapper.Body = Modal.Body;
ModalWrapper.Footer = Modal.Footer;

export default ModalWrapper;
