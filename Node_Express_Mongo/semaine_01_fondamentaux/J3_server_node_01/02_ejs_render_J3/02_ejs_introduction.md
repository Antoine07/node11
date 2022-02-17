# Templating ejs

On utilise souvent des fichiers statiques pour servir des vues. Nous allons utiliser une librairie JS afin de pouvoir passer des données à la vue. Nous verrons plus tard dans le cours comment gérer des layouts et vues composites.

## 01 Exercice application ejs

Dans le projet Node.js "render_ejs" installez le module suivant :

```js
npm install ejs --save
```

Créez la vue home.html, placez cette vue dans un dossier views, puis dans le script du serveur vous passerez les données à la vue de la manière sjivante

```js
const http = require("http");
const ejs = require("ejs");
const fs = require('fs');

const hostname = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");
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
```
