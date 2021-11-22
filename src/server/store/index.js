import ImmutableStore from '../lib/ImmutableStore.js';

const defaultState = {
  controllers: {},
};

const store = new ImmutableStore(defaultState);

export default store;
