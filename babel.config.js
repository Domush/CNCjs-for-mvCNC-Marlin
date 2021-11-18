module.exports = {
    extends: '@trendmicro/babel-config',
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        'lodash',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-syntax-export-default-from'
    ]
};
