const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'), // 项目中总入口文件，
  output: {
    path: path.join(__dirname, 'dist'), // 所有文件打包后输出到dist/
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        // 使用vue-loader解析.vue文件
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}