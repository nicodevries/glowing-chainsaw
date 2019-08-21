const path = require('path');

module.exports = {
  entry: './js/src/game.js',
  output: {
    filename: 'theGame.js',
    path: path.resolve(__dirname, 'dist')
  }
};