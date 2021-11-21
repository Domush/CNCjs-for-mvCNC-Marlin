import { createCommons } from 'simport';

const { __filename, __dirname, require } = createCommons(import.meta.url);

export default (options) => {
  const menuTemplate =
    process.platform === 'darwin'
      ? require('./menu-template.darwin').default
      : require('./menu-template.default').default;

  return menuTemplate(options);
};
