const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: 'localhost',
});

const handler = (response, reply) => {
  reply('Working!');
};

server.route({
  path: '/',
  method: 'GET',
  handler,
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server created at: ', server.info.uri);
  });
}

module.exports = server;
