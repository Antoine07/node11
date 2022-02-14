import fs from "fs";

const data = fs
  .readFileSync("./Data/titanic.txt", "utf8")
  .split(/\r?\n/)
  .filter((d) => d != "")
  .slice(1);

const stat = {
  survived: 0,
  survived_female: 0,
  survived_male: 0,
};

for (const line of data) {
  const [, survived, , , , sex] = line.split(",");

  stat.survived += parseInt(survived);

  if (sex.trim().toLocaleLowerCase() == "female")
    stat.survived_female += parseInt(survived);
  else stat.survived_male += parseInt(survived);
}

console.log(stat);