function square(size) {
  const star = "*";
  let stars = [];
  for (let i = 0; i < size; i++) {
    stars.push(size * stars);
    console.log(star.repeat(size));
  }
}
square(10);

// Do not remove the following line, it is for tests
module.exports = square;
