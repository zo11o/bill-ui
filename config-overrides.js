const path = require('path');
const {override, addLessLoader, fixBabelImports} = require('customize-cra')

module.exports = override(
    addLessLoader({
      javascriptEnabled: true,
      ModifyVars: {'@primary-color': '#1DA57A'},
      sourceMap:true,
    }),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
)
