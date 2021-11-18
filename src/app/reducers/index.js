
import { combineReducers } from 'redux';
import controller from './controllerReducers';
import connection from './connectionReducers';
import file from './fileInfoReducers';
import visualizer from './visualizerReducers';

const consolidatedReducer = combineReducers({
    controller,
    connection,
    file,
    visualizer
});

export default consolidatedReducer;
