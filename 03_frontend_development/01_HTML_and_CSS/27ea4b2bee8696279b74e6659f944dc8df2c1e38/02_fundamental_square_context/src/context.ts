import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = squareNumber(arrayOfNumbers[i]);
  }
  return arrayOfNumbers;
}
