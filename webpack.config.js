var webpack = require('webpack');
var path = require('path');

// Where the bundle will go
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
// Where the jsx is, where the new components are added
var APP_DIR = path.resolve(__dirname, 'client/src'); 

var config = {
  // Starts in entry file, and anything imported in entry file gets added
  entry: APP_DIR + '/app.jsx',
  // Where should the file that it makes go?
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // Use a certain technology to a thing
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;