import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig from './webpack.config.base';
import autoprefixer from 'autoprefixer'

const config = {
  ...baseConfig,

  devtool: 'source-map',

  entry: './app/index',

  output: {
    ...baseConfig.output,

    publicPath: '../dist/'
  },

  module: {
    ...baseConfig.module,

    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css'
        )
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap',
        )
      }
    ]
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  postcss: function () {
    return [autoprefixer]
  },

  target: 'electron-renderer'
};

export default config;
