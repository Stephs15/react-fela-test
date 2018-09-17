const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');

module.exports = (env) => {
  const env2 = dotenv.config().parsed;
  const themePath = path.join(__dirname, 'theme/' + env.THEME + '.js');
  console.log(themePath);
  const envKeys = Object.keys(env2).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env2[next]);
    return prev;
  }, {});
  
  return {
    mode: 'development',
    cache: true,
    entry: {
      app: './client.js',
    },
    output: {
      path: path.join(__dirname),
      publicPath: '/',
      filename: 'bundle.js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        // {
        //   test: /\.svg$/,
        //   use: [
        //     {
        //       loader: 'svg-sprite-loader'
        //     },
        //     {
        //       loader: 'svgo-loader',
        //       options: {
        //         plugins: [
        //           {
        //             removeAttrs: {
        //               attrs: 'stroke.*'
        //             }
        //           }
        //         ]
        //       }
        //     }
        //   ],
        //   include: [
        //     path.resolve('./assets/icons'),
        //   ]
        // }
      ]
    },
    resolve: {
      alias: {
        Theme: themePath
      }
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new SpriteLoaderPlugin({
        plainSprite: true
      })
    ]
  }
  
}
