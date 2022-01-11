const question = "spartan, what is your profession?!";

// a constant `letterAtThirdPosition` bound to a string that is the third position character in question
// using `charAt()` and the previous constant `question`
const letterAtThirdPosition = question.charAt(3)
console.log(letterAtThirdPosition)

// a constant `letterAtFourthPosition` bound to a string: "The letter at the fourth position is r"
// using `charAt()` and the previous constant `question`
const letterAtFourthPosition = `The letter at the 4th position is ${letterAtThirdPosition.charAt(3)}`
console.log(letterAtFourthPosition)
