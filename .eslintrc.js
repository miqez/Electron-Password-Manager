const { EOL } = require('os');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'linebreak-style': ['error', EOL === '\r\n' ? 'windows' : 'unix'],
  },
};