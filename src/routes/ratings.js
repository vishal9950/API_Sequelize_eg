const rp = require('request-promise');

const getHTTPReq = (url) => {
  const promise = rp(url);
  return promise;
};

const getAllBooksWithRatings = (allBooks) => {
  const promiseArray = [];
  for (let i = 0; i < allBooks.length; i += 1) {
    const getRatingsAPI = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
    const promise = getHTTPReq(`${getRatingsAPI}${allBooks[i].id}`);
    promiseArray.push(promise);
  }
  return Promise.all(promiseArray).then((allRatings) => {
    const allBooksWithRatings = allBooks;
    for (let i = 0; i < allBooks.length; i += 1) {
      allBooksWithRatings[i].rating = JSON.parse(allRatings[i]).rating;
    }
    return allBooksWithRatings;
  });
};

const handler = (request, reply) => {
  const getBooksAPI = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  getHTTPReq(getBooksAPI).then((value) => {
    const allBooks = JSON.parse(value).books;
    // const promiseArray = getRatings(allBooks);
    const allBooksWithRatingsPromise = getAllBooksWithRatings(allBooks);
    allBooksWithRatingsPromise.then((allBooksWithRatings) => {
      const allBooksWRatingsGrpdByAuthor = allBooksWithRatings.reduce((accumulator, book) => {
        const tempAcc = accumulator;
        (tempAcc[book.Author] = accumulator[book.Author] || []).push(book);
        return tempAcc;
      }, {});
      reply(allBooksWRatingsGrpdByAuthor).code(200);
    });
  });
};

// const routeOptions = () => [{
//   path: '/ratings',
//   method: 'GET',
//   handler,
// }];

module.exports = {
  path: '/ratings',
  method: 'GET',
  handler,
};
