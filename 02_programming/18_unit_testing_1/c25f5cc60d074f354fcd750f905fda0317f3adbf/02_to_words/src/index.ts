export function toWords(sentence: string): string[] {
  const allWords = sentence.split(/[.!, :_@#&'+$§-]+/);

  return allWords.filter(word => word !== "");
}

console.log(toWords("this.is!an,awesome s-tri_ng:yes"))
