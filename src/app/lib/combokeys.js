import events from 'events';
import Mousetrap from 'mousetrap';
import api from 'app/api';
import { MACRO_CATEGORY } from 'app/constants';
import log from './log.js';
import { preventDefault } from './dom-events.js';
import { modifierKeys } from './constants.js';

import store from '../store.js';

const STOP_CMD = 'STOP_JOG';
const MACRO = 'MACRO';

const BUGGED_KEYS = [
  {
    id: 0,
    code: 'NumpadAdd',
    key: '+',
  },
  {
    id: 1,
    code: 'NumpadMultiply',
    key: '*',
  },
];

/**
 * Function to handle bugged keys not firing on keyups in mousetrap,
 * if these keys are attached to a Jog command, it is important that they have
 * keyups to prevent the machine from jogging non-stop
 */
const buggedKeysHandler = (e) => {
  for (const item of BUGGED_KEYS) {
    if (item.code === e.code) {
      combokeys.emit(STOP_CMD, e, null);
    }
  }
};

class Combokeys extends events.EventEmitter {
  state = {
    didBindEvents: false,
  };

  list = [];

  async bind() {
    if (this.state.didBindEvents) {
      return;
    }
    const commandKeys = await this.getCommandKeys();

    commandKeys
      .filter((key) => key.isActive)
      .forEach((o) => {
        const { keys, cmd, payload = null, isActive } = o;

        //Do not add any keybindings if the shortcut is disabled or there is no shortcut at all
        if (!isActive || !keys) {
          return;
        }

        const callback = (event) => {
          log.debug(`combokeys: keys=${keys} cmd=${cmd} payload=${JSON.stringify(payload)}`);
          if (o.preventDefault) {
            preventDefault(event);
          }
          this.emit(cmd, event, payload);
        };

        //Add keyup listeners for jogging events
        if (cmd === 'JOG') {
          const callback = (event) => {
            log.debug(`combokeys: keys=${keys} cmd=${STOP_CMD} payload=${JSON.stringify(payload)}`);
            if (o.preventDefault) {
              preventDefault(event);
            }
            this.emit(STOP_CMD, event, payload);
          };

          const modiferKeyCB = (e) => {
            if (o.preventDefault) {
              preventDefault(e);
            }

            this.emit(STOP_CMD, e, null);
          };

          //Listen for keyups on individual keys, for example,
          //if jogging is shift+arrowup and the user lets go of one key and not the other,
          //this should trigger STOP_JOG
          if (keys.includes('+')) {
            const keysArr = keys.split('+');
            for (const key of keysArr) {
              if (modifierKeys.includes(key?.toLowerCase())) {
                Mousetrap.bind(key, modiferKeyCB, 'keyup');
              } else {
                Mousetrap.bind(key, callback, 'keyup');
              }
            }
          }

          for (const item of BUGGED_KEYS) {
            if (keys.includes(item.key)) {
              document.addEventListener('keyup', buggedKeysHandler);
            }
          }

          Mousetrap.bind(keys, callback, 'keyup');
        }

        Mousetrap.bind(keys, callback);
        this.list.push({ keys: keys, callback: callback });
      });

    this.state.didBindEvents = true;
  }

  async getCommandKeys() {
    const setCommandKeys = store.get('commandKeys', []);
    const setMacrosBinds = setCommandKeys.filter((command) => command.category === MACRO_CATEGORY);

    const res = await api.macros.fetch();
    const macros = res.body.records;

    const newCommandKeysList = setCommandKeys.slice();

    macros.forEach((macro) => {
      const existingBind = setMacrosBinds.find((bind) => bind.id === macro.id);
      if (!existingBind) {
        newCommandKeysList.push({
          id: macro.id,
          keys: '',
          title: macro.name,
          cmd: MACRO,
          payload: { macroID: macro.id },
          preventDefault: false,
          isActive: false,
          category: MACRO_CATEGORY,
        });
      }
    });
    /*
        if (!commandKeys.find(command => command.category === MACRO_CATEGORY)) {
            for (let i = lastID; i < macros.length + lastID; i++) {
                const currentMacroIndex = i - lastID;
                const currentMacro = macros[currentMacroIndex];

                newCommandKeysList.push({
                    id: currentMacro.id,
                    keys: '',
                    title: currentMacro.name,
                    cmd: MACRO,
                    payload: { macroID: currentMacro.id },
                    preventDefault: false,
                    isActive: false,
                    category: MACRO_CATEGORY
                });
            }
        }*/

    store.set('commandKeys', newCommandKeysList);

    return newCommandKeysList;
  }

  unbind() {
    if (!this.state.didBindEvents) {
      return;
    }
    this.list.forEach((o) => {
      const { keys, callback } = o;
      Mousetrap.unbind(keys, callback);
    });
    this.state.didBindEvents = false;
  }

  reload() {
    this.reset();
    this.list = [];

    document.removeEventListener('keyup', buggedKeysHandler);

    this.bind();
  }

  reset() {
    Mousetrap.reset();
    this.state.didBindEvents = false;
  }
}

const combokeys = new Combokeys({ autoBind: true });

export default combokeys;
