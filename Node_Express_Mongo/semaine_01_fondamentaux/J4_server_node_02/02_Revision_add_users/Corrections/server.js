import http from "http";
import { readFileSync } from "fs";

const hostname = "localhost";
const port = "8080";
const names = init.names;

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");

  if (url === "" && req.method === 'GET') {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end( );

    return;
  }

  if (url === "" && req.method === 'POST') {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end( );

    return;
  }

  if (url === "favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();

    return;
  }


  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ error: "404 Not Found" }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
