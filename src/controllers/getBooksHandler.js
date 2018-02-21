const Models = require('../../models');

const handler = (request, response) => {
  console.log('GET /books');
  Models.books.findAll().then((allBooks) => {
    response(allBooks).code(200);
  });
};

module.exports = handler;

