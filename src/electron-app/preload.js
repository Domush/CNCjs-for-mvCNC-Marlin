import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

// We need to be able to access IPC within react but can't import it directly since it relies on FS - this is the workaround
window.ipcRenderer = require('electron').ipcRenderer;
