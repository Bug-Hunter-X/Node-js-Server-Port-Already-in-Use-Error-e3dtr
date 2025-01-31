const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
let currentPort = port;

function startServer() {
  server.listen(currentPort, () => {
    console.log(`Server is running on port ${currentPort}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${currentPort} is already in use. Trying next port...`);
      currentPort++;
      if (currentPort <= port + 10) { // Try up to 10 additional ports
          startServer();
      } else {
          console.error('All ports in range are in use.');
          process.exit(1);
      }
    } else {
      console.error(`Failed to start server: ${err}`);
      process.exit(1);
    }
  });
}

startServer();