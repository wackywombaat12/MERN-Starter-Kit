var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   devtool: 'source-map',
   module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
     {
       test: /\.(jsx|js)?$/,
       exclude: /node_modules/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // Transpiles JSX and ES6
         }
       }]
     },{
      test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      }
    ],

  }
};

module.exports = config;