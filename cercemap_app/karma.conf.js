const webpackConfig = require('webpack.config.js');

process.chdir('./cercemap_app');

module.exports = function (config) {
  config.set({
  //  browsers: ['PhantomJS'],  // Phantom doesnt have support for ES6 promises
    basePath: './cercemap_app',
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [
      'node_modules/leaflet/dist/leaflet.js',
      './cercemap_app/tests/**/*.test.jsx',
      './cercemap_app/public/js/leaflet.awesome-markers.min.js'
    ],
    preprocessors: {
      './cercemap_app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }

  });
};
