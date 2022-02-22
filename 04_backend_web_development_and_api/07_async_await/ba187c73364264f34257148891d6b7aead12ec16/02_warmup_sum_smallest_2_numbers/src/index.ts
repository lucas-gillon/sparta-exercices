export function sumTwoSmallestNumbers(numbers: number[]): number {
  const twoDigits: number[] = [];
  const min = Math.min(...numbers);
  twoDigits.push(min);
  const index = numbers.indexOf(min);
  if (index > -1) {
    numbers.splice(index, 1);
  }
  console.log("first", numbers);
  const secondMin = Math.min(...numbers);
  twoDigits.push(secondMin);
  const secondIndex = numbers.indexOf(secondMin);
  if (secondIndex > -1) {
    numbers.splice(secondIndex, 1);
  }
  console.log("second", numbers);
  let counter = 0;
  for (let i = 0; i < twoDigits.length; i++) {
    counter += twoDigits[i];
  }
  return counter;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
