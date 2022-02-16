import http from 'http';

import { readFileSync } from 'fs'

// sur votre machine adresse locale
const hostname = "localhost";
// port
const port = "8080";

const server = http.createServer((req, res) => {
    // on écrit définit la réponse qui sera envoyé au client qui visitera la page Web
    // status de la réponse 200 et le type de la réponse
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const { players } = JSON.parse( readFileSync('./dump.json', 'utf8') );

  let html = '';

  for(const { name, score } of players ){
    html += `<p>Player ${name} score: ${score}</p>`
  }

  res.write(`
  <html><head></head><body><h1>Hello Server Node</h1>${html}</body></html>`); 
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});