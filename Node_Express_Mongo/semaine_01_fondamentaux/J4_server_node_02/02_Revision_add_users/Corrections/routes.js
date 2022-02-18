import { readFileSync } from "fs";
import { parse } from "querystring";
import ejs from "ejs";
import "dotenv/config";

const { APP_HOST: hostname, APP_PORT: port } = process.env;

const students = [
  { name: "Sonia", age: 45 },
  { name: "Antoine", age: 50 },
];

export default (req, res) => {
  const url = req.url.replace("/", "");

  switch (url) {
    case "favicon.ico":
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end();
      break;

    case "":
      if (req.method === "GET") {
        console.log(students);
        const home = readFileSync("./views/home.ejs", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(ejs.render(home));
        res.end();

        break;
      }

      if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
          body += data.toString();
        });

        req.on("end", () => {
          const { name, age } = parse(body);
          students.push({ name, age: parseInt(age) });
          res.writeHead(302, { Location: `http://${hostname}:${port}` });

          res.end();
        });

        break;
      }

    case "students":
      const students_tpl = readFileSync("./views/students.ejs", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(ejs.render(students_tpl, { students }));

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
