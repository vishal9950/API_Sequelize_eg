const Models = require('../../models');

const handler = (request, response) => {
  Models.likes.findAll({
    attributes: ['bookID', 'likeStatus'],
  }).then((allLikes) => {
    response(allLikes).code(200);
  });
};

module.exports = handler;

