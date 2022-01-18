function triangle(height) {
  const star = "*";
  let stars = [];
  for (let i = 1; i <= height; i++) {
    stars.push(star) * stars;
    console.log(star.repeat(i));
  }
}

triangle(5);

// Do not remove the following line, it is for tests
module.exports = triangle;
