const { Server } = require('socket.io');
const config = require('../config');

const buildCorsConfig = () => {
  if (!config.corsOrigins.length) {
    return { origin: '*' };
  }

  return {
    origin: config.corsOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  };
};

module.exports = function createSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: buildCorsConfig(),
    path: '/ws'
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    const heartbeat = setInterval(() => {
      socket.emit('heartbeat', { timestamp: new Date().toISOString() });
    }, 30000);

    socket.on('disconnect', () => {
      clearInterval(heartbeat);
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};
