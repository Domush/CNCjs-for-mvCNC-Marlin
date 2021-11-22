// import both default and named
import React from 'react';
import { useState } from 'react';

import TabbedWidget from 'app/components/TabbedWidget';

import KeyboardShortcuts from './Keybindings.js';
import Joystick from './Joystick.js';

import SettingWrapper from '../components/SettingWrapper.js';
import styles from '../index.styl.js';

const tabs = [
  {
    id: 0,
    label: 'Keyboard Shortcuts',
    widgetId: 'keyboard-shortcuts',
    component: <KeyboardShortcuts />,
  },
  {
    id: 1,
    label: 'Joystick Shortcuts',
    widgetId: 'joystick-shortcuts',
    component: <Joystick />,
  },
];

const Shortcuts = ({ active }) => {
  const [tab, setTab] = useState(0);

  return (
    <SettingWrapper title="Shortcuts" show={active}>
      <TabbedWidget>
        <TabbedWidget.Tabs
          tabs={tabs}
          activeTabIndex={tab}
          onClick={(index) => setTab(index)}
          className={styles.tabs}
        />
        <TabbedWidget.Content>
          <div className={styles.container}>
            {tabs.map((t, index) => {
              const active = index === tab;
              return (
                <TabbedWidget.ChildComponent key={t.id} active={active}>
                  {active && t.component}
                </TabbedWidget.ChildComponent>
              );
            })}
          </div>
        </TabbedWidget.Content>
      </TabbedWidget>
    </SettingWrapper>
  );
};

export default Shortcuts;
