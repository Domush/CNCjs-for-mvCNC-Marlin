
import Toolpath from 'gcode-toolpath';
import ch from 'hull.js';
import uniqBy from 'lodash/uniqBy';
import * as THREE from 'three';
import logger from './logger';

const log = logger('service:outline');

// Generate an ordered pair - we don't care about Z index for outline purposes so it's removed
function vertex(x, y) {
    return [
        x.toFixed(2),
        y.toFixed(2)
    ];
}

export function getOutlineGcode(gcode, concavity = 60) {
    const vertices = [];
    const toolpath = new Toolpath({
        addLine: ({ motion }, v1, v2) => {
            // We ignore G0 movements since they generally aren't cutting movements
            if (motion === 'G1') {
                //vertices.push(vertex(v1.x, v1.y));
                vertices.push(vertex(v2.x, v2.y));
            }
        },
        addArcCurve: ({ motion, plane }, v1, v2, v0) => {
            const isClockwise = (motion === 'G2');
            const radius = Math.sqrt(
                ((v1.x - v0.x) ** 2) + ((v1.y - v0.y) ** 2)
            );
            let startAngle = Math.atan2(v1.y - v0.y, v1.x - v0.x);
            let endAngle = Math.atan2(v2.y - v0.y, v2.x - v0.x);

            // Draw full circle if startAngle and endAngle are both zero
            if (startAngle === endAngle) {
                endAngle += (2 * Math.PI);
            }

            const arcCurve = new THREE.ArcCurve(
                v0.x, // aX
                v0.y, // aY
                radius, // aRadius
                startAngle, // aStartAngle
                endAngle, // aEndAngle
                isClockwise // isClockwise
            );
            const divisions = 30;
            const points = arcCurve.getPoints(divisions);
            vertices.push(vertex(v1.x, v1.y));

            for (let i = 0; i < points.length; ++i) {
                const point = points[i];
                const z = ((v2.z - v1.z) / points.length) * i + v1.z;

                if (plane === 'G17') { // XY-plane
                    vertices.push(vertex(point.x, point.y));
                } else if (plane === 'G18') { // ZX-plane
                    vertices.push(vertex(point.y, z));
                } else if (plane === 'G19') { // YZ-plane
                    vertices.push(vertex(z, point.x));
                }
            }
        }
    });
    log.debug('Parsing g-code');
    toolpath.loadFromStringSync(gcode);
    log.debug('Reducing to unique vertices');
    const uniqueVertices = uniqBy(vertices, v => JSON.stringify(v));
    log.debug(`Dataset reduced from ${vertices.length} to ${uniqueVertices.length} points.`);

    log.debug(`Generating hull with accuracy of ${concavity}`);
    const fileHull = ch(uniqueVertices, concavity);

    const gCode = convertPointsToGCode(fileHull);

    return gCode;
}

function convertPointsToGCode(points) {
    const gCode = [];
    gCode.push('G21 G91 G0 Z5');
    points.forEach(point => {
        const [x, y] = point;
        gCode.push(`G21 G90 G0 X${x} Y${y}`);
    });
    gCode.push('G21 G91 G0 Z-5');
    return gCode;
}
