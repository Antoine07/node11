import "dotenv/config";

const { PRECISION } = process.env;

export const avg = (notes) => {
  const len = notes.length;

  if (len === 0) {
    throw new Error("On ne peut pas diviser par zéro");

    return;
  }

  const sum = notes.reduce((acc, curr) => acc + curr);

  return Math.floor((sum / len) * PRECISION) / PRECISION;
};

export const searchName = (name, students) => {
  return students.find(
    (student) => student.name.toLowerCase() === name.toLowerCase()
  );
};
