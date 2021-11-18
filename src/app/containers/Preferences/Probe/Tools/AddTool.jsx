
import React from 'react';
import TooltipCustom from 'app/components/TooltipCustom/ToolTip';
import Input from '../../components/Input';
import styles from '../../index.styl';

const AddTool = ({ actions, state }) => {
    const { tool } = state;
    const toolActions = actions.tool;

    return (
        <div>
            <TooltipCustom content="Specify the diameter of your custom Metric tool" location="default">
                <Input
                    label="Metric Diameter"
                    units="mm"
                    value={tool.metricDiameter}
                    onChange={toolActions.setMetricDiameter}
                    additionalProps={{ id: 'metricDiameter', type: 'number', step: '0.1' }}
                />
            </TooltipCustom>
            <TooltipCustom content="Specify the diameter of your custom Imperial tool" location="default">
                <Input
                    label="Imperial Diameter"
                    units="in"
                    additionalProps={{ id: 'imperialDiameter', type: 'number', step: '0.1' }}
                    value={tool.imperialDiameter}
                    onChange={toolActions.setImperialDiameter}
                />
            </TooltipCustom>
            <TooltipCustom content="Add your new custom tool to the list" location="default">
                <button
                    className={styles.addTool}
                    type="button"
                    onClick={toolActions.addTool}
                    disabled={tool.imperialDiameter === 0 || tool.metricDiameter === 0}
                >
                Add Tool
                </button>
            </TooltipCustom>
        </div>
    );
};

export default AddTool;
