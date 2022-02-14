// Module natif de Node.js
const os = require('os');

console.log(os.userInfo());

const cpus = os.cpus().length;

console.log(
  `Cet ordinateur appartient à il a ${cpus} CPU.`
);