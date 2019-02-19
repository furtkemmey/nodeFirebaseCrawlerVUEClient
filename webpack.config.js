const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提煉css文件
var webpack = require('webpack');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "www")
    // publicPath: 'public' //webpack-dev-server
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: [
                  path.resolve(__dirname, "node_modules")
              ],
              // babel 為了更好相容瀏覽器轉ES5
              loader: "babel-loader",// npm i --save-dev babel-core
                                     // npm i --save-dev babel-loader
                                     // npm i --save-dev babel-preset-es2015
              options: {
                  presets: ["es2015"],
                  plugins: ['babel-plugin-transform-object-rest-spread']
              }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
            options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
              },              
              extractCSS: true
            }
          }
      ]
  },
  plugins: [
    new ExtractTextPlugin("style.css") //// 提煉css文件
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  watch: true,
  watchOptions: {
    aggregateTimeout : 300, // 當第一個文件更改，會在重新構建前增加延遲。 這個選項允許webpack 將這段時間內進行的任何其他更改都聚合到一次重新構建裡。 以毫秒為單位
    ignored : /node_modules/ , // 排除目錄
  } 
};
// npm i --save-dev webpack
// npm i --save-dev webpack-dev-server
// package.json -> "server": "webpack-dev-server --content-base ./app -- port 8080"
// npm run server