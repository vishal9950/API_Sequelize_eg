const rp = require('request-promise');

const handler = (request, reply) => {
  rp('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then((value) => {
    const allBooks = JSON.parse(value).books;
    const promiseArray = [];
    for (let i = 0; i < allBooks.length; i += 1) {
      const promise = rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${allBooks[i].id}`);
      promiseArray.push(promise);
    }
    Promise.all(promiseArray).then((allRatings) => {
      const allBooksWithRatings = allBooks;
      for (let i = 0; i < allBooks.length; i += 1) {
        allBooksWithRatings[i].rating = JSON.parse(allRatings[i]).rating;
      }
      const allBooksWRatingsGrpdByAuthor = allBooksWithRatings.reduce((accumulator, book) => {
        const tempAcc = accumulator;
        (tempAcc[book.Author] = accumulator[book.Author] || []).push(book);
        return tempAcc;
      }, {});
      reply(allBooksWRatingsGrpdByAuthor);
    });
  });
};

module.exports = [{
  path: '/ratings',
  method: 'GET',
  handler,
}];

