function double(numbers) {
  let doubled = [];
  const isNumber = (numbers) => Number.isSafeInteger(numbers);
  if (numbers.every(isNumber)) {
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
  }
  return doubled;
}

double([1, 2, 3]);

// Do not remove the following line, it is for tests
module.exports = double;
