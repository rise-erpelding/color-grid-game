module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
  overrides: [
    {
      files: [
        '**/src/**/*.test.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
