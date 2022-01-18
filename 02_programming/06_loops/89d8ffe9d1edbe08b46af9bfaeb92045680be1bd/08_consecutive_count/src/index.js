function consecutiveCount(word, letter) {
  let counter = 0;
  for (let i = 0; i <= word.length; i++) {
    if ((word[i] && word[i + 1]) === letter) {
      counter = counter + 1;
    }
  }
  return counter;
}
console.log(consecutiveCount("utuutuuuuutuu", "u"));

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
