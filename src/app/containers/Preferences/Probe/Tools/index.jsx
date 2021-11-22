import React from 'react';
import styles from '../../index.styl.js';
import Tool from './Tool.js';
import AddTool from './AddTool.js';
import Fieldset from '../../components/Fieldset.js';

const ToolSettings = ({ active, state, actions }) => {
  const { tools } = state;
  const toolActions = actions.tool;
  return (
    <div className={styles.generalArea}>
      <Fieldset legend="Tools">
        <div className={styles.toolWrapper}>
          <div className={styles.tools}>
            {tools.map((tool, index) => (
              <Tool key={`tool-${index}`} {...tool} onDelete={() => toolActions.deleteTool(index)} />
            ))}
          </div>
          <AddTool actions={actions} state={state} />
        </div>
      </Fieldset>
    </div>
  );
};

export default ToolSettings;
