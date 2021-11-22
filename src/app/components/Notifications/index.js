const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

import('@trendmicro/react-notifications/dist/react-notifications.css');

export { Notification, ToastNotification } from '@trendmicro/react-notifications';
