import React from 'react';

import { Dropdown } from 'react-bootstrap';
import variables from 'app/constants/variables';
import Space from 'app/components/Space';
import insertAtCaret from 'app/widgets/Macro/insertAtCaret';
import uniqueId from 'lodash/uniqueId';
import styles from './index.styl';

const MacroVariableDropdown = ({ textarea, label = '' }) => {
  return (
    <div className="form-group">
      <div className={styles['macro-commands']}>
        <label>{label}</label>
        <Dropdown
          id="add-macro-dropdown"
          className="pull-right"
          onSelect={(eventKey) => {
            if (textarea) {
              insertAtCaret(textarea.current, eventKey);
            }
          }}
        >
          <Dropdown.Toggle className={styles.btnLink} style={{ boxShadow: 'none' }}>
            <i className="fa fa-plus" />
            <Space width="8" />
            Variables
            <Space width="4" />
            <i className="fa fa-caret-down" />
          </Dropdown.Toggle>
          <Dropdown.Menu className={styles.macroVariablesDropdown}>
            {variables.map((v) => {
              if (typeof v === 'object') {
                return v.type === 'header' ? (
                  <Dropdown.Header key={uniqueId()}>{v.text}</Dropdown.Header>
                ) : (
                  <Dropdown.Item key={uniqueId()} eventKey={v} className={styles['dropdown-item']}>
                    {v.text}
                  </Dropdown.Item>
                );
              }

              return (
                <Dropdown.Item eventKey={v} key={uniqueId()} className={styles['dropdown-item']}>
                  {v}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MacroVariableDropdown;
