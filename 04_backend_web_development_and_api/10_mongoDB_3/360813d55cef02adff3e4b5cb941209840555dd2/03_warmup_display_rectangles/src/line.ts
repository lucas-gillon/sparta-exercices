export function line(numberOfStars: number): string {
  const star: string = "*";
  let line: string = "";
  for (let i = 0; i < numberOfStars; i++) {
    line += star;
  }
  return line;
}
