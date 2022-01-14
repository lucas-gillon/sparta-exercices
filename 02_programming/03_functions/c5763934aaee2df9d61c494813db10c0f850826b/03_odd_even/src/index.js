function oddEven(number) {
  // Code the function here.
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      return `${number} is an even number.`;
    } else {
      return `${number} is an odd number.`;
    }
  } else { 
    console.log(`${number} is not a number.`);
  }
}



// Do not remove last lines, it is for tests
module.exports = oddEven;
