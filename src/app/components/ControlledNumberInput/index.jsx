
import React, { useState, useRef, useEffect, useMemo } from 'react';
import debounce from 'lodash/debounce';

const ControlledNumberInput = ({ className, value, type = 'decimal', externalOnChange = null, ...props }) => {
    const inputRef = useRef();
    const [originalValue, setOriginalValue] = useState(value);
    const [localValue, setLocalValue] = useState(value);

    /* If the value is changed up the tree, update both displayed and original value stored in component */
    useEffect(() => {
        setOriginalValue(value);
        setLocalValue(value);
    }, [value]);

    // Memoized debounced onChange to avoid creating a new function on each re-render
    const debouncedExternalOnChange = useMemo(() => debounce(externalOnChange, 500), []);

    const onFocus = () => {
        //inputRef.current.select();
    };

    const onBlur = (e) => {
        if (localValue && localValue !== originalValue) {
            setLocalValue(inputRef.current.value);
            onChange(e);
        } else {
            setLocalValue(originalValue);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Escape') {
            setLocalValue(originalValue);
            inputRef.current.blur();
        }
    };

    const onChange = (e) => {
        setLocalValue(inputRef.current.value);
        if (externalOnChange) {
            debouncedExternalOnChange(e);
        }
    };

    return (
        <input
            type={type}
            className={className}
            ref={inputRef}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={localValue}
            {...props}
        />
    );
};

export default ControlledNumberInput;
