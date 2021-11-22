// import both default and named
import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import store from 'app/store';
import PropTypes from 'prop-types';
import { Toaster, TOASTER_SUCCESS } from 'app/lib/toaster/ToasterLib';

import styles from './index.styl.js';
import ProfileItem from './ProfileItem.js';
import MainTable from './MainTable.js';
import ProfileShortcutModal from './ProfileShortcutModal.js';

const Profile = ({ currentProfile, onUpdateProfiles }) => {
  Profile.propTypes = { currentProfile: PropTypes.object, onUpdateProfiles: PropTypes.func };

  const { profileName, icon, shortcuts } = currentProfile;

  const [currentShortcut, setCurrentShortcut] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(profileName);

  const handleEditName = () => {
    if (name === profileName) {
      return;
    }

    const profiles = store.get('workspace.gamepad.profiles', []);

    const updatedProfiles = profiles.map((profile) =>
      currentProfile.id === profile.id ? { ...profile, profileName: name } : currentProfile
    );

    onUpdateProfiles(updatedProfiles);

    Toaster.pop({
      msg: 'Updated Shortcut Profile Name',
      type: TOASTER_SUCCESS,
      duration: 2000,
    });
  };

  const handleDelete = (currShortcut) => {
    const updatedShortcuts = shortcuts.map((shortcut) =>
      shortcut.id === currShortcut.id ? { ...shortcut, keys: '', keysName: '', isActive: false } : shortcut
    );

    const profiles = store.get('workspace.gamepad.profiles', []);

    const updatedProfiles = profiles.map((profile) =>
      currentProfile.id === profile.id ? { ...profile, shortcuts: updatedShortcuts } : currentProfile
    );

    onUpdateProfiles(updatedProfiles);

    Toaster.pop({
      msg: 'Removed Joystick Action Shortcut',
      type: TOASTER_SUCCESS,
      duration: 2000,
    });
  };

  const handleShortcutToggle = (currShortcut) => {
    const updatedShortcuts = shortcuts.map((shortcut) => (shortcut.id === currShortcut.id ? currShortcut : shortcut));

    const profiles = store.get('workspace.gamepad.profiles', []);

    const updatedProfiles = profiles.map((profile) =>
      currentProfile.id === profile.id ? { ...profile, shortcuts: updatedShortcuts } : currentProfile
    );

    onUpdateProfiles(updatedProfiles);
  };

  return (
    <>
      <div style={{ overflowY: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 13fr', alignItems: 'center', margin: '0 0 0.5rem' }}>
          <i className={classnames(icon, styles.profileItemIcon)} />
          <input
            type="text"
            value={name}
            className={styles.profileName}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleEditName}
          />
        </div>
        <div style={{ overflowY: 'auto', height: '90%', backgroundColor: 'white' }}>
          <MainTable
            onEdit={(shortcut) => {
              setShowModal(true);
              setCurrentShortcut(shortcut);
            }}
            onDelete={handleDelete}
            onShortcutToggle={handleShortcutToggle}
            data={shortcuts}
          />
        </div>
      </div>

      {showModal && (
        <ProfileShortcutModal
          profile={currentProfile}
          shortcut={currentShortcut}
          onClose={() => setShowModal(false)}
          onUpdateProfiles={onUpdateProfiles}
        />
      )}
    </>
  );
};

export { Profile, ProfileItem };
