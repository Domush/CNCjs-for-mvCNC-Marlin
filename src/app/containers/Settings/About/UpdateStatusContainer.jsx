import moment from 'moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import semver from 'semver';
import Anchor from 'app/components/Anchor';
import Space from 'app/components/Space';
import settings from 'app/config/settings';
import i18n from 'app/lib/i18n';
import styles from './index.styl';

const UpdateStatusContainer = (props) => {
  const { checking, current, latest, lastUpdate } = props;
  const newUpdateAvailable = checking === false && semver.lt(current, latest);

  if (checking) {
    return (
      <div className={styles.updateStatusContainer}>
        <div className={styles.updateStatusIcon}>
          <i className="fa fa-fw fa-spin fa-circle-o-notch" />
        </div>
        <div className={styles.updateStatusMessageContainer}>
          <div className={styles.updateStatusMessage}>{i18n._('Checking for updates...')}</div>
        </div>
      </div>
    );
  }

  if (newUpdateAvailable) {
    return (
      <div className={styles.updateStatusContainer}>
        <div className={classNames(styles.updateStatusIcon, styles.warning)}>
          <i className="fa fa-exclamation-circle fa-fw" />
        </div>
        <div className={styles.updateStatusMessageContainer}>
          <div className={styles.updateStatusMessage}>
            {i18n._('A new version of {{name}} is available', { name: settings.productName })}
          </div>
          <div className={styles.releaseLatest}>
            {i18n._('Version {{version}}', { version: latest })}
            <br />
            {moment(lastUpdate).format('LLL')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.updateStatusContainer}>
      <div className={classNames(styles.updateStatusIcon, styles.info)}>
        <i className="fa fa-check-circle fa-fw" />
      </div>
      <div className={styles.updateStatusMessageContainer}>
        <div className={styles.updateStatusMessage}>
          {i18n._('You already have the newest version of {{name}}', { name: settings.productName })}
        </div>
      </div>
    </div>
  );
};

UpdateStatusContainer.propTypes = {
  checking: PropTypes.bool,
  current: PropTypes.string,
  latest: PropTypes.string,
  lastUpdate: PropTypes.string,
};

export default UpdateStatusContainer;
