import http from "http";
import users from "./users.js";
import { show, shuffle } from "./utils.js";

const hostname = "localhost";
const port = "8080";

const head = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Shuffle</title>
        <style>
         .user{
             background-color: grey;
             list-style : none;
             margin : 1.2rem;
         }
        </style>
    </head>
    <body>
`;

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");

  if (url === "favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });

    res.end();

    return;
  }

  if (url === "") {
    // HEADER de la réponse
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // BODY de la réponse au client
    res.write(head);

    res.write(`
    <h1>Users</h1>
    <nav>
        <a href="/shuffle">Shuffle</a>
    </nav>
    ${show(users)}
`);

    res.write(`
   </body></html>
`);

    res.end();
  }

  if (url === "shuffle") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(head);

    res.write(`
    <h1>Users</h1>
    <nav>
        <a href="/shuffle">Shuffle</a>
    </nav>
    ${shuffle(users)}
`);

    res.write(`
     </body></html>
  `);

    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
