function theEFilter(sentences) {
  return sentences.filter((sentences) => sentences.includes("e") || sentences.includes("E"));
}

theEFilter(["lorEm", "test", "donald"]);
// Do not remove the following line, it is for tests
module.exports = theEFilter;
