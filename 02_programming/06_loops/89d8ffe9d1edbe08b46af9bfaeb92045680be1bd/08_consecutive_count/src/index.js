function consecutiveCount(word, letter) {
  let counter = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
      counter = counter + 1;
    }
  }
  return counter;
}

console.log(consecutiveCount("aaabcaaba", "a"));

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
