var webpack = require('webpack');

var environments = {
  development: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {}
          }]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!stylus-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    },
    devServer: {
      port: 3000
    }
  },

  production: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  }
}

module.exports = environments[process.env.NODE_ENV] || environments.development;
