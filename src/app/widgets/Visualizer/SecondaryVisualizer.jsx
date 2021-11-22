import React from 'react';
import PropTypes from 'prop-types';

import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

const WebGL = require('app/lib/three/WebGL');
const { SURFACING_VISUALIZER_CONTAINER_ID: SURFACING_VISUALIZER_CONTAINER_ID } = require('app/constants');

const Visualizer = require('./Visualizer');
const Loading = require('./Loading');
const Rendering = require('./Rendering');

const SecondaryVisualizer = ({
  state,
  actions,
  surfacingData,
  showVisualizer,
  cameraPosition,
  visualizerRef,
  showLoading,
  showRendering,
}) => (
  <div style={{ border: '1px solid black', height: '100%', width: '100%' }}>
    {showLoading && <Loading />}
    {showRendering && <Rendering />}
    {WebGL.isWebGLAvailable() && (
      <Visualizer
        isSecondary
        show={showVisualizer}
        cameraPosition={cameraPosition}
        ref={visualizerRef}
        state={state}
        actions={actions}
        surfacingData={surfacingData}
        containerID={SURFACING_VISUALIZER_CONTAINER_ID}
      />
    )}
  </div>
);

SecondaryVisualizer.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object,
  gcode: PropTypes.string,
  surfacingData: PropTypes.object,
  cameraPosition: PropTypes.string,
  showVisualizer: PropTypes.bool,
  visualizerRef: PropTypes.func,
  containerID: PropTypes.string,
  showLoading: PropTypes.bool,
  showRendering: PropTypes.bool,
};

export default SecondaryVisualizer;
