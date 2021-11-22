const React = require('react');
const { Route: Route, Redirect: Redirect, withRouter: withRouter } = require('react-router-dom');
const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const user = require('app/lib/user');
const log = require('app/lib/log');

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (user.isAuthenticated()) {
        return Component ? <Component {...rest} /> : null;
      }

      const redirectFrom = props.location.pathname;
      const redirectTo = '/login';
      if (redirectFrom === redirectTo) {
        return null;
      }

      log.debug(`Redirect from "${redirectFrom}" to "${redirectTo}"`);

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

ProtectedRoute.propTypes = withRouter.propTypes;

export default ProtectedRoute;
