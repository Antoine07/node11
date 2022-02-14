
// Importez le fichier utils.js

/**
 * Exercice 
 * 
 * Créez un fichier utils.js dans lequel vous créez une fonction split_str et qui prend une chaîne de caractères et qui renvoie la chaîne dans un tableau. Cette fonctions sera testée dans le fichier index.js, utilisez nodemon pour plus de souplesse dans ce développement.
 * 
 * split_str("Bonjour")
 * ['B', 'o', 'n', 'j', 'o', 'u', 'r']
 */

// importer un fichier 
// utils nom du module
// split_str nom de la fonction 
// const split_str = require('./split_str');

import split_str from './split_str.js';

console.log(split_str('Bonjour le monde !'));

