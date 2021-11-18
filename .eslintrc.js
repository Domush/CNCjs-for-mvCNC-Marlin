const path = require('path');

module.exports = {
  extends: 'trendmicro',
  parser: 'babel-eslint',
  parserOptions: {
    'fix': true,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              path.resolve(__dirname, 'src'),
              'node_modules'
            ],
            extensions: ['.js', '.jsx']
          }
        }
      }
    }
  },
  rules: {
    'indent': [0, 2],
    'no-multiple-empty-lines': [0, 0],
    'max-lines-per-function': [1, {
      max: 512,
      skipBlankLines: true,
      skipComments: true
    }],
    'react/jsx-no-bind': [1, {
      allowArrowFunctions: true
    }],
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-did-update-set-state': 0,
    'max-len': 0,
    'no-console': 0
  }
};
