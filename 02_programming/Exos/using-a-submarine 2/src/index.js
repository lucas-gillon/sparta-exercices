// code here
import { movements } from "./movements.js";

let horizontalPosition = 0;
let depthPosition = 0;
let aim = 0;

function submarine(instructions) {
  for (let i = 0; i < instructions.length; i++) {
    const words = instructions[i].split(" ");
    if (words[0] === "forward") {
      horizontalPosition = horizontalPosition + parseInt(words[1]);
      depthPosition = depthPosition + parseInt(words[1]) * aim;
    }
    if (words[0] === "down") {
      depthPosition = depthPosition + parseInt(words[1]);
      aim = aim + parseInt(words[1]);
    }
    if (words[0] === "up") {
      depthPosition = depthPosition - parseInt(words[1]);
      aim = aim - parseInt(words[1]);
    }
  }
  console.log(horizontalPosition * depthPosition);
}

submarine(movements);
