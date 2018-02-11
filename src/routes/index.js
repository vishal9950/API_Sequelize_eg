const testServer = require('./testServer');
const ratings = require('./ratings');
const store = require('./store');

module.exports = [].concat(testServer).concat(ratings).concat(store);
