const readline = require("readline");
const clear = require("./clear");

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let values = Object.values(symbols);
let memory = [];

clear();

console.log("---- Welcome in the Memory Game! ----");

reader.question("-- Choose a number between 1 and 20 --\n", (number) => {
  memory.push(`${number}:${values[number - 1]}`) && memory.push(`${number}:${values[number - 1]}`);
  reader.question("Choose a second number (not the one you just chose)\n", (secondNumber) => {
    memory.push(`${secondNumber}:${values[secondNumber - 1]}`) &&
      memory.push(`${secondNumber}:${values[secondNumber - 1]}`);
    clear();
    console.log("-----Welcome in the Memory Game!-----");
    console.log(memory);
    reader.question("Press [Enter] to start!\n>", (input) => {
      if (input === "") {
        clear();
      }
    });
  });
});
