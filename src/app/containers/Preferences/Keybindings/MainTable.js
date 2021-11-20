import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Table from 'app/components/Table';
import ToggleSwitch from 'app/components/ToggleSwitch';

import {
  CARVING_CATEGORY,
  OVERRIDES_CATEGORY,
  VISUALIZER_CATEGORY,
  LOCATION_CATEGORY,
  JOGGING_CATEGORY,
  PROBING_CATEGORY,
  SPINDLE_LASER_CATEGORY,
  GENERAL_CATEGORY,
  TOOLBAR_CATEGORY,
  MACRO_CATEGORY,
} from 'app/constants';

import { formatShortcut } from './helpers';
import styles from './edit-area.styl';

/**
 * Keybindings Table Component
 * @param {Function} onEdit Function to handle keybinding item edit
 * @param {Array} data List of eybind objects
 */
export default class MainTable extends Component {
  static propTypes = {
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onShortcutToggle: PropTypes.func,
    data: PropTypes.array,
  };

  renders = {
    renderShortcutCell: (_, row) => {
      const { keys, isActive, keysName } = row;
      const shortcut = [...keys][0] === '+' ? ['+'] : keys.split('+');

      const { onEdit, onDelete } = this.props;

      const hasShortcut = !!shortcut[0];

      let cleanedShortcut = null;

      //If there is an empty value as the last element in the shorcut array,
      //that means a plus key is supposed to be there, but it was filtered out
      //due to keys.split
      if (shortcut[shortcut.length - 1] === '') {
        cleanedShortcut = shortcut.filter((item) => item !== '');
        cleanedShortcut.push('+');
      }

      const output = cleanedShortcut ? formatShortcut(cleanedShortcut, isActive) : formatShortcut(shortcut, isActive);

      return (
        <div className={styles.shortcutComboColumn}>
          {hasShortcut || keysName ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              {keysName ? <kbd>{keysName}</kbd> : output}
            </div>
          ) : (
            <div style={{ height: '24px' }} />
          )}
          <div className={styles['icon-area']}>
            {hasShortcut && (
              <i
                role="button"
                tabIndex={-1}
                className={cx('far fa-trash-alt', styles.deleteIcon, !hasShortcut ? styles.disabledIcon : '')}
                onClick={() => onDelete(row)}
                onKeyDown={() => onDelete(row)}
              />
            )}
            <i
              role="button"
              tabIndex={-1}
              className={cx(hasShortcut ? 'fas fa-edit' : 'fas fa-plus', styles.actionIcon)}
              onClick={() => onEdit(row)}
              onKeyDown={null}
            />
          </div>
        </div>
      );
    },
    renderToggleCell: (_, row) => {
      const { onShortcutToggle } = this.props;
      return (
        <ToggleSwitch
          checked={row.isActive}
          onChange={(isActive) => {
            onShortcutToggle({ ...row, isActive }, false);
          }}
        />
      );
    },
    renderCategoryCell: (_, row) => {
      const categories = {
        [CARVING_CATEGORY]: 'categoryGreen',
        [OVERRIDES_CATEGORY]: 'categoryBlue',
        [VISUALIZER_CATEGORY]: 'categoryPink',
        [LOCATION_CATEGORY]: 'categoryOrange',
        [JOGGING_CATEGORY]: 'categoryRed',
        [PROBING_CATEGORY]: 'categoryPurple',
        [SPINDLE_LASER_CATEGORY]: 'categoryBlack',
        [GENERAL_CATEGORY]: 'categoryGrey',
        [TOOLBAR_CATEGORY]: 'categoryWhite',
        [MACRO_CATEGORY]: 'categoryLightBlue',
      };

      const category = categories[row.category];

      return <div className={styles[category]}>{row.category}</div>;
    },
  };

  columns = [
    { dataKey: 'title', title: 'Action', sortable: true, width: '25%' },
    { dataKey: 'keys', title: 'Shortcut', sortable: true, width: '45%', render: this.renders.renderShortcutCell },
    { dataKey: 'category', title: 'Category', sortable: true, width: '20%', render: this.renders.renderCategoryCell },
    { dataKey: 'isActive', title: 'Active', width: '10%', render: this.renders.renderToggleCell },
  ];

  render() {
    const columns = this.columns;
    const { data } = this.props;

    return <Table rowKey="id" columns={columns} data={data} width={743} />;
  }
}
