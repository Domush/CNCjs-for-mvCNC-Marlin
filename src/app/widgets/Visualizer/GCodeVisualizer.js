// import colornames from 'colornames';
import * as THREE from 'three';
import log from 'app/lib/log';

class GCodeVisualizer {
  constructor(theme) {
    this.group = new THREE.Object3D();
    this.geometry = new THREE.BufferGeometry();
    this.theme = theme;
    this.vertices = [];
    this.colors = [];

    // Example
    // [
    //   {
    //     code: 'G1 X1',
    //     vertexIndex: 2
    //   }
    // ]
    this.frames = []; // Example
    this.frameIndex = 0;

    return this;
  }

  render({ vertices, colors, frames }) {
    const { cuttingCoordinateLines, G0Color, G1Color, G2Color, G3Color } = this.theme;
    this.vertices = vertices;
    this.frames = frames;
    const defaultColor = new THREE.Color(cuttingCoordinateLines);

    // Get line colors for current theme
    const motionColor = {
      G0: new THREE.Color(G0Color),
      G1: new THREE.Color(G1Color),
      G2: new THREE.Color(G2Color),
      G3: new THREE.Color(G3Color),
      default: defaultColor,
    };

    this.geometry.setFromPoints(this.vertices);
    const colorArray = this.getColorTypedArray(colors, motionColor);
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 4));

    const workpiece = new THREE.Line(
      this.geometry,
      new THREE.PointsMaterial({
        color: defaultColor,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
      })
    );

    this.group.add(workpiece);

    log.debug({
      workpiece: workpiece,
      frames: this.frames,
      frameIndex: this.frameIndex,
    });

    return this.group;
  }

  /* Turns our array of Three colors into a float typed array we can set as a bufferAttribute */
  getColorTypedArray(colors, motionColor) {
    const colorArray = [];
    colors.forEach((colorTag) => {
      const [motion, opacity] = colorTag;
      const color = motionColor[motion] || motionColor.default;
      colorArray.push(...color.toArray(), opacity);
    });
    this.colors = colorArray;
    return new Float32Array(colorArray);
  }

  setFrameIndex(frameIndex) {
    if (this.frames.length === 0) {
      return;
    }
    const { cuttingCoordinateLine } = this.theme;
    //const defaultColor = new THREE.Color('#f9a13b');
    const defaultColor = new THREE.Color(cuttingCoordinateLine);

    frameIndex = Math.min(frameIndex, this.frames.length - 1);
    frameIndex = Math.max(frameIndex, 0);

    const v1 = this.frames[this.frameIndex].vertexIndex;
    const v2 = this.frames[frameIndex].vertexIndex;

    if (v1 < v2) {
      const workpiece = this.group.children[0];
      const offsetIndex = v1 * 4;
      const colorAttr = workpiece.geometry.getAttribute('color');
      const defaultColorArray = [...defaultColor.toArray(), 0.3];
      const colorArray = Array.from({ length: v2 - v1 }, () => defaultColorArray).flat();
      colorAttr.set(colorArray.slice(), offsetIndex);
      // only update the range we've updated;
      colorAttr.updateRange.count = colorArray.length;
      colorAttr.updateRange.offset = offsetIndex;
      colorAttr.needsUpdate = true;
    }

    // Restore the path to its original colors
    if (v2 < v1) {
      const workpiece = this.group.children[0];
      for (let i = v2; i < v1; ++i) {
        const offsetIndex = i * 4; // Account for RGB buffer
        workpiece.geometry.attributes.color.set(this.colors.slice(offsetIndex, offsetIndex + 4), offsetIndex);
      }
      workpiece.geometry.attributes.color.needsUpdate = true;
    }

    this.frameIndex = frameIndex;
  }

  unload() {
    this.geometry.dispose();
    this.group.clear();

    this.group = new THREE.Object3D();
    this.geometry = new THREE.BufferGeometry();
    this.vertices = [];
    this.colors = [];

    this.frames = [];
    this.frameIndex = 0;
  }
}

export default GCodeVisualizer;
