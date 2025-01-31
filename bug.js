const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); //This will throw error if port 8080 is already in use
console.log('Server is running on port 8080');