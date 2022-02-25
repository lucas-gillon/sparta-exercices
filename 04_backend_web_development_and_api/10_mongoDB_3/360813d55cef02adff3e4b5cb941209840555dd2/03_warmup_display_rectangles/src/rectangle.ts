import { line } from "./line";
import { column } from "./column";

const lineContent = "*";
export function rectangle(width: number, height: number): string {
  let patate: string = "";
  const lines = line(width);
  const columns = column(height, lineContent);

  patate = `${lines}\n`.repeat(columns.length / 2);

  return patate;
}
