/* eslint-env node */
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
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
    path: 'public',
    // filename: 'js/bundle.js',
    filename: 'js/main.bundle.js'

  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
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
      SelectorPanel: 'components/SelectorPanel.jsx',
      SidePanel: 'components/SidePanel.jsx',
      IconButton: 'components/IconButton.jsx',
      IconGroup: 'components/IconGroup.jsx',
      LayerList: 'components/LayerList.jsx',
      PoiList: 'components/PoiList.jsx',
      MapLayer: 'components/MapLayer.jsx',
      SearchBox: 'components/SearchBox.jsx',
      LocateAddressForm: 'components/LocateAddressForm.jsx',
      LocateUserPositionForm: 'components/LocateUserPositionForm.jsx',
      Legend: 'components/Legend.jsx',
      Logo: 'components/Logo.jsx',
      Footer: 'components/Footer.jsx',
      LoadingSpinner: 'components/LoadingSpinner.jsx',
      ModalMessage: 'components/ModalMessage.jsx',
      LayersControlExample: 'components/LayersControlExample.jsx',
      LocationService: 'api/LocationService.jsx',
      PlacesService: 'api/PlacesService.jsx',
      GeometryService: 'api/GeometryService.jsx',
      actions: 'actions/actions.jsx',
      reducers: 'reducers/reducers.jsx',
      reducersUtils: 'common/reducersUtils.js',
      MapLayerUtils: 'common/MapLayerUtils.js',
      configureStore: 'store/configureStore.jsx',
      constants: 'common/constants.js',
      globalmocks: 'tests/GlobalMocks.js',
      MockData: 'tests/MockData.js',
      LeafletAwesomeMarkers: 'public/js/leaflet.awesome-markers.js',
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
        loader: 'url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?mimetype=image/svg+xml'
        // loader: 'url?limit=10000&mimetype=image/svg+xml'
        // loader: 'svg-url-loader'
      },
      {
        test: /\.handlebars$/, loader: "handlebars-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devtool: 'source-map'
  // devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

};
