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
    'import/no-cycle': 'off',
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
