import http from "http";
import { readFileSync } from "fs";
import { avg, prepareData, init } from "./utils.js";

const hostname = "localhost";
const port = "8080";
const names = init.names;

// on récupère tous les users en amont
prepareData();

const server = http.createServer((req, res) => {
  const url = req.url.replace("search/", "").replace("/", "");

  if (url === "") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "API JSON",
        action: {
          all: "tous les étudiants",
          "search/[name]": "affiche un édutiant",
        },
      })
    );

    return;
  }

  if (url === "favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();

    return;
  }

  if (url === "all") {
    const all = JSON.parse(readFileSync("./Data/all.json", "utf-8"));
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(all));

    return;
  }

  if (names.includes(url) === true) {
    const student = JSON.parse(readFileSync(`./Data/${url}.json`, "utf-8"));

    student.avg =avg(student.notes);

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(student));

    return;
  }

  // 404
  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ error: "404 Not Found" }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
