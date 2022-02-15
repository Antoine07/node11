import readline from "readline";
import students from "./students.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("OHAI> ");
rl.prompt();

rl.on("line", line => {

    let name = line.toString().trim().toLocaleLowerCase();
    name = name[0].toLocaleUpperCase() + name.slice(1);

    if(students.includes(name)){
        console.log(`Vous avez bien trouvé un nom dans la liste ${name}`);

        rl.close();

        return;
    }

    console.log(`C'est raté ! Essayez encore`);
    rl.prompt();

}).on("close", () => {
    process.exit(0);
})