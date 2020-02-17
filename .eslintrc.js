module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/', '.vscode/', 'build/', 'out/', '.next/'],
  rules: {},
};
