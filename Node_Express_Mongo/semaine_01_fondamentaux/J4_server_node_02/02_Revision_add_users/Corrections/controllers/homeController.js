import { renderFile } from "ejs";
import { readFileSync, writeFileSync } from "fs";
import { parse } from "querystring";

import "dotenv/config";

const { APP_HOST: hostname, APP_PORT: port } = process.env;

export default (req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    renderFile("./views/home.ejs", (err, str) => {
      res.write(str);
      res.end();
    });

    return;
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

    return;
  }
};
