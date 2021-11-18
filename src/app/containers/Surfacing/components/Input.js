
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './input.styl';

const Input = ({ value, label, units, onChange, additionalProps, className, style, disabled }) => {
    return (
        <div className={classNames(styles.input, 'form-group', className)} style={style}>
            {label && <label htmlFor="">{`${label}`}</label>}
            <div className="input-group">
                <input
                    {...additionalProps}
                    value={value}
                    onChange={onChange}
                    className={classNames('form-control', styles.text)}
                    disabled={disabled}
                    type="number"
                    title=""
                />
                {units && <span className="input-group-addon">{units}</span>}
            </div>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    units: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    additionalProps: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    additionalProps: { type: 'text' },
};

export default Input;
