
import React, { Component } from 'react';
import Select from 'react-select';
import pubsub from 'pubsub-js';
import _ from 'lodash';
import ensureArray from 'ensure-array';
import controller from 'app/lib/controller';
import ToggleSwitch from 'app/components/ToggleSwitch';
import store from 'app/store';
import TooltipCustom from '../../../components/TooltipCustom/ToolTip';
import { Toaster, TOASTER_SUCCESS } from '../../../lib/toaster/ToasterLib';
import styles from '../index.styl';
import defaultProfiles from './defaultMachineProfiles';
import Fieldset from '../components/Fieldset';

import Input from '../components/Input';
import { convertToImperial, convertToMetric } from '../calculate';

/**
 * Machine Profile Options Component
 */
export default class MachineProfile extends Component {
    state = {
        machineProfiles: defaultProfiles.sort((a, b) => a.company.localeCompare(b.company)),
        machineProfile: store.get('workspace.machineProfile'),
        units: store.get('workspace.units')
    };

    showToast = _.throttle(() => {
        Toaster.pop({
            msg: 'Settings Updated',
            type: TOASTER_SUCCESS,
            duration: 3000
        });
    }, 5000, { trailing: false });

    pubsubTokens = [];

    /**
     * Function to handle preset machine profile select
     * @param {Object} options {value} The ID of the profile which is the selected option's value
     */
    handleSelect = ({ value = 0 }) => {
        const { machineProfiles } = this.state;

        const foundProfile = machineProfiles.find(profile => profile.id === value);

        if (foundProfile) {
            const updatedObj = {
                ...foundProfile,
                limits: {
                    xmin: 0,
                    ymin: 0,
                    zmin: 0,
                    xmax: foundProfile.mm.width,
                    ymax: foundProfile.mm.depth,
                    zmax: foundProfile.mm.height,
                }
            };
            store.replace('workspace.machineProfile', updatedObj);
            controller.command('machineprofile:load', updatedObj);
        }
    }

    /**
     * Function to handle width, depth, and height input changes
     * @param {Object} e Changed element
     */
    handleChange = (e) => {
        const { units } = this.state;
        const name = e.target.name;
        const value = Number(Number(e.target.value).toFixed(2)); //.toFixed returns a string, hence the extra Number wrapper

        const metricValue = units === 'mm' ? value : convertToMetric(value);
        const imperialValue = units === 'in' ? value : convertToImperial(value);

        const { machineProfile } = this.state;

        const MAX_VALUE = 5000;
        const MIN_VALUE = 0;

        //Object to map work area dimmensions to limits
        const limitMap = {
            width: 'xmax',
            height: 'zmax',
            depth: 'ymax'
        }[name];

        // Limit the given value
        if (value > MAX_VALUE || value < MIN_VALUE) {
            return;
        }

        const updatedUnits = {
            mm: {
                ...machineProfile.mm,
                [name]: metricValue,
            },
            in: {
                ...machineProfile.in,
                [name]: imperialValue
            }
        };

        const updatedObj = {
            ...machineProfile,
            ...updatedUnits,
            limits: {
                ...machineProfile.limits,
                [limitMap]: value
            }
        };

        store.replace('workspace.machineProfile', updatedObj);
        controller.command('machineprofile:load', updatedObj);
    }

    /**
     * Function to handle trigger changes to attributes within the current machine profile
     * @param {Object} e Changed element
     */
    handleToggle = (id) => {
        const { machineProfile } = this.state;
        const value = !machineProfile[id];
        const updatedObj = {
            ...machineProfile,
            [id]: value
        };

        store.replace('workspace.machineProfile', updatedObj);
        controller.command('machineprofile:load', updatedObj);
    }

    updateMachineProfileFromStore = () => {
        const machineProfile = store.get('workspace.machineProfile');
        const units = store.get('workspace.units');

        this.setState({ machineProfile, units });
    };

