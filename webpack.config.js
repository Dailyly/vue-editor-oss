const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname, NODE_ENV === 'development' ? 'src/main.js' : './index.js'), // 项目中总入口文件，根据环境来
  output: {
    path: path.join(__dirname, 'dist'), // 所有文件打包后输出到dist/
    filename: 'vue-editor-oss.js',
    library: 'vue-editor-oss', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true // 会对UMD的构建过程中的AMD模块进行命名，否则就使用匿名的define
  },
  module: {
    rules: [{
        // 使用vue-loader解析.vue文件
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ //exclude表示忽略node_modules文件夹下的文件，不用转码
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
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin() // 每次build之前可以自动先清除输出文件夹
  ],
  resolve: {
    extensions: [".js", ".vue"]
  },
  devServer: {
    port: 8080
  }
}