const http = require("http");
const ejs = require("ejs");
const fs = require('fs');

const hostname = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");

  if (url === "favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });

    res.end();
    return; // pensez à arrêter l'exécution des scripts côté serveur une fois la réponse envoyée.
  }
  
  if (url === "") {
    const template = fs.readFileSync("./views/home.html", "utf8");
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.write(
      ejs.render(template, { students: [{ name: "Alan" }, { name: "Sophie" }] })
    );
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
