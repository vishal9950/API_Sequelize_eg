const testServer = require('./testServer');
const ratings = require('./ratings');
const store = require('./store');
const like = require('./like');

module.exports = [].concat(testServer, ratings, store, like);
