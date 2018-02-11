const rp = require('request-promise');
const Models = require('../../models');

const getHTTPReq = (url) => {
  const promise = rp(url);
  return promise;
};

const getAllBooksWithRatings = (allBooks) => {
  const promiseArray = [];
  for (let i = 0; i < allBooks.length; i += 1) {
    const getRatingsAPI = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
    const promise = getHTTPReq(`${getRatingsAPI}${allBooks[i].bookID}`);
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
    const allBooksNew = allBooks.map(book => ({
      author: book.Author,
      bookID: book.id,
      name: book.Name,
    }));

    const allBooksWithRatingsPromise = getAllBooksWithRatings(allBooksNew);
    allBooksWithRatingsPromise.then(allBooksWithRatings => new Promise(() => {
      Models.books.destroy({ truncate: true });
      Models.books.bulkCreate(allBooksWithRatings);
    }).then(() => {
      reply('Books Enterred!').code(201);
    }));
  });
};

// const routeOptions = () => [{
//   path: '/ratings',
//   method: 'GET',
//   handler,
// }];

module.exports = {
  path: '/store',
  method: 'POST',
  handler,
};
