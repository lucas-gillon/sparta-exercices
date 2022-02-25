export function column(numberOfLines: number, lineContent: string): string {
  let column: string = "";
  for (let i = 0; i < numberOfLines; i++) {
    column += `${lineContent}\n`;
  }
  return column;
}
