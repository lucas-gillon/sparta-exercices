function checkFuelLevel(fuelLevel) {
  if (fuelLevel > 20) {
    return "Fuel level: green";
  } else if (fuelLevel > 10 && fuelLevel < 20) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}
console.log(checkFuelLevel(17));

function checkCargoHold(cargoHold) {
  if (cargoHold.length === 4) {
    return "Full";
  } else if (cargoHold.length < 4) {
    return `Spaces available: ${4 - cargoHold.length}`;
  } else if (cargoHold.length > 4) {
    return `Over capacity by ${cargoHold.length - 4} items.`;
  }
}
// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
