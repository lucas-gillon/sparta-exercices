// import des fonctions de calcul
import { addition } from "./operations/addition.js";
import { division } from "./operations/division.js";
import { multiplication } from "./operations/multiplication.js";
import { soustraction } from "./operations/soustraction.js";

const clear = () => console.log("\x1B[2J\x1B[0f");
function calculator(reader) {
  let numberOne = parseFloat(0);
  let numberTwo = parseFloat(0);
  let operator = "";
  // début du programme
  clear();
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  console.log("--- Welcome to the best calculator EVER!!! ---");
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  console.log("----------------------------------------------");
  start();
  function enterFirstNumber() {
    reader.question("Waiting for the first number\n> ", (firstNumber) => {
      console.log(`Your first number is ---  ${firstNumber}  --- `);
      if (isNaN(firstNumber) === false) {
        numberOne += parseFloat(firstNumber);
        chooseOperation();
      } else if (isNaN(firstNumber) === true) {
        console.log("Wrong input!");
        enterFirstNumber();
      }
    });
  }
  function chooseOperation() {
    const operationSymbols = ["+", "-", "/", "x"];
    reader.question("Choose an operation: [ + , - , x , / ]\n> ", (operation) => {
      if (operationSymbols.includes(operation)) {
        if (operation === "+") {
          console.log("You chose --- addition ---");
        } else if (operation === "-") {
          console.log("You chose --- substraction ---");
        } else if (operation === "x") {
          console.log("You chose --- multiplication ---");
        } else if (operation === "/") {
          console.log("You chose --- division ---");
        }
        operator = operation;
        enterSecondNumber();
      } else {
        console.log("Unknown operation.. please enter a valid command ");
        chooseOperation();
      }
    });
  }
  function enterSecondNumber() {
    reader.question("Enter the second number\n> ", (secondNumber) => {
      if (isNaN(secondNumber) === false) {
        numberTwo += parseFloat(secondNumber);
        operationsTreatment();
      } else if (isNaN(secondNumber) === true) {
        console.log("Wrong input!");
        enterSecondNumber();
      }
    });
  }
  function start() {
    enterFirstNumber();
  }
  // exécution des calculs en fonction des différents paramètres
  function operationsTreatment() {
    console.log(`The result of the operation \n--- ${numberOne} ${operator} ${numberTwo} ---\n is :`);
    if (operator === "+") {
      console.log(`---   ${addition(numberOne, numberTwo)}  ---\n`);
      reader.close();
    }
    if (operator === "-") {
      console.log(`---   ${soustraction(numberOne, numberTwo)}   ---\n`);
      reader.close();
    }
    if (operator === "x") {
      console.log(`---   ${multiplication(numberOne, numberTwo)}   ---\n`);
      reader.close();
    }
    if (operator === "/") {
      console.log(`---   ${division(numberOne, numberTwo)}   ---\n`);
      reader.close();
    }
  }
}

export { calculator };
