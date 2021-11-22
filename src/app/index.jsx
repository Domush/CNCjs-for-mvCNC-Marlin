const chainedFunction = require('chained-function');
const moment = require('moment');
const pubsub = require('pubsub-js');
const qs = require('qs');
const React = require('react');
const reduxStore = require('app/store/redux');
const ReactDOM = require('react-dom');
const { HashRouter: Router, Route: Route } = require('react-router-dom');
const i18next = require('i18next');
const LanguageDetector = require('i18next-browser-languagedetector');
const XHR = require('i18next-xhr-backend');
const { TRACE: TRACE, DEBUG: DEBUG, INFO: INFO, WARN: WARN, ERROR: ERROR } = require('universal-logger');
const { Provider: ReduxProvider } = require('react-redux');
const { Provider: GridSystemProvider } = require('app/components/GridSystem');
const rootSaga = require('app/sagas');
const sagaMiddleware = require('app/store/redux/saga');
const { createCommons: createCommons } = require('simport');
const settings = require('./config/settings');
const portal = require('./lib/portal');
const controller = require('./lib/controller');
const i18n = require('./lib/i18n');
const log = require('./lib/log');
const series = require('./lib/promise-series');

const promisify = require('./lib/promisify');
const user = require('./lib/user');
const store = require('./store');
const defaultState = require('./store/defaultState');
const App = require('./containers/App');
const Anchor = require('./components/Anchor');
const { Button: Button } = require('./components/Buttons');
const ModalTemplate = require('./components/ModalTemplate');
const Modal = require('./components/Modal');
const Space = require('./components/Space');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const renderPage = () => {
  const container = document.createElement('div');
  container.style.width = '100%';
  document.body.appendChild(container);

  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    <ReduxProvider store={reduxStore}>
      <GridSystemProvider
        breakpoints={[576, 768, 992, 1200]}
        containerWidths={[540, 720, 960, 1140]}
        columns={12}
        gutterWidth={0}
        layout="floats"
      >
        <Router>
          <div>
            <Route path="/" component={App} />
          </div>
        </Router>
      </GridSystemProvider>
    </ReduxProvider>,
    container
  );
};

series([
  () => {
    const obj = qs.parse(window.location.search.slice(1));
    const level = {
      trace: TRACE,
      debug: DEBUG,
      info: INFO,
      warn: WARN,
      error: ERROR,
    }[obj.log_level || settings.log.level];
    log.setLevel(level);
  },
  () =>
    promisify((next) => {
      i18next
        .use(XHR)
        .use(LanguageDetector)
        .init(settings.i18next, (t) => {
          next();
        });
    })(),
  () =>
    promisify((next) => {
      const locale = i18next.language;
      if (locale === 'en') {
        next();
        return;
      }

      require('bundle-loader!moment/locale/' + locale)(() => {
        log.debug(`moment: locale=${locale}`);
        moment().locale(locale);
        next();
      });
    })(),
  () =>
    promisify((next) => {
      const token = store.get('session.token');
      user.signin({ token: token }).then(({ authenticated, token }) => {
        if (authenticated) {
          log.debug('Create and establish a WebSocket connection');

          const host = '';
          const options = {
            query: 'token=' + token,
          };
          controller.connect(host, options, () => {
            // @see "src/web/containers/Login/Login.jsx"
            next();
          });
          return;
        }
        next();
      });
    })(),
])
  .then(async () => {
    log.info(`${settings.productName} ${settings.version}`);
    // Cross-origin communication
    window.addEventListener(
      'message',
      (event) => {
        // TODO: event.origin

        const { token = '', action } = event.data;

        // Token authentication
        if (token !== store.get('session.token')) {
          // log.warn(`Received a message with an unauthorized token (${token}).`);
          // return;
        }

        const { type, payload } = action;
        if (type === 'connect') {
          pubsub.publish('message:connect', payload);
        } else if (type === 'resize') {
          pubsub.publish('message:resize', payload);
        } else if (type !== undefined) {
          log.warn(`No valid action type (${type}) specified in the message.`);
        }
      },
      false
    );

    {
      // Prevent browser from loading a drag-and-dropped file
      // @see http://stackoverflow.com/questions/6756583/prevent-browser-from-loading-a-drag-and-dropped-file
      window.addEventListener(
        'dragover',
        (e) => {
          e.preventDefault();
        },
        false
      );

      window.addEventListener(
        'drop',
        (e) => {
          e.preventDefault();
        },
        false
      );
    }

    {
      // Hide loading
      const loading = document.getElementById('loading');
      loading && loading.remove();
    }

    {
      // Change backgrond color after loading complete
      const body = document.querySelector('body');
      body.style.backgroundColor = '#000000'; // sidebar background color
    }

    if (settings.error.corruptedWorkspaceSettings) {
      const text = store.getConfig();
      const url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
      const filename = `${settings.name}-${settings.version}.json`;

      await portal(({ onClose }) => (
        <Modal onClose={onClose} disableOverlay={true} showCloseButton={false}>
          <Modal.Body>
            <ModalTemplate type="error">
              <h5>{i18n._('Corrupted workspace settings')}</h5>
              <p>
                {i18n._(
                  'The workspace settings have become corrupted or invalid. Click Restore Defaults to restore default settings and continue.'
                )}
              </p>
              <div>
                <Anchor href={url} download={filename}>
                  <i className="fa fa-download" />
                  <Space width="4" />
                  {i18n._('Download workspace settings')}
                </Anchor>
              </div>
            </ModalTemplate>
          </Modal.Body>
          <Modal.Footer>
            <Button
              btnStyle="danger"
              onClick={chainedFunction(() => {
                // Reset to default state
                store.state = defaultState;

                // Persist data locally
                store.persist();
              }, onClose)}
            >
              {i18n._('Restore Defaults')}
            </Button>
          </Modal.Footer>
        </Modal>
      ));
    }

    renderPage();
  })
  .catch((err) => {
    log.error(err);
  });
