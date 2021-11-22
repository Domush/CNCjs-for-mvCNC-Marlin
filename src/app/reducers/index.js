import { combineReducers } from 'redux';
import controller from './controllerReducers.js';
import connection from './connectionReducers.js';
import file from './fileInfoReducers.js';
import visualizer from './visualizerReducers.js';

const consolidatedReducer = combineReducers({
  controller,
  connection,
  file,
  visualizer,
});

export default consolidatedReducer;
