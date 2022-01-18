function sing() {
  let lyrics = [];
  for (let i = 99; i > 2; i--) {
    lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    lyrics.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
  }
  lyrics.push("2 bottles of beer on the wall, 2 bottles of beer.");
  lyrics.push("Take one down and pass it around, 1 bottle of beer on the wall.");
  lyrics.push("1 bottle of beer on the wall, 1 bottle of beer.");
  lyrics.push("Take one down and pass it around, no more bottles of beer on the wall.");
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return lyrics;
}

sing();

// Do not remove the following line, it is for tests
module.exports = sing;
