import { Draw } from "./types";
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - (min - 1)));
}
export function lottery_draw(): Draw {
  const numbers: Draw = [];
  for (let i = 0; i < 3; i++) {
    numbers.push(getRandomInt(0, 3));
  }
  return numbers;
}
console.log(lottery_draw());
