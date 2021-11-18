
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.styl';

const Input = ({ value, units, onChange, additionalProps, className, style, disabled }) => {
    return (
        <div className={classNames(styles.input, 'form-group', className)}>
            <div className="input-group">
                <input
                    {...additionalProps}
                    value={value}
                    onChange={onChange}
                    className={classNames('form-control', styles.inputText)}
                    style={style}
                    disabled={disabled}
                />
                {units && <span className="input-group-addon">{units}</span>}
            </div>
        </div>
    );
};

Input.propTypes = {
    units: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    additionalProps: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    additionalProps: { type: 'text' },
};

export default Input;
