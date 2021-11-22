const { all: all, call: call } = require('redux-saga/effects');
const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const controller = require('./controllerSagas.js');

const sagas = [controller];

export default function* root() {
  yield all(sagas.map((saga) => call(saga.initialize)));
  //yield all(sagas.map(saga => fork(saga.process)));
}
