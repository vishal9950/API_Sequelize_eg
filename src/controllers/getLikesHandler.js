const Models = require('../../models');

const handler = (request, response) => {
  Models.likes.findAll().then((allLikes) => {
    response(allLikes).code(200);
  });
};

module.exports = handler;

