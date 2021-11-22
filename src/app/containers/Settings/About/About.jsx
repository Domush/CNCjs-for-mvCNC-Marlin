import PropTypes from 'prop-types';
// import both default and named
import React from 'react';
import { PureComponent } from 'react';
import AboutContainer from './AboutContainer.js';
import HelpContainer from './HelpContainer.js';
import UpdateStatusContainer from './UpdateStatusContainer.js';

class About extends PureComponent {
  static propTypes = {
    initialState: PropTypes.object,
    state: PropTypes.object,
    stateChanged: PropTypes.bool,
    actions: PropTypes.object,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.checkLatestVersion();
  }

  render() {
    const { state } = this.props;
    const { version } = state;

    return (
      <div>
        <AboutContainer version={version} />
        <HelpContainer />
        <UpdateStatusContainer
          checking={version.checking}
          current={version.current}
          latest={version.latest}
          lastUpdate={version.lastUpdate}
        />
      </div>
    );
  }
}

export default About;
