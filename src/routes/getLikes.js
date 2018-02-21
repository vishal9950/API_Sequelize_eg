const handler = require('../controllers/getLikesHandler');

module.exports = {
  path: '/likes',
  method: 'GET',
  handler,
};

