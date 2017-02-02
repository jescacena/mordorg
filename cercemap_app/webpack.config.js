var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },

  plugins: [
  ],
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'components/Greeter.jsx',
      CerceMapContainer: 'components/CerceMapContainer.jsx',
      SelectorPanel: 'components/SelectorPanel.jsx',
      MapLayer: 'components/MapLayer.jsx',
      SearchBox: 'components/SearchBox.jsx',
      Legend: 'components/Legend.jsx',
      LayersControlExample: 'components/LayersControlExample.jsx',
      locationService: 'api/locationService.jsx'
    },
    extensions: ['','.js','.jsx']
  },

  module: {
    loaders: [
      {
        loader:'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }

};
