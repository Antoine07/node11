// définitions de plusieurs constantes à la fois
import http from "http";
import { readFile } from "fs";
import path from "path";

const urls = { "": "./views/home.html", users: "./views/users.html" };

http
  .createServer(function (req, res) {
    const url = req.url.replace("/", "");
    const fileName = urls[url] || '404.html'; 

    console.log(fileName);

    // dirname donne le chemin absolu pour trouver le fichier
    // ici la politique des urls indiquera le chemin à suivre pour récupérer le fichier
    readFile(fileName, (err, data) => {
      // on gère les erreurs et surtout on retourne une page 404 si il y a un problème

      if (err) {
        res.writeHead(404);
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404</title>
        </head>
        <body>
            <h1>Page Not Found 404</h1>
        </body>
        </html>
        `);
        res.end();
        // Il ne faut oublier de sortir de la fonction pour ne pas exécuter la suite du script
        return;
      }
      // si tout se passe bien on retourne les données en indiquant que tout c'est bien passé
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);
