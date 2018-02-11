const Server = require('../../src/server');

describe('Test server for route GET /ratings: ', () => {
  test('Should return statusCode 200: ', (done) => {
    const options = {
      url: 'localhost:8000/ratings',
      method: 'GET',
    };
    Server.inject(options, (request) => {
      expect(request.statusCode).toBe(200);
      done();
    });
  });
});
