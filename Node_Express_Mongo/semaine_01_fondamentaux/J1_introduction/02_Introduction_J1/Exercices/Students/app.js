import { readFileSync, appendFile, writeFileSync } from "fs";

const students = readFileSync("./Data/students.txt", "utf8")
  .split(/\r?\n/)
  // .slice(1)
  .filter((s) => s != "")
  .map((s, i) => {
    const [note, name, address] = s.split(" ");

    return { note: i > 0 ? parseInt(note) : note, name, address };
  });

const head = students.shift();

console.log(students);

// 1 plus de 17 de moyenne
const studentsMore17 = students.filter((s) => s.note > 17);
console.log(studentsMore17);

// 2 le(s) meilleur(s) étudiant(s)
// Math.max(1, 23, 78, 9 ) --> 78
const maxNote = Math.max(...students.map((s) => s.note));

const bestStudent = students.filter((s) => s.note == maxNote);

console.log(bestStudent);

// Algorithme classique
let [bestSt, note] = [null, 0];

for (const student of students) {
  const { note: n, name, address } = student;

  if (n > note) {
    (note = n), (bestSt = student);
  }
}

console.log(bestSt);

// Méthode reduce la note max


// 3 Ordonnez en fonction des notes

students.sort((s1, s2) => s1.note - s2.note);

console.log(students);

// 4

const newStudents = [
  {
    note: 18,
    name: "Sonia",
    address: "Paris",
  },
  {
    note: 17,
    name: "Clarisse",
    address: "Marseille",
  },
];

// merge des données
const dataW = [head, ...students, ...newStudents]
  .sort((s1, s2) => s1.note - s2.note)
  .map((s, i) => {
    if (i == 0) return `${s.note} ${s.name} ${s.address}`;

    return `${s.note} ${s.name.toUpperCase()} ${s.address}`;
  });

console.log(dataW.join("\n"));

writeFileSync('./Data/new_students.txt', dataW.join("\n"));
