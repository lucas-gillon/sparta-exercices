function sortingMachine(arrayOfNumbers: number[], ascendingOrNot: boolean): number[] {
  if (ascendingOrNot === true) {
    arrayOfNumbers.sort((n1, n2) => n1 - n2);
  } else if (ascendingOrNot === false) {
    arrayOfNumbers.sort((n1, n2) => n2 - n1);
  }
  return arrayOfNumbers;
}

console.log(sortingMachine([10000, 104, 99, 2000, 3000, 1500], true));

export { sortingMachine };
