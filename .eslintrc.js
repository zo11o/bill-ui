module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    __REDUX_DEVTOOLS_EXTENSION__: true,
  },
  rules: {
    "no-underscore-dangle": ["error", {"allow": ["__REDUX_DEVTOOLS_EXTENSION__"]}]
  }
};
