// Code here
function findDigit(arrayOfNumbers: number[], digitToFind: number): number[] {
  const filteredNumbers: number[] = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i].toString().includes(digitToFind.toString())) {
      filteredNumbers.push(arrayOfNumbers[i]);
    }
  }
  return filteredNumbers;
}

console.log(findDigit([1, 92, 824], 2));

export { findDigit };
