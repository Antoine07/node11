
// ce qui rentre depuis la console en data dans le script chunk tout ce que l'on tape dans la console
process.stdin.on('data', (chunk) => {            
    const text = chunk.toString().replace("\n", "");

    // on affiche ce qui est lu depuis la console
    console.log("MESSAGE DE LA CONSOLE ...", text);

    // Un algorithme pour faire quelque chose en fonction de ce que l'on va lire
    console.log(text == 'j');

    if(text == 'j') process.exit(0);
  
  });
