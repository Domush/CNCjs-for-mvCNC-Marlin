
import React from 'react';
import styles from './index.styl';

const NavLogo = ({ updateAvailable = false, onClick }) => {
    return (
        <div className={styles.NavLogo}>
            <img alt="CNCjs4Marlin Logo" src="images/icon-round.png" />
            {
                updateAvailable && (
                    <button title="New Version Available!" className={styles.updateNotification} onClick={onClick}>
                        <i className="fas fa-download" />
                    </button>
                )}
        </div>
    );
};

export default NavLogo;
