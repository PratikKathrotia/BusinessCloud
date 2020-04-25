const app = require('./backend/app');
const debug = require('debug')('node-angular');
const http = require('http');

const normalizePort = (val) => {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = (error) => {
  process.exit(1);
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe${addr}` : `port${port}`;
  debug(`listenign on ${bind}`);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
