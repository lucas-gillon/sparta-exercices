export function humanPercentage(percentages: number[]): string[] {
  const numbers = percentages.map((index) => String(Math.round(index * 100)));
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = `${numbers[i]}%`;
  }
  return numbers;
}
