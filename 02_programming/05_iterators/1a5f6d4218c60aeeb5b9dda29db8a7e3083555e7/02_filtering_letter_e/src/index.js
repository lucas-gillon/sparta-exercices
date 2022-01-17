function theEFilter(sentences) {
  return sentences.filter((sentences) => sentences.includes("e") || sentences.includes("E"));
}

theEFilter([
  "If Youth, throughout all history, had had a champion to stand up for it",
  "to show a doubting world that a child can think",
  "and, possibly, do it practically",
  "ou wouldn't constantly run across folks today who claim that \"a child don't know anything.\"",
  "A child's brain starts functioning at birth",
  "and has, amongst its many infant convolutions, thousands of dormant atoms, into which God has put a mystic possibility for noticing an adult's act, and figuring out its purport.",
]);
// Do not remove the following line, it is for tests
module.exports = theEFilter;
