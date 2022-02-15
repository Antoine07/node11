# Readline

Les streams permettent d'optimiser le traitement des données en gérant les flux, par exemple les flux des données en console. Il faut savoir que JS ou Node.js est limité en mémoire (2Gb max). 

L'utilisation des streams permet de gérer des données sans que l'on est besoin de les stocker. Cette notion n'est pas évidente à bien assimiler, il faut du temps pour bien l'appréhender, donc prennez le temps de lire et faire les exercices.

- lecture d'un flux de données en console :

```js
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    
    input = input.toString();

    input.includes('stop') ? process.stdin.pause() : console.log(input);
    
})

process.stdin.on('pause', () => process.stdout.write('end \n'));
```

## Readline

Ce module permet de lire ligne par ligne, par exemple, le contenu d'un fichier. Nous pouvons également l'utiliser pour créer une interface pour gérer les flux d'entrées et de sorties de la console.

```js
const readline = require("readline");

// Création de l'interface de gestion des entrées et sorties, basée sur input et ouput de la console

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("How do you like node ?", answer => {
    console.log(` Your answer ${answer} `);

    // la méthode close permet d'arrêter le processus d'écoute 
    rl.close();
});

```

Vous pouvez utiliser les événements de l'interface de readline. La méthode **on** avec line permet de récupérer les données (flux en entrée) tapez en console.

```js
rl.on('line', (data) => {
});

```

## Exemples plus complet

Voici un exemple complet permettant de capturer tous les événements en console :

```js

// Message dans la console
rl.setPrompt('OHAI> ');
// définit l'invite de commande
rl.prompt();

// écoute tout les événements de la console et récupère le flux en entrée
rl.on('line', (line) =>{
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.prompt();
  // si on fait un Ctrl + c pour arrêter le process
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

```

## 01 Exercice search students

L'utilisateur doit proposer dans le terminal un nom d'étudiant. Dès que l'utilisateur à trouver un nom dans la liste on arrête le processus d'écoute.

La recherche sera insensible à la casse et aux espaces.

```js
const students = ["Alan", "Sonia", "Sophie"];
```

## 02 Exercice rechercher dans un fichier

1. Vous allez lire un fichier puis calculer la moyenne de chaque étudiant. Affichez le nom de l'étudiant, puis donner sa moyenne. Récupérez les données dans le dossier Data le fichier **students.json**.

2. Pensez à gérer le cas où l'on souhaite arrêter l'affichage. Ainsi que le fait que la recherche doit être insensible à la casse. 

3. Gérez les erreurs de saisi.

```js
const fs = require("fs");
const readline = require("readline");
const json = JSON.parse( fs.readFileSync("./Data/students.json") );

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.setPrompt("OHAI> ");
  rl.prompt();
  
  rl.on("line", (line) => {
   
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });
  
```

## 01 Challenge Chiffoumi 

Vous êtes maintenant en autonomie sur Discord et vous devez développer au moins la première partie, voyez les détails suivants 

### Partie 1 obligatoire

Cet exercice est libre, vous devez implémenter le jeu Chifoumi avec les connaissances que nous venons d'aborder. Utilisez readline.

Le jeu du Chifoumi se fera avec deux joueurs créer de manière automatique, par le script.

Affichez une fois le jeu terminé les points gagnés par chaque joueur ainsi que le gagnant de la partie.

### Partie 2 optionnelle 

Si vous le souhaitez vous pouvez développer ce jeu avec un serveur Node.js pour les interactions.


*Nous fairons la correction de ce TP demain matin.*
