function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function chooseOperation(a, b, operation) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (typeof operation === "function") {
      return operation(a, b);
    } else {
      throw new Error("not function");
    }
  } else {
    throw new Error("not integers");
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
