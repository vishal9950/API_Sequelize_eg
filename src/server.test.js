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
});

