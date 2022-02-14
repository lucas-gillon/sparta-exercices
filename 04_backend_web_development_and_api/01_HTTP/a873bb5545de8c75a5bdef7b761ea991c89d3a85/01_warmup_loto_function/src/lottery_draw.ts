type Draw = number[];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min));
}
export function lottery_draw(): Draw {
  const numbers: Draw = [];
  for (let i = 0; i < 6; i++) {
    numbers.push(getRandomInt(0, 100));
  }
  return numbers;
}
