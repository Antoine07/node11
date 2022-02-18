# Sujet 01 Calculator

Créez une calculatrice avec mémoire en suivant le modèle ci-dessous :

```text

    [Home] [Memory]

    Number1 : []
    Number2 : []

    button Add
    button Mult
    button Reset <-- permettra de vider la mémoire afficher sur la page Memory  

[Resultat] <-- Affichez le résultat
```

## Contraintes

1. Utiliez Node.js ainsi que ejs pour la gestion du templating. Organisez l'application au minimun comme suit :

```text
app/
    assets/
        css/
        favicon.ico
    views/
    package.json
    app.js
    server.js
```

2. Utilisez le module querystring pour récupérer facilement les données du formulaire :

```js
const { parse } = require('querystring');

parse(body); // Objet litteral
```

3. Vous pouvez également utiliser un fichier utils.js pour mettre la logique algorithmique.