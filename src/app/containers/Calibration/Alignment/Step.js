import React from 'react';
import PropTypes from 'prop-types';

import ActionItem from '../ActionItem.js';

import styles from './index.styl.js';

const Step = ({ actions, currentAction, onChange }) => (
  <div className={styles.actionItemContainer}>
    {actions.map((action) => (
      <ActionItem
        key={action.id}
        id={action.id}
        checked={action.checked}
        hideCompleteButton={action.hideCompleteButton}
        isCurrentAction={action.id === currentAction}
        hasBeenChanged={action.hasBeenChanged}
        label={action.label}
        onChange={onChange}
      />
    ))}
  </div>
);

Step.propTypes = {
  handleFinish: PropTypes.func,
  actions: PropTypes.array,
  currentAction: PropTypes.number,
  onChange: PropTypes.func,
};

export default Step;
