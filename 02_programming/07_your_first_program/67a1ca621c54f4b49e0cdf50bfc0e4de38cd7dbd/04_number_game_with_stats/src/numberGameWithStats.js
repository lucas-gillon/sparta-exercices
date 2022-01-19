function numberGameWithStats(reader, min = 1, max = 100) {
  const randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;

  question();
  function response(number) {
    let counter = 0;
    if (min === max) {
      if (number === min) {
        console.log("You won! \n");
        counter = counter + 1;
        if (counter === 1) {
          console.log("Wow, you're a lucky one");
        }
        reader.close();
      }
    }
    if (number > randomNumber) {
      console.log("Too high \n");
      counter = counter + 1;
    }
    if (number < randomNumber) {
      console.log("Too low \n");
      counter = counter + 1;
    }
    if (number < min || number > max) {
      console.log("The number is between 1 and 100 \n");
      counter = counter + 1;
    }
    if (isNaN(number) === true) {
      console.log("This was not a number \n");
      counter = counter + 1;
    }
    if (number === randomNumber || number === 100 || number === 1) {
      console.log("You won \n");
      console.log(number);
      reader.close();
    }
    question();
  }
  function question() {
    reader.question("Enter a number :\n", response);
  }
}

module.exports = numberGameWithStats;
