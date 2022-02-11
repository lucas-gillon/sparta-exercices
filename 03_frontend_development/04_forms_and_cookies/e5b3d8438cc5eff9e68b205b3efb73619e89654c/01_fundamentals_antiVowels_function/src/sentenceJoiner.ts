export const sentenceJoiner = (sentence: string[]): string => {
  return sentence.join(" ");
};
console.log(sentenceJoiner(["this", "is", "a", "test", "string"]));
