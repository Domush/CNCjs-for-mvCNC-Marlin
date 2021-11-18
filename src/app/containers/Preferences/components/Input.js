
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ControlledNumberInput from 'app/components/ControlledNumberInput';

import styles from '../index.styl';

const Input = ({ value, label, units, onChange, additionalProps, className }) => {
    return (
        <div className={classNames(styles.input, 'form-group', className)} style={{ gridTemplateColumns: !label ? '1fr' : '' }}>
            {label && <label htmlFor="">{`${label}`}</label>}
            <div className="input-group">
                <ControlledNumberInput
                    {...additionalProps}
                    value={value}
                    externalOnChange={onChange}
                    className={classNames('form-control', styles.inputText)}
                    style={{ zIndex: '0', textAlign: 'center', color: '#3e85c7' }}
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
};

Input.defaultProps = {
    additionalProps: { type: 'text' },
};

export default Input;
