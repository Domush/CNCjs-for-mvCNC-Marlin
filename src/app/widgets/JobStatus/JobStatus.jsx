
/* eslint-disable no-restricted-globals */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
import TooltipCustom from 'app/components/TooltipCustom/ToolTip';

import IdleInfo from './components/IdleInfo';
import Overrides from './components/Overrides';
import styles from './index.styl';

/**
 * Job Status component wrapper
 * @param {Object} state Default state given from parent component (main index.js for this widget)
 */
class JobStatus extends PureComponent {
    static propTypes = {
        state: PropTypes.object,
    };

    /**
     * Determine the file size format between bytes, kilobytes (KB) and megabytes (MB)
     */
    fileSizeFormat = (size) => {
        const ONE_KB = 1000;
        const ONE_MB = 1000000;

        if (size >= ONE_KB && size < ONE_MB) {
            return `${(size / ONE_KB).toFixed(0)} KB`;
        } else if (size >= ONE_MB) {
            return `${(size / ONE_MB).toFixed(1)} MB`;
        }

        return `${size} bytes`;
    };

    render() {
        const { state, name, size, total, fileLoaded, path, filteredPath } = this.props;
        const { isRunningJob } = state;

        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={styles['file-info']}>
                    {
                        fileLoaded
                            ? (
                                <>
                                    <div className={styles['file-name']}>
                                        <TooltipCustom content={`${name} (${this.fileSizeFormat(size)}, ${total} lines)`} style={{ wordWrap: 'break-word' }}>
                                            <span className={styles['file-text']}>{name}</span>{' '}<span>({this.fileSizeFormat(size)}, {total} lines)</span>
                                        </TooltipCustom>
                                    </div>

                                    {filteredPath && (
                                        <div className={styles['file-path']}>
                                            <TooltipCustom content={`File Path: ${path}`} style={{ wordWrap: 'break-word' }}>
                                                <div style={{ textAlign: 'right' }}>
                                                    <span>Path:</span> <span className={styles['file-text']}>{filteredPath}</span>
                                                </div>
                                            </TooltipCustom>
                                        </div>
                                    )}
                                </>
                            )
                            : <div className={styles['file-name']}><span className={styles['file-text']}>No File Loaded</span></div>}
                </div>
                {!isRunningJob
                    ? <IdleInfo state={state} />
                    : <Overrides state={state} />
                }
            </div>
        );
    }
}

export default connect((store) => {
    const file = get(store, 'file', {});
    const path = get(file, 'path', '');
    const name = get(file, 'name', '');
    const filteredPath = path.replace(name, '');
    return {
        ...file,
        filteredPath
    };
})(JobStatus);
