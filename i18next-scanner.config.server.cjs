const fs = require('fs');
const chalk = require('chalk');
const { createCommons: createCommons } = require('simport');

const _languages = require('./build.config.cjs');
const languages = _languages.languages;

module.exports = {
  options: {
    debug: false,
    removeUnusedKeys: false,
    sort: false,
    func: {
      list: ['i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'I18n',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: function (ns, value) {
        return value;
      },
    },
    lngs: languages,
    ns: [
      'resource', // default
    ],
    defaultNs: 'resource',
    defaultValue: '__L10N__', // to indicate that a default value has not been defined for the key
    resource: {
      loadPath: 'src/server/i18n/{{lng}}/{{ns}}.json',
      savePath: 'src/server/i18n/{{lng}}/{{ns}}.json', // or 'src/server/i18n/${lng}/${ns}.saveAll.json'
      jsonIndent: 2,
    },
    nsSeparator: ':', // namespace separator
    keySeparator: '.', // key separator
    pluralSeparator: '_', // plural separator
    contextSeparator: '_', // context separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },

  transform: function (file, enc, done) {
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ['i18n._', 'i18n.__'] }, (key, options) => {
      parser.set(key, {
        ...options,
        nsSeparator: false,
        keySeparator: false,
      });
      ++count;
    });

    if (count > 0) {
      console.log(
        `[i18next-scanner] transform: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`
      );
    }

    done();
  },
};
