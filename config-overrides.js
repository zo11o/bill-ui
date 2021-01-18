const path = require('path');
const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    sourceMap: true,
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true
  }),
);
