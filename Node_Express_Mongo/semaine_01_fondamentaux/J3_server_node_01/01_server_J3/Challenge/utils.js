import "dotenv/config";

import { readFileSync, writeFileSync } from "fs";

const { PRECISION, PATH_STUDENTS } = process.env;

export const avg = (notes) => {
  const len = notes.length;

  if (len === 0) {
    throw new Error("On ne peut pas diviser par zéro");

    return;
  }

  const sum = notes.reduce((acc, curr) => acc + curr);

  return Math.floor((sum / len) * PRECISION) / PRECISION;
};

export const prepareData = () => {
  const students = JSON.parse( readFileSync(PATH_STUDENTS, "utf8") ).students;
  students
    .map((student) => {
        student.avg = avg(student.notes);

      return student;
    })
    .sort((u1, u2) => u2.avg - u1.avg); 

    students.map((student, i) => {
        student.ranking = i + 1;

      return student;
    });

    writeFileSync(PATH_STUDENTS, JSON.stringify( { students : students } ), 'utf8');
};

export const init = {
    names : [
        "alan",
        "alice",
        "antoine",
        "clarisse",
        "sonia",
        "bernard",
        "sophie",
      ]
}