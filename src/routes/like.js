const Models = require('../../models');

const handler = (request, reply) => {
  const bookID = Number(request.params.bookID);
  const likeStatus = Number(request.params.likeStatus);
  console.log(`likeStatus: ${likeStatus}`);
  // Models.likes.destroy({ truncate: true });
  // reply('deleted');
  Models.likes.upsert({
    id: bookID,
    bookID,
    likeStatus,
  }).then((value) => {
    if (value === true) {
      reply('Created!').code(201);
    } else {
      reply('Updated').code(200);
    }
  });
};

module.exports = {
  path: '/like/{bookID}/{likeStatus}',
  method: 'POST',
  handler,
};

