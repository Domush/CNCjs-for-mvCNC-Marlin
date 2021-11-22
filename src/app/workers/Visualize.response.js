const pubsub = require('pubsub-js');
const reduxStore = require('app/store/redux');
const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const fileActions = require('app/actions/fileInfoActions');
const store = require('app/store');
const { RENDER_RENDERING: RENDER_RENDERING } = require('app/constants');

export const visualizeResponse = ({ data }) => {
  pubsub.publish('file:load', data);
  // Visualizer Rendering
  reduxStore.dispatch({
    type: fileActions.UPDATE_FILE_RENDER_STATE,
    payload: {
      state: RENDER_RENDERING,
    },
  });
};

export const shouldVisualize = () => {
  const liteMode = store.get('widgets.visualizer.liteMode', false);
  const isDisabled = liteMode ? store.get('widgets.visualizer.disabledLite') : store.get('widgets.visualizer.disabled');
  return !isDisabled;
};
