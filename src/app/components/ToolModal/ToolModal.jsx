
import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'app/components/Modal';

import styles from './index.styl';
import { LARGE, MEDIUM, SMALL } from './sizings';


const ToolModal = ({ onClose, title, style, className, size, children }) => {
    let sizingStyles;

    switch (size?.toLowerCase()) {
    case 'small':
    case 'sm':
        sizingStyles = SMALL;
        break;

    case 'medium':
    case 'md':
        sizingStyles = MEDIUM;
        break;

    case 'large':
    case 'lg':
        sizingStyles = LARGE;
        break;

    default: {
        sizingStyles = LARGE;
        break;
    }
    }

    return (
        <Modal
            onClose={onClose}
            style={{ ...style, ...sizingStyles }}
            className={className}
            size={size}
        >
            <div className={styles.toolModal}>
                <div className={styles.header}>
                    <h3 className={styles.headerText}>{title}</h3>
                </div>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

ToolModal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    size: PropTypes.string,
};

export default ToolModal;
