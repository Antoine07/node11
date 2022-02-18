# QCM

## Qestion 01

A quoi sert la commande suivante ?

```bash
npm init
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Elle sert à installer un package nommé init.

[ ] Elle sert à visualiser l'ensemble des packages installés.

[ ] Elle sert à initialiser un projet Node.js

## Question 02

Quel est le module natif ci-dessous de Node.js, essayez de le définir ?

```bash
process
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Il fournit de l'information et un contôle sur le process courant Node.js.

[ ] Il fournit de l'information sur le nombre de module(s) installé(s) dans le dossier node_modules.

[ ] Il vérifie que l'indentation du code de votre application est correct.

[ ] Il vérifie que votre projet est correctement structuré au niveau du nommage de vos fichiers et dossiers.

## Question 03

Dans le module js suivant il existe une méthode **readFile** comment fonctionne-t-elle ?

```js
const js = require("js");
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Cette fonction lit des fichiers de manière synchrone comme suit :

```js
const data = fs.readFile("/Data/titanic.txt", "utf8");
console.log(data);
```

[ ] Cette fonction lit des fichiers de manière asynchrone comme suit :

```js
fs.readFile("/Data/titanic.txt", "utf8", (err, data) => {
  console.log(data);
});
```

## Question 04

Comment exportez-vous une valeur constante **name** qui vaut "Alan" se trouvant dans un fichier donnée JS dans le fichier de votre serveur server.js ?

Remarque on a ajouté dans le projet Node.js dans le fichier package.json "type" : "module"


Répondez en choisissant une ou plusieurs bonne(s) réponse ci-dessous.

[ ] 1

```js
export name;
```

[ ] 2

```js
export const name;
```

[ ] 3

```js
export default name;
```

[ ] 4

```js
export fonction() { return name ;}
```

## Question 05

Comment importez-vous une constante name dans le fichier server.js depuis un export d'un fichier fais comme suit :

```js

export const name =  "Alan";

```

Remarque on a ajouté dans le projet Node.js dans le fichier package.json "type" : "module"

Répondez en choisissant une seule ou plusieurs bonne(s) réponse(s) ci-dessous.

[ ] 1

```js
import { name } from './utils'; 
console.log(name);
```

[ ] 2

```js
import { name } from './utils.js'; 
console.log(name);
```

[ ] 3

```js
import  name  from './utils'; 
console.log(name);
```

[ ] 4

```js
from 'utils.js' import { name }
console.log(name);
```

## Question 06

Avec quelle commande, dans votre console, et dans le dossier où se trouve le fichier server.js, vous pouvez lancer le serveur suivant ?

```js
const http = require("http");
const hostname = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hello, World!"); // méthode write et end
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

```bash
./server.js
```

[ ] 2

```js
node server.js
```

[ ] 3

```js
node run server.js
```

[ ] 4

```js
npm server.js
```

## Question 07

Que fais la commande suivante ? L'option --save installe cette dépendance en tant que dépendance de l'application.

```js
npm install ejs --save
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Elle installe un serveur express.

[ ] Elle installe une base de données ejs.

[ ] Elle installe moteur de templating.

[ ] Elle installe un module de tests unitaires.

## Question 08

Dans un serveur Node.js, si vous retournez un fichier JSON au client, quels headers devez-vous envoyer à ce dernier.

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  // ...
});
```

[ ] 2

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "json");
  // ...
});
```

[ ] 3

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application");
  // ...
});
```

[ ] 4

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // ...
});
```

## Question 09

Comment traitez-vous et récupérez-vous les données de type POST dans votre serveur ?

Répondez en choisissant une seule et bonne réponse ci-dessous. Dans le serveur on aurait :

[ ] 1

```js
if (req.method === "POST") {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    console.log(body);
  });
}
```

[ ] 2

```js
if (req.method === "POST") {
  let body = "";
  req.on("data", (data) => {
    body += data;

    console.log(data);
  });
}
```

[ ] 3

```js
if (req.method === "POST") {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", (data) => {
    console.log(data);
  });
}
```

## Question 10

En supposant que vous avez un lien CSS dans un fichier dans une page HTML que vous servez avec Node.js au client :

```html
<link href="/bootstrap" rel="stylesheet" type="text/css" />
```

Et si le fichier sur le serveur se trouve dans les dossiers suivants :

```txt
./assets/css/bootstrap.min.css
```

Comment allez-vous envoyer ce fichier au client pour que les CSS se téléchargent correctement dans la page HTML ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

```js
const server = http.createServer((req, res) => {
  if (url === "bootstrap") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("./assets/css/bootstrap.min.css"); // on envoit le fichier au client
    res.write(css);
    res.end();

    return;
  }
});
```

[ ] 2

```js
const server = http.createServer((req, res) => {
  if (url === "bootstrap") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("/bootstrap"); // on envoit le fichier au client
    res.write(css);
    res.end();

    return;
  }
});
```

[ ] 3

```js
const server = http.createServer((req, res) => {
  if (url === "bootstrap") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const css = fs.readFileSync("./assets/css/bootstrap.min.css"); // on envoit le fichier au client
    res.write(css);
    res.end();

    return;
  }
});
```

## Question 11

Comment ordonnez par ordre croissant des numériques dans tableau de données en JS

```js
const numbers = [11, 100, 9, 7, 98, 76];
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

```js
numbers.sort();

console.log(numbers);
```

[ ] 2

```js
numbers.sort(a - b);

console.log(numbers);
```

[ ] 3

```js
numbers.sort((a, b) => a - b);

console.log(numbers);
```

[ ] 4

```js
numbers.sort((a, b) => b - a);

console.log(numbers);
```

## Question 12

On souhaites faire une copie d'un tableau simple donnez la bonne méthode.

```js
const numbers = [11, 100, 9, 7, 98, 76];
```

Répondez en choisissant une ou plusieurs bonnes réponses ci-dessous :

[ ] 1

```js
const copyNumbers = numbers;
```

[ ] 2

```js
const copyNumbers = numbers.copy();
```

[ ] 3

```js
const copyNumbers = [...numbers];
```

[ ] 4

```js
const copyNumbers = numbers.map((number) => number);
```

## Question 13

Comment pouvez-vous mélanger des numériques dans un tableau ?

```js
const numbers = [11, 100, 9, 7, 98, 76];
```

Répondez en choisissant une ou plusieurs bonnes réponses ci-dessous :

[ ] 1

```js
numbers.sort(-1);
```

[ ] 2

```js
numbers.sort(Math.random() - 0.5);
```

[ ] 3

```js
numbers.sort((_) => Math.random() - 0.5);
```

[ ] 4

```js
let len = numbers.length;
let count = len;
while (count > 0) {
  let [i, j] = [
    Math.floor(Math.random() * len),
    Math.floor(Math.random() * len),
  ];

  while (i === j) {
    [i, j] = [Math.floor(Math.random() * len), Math.floor(Math.random() * len)];
  }
  numbers[i] = numbers[j];
  numbers[j] = numbers[i];
  count--;
}
```

## Question 14

Qu'affiche le script suivant ?

```js
const state1 = { a: 1, b : 2 };
const state2 = { a: 10, c : 4}

const STATE = { ...state1, ...state2 };

console.log(STATE);
```

Répondez en choisissant une ou plusieurs bonnes réponses ci-dessous :

[ ] 1

```js
{ a : 11, b : 2, c : 4}
```

[ ] 2

```js
{ a : 10, b : 2, c : 4}
```

[ ] 3

```js
{ a : 1, b : 2, c : 4}
```

[ ] 4

```js
{ c : 4}
```

