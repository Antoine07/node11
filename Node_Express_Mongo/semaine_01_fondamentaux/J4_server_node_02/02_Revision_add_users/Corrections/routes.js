import { readFileSync, writeFileSync } from "fs";
import { parse } from "querystring";
import { renderFile } from "ejs";
import "dotenv/config";

const { APP_HOST: hostname, APP_PORT: port } = process.env;

/**
 * TODO bonne pratique faire des controllers pour séparer les responsabilités
 */

export default (req, res) => {
  const url = req.url.replace("/", "");

  switch (url) {
    case "favicon.ico":
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end();
      break;

    case "":
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });

        renderFile("./views/home.ejs", (err, str) => {
          res.write(str);
          res.end();
        });

        break;
      }

      if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
          body += data.toString();
        });

        req.on("end", () => {
          const { name, age } = parse(body);

          let newStudents = JSON.parse(
            readFileSync("./Data/students.json", "utf-8")
          ).students;

          newStudents.push({ name, age, id: Date.now() });

          writeFileSync(
            "./Data/students.json",
            JSON.stringify({ students: newStudents }),
            "utf-8"
          );

          res.writeHead(302, { Location: `http://${hostname}:${port}` });

          res.end();
        });

        break;
      }

    case "students":
      res.writeHead(200, { "Content-Type": "text/html" });
      // EJS qui fait sa propre lecture de fichier et c'est important de passer par renderFile pour utiliser les vues partielles
      renderFile(
        "./views/students.ejs",
        {
          students: JSON.parse(readFileSync("./Data/students.json", "utf-8"))
            .students,
        },
        (err, str) => {
          res.write(str);

          res.end();
        }
      );

      break;

    case "delete":
      if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
          body += data.toString();
        });

        req.on("end", () => {
          const { id } = parse(body);

          const students = JSON.parse(
            readFileSync("./Data/students.json", "utf-8")
          ).students.filter((s) => s.id != id);

          writeFileSync(
            "./Data/students.json",
            JSON.stringify({ students }),
            "utf-8"
          );

          res.writeHead(302, { Location: `http://${hostname}:${port}` });

          res.end();
        });

        break;
      }

      // si on arrivait en Get je redirige vers la page HOME
      res.writeHead(302, { Location: `http://${hostname}:${port}` });
      res.end();

      break;

    case "bootstrap":
      res.writeHead(200, { "Content-Type": "text/css" });
      const css = readFileSync("./assets/css/bootstrap.min.css"); // on envoit le fichier au client
      res.write(css);
      res.end();

      return;

    default:
      res.writeHead(404, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ error: "404 Not Found" }));
  }
};
