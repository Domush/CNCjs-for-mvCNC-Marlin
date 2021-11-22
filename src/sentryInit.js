const { createCommons: createCommons } = require('simport');

const { __filename, __dirname, require } = createCommons(import.meta.url);

const Sentry = require('@sentry/electron');

Sentry.init({ dsn: 'https://c09ff263997c4a47ba22b3c948f19734@o558751.ingest.sentry.io/5692684' });
