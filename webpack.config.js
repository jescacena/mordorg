/* eslint-env node */
const webpack = require('webpack');
// const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!leaflet/dist/leaflet.js',
    'script!drmonty-leaflet-awesome-markers/js/leaflet.awesome-markers.js',
    // 'script!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname + '/app',
    filename: 'public/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })

  ],
  resolve: {
    root: __dirname + '/app',
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
  // devtool: 'source-map'
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map'
  // devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

};
