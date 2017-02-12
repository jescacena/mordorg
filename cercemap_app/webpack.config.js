/* eslint-env node */
const webpack = require('webpack');
// const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!leaflet/dist/leaflet.js',
    'script!drmonty-leaflet-awesome-markers/js/leaflet.awesome-markers.js',
    // 'script!bootstrap/dist/js/bootstrap.min.js',
    './app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    })

  ],
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'components/Greeter.jsx',
      CerceMapContainer: 'components/CerceMapContainer.jsx',
      // CerceMapContainer2: 'components/CerceMapContainer2.jsx',
      SelectorPanel: 'components/SelectorPanel.jsx',
      IconButton: 'components/IconButton.jsx',
      IconGroup: 'components/IconGroup.jsx',
      LayerList: 'components/LayerList.jsx',
      MapLayer: 'components/MapLayer.jsx',
      SearchBox: 'components/SearchBox.jsx',
      Legend: 'components/Legend.jsx',
      LayersControlExample: 'components/LayersControlExample.jsx',
      LocationService: 'api/LocationService.jsx',
      actions: 'actions/actions.jsx',
      reducers: 'reducers/reducers.jsx',
      reducersUtils: 'common/reducersUtils.js',
      configureStore: 'store/configureStore.jsx',
      constants: 'common/constants.js',
      applicationStyles: 'styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
        // loader: 'svg-url-loader'
      },
      {
        test: /\.handlebars$/, loader: "handlebars-loader"
      }
    ]
  },
  devtool: 'source-map'
  // devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

};
