// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  word = word[0].toUpperCase() + word.substring(1);
  return word;
}
