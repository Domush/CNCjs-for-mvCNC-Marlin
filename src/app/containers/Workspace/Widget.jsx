
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AxesWidget from 'app/widgets/JogControl';
import ConsoleWidget from 'app/widgets/Console';
import JobStatusWidget from 'app/widgets/JobStatus';
import LocationWidget from 'app/widgets/Location';
import MacroWidget from 'app/widgets/Macro';
import ProbeWidget from 'app/widgets/Probe';
import SpindleWidget from 'app/widgets/Spindle';
import VisualizerWidget from 'app/widgets/Visualizer';
import SecondaryFunctionality from 'app/widgets/SecondaryFunctionality';

const getWidgetByName = (name) => {
    return {
        'axes': AxesWidget,
        'console': ConsoleWidget,
        'job_status': JobStatusWidget,
        'location': LocationWidget,
        'macro': MacroWidget,
        'probe': ProbeWidget,
        'spindle': SpindleWidget,
        'visualizer': VisualizerWidget,
        'secondary': SecondaryFunctionality
    }[name] || null;
};

class WidgetWrapper extends PureComponent {
    widget = null;

    render() {
        const { widgetId } = this.props;

        if (typeof widgetId !== 'string') {
            return null;
        }

        // e.g. "webcam" or "webcam:d8e6352f-80a9-475f-a4f5-3e9197a48a23"
        const name = widgetId.split(':')[0];
        const Widget = getWidgetByName(name);

        if (!Widget) {
            return null;
        }

        return (
            <Widget
                {...this.props}
            />
        );
    }
}

WidgetWrapper.propTypes = {
    widgetId: PropTypes.string.isRequired
};

export default WidgetWrapper;
