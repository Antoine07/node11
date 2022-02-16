import readline from "readline";
import { readFileSync } from 'fs';
import { run, state } from "./game.js";
const OPTIONS = ["start", "stop"];
let stop = false ;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
Pour arrêter Chiffoumi tapez stop. Proposez un choix parmis les suivants : ${state.elems.join(
  " "
)} 
`);

rl.setPrompt("OHAI> ");
rl.prompt();


rl.on("line", (line) => {
  const choice = line.trim().toLocaleLowerCase();

  if(line === 'stop'){
    stop = true;
    rl.close();

    return ;
  }

  if (state.elems.includes(choice) === false) {
    console.log(`Attention ${line} n'est pas une bonne option`);
    rl.prompt();

    return;
  }

  if (state.elems.includes(choice)) {
    const state = run(choice);

    if(state.statusGame === false){

        rl.close();

        return;
    }

    const { players } = state;

    // nombre de coup(s) restants
    console.log(`Il vous reste ${state.max - state.count} `)

    if (players[0].status == players[1].status) {
      console.log(`Egalité, rejouez : `);
      rl.prompt();

      return;
    }

    if (players[0].status) {
      console.log(
        `Vous avez gagné le computer à choisi : ${players[1].choice} et vous ${players[0].choice}, Faites un nouveau choix : 
        `
      );
      rl.prompt();
    } else {
      console.log(
        `Vous avez perdu le computer à choisi : ${players[1].choice} et vous ${players[0].choice}, Faites un nouveau choix : 
        `
      );
      rl.prompt();
    }
  }
});


rl.on('close', () => {
    readFileSync(state.dump, 'utf8');

    if(stop){
        console.log(`Vous avez arrêté le jeu ...`)
    }

    console.log(state);

    process.exit(0);
})