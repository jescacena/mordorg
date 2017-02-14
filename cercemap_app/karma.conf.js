const webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
  //  browsers: ['PhantomJS'],  // Phantom doesnt have support for ES6 promises
    browsers: ['Chrome'],
    frameworks: ['mocha'],
    files: [
      'node_modules/leaflet/dist/leaflet.js',
      './tests/**/*.test.jsx',
      'public/js/leaflet.awesome-markers.min.js'
    ],
    preprocessors: {
      './tests/**/*.test.jsx': ['webpack', 'sourcemap']
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
