
import React, { PureComponent } from 'react';
import cx from 'classnames';
import pubsub from 'pubsub-js';
import styles from './index.styl';


class UpdateAvailableAlert extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            buttonActive: true,
        };
    }

    actions = {
        hideModal: () => {
            this.setState({
                shown: false
            });
        }
    }

    pubsubTokens = [];


    subscribe () {
        const tokens = [
            pubsub.subscribe('showUpdateToast', (msg, info) => {
                this.setState({
                    shown: true
                });
            }),
        ];
        this.pubsubTokens = this.pubsubTokens.concat(tokens);
    }

    unsubscribe () {
        this.pubsubTokens.forEach((token) => {
            pubsub.unsubscribe(token);
        });
        this.pubsubTokens = [];
    }

    componentDidMount() {
        this.subscribe();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { shown, buttonActive } = this.state;
        const { restartHandler } = this.props;
        const actions = { ...this.actions };
        return (
            <div className={cx(styles.updateWrapper, { [styles.hideModal]: !shown })}>
                <div className={styles.updateIcon}>
                    <i className="fas fa-download" />
                </div>
                <div className={styles.updateContent}>
                    <div>
                        Update available to download.  Download and restart now?
                    </div>
                    <button
                        onClick={() => {
                            this.setState({
                                buttonActive: false
                            });
                            restartHandler();
                        }}
                        className={styles.restartButton}
                    >
                        {
                            buttonActive ? 'Download and install' : 'Downloading...'
                        }
                    </button>
                </div>
                <div className={styles.closeModal}>
                    <button onClick={actions.hideModal}>
                        <i className="fas fa-times" />
                    </button>
                </div>

            </div>
        );
    }
}

export default UpdateAvailableAlert;
