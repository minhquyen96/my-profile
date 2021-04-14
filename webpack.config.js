const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, '/src/index.js')],
  output: {
    filename: 'main.js',
    publicPath: "/",
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000
  },
  module:{
    rules:[{
      test: /\.js|.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'sass-loader'
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|jpg|mp4|ttf|pdf|TTF|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: { esModule: false }
          }
        ]
      }]
  },
  plugins:[
    new HWP(
      {template: path.join(__dirname,'public/index.html'), minify: false}
    )
  ],
}
