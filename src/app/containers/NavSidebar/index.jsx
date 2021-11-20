

import React, { PureComponent } from 'react';
import gamepad, { runAction } from 'app/lib/gamepad';
import combokeys from 'app/lib/combokeys';
import controller from 'app/lib/controller';
import { Marlin } from 'app/constants';
import store from 'app/store';
import HelpModal from 'app/containers/Help';
import NavSidebarLink from './NavSideBarLink';
import styles from './index.styl';
import {
    MODAL_NONE,
    MODAL_PREFERENCES,
    // MODAL_FIRMWARE,
    MODAL_SURFACING,
    MODAL_CALIBRATE,
    MODAL_HELP
} from './constants';
import Preferences from '../Preferences/Preferences';
// import Firmware from '../Firmware/Firmware';
import Surfacing from '../Surfacing';
import Calibration from '../Calibration';


class NavSidebar extends PureComponent {
    state = this.getInitialState();

    openHelpPage = () => {
        window.open('https://cncjs.org/cncjs-documentation/', '_blank');
    }

    reconnectToLastDevice(port, baudrate, controllerType) {
        controller.openPort(port, {
            controllerType: controllerType,
            baudrate: baudrate,
            rtscts: false
        }, (err) => {
            if (err) {
                return;
            }
        });
    }

    shuttleControlEvents = {
        OPEN_TOOLBAR: (_, { toolbar, shouldConnect, shouldOpenHelpPage }) => {
            if (shouldConnect) {
                const connection = store.get('widgets.connection');
                const { port, baudrate } = connection;

                if (port && baudrate) {
                    this.reconnectToLastDevice(port, baudrate, Marlin);
                }
                return;
            }

            if (shouldOpenHelpPage) {
                this.openHelpPage();
                return;
            }

            if (toolbar) {
                this.actions.openModal(toolbar);
            }
        }
    }

    addShuttleControlEvents() {
        combokeys.reload();

        Object.keys(this.shuttleControlEvents).forEach(eventName => {
            const callback = this.shuttleControlEvents[eventName];
            combokeys.on(eventName, callback);
        });
    }

    removeShuttleControlEvents() {
        Object.keys(this.shuttleControlEvents).forEach(eventName => {
            const callback = this.shuttleControlEvents[eventName];
            combokeys.removeListener(eventName, callback);
        });
    }

    actions = {
        openModal: (name) => {
            this.setState({
                modal: {
                    name: name,
                    params: {}
                }
            });
        },
        closeModal: () => {
            this.setState({
                modal: {
                    name: MODAL_NONE,
                    params: {}
                }
            });
        }
    }

    componentDidMount() {
        this.addShuttleControlEvents();

        gamepad.on('gamepad:button', (event) => runAction({ event, shuttleControlEvents: this.shuttleControlEvents }));
    }

    componentWillUnmount() {
        this.removeShuttleControlEvents();
    }

    getInitialState() {
        return {
            modal: {
                name: MODAL_NONE,
                params: {}
            }
        };
    }

    render() {
        const actions = { ...this.actions };
        const state = { ...this.state };
        return (
            <div className={styles.Sidebar}>
                <NavSidebarLink
                    url=""
                    icon="fab fa-codepen"
                    label="Surfacing"
                    onClick={() => actions.openModal(MODAL_SURFACING)}
                />
                {
                    /*<NavSidebarLink
                        url="" icon="fa fa-mountain" label="Heightmap"
                        disabled
                    />*/
                }
                <NavSidebarLink
                    url=""
                    onClick={() => actions.openModal(MODAL_CALIBRATE)}
                    icon="fa fa-ruler"
                    label="Calibrate"
                />
                {/* <NavSidebarLink
                    url=""
                    onClick={() => actions.openModal(MODAL_FIRMWARE)}
                    icon="fa fa-microchip"
                    label="Firmware"
                /> */}
                <NavSidebarLink
                    url=""
                    icon="fa fa-question"
                    label="Help"
                    onClick={() => actions.openModal(MODAL_HELP)}
                />
                <NavSidebarLink
                    url="" onClick={() => actions.openModal(MODAL_PREFERENCES)} icon="fa fa-cog"
                    label=""
                />
                {/* { state.modal.name === MODAL_FIRMWARE && <Firmware state={state} modalClose={actions.closeModal} /> } */}
                { state.modal.name === MODAL_PREFERENCES && <Preferences state={state} modalClose={actions.closeModal} /> }
                { state.modal.name === MODAL_SURFACING && <Surfacing state={state} modalClose={actions.closeModal} /> }
                { state.modal.name === MODAL_CALIBRATE && <Calibration state={state} modalClose={actions.closeModal} /> }
                { state.modal.name === MODAL_HELP && <HelpModal modalClose={actions.closeModal} /> }
            </div>
        );
    }
}

export default NavSidebar;
