import fs from "fs";
import readline from "readline";
import {avg, searchName } from './utils.js';
const { students } = JSON.parse(fs.readFileSync("../Data/students.json"));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// directement en modifiant les références de l'objet
students.map( student => {
    student.avg = avg(student.notes);

    return student;
});

rl.setPrompt("OHAI> ");
rl.prompt();
rl.on("line", (line) => {
    const name = line.trim();

    const student = searchName(name, students) ;

    if(name == 'stop' || name == 's'){
        rl.close();

        return ;
    }

    if( student ){
        console.log(`La moyenne de l'étudiant ${name} est ${student.avg}`);

        rl.prompt();

        return;
    }

    console.log(`L'étudiant ${name} n'existe pas !`);
    rl.prompt();

});

rl.on('close', () => {
    console.log(`Merci et aurevoir`);

    process.exit(0);
})
