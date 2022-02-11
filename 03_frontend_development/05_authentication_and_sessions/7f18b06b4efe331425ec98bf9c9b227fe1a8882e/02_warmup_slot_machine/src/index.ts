type tuple = boolean[] | number[] | string[];

function slotMachine(test: tuple): boolean {
  for (let i = 0; i < test.length - 1; i++) {
    if (test[i] !== test[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(slotMachine(["🍒", "🍒", "🍒"]));

export { slotMachine };
