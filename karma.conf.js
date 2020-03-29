const webpack = require('webpack')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--disable-site-isolation-trials']
      }
    },

    singleRun: true,

    frameworks: ['jasmine'],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './unit-test.webpack.js'
    ],

    preprocessors: {
      './unit-test.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'spec' ],

    plugins: [
      require('karma-es6-shim'),
      require('karma-requirejs'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require("karma-chrome-launcher"),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],

    webpack: {
      mode:'none',
      devtool: 'inline-source-map',
      module: {
        rules: [          
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ]
      },
      resolve: {
        // modulesDirectories: [
        //   'components',
        //   'node_modules'
        // ],
        extensions: ['*', '.json', '.js']
      },
      plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
      ]
    },

    webpackServer: {
      noInfo: true
    },

    transports: ['polling']    
  })
}