export const sentenceSplitter = (sentence: string): string[] => {
  return sentence.split(" ");
};
console.log(sentenceSplitter("this is a test string"));
