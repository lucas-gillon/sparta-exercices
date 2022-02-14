import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  let state: number = 0;
  const numbers: Draw = lottery_draw();

  for (let i = 0; i < numbers.length; i++) {
    if (ticket[i] === numbers[i]) {
      state++;
    }
  }
  if (state !== 3) {
    console.log("You lost...");
  } else if (state === 3) {
    console.log("You won the lottery!");
  }
}

checkIfIWon([1, 2, 3]);
