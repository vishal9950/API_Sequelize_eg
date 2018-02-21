const Server = require('./server');

describe('Test server: ', () => {
  test('Should return the statusCode 200: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the result \'Working!\': ', (done) => {
    Server.inject('/', (response) => {
      expect(response.result).toBe('Working!');
      done();
    });
  });

  test('Should return the statusCode 200: ', (done) => {
    Server.inject('/books', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the statusCode 200: ', (done) => {
    Server.inject('/likes', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

// jest.setTimeout(50000);
// describe('Test server POST /store: ', () => {
//   test('should return statusCode 201: ', (done) => {
//     const options = {
//       url: 'localhost:8000/store',
//       method: 'POST',
//     };
//     Server.inject(options, (response) => {
//       expect(response.statusCode).toBe(200);
//       done();
//     });
//   });
// });

