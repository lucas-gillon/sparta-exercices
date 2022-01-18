const numbers = [1, 2, 3, 4];

function double(number) {
  return number * 2;
}

function mapLoop(numbers, double) {
  let doubledNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(double(numbers[i]));
  }
  return doubledNumbers;
}

mapLoop(numbers, double);

// Do not remove the following lines, it is for tests

module.exports = mapLoop;