    updateMachineProfilesFromSubscriber = (machineProfiles) => {
        this.setState({
            machineProfiles: ensureArray(machineProfiles)
        });

        this.showToast();
    };

    subscribe() {
        const tokens = [
            pubsub.subscribe('updateMachineProfiles', (msg, machineProfiles) => {
                this.updateMachineProfilesFromSubscriber(machineProfiles);
            }),
            pubsub.subscribe('units:change', (_, units) => {
                this.setState({ units });
            })
        ];
        this.pubsubTokens = this.pubsubTokens.concat(tokens);
    }

    unsubscribe() {
        this.pubsubTokens.forEach((token) => {
            pubsub.unsubscribe(token);
        });
        this.pubsubTokens = [];
    }

    componentDidMount() {
        store.on('replace', this.updateMachineProfileFromStore);
        this.subscribe();
    }

    componentWillUnmount() {
        store.removeListener('replace', this.updateMachineProfileFromStore);
        this.unsubscribe();
    }

    shouldDisableEndstops(state) {
        const { controller } = state;
        const { settings } = controller;
        // Handle case where we aren't connected - user unable to enable
        if (Object.keys(settings).length === 0) {
            return true;
        }
        const controllerSettings = settings.settings;
        const { $22 } = controllerSettings;
        // Handle case where endstops enabled - we should be able to enabled
        if ($22 === '1') {
            return false;
        }
        // default - disable
        return true;
    }

    render() {
        const { machineProfile, machineProfiles, units } = this.state;
        const { spindle = false, mm, in: inches, company, name, type } = machineProfile;
        const label = `${company} ${name} ${' - ' && type}`;

        const { width = 0, depth = 0, height = 0 } = units === 'mm' ? mm : inches;

        return (
            <Fieldset legend="Machine Profile" className={styles['mb-0']}>
                <div className={styles['machine-options-section']}>
                    <div className={styles['general-area-item']}>
                        <h4 className={styles['settings-subtitle']}>Presets</h4>
                        <TooltipCustom content="CNCjs4Marlin comes pre-loaded with many CNC machine presets" location="default">
                            <Select
                                className={styles['machine-options-select']}
                                value={{ label: label }}
                                options={machineProfiles.map(({ id, name, company, type }) => ({ key: id, value: id, label: `${company} ${name} ${' - ' && type}` }))}
                                onChange={this.handleSelect}
                                clearable={false}
                            />
                        </TooltipCustom>
                    </div>

                    <div className={styles['general-area-item']}>
                        <h4 className={styles['settings-subtitle']}>Cutting Area</h4>
                        <TooltipCustom content="Specify the width of your machine surface" location="default">
                            <Input
                                label="Width"
                                units={units}
                                value={width}
                                onChange={this.handleChange}
                                additionalProps={{ name: 'width', type: 'number' }}
                            />
                        </TooltipCustom>
                        <TooltipCustom content="Specify the depth of your machine surface" location="default">
                            <Input
                                label="Depth"
                                units={units}
                                value={depth}
                                onChange={this.handleChange}
                                additionalProps={{ name: 'depth', type: 'number' }}
                            />
                        </TooltipCustom>
                        <TooltipCustom content="Specify the height of your machine surface" location="default">
                            <Input
                                label="Height"
                                units={units}
                                value={height}
                                onChange={this.handleChange}
                                additionalProps={{ name: 'height', type: 'number' }}
                            />
                        </TooltipCustom>
                    </div>
                </div>

                <div className={styles['general-area-item']}>
                    <h4 className={styles['settings-subtitle']}>Machine Features</h4>
                    <div className={styles['machine-features-section']}>
                        <div className={styles['machine-options-inputgroup']}>
                            <TooltipCustom content="Toggle between Spindle/Laser (S commands)" location="default">
                                <ToggleSwitch
                                    label="Spindle/Laser"
                                    checked={spindle}
                                    onChange={() => this.handleToggle('spindle')}
                                />
                            </TooltipCustom>
                        </div>
                    </div>
                </div>
            </Fieldset>
        );
    }
}
