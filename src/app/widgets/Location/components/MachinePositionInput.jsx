// import both default and named
import React from 'react';
import { useRef } from 'react';
import style from './MachinePositionInput.styl.js';

const MachinePositionInput = ({ value, handleManualMovement }) => {
  const inputRef = useRef();

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const inputValue = Number(e.target.value);
      if (Number.isNaN(inputValue)) {
        handleManualMovement(value);
      }

      handleManualMovement(inputValue);
      return;
    }
    if (e.key === 'Escape') {
      inputRef.current.blur();
    }
  };

  const onBlur = (e) => {
    inputRef.current.value = value;
  };
  return (
    <div key={value}>
      <input
        className={style.positionInput}
        type="number"
        defaultValue={value}
        onKeyDown={onKeyPress}
        onBlur={onBlur}
        ref={inputRef}
      />
    </div>
  );
};

export default MachinePositionInput;
