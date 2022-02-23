export function rectangle(width: number, height: number): string {
  function square() {
    const string = "*";
    let squared: string = "";
    for (let i = 0; i < height; i++) {
      squared += `${string.repeat(width)}\n`;
    }
    return squared;
  }
  return square();
}
