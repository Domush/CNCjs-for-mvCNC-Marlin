import i18n from 'app/lib/i18n';

export const required = (value) => (value ? undefined : i18n._('This field is required.'));
