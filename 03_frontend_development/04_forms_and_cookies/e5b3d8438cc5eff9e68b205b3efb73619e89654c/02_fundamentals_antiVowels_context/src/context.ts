import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const vowels: string[] = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  const splittedSentence: string[] = sentenceSplitter(sentence);
  const filteredSentence: string[] = splittedSentence.filter((sentence) => !vowels.includes(sentence[0]));
  return sentenceJoiner(filteredSentence);
};
