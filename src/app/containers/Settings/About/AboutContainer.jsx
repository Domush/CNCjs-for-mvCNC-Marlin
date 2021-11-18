
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'app/config/settings';
import i18n from 'app/lib/i18n';
import styles from './index.styl';

const AboutContainer = ({ version }) => {
    return (
        <div className={styles.aboutContainer}>
            <img src="images/icon-square.png" alt="" className={styles.productLogo} />
            <div className={styles.productDetails}>
                <div className={styles.aboutProductName}>
                    {`${settings.productName} ${version.current}`}
                </div>
                <div className={styles.aboutProductDescription}>
                    {i18n._('A web-based interface for CNC milling controller running Grbl, Marlin')}
                </div>
            </div>
        </div>
    );
};

AboutContainer.propTypes = {
    version: PropTypes.object
};

export default AboutContainer;
