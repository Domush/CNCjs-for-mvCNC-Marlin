import classNames from 'classnames';
import React from 'react';
import WidgetStyles from '../Widget/index.styl.js';
import Tab from './Tab.js';
import styles from './index.styl.js';

const Tabs = ({ className, tabs, activeTabIndex, onClick, ...props }) => (
  <div {...props} className={classNames(className, WidgetStyles.widgetHeader, styles.tabRow)}>
    {tabs.map((tab, index) => (
      <Tab
        active={index === activeTabIndex}
        onClick={() => onClick(index)}
        key={`tab-${tab.widgetId}`}
        disabled={tab.disabled}
      >
        {tab.label}
      </Tab>
    ))}
  </div>
);

export default Tabs;
