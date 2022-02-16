import "dotenv/config";
import { writeFileSync } from "fs";

const { SHEET, ROCK, CHISEL, DUMP } = process.env;

// source de vérité 
const initState = {
  elems: [SHEET, ROCK, CHISEL],
  nbElemen: 3,
  players: [
    { name: "user", score: 0, choice: null, status: false },
    { name: "computer", score: 0, choice: null, status: false },
  ],
  count: 0,
  max: 10,
  statusGame: true,
  dump : DUMP
};

const choiceComputer = () =>
  initState.elems[Math.floor(Math.random() * initState.nbElemen)];


export const state  = JSON.parse( JSON.stringify(initState) );

export const run = (choice ) => {
  if (state.count < state.max) {
    const choiceC = choiceComputer();
    state.players[1].choice = choiceC;
    state.players[0].choice = choice;

    state.players[1].status = false;
    state.players[0].status = false;

    // equalité
    if (choice === choiceC) return state;

    if (choice === ROCK) {
      if (choiceC === CHISEL) {
        state.players[0].score++;
        state.players[0].status = true;
      } else {
        state.players[1].score++;
        state.players[1].status = true;
      }
    }

    if (choice === SHEET) {
      if (choiceC === ROCK) {
        state.players[0].score++;
        state.players[0].status = true;
      } else {
        state.players[1].score++;
        state.players[1].status = true;
      }
    }

    if (choice === CHISEL) {
      if (choiceC === SHEET) {
        state.players[0].score++;
        state.players[0].status = true;
      } else {
        state.players[1].score++;
        state.players[1].status = true;
      }
    }

    state.count++;

    return state;
  } else {
    state.statusGame = false;
    writeFileSync(state.dump, JSON.stringify(state), "utf8");

    return state;
  }
};
