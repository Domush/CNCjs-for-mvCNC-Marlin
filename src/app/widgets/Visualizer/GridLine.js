
import * as THREE from 'three';

class GridLine {
    group = new THREE.Object3D();

    colorCenterLine = new THREE.Color(0x444444);

    colorGrid = new THREE.Color(0x888888);

    constructor(sizeX, stepX, sizeY, stepY, colorCenterLine, colorGrid) {
        colorGrid = new THREE.Color(colorGrid) || this.colorGrid;

        sizeY = (typeof sizeY === 'undefined') ? sizeX : sizeY;
        stepY = (typeof stepY === 'undefined') ? stepX : stepY;

        for (let i = -1 * sizeX; i <= sizeX; i += stepX) {
            const points = [];
            const material = new THREE.LineBasicMaterial({
                color: colorGrid
            });

            points.push(
                new THREE.Vector3(-sizeX, i, 0),
                new THREE.Vector3(sizeX, i, 0),
            );
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            this.group.add(new THREE.Line(geometry, material));
        }

        for (let i = -1 * sizeY; i <= sizeY; i += stepY) {
            const points = [];
            const material = new THREE.LineBasicMaterial({
                color: colorGrid
            });

            points.push(
                new THREE.Vector3(i, -sizeY, 0),
                new THREE.Vector3(i, sizeY, 0),
            );
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            this.group.add(new THREE.Line(geometry, material));
        }

        return this.group;
    }
}

export default GridLine;
