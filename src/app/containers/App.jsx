import React from 'react';
import { PureComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';
import { trackPage } from '../lib/analytics.js';
import Workspace from './Workspace.js';
import styles from './App.styl.js';

class App extends PureComponent {
  static propTypes = withRouter.propTypes;

  componentDidMount() {
    // Force visualizer to resize once app is loaded
    pubsub.publish('resize');
  }

  render() {
    const { location } = this.props;
    const accepted = ['/workspace'].indexOf(location.pathname) >= 0;

    if (!accepted) {
      return (
        <Redirect
          to={{
            pathname: '/workspace',
            state: {
              from: location,
            },
          }}
        />
      );
    }

    trackPage(location.pathname);

    return (
      <div className={styles.main}>
        <Workspace
          {...this.props}
          style={{
            display: location.pathname !== '/workspace' ? 'none' : 'block',
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
