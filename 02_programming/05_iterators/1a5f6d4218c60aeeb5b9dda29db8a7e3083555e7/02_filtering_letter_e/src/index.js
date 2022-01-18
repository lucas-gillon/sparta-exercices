function theEFilter(sentences) {
  return sentences.filter((sentence) => sentence.includes("e") || sentence.includes("E"));
}

theEFilter(["lorEm", "test", "donald"]);

// Do not remove the following line, it is for tests
module.exports = theEFilter;
