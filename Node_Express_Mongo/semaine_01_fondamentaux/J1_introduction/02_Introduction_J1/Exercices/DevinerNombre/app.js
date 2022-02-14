/*
constantes et variables
*/

import { init, numberSearch } from './config.js';

let count = 0;

const { attempt, max, min } = init;

const numberS = numberSearch(min, max);

console.log(`Vous devez commencer le jeu en choisissant un nombre compris entre ${min} et ${max}`);

process.stdin.on("data", chunk => {
    // on conste les données pour récupérer un nombre
    const number = parseInt(chunk);

    if(number == '' || isNaN(number) ){
        console.log("Attention vous devez proposer un nombre");
    }

    if(count > attempt){
        console.log(`Vous avez fait ${count} tentatives, c'est terminé`);

        process.exit(0); 
    }

    count++;

    if(number > numberS){
        console.log(`Le nombre rechercher est inférieur à ${number}`);
    }else if( number < numberS){
        console.log(`Le nombre rechercher est supérieur à ${number}`);
    }else{
        console.log(`Bravo vous avez tourvé le nombre ${numberS} en ${count} `);

        process.exit(0);
    }
    
})