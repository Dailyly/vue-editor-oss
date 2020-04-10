const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      },
      {
        test: /\.css$/,
        // 要加上style-loader才能正确解析.vue文件里的<style>标签的内容
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 8080
  }
}