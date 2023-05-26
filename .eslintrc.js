module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'table',
        'model',
        'init',
        'defaults',
        'keys',
        'collection',
      ],
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {}, // See https://github.com/benmosher/eslint-plugin-import/issues/1396
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  overrides: [
    {
      files: 'tests/**/*.js',
      env: {
        jest: true,
      },
    },
  ],
};
