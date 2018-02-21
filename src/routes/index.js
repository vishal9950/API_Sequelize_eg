const testServer = require('./testServer');
const ratings = require('./ratings');
const store = require('./store');
const like = require('./like');
const getBooks = require('./getBooks');

module.exports = [].concat(testServer, ratings, store, like, getBooks);
