import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const words: string[] = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  const phrase = words.join(" ");
  return phrase;
}
