import store from 'app/store';
import {
    METRIC_UNITS,
    SPIRAL_MOVEMENT,
    ZIG_ZAG_MOVEMENT,
    START_POSITION_BACK_LEFT,
    START_POSITION_BACK_RIGHT,
    START_POSITION_FRONT_LEFT,
    START_POSITION_FRONT_RIGHT,
} from 'app/constants';

export default class Generator {
    constructor({ surfacing, units, controller }) {
        this.surfacing = surfacing;
        this.units = units;
        this.controller = controller;
    }

    /**
     * Main function to generate gcode
     */
    handleGenerate = () => {
        const { surfacing, controller, units, generateGcode } = this;
        const { skimDepth, maxDepth, feedrate, spindleRPM } = surfacing;

        let wcs = controller.state?.parserstate?.modal?.wcs || 'G54';

        let depth = skimDepth;
        let gCodeArr = [
            '(Header)',
            '(Generated by CNCjs4Marlin from Sienci Labs)',
            wcs,
            units === METRIC_UNITS ? 'G21 ;mm' : 'G20 ;inches',
            'G90',
            'G0 X0 Y0',
            `G1 F${feedrate}`,
            `M3 S${spindleRPM}`,
            '(Header End)',
        ];
        let count = 1;

        const processGcode = (obj) => {
            const generatedArr = generateGcode({ depth: obj.depth, count: obj.count });
            gCodeArr.push(...generatedArr);
            count++;
            depth += skimDepth;
        };

        //Skip loop if there is only 1 layer
        if (depth === maxDepth) {
            processGcode({ depth: maxDepth, count });
        } else {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const remainder = maxDepth % depth;

                //If we reach the max depth, use it as the final depth value
                //(which would be the remainder) and exit the loop
                if (maxDepth === remainder && maxDepth - remainder === 0) {
                    processGcode({ depth: maxDepth, count });
                    break;
                } else {
                    processGcode({ depth, count });
                }
            }
        }
        gCodeArr.push(
            '\n',
            '(Footer)',
            'M5 ;Turn off spindle',
            '(Footer End)'
        );

        //Convert to string for visualizer to interperate it
        const gCodeArrStr = gCodeArr.reduce((str, current) => {
            return `${str}${current}\n`;
        }, '');

