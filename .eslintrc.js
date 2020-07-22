module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
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
      vue: 'never'
    }],
  },
  settings: {
    'import/resolver': {
      node: {}, // See https://github.com/benmosher/eslint-plugin-import/issues/1396
      webpack: {
        config: './webpack.config.js'
      }
    }
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
