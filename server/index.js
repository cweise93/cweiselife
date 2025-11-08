const http = require('http');

const config = require('./config');
const app = require('./app');
const createSocketServer = require('./sockets');

const server = http.createServer(app);
const io = createSocketServer(server);

const { host, port } = config;

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception', error);
});

server.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port} (env: ${config.env})`);
});

module.exports = { app, server, io };