        return gCodeArrStr;
    };

    /**
     * Function to generate gcode array
     * @param {number} depth - Depth value for Z axis
     * @param {number} count - Count value keeping track of the number of layers
     * @returns {array} - Returns the generated gcode set in an array
     */
    generateGcode = ({ depth, count }) => {
        const {
            bitDiameter,
            stepover,
            length,
            width,
            maxDepth,
            startPosition,
            type
        } = this.surfacing;

        const stepoverAmount = bitDiameter * (stepover / 100);

        const gCodeArr = [];

        let axisFactors;

        switch (startPosition) {
        case START_POSITION_BACK_LEFT: {
            axisFactors = { x: 1, y: -1 };
            break;
        }
        case START_POSITION_BACK_RIGHT: {
            axisFactors = { x: -1, y: -1 };
            break;
        }
        case START_POSITION_FRONT_LEFT: {
            axisFactors = { x: 1, y: 1 };
            break;
        }
        case START_POSITION_FRONT_RIGHT: {
            axisFactors = { x: -1, y: 1 };
            break;
        }

        default: {
            axisFactors = { x: 1, y: -1 }; // Start from the back left
            break;
        }
        }

        const options = {
            depth,
            length,
            width,
            count,
            stepoverAmount,
            maxDepth,
            axisFactors
        };

        const surfacingTypeFunction = {
            [SPIRAL_MOVEMENT]: this.drawSpiral,
            [ZIG_ZAG_MOVEMENT]: this.drawZigZag
        }[type];

        const traversed = surfacingTypeFunction(options);

        gCodeArr.push(...traversed);

        return gCodeArr;
    };

    /**
     * Function to draw a square spiral
     * @param {number} depth - Depth value for Z axis
     * @param {number} length - Length of machine (Y axis)
     * @param {number} width - Width of machine (X axis)
     * @param {object} axisFactors - Object containing the directions to move for x and y
     * @param {number} count - Count value keeping track of the number of layers
     * @param {number} stepoverAmount - Space between each square spiral
     * @returns {array} - Returns the generated gcode set in an array
     */
    drawSpiral = ({ depth, length, width, axisFactors, count, stepoverAmount }) => {
        const gCodeArr = [];
        const fixedVal = (val) => Number(val.toFixed(3));
        const Z = depth * -1;
        const { x: xFactor, y: yFactor } = axisFactors;
        // const { y: yFactor } = axisFactors;

        let currentPos = {
            X: stepoverAmount * 2,
            Y: stepoverAmount * 2,
        };

        let endPos = {
            X: width - stepoverAmount,
            Y: length - stepoverAmount
        };

        //Draw initial full rectangle covering full length and width of the machine
        gCodeArr.push(
            '\n',
            `(Layer ${count})`,
            `G1 Z${fixedVal(Z)}`,
            `G1 Y${fixedVal(length) * yFactor}`, //-1
            `G1 X${fixedVal(width) * xFactor}`,
            'G1 Y0',
            'G1 X0',
            `G1 X${fixedVal(stepoverAmount) * xFactor} Y${fixedVal(stepoverAmount) * yFactor}`, //-1
        );

        let iterations = 1;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (endPos.X <= currentPos.X || endPos.Y <= currentPos.Y) {
                break;
            }

            let newCurrentPosX = Number(fixedVal(endPos.X - stepoverAmount));
            let newCurrentPosY = Number(fixedVal(endPos.Y - stepoverAmount));
            let newEndPosX = Number(fixedVal(currentPos.X + stepoverAmount));
            let newEndPosY = Number(fixedVal(currentPos.Y + stepoverAmount));

            //On the first iteration we want the end position for the y axis to reach
            //the maximum dimensions for the first spiral, every other spiral's end y position
            //will be offset by the stepover amount
            if (iterations === 1) {
                gCodeArr.push(
                    '\n',
                    `G1 Y${fixedVal(endPos.Y) * yFactor}`,
                    `G1 X${fixedVal(endPos.X) * xFactor}`,
                    `G1 Y${fixedVal(currentPos.Y - stepoverAmount) * yFactor}`,
                    `G1 X${fixedVal(currentPos.X) * xFactor}`,
                );

                newEndPosY = Number(fixedVal(currentPos.Y));
            } else {
                gCodeArr.push(
                    '\n',
                    `G1 Y${fixedVal(endPos.Y) * yFactor}`,
                    `G1 X${fixedVal(endPos.X) * xFactor}`,
                    `G1 Y${fixedVal(currentPos.Y) * yFactor}`,
                    `G1 X${fixedVal(currentPos.X) * xFactor}`,
                );
            }

            //New position will be the previous end position minus the stepover amount
            const newPos = {
                X: newCurrentPosX,
                Y: newCurrentPosY,
            };

            //New end position will be the previous position plus the stepover amount
            const newEndPos = {
                X: newEndPosX,
                Y: newEndPosY,
            };

            currentPos = Object.assign({}, newEndPos);
            endPos = Object.assign({}, newPos);

            iterations++;
        }

        const workspaceUnits = store.get('workspace.units');
        const ZVALUE = workspaceUnits === METRIC_UNITS ? '3' : '0.12';

        gCodeArr.push(
            `G0 Z${ZVALUE}`,
            'G0 X0 Y0',
        );
        gCodeArr.push(`(End of Layer ${count})`);

        return gCodeArr;
    };

    drawZigZag = ({ depth, length, width, axisFactors, count, stepoverAmount }) => {
        const gCodeArr = [];
        const fixedVal = (val) => Number(val.toFixed(3));
        const Z = depth * -1;
        const { x: xFactor, y: yFactor } = axisFactors;

        let startPosY = stepoverAmount * 3;
        let endPosY = stepoverAmount * 2;

        //Draw initial full rectangle covering full length and width of the machine
        gCodeArr.push(
            '\n',
            `(Layer ${count})`,
            `G1 Z${fixedVal(Z)}`,
            `G1 Y${fixedVal(length) * yFactor}`,
            `G1 X${fixedVal(width) * xFactor}`,
            'G1 Y0',
            'G1 X0',
            `G1 Y${fixedVal(stepoverAmount) * yFactor}`, //-1
        );

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (endPosY >= length) {
                break;
            }

            let newStartPosY = Number(fixedVal(startPosY + (stepoverAmount)));
            let newEndPosY = Number(fixedVal(endPosY + (stepoverAmount * 3)));

            gCodeArr.push(
                '\n',
                `G1 X${width * xFactor}`,
                `G1 Y${fixedVal(endPosY) * yFactor}`,
                'G1 X0',
                `G1 Y${fixedVal(startPosY) * yFactor}`
            );

            startPosY = newEndPosY;
            endPosY = newStartPosY;
        }

        const workspaceUnits = store.get('workspace.units');
        const ZVALUE = workspaceUnits === METRIC_UNITS ? '3' : '0.12';

        gCodeArr.push(
            `G0 Z${ZVALUE}`,
            'G0 X0 Y0',
        );
        gCodeArr.push(`(End of Layer ${count})`);

        return gCodeArr;
    }
}
