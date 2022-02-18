import http from "http";
import "dotenv/config";

import routes from './routes.js';

const { APP_HOST: hostname, APP_PORT: port } = process.env;

const server = http.createServer(routes);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
