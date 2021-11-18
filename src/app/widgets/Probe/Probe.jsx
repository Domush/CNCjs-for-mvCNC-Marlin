import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import FunctionButton from 'app/components/FunctionButton/FunctionButton';

import {
    MODAL_PREVIEW
} from './constants';
import ProbeImage from './ProbeImage';
import ProbeDiameter from './ProbeDiameter';
import styles from './index.styl';


class Probe extends PureComponent {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object,
        probeActive: PropTypes.bool
    };

    render() {
        const { state, actions } = this.props;
        const {
            canClick,
            availableProbeCommands,
            selectedProbeCommand,
        } = state;
        const probeCommand = availableProbeCommands[selectedProbeCommand] || false;

        return (
            <div className={styles.mainWrapper}>
                <div className={styles.mainGrid}>
                    <div className={styles.secondaryFlexbox}>
                        <div className={styles.mainGridItem}>
                            <label style={{ margin: 0 }}>Axis</label>

                            <div className={styles.axisButtonsWrapper}>
                                {
                                    availableProbeCommands.map((command, index) => (
                                        <FunctionButton
                                            key={command.id}
                                            onClick={() => actions.handleProbeCommandChange(index)}
                                            className={index === selectedProbeCommand ? styles.axisButtonActive : styles.axisButton}
                                        >
                                            { index === selectedProbeCommand && (<div className={styles.axisButtonActiveIndicator} />) }
                                            {command.id.split(' ')[0]}
                                        </FunctionButton>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.mainGridItem}>
                            <label>Tool</label>
                            <div className={styles.toolsWrapper}>
                                <ProbeDiameter actions={actions} state={state} probeCommand={probeCommand} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainGridItem}>
                        <div />
                        <FunctionButton
                            onClick={() => actions.openModal(MODAL_PREVIEW)}
                            disabled={!canClick}
                            className={styles.probeButton}
                        >
                            Probe
                        </FunctionButton>
                    </div>
                </div>
                <ProbeImage probeCommand={probeCommand} />
            </div>
        );
    }
}

export default Probe;
