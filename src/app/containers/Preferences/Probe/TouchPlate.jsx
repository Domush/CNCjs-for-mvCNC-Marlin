import React from 'react';
import Select from 'react-select';
import Tooltip from 'app/components/TooltipCustom/ToolTip';
import { TOUCHPLATE_TYPE_AUTOZERO, TOUCHPLATE_TYPE_STANDARD, TOUCHPLATE_TYPE_ZERO } from 'app/lib/constants';

import Input from '../components/Input';
import Fieldset from '../components/Fieldset';

import styles from '../index.styl';

const TouchPlate = ({ state, actions, values, type, onTypeChange }) => {
  const { units, probe } = state;
  const { functions } = probe;
  const probeActions = actions.probe;

  return (
    <Fieldset legend="Touch Plate">
      <div className={styles.inputSpread}>
        <label htmlFor="touchplateType">Touchplate Type</label>
        <Select
          options={[
            { label: TOUCHPLATE_TYPE_STANDARD, value: TOUCHPLATE_TYPE_STANDARD },
            { label: TOUCHPLATE_TYPE_ZERO, value: TOUCHPLATE_TYPE_ZERO },
            { label: TOUCHPLATE_TYPE_AUTOZERO, value: TOUCHPLATE_TYPE_AUTOZERO },
          ]}
          placeholder="Select Type"
          value={{ label: type, value: type }}
          onChange={onTypeChange}
        />
      </div>
      {type !== TOUCHPLATE_TYPE_AUTOZERO && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <span id="helpBlock" className="help-block" style={{ margin: '0 10px 0.9rem' }}>
              Supported probe axes for this specific touchplate
            </span>
            {functions.z && (
              <Tooltip content="Specify the thickness of Z axis" location="default">
                <Input
                  label="Z Thickness"
                  units={units}
                  value={values.zThickness}
                  onChange={probeActions.changeZThickness}
                  additionalProps={{ type: 'number', id: 'zThickness' }}
                />
              </Tooltip>
            )}
          </div>

          {type !== TOUCHPLATE_TYPE_ZERO && (
            <>
              <Tooltip content="Specify the thickness of XY axis" location="default">
                <Input
                  label="XY Thickness"
                  units={units}
                  value={values.xyThickness}
                  onChange={probeActions.changeXYThickness}
                  additionalProps={{ type: 'number', id: 'xyThickness' }}
                />
              </Tooltip>
              <Tooltip content="Specify the length of your Touchplate" location="default">
                <Input
                  label="Length"
                  value={values.length}
                  units={units}
                  onChange={probeActions.changePlateLength}
                  additionalProps={{ type: 'number', id: 'plateLength' }}
                />
              </Tooltip>
              <Tooltip content="Specify the width of your Touchplate" location="default">
                <Input
                  label="Width"
                  value={values.width}
                  units={units}
                  onChange={probeActions.changePlateWidth}
                  additionalProps={{ type: 'number', id: 'plateWidth' }}
                />
              </Tooltip>
            </>
          )}
        </>
      )}
    </Fieldset>
  );
};

export default TouchPlate;
