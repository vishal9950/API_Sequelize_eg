const handler = require('../controllers/getBooksHandler');

module.exports = {
  path: '/books',
  method: 'GET',
  handler,
};

