const path = require('path');
const { override, addLessLoader, fixBabelImports, addPostcssPlugins, overrideDevServer } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const px2rem = require("postcss-pxtorem")

// 打包配置
// const addCustomize = () => config => {
//   if (process.env.NODE_ENV === 'production') {
//     // 关闭sourceMap
//     config.devtool = false;
//     // 配置打包后的文件位置
//     config.output.path = __dirname + '../dist/demo/';
//     config.output.publicPath = './demo';
//     // 添加js打包gzip配置
//     config.plugins.push(
//       new CompressionWebpackPlugin({
//         test: /\.js$|\.css$/,
//         threshold: 1024,
//       }),
//     )
//   }
//   return config;
// }

// 这个是本地开发时候开启了 easy-mock 的项目链接
const devApiMockHost = "http://localhost:7300/mock/600a3a89e49c512de87884cd/"

// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: devApiMockHost,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      }
    }
  }
}

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
      sourceMap: true,
    }),
    addLessLoader(),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es',
      style: 'css'
    }),
    addPostcssPlugins([px2rem({
      rootValue: 37.5,
      propList: ['*'],
      // minPixelValue: 2,
      // selectorBlackList: ['am-']
    })]),
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
}
