import { all, call } from 'redux-saga/effects';
import * as controller from './controllerSagas';

const sagas = [
    controller
];

export default function* root() {
    yield all(sagas.map(saga => call(saga.initialize)));
    //yield all(sagas.map(saga => fork(saga.process)));
}
