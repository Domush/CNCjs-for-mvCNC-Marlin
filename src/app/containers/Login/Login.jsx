const cx = require('classnames');
const qs = require('qs');
const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

{
  const React = require('react');
  const { PureComponent: PureComponent } = React;
}
const { withRouter: withRouter, Redirect: Redirect } = require('react-router-dom');
const Anchor = require('app/components/Anchor');
const { Notification: Notification } = require('app/components/Notifications');
const Space = require('app/components/Space');
const settings = require('app/config/settings');
const controller = require('app/lib/controller');
const i18n = require('app/lib/i18n');
const log = require('app/lib/log');
const user = require('app/lib/user');
const store = require('app/store');
const styles = require('./index.styl');

class Login extends PureComponent {
  static propTypes = withRouter.propTypes;

  state = this.getDefaultState();

  actions = {
    showAlertMessage: (msg) => {
      this.setState({ alertMessage: msg });
    },
    clearAlertMessage: () => {
      this.setState({ alertMessage: '' });
    },
    handleSignIn: (event) => {
      event.preventDefault();

      this.setState({
        alertMessage: '',
        authenticating: true,
        redirectToReferrer: false,
      });

      const name = this.fields.name.value;
      const password = this.fields.password.value;

      user.signin({ name, password }).then(({ authenticated }) => {
        if (!authenticated) {
          this.setState({
            alertMessage: i18n._('Authentication failed.'),
            authenticating: false,
            redirectToReferrer: false,
          });
          return;
        }

        log.debug('Create and establish a WebSocket connection');

        const token = store.get('session.token');
        const host = '';
        const options = {
          query: 'token=' + token,
        };
        controller.connect(host, options, () => {
          // @see "src/web/NavbarConnection.jsx"
          this.setState({
            alertMessage: '',
            authenticating: false,
            redirectToReferrer: true,
          });
        });
      });
    },
  };

  fields = {
    name: null,
    password: null,
  };

  getDefaultState() {
    return {
      alertMessage: '',
      authenticating: false,
      redirectToReferrer: false,
    };
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const state = this.state;
    const actions = this.actions;
    const { alertMessage, authenticating } = state;

    if (state.redirectToReferrer) {
      const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
      if (query && query.continue) {
        log.debug(`Navigate to "${query.continue}"`);

        window.location = query.continue;

        return null;
      }

      log.debug(`Redirect from "/login" to "${from.pathname}"`);

      return <Redirect to={from} />;
    }

    return (
      <div className={styles.container}>
        {alertMessage && (
          <Notification style={{ marginBottom: 10 }} type="error" onDismiss={actions.clearAlertMessage}>
            <div>
              <strong>{i18n._('Error')}</strong>
            </div>
            <div>{alertMessage}</div>
          </Notification>
        )}
        <div className={styles.login}>
          <div className={styles.logo}>
            <img src="images/icon-square.png" alt="" />
          </div>
          <div className={styles.title}>{i18n._('Sign in to {{name}}', { name: settings.productName })}</div>
          <form className={styles.form}>
            <div className="form-group">
              <input
                ref={(node) => {
                  this.fields.name = node;
                }}
                type="text"
                className="form-control"
                placeholder={i18n._('Username')}
              />
            </div>
            <div className="form-group">
              <input
                ref={(node) => {
                  this.fields.password = node;
                }}
                type="password"
                className="form-control"
                placeholder={i18n._('Password')}
              />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-block btn-primary" onClick={this.actions.handleSignIn}>
                <i
                  className={cx(
                    'fa',
                    'fa-fw',
                    { 'fa-spin': authenticating },
                    { 'fa-circle-o-notch': authenticating },
                    { 'fa-sign-in': !authenticating }
                  )}
                />
                <Space width="8" />
                {i18n._('Sign In')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
