function forEachLoop(numbers, logs) {
  for (let i = 0; i < numbers.length; i++) {
    logs(numbers[i]);
  }
}
function logs(number) {
  console.log(`- ${number}`);
}
forEachLoop([1, 2, 3, 4], logs);
// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
