// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");
const { spectralClass } = require("./data/starData");
const { mass } = require("./data/exoplanetData");

// Your code here:
let canHabitateLife;
if ((planet.radius>0.5) && (planet.radius<2.5) && (mass < 0.32) && (spectralClass === "K" || spectralClass=== "M")) {
  canHabitateLife = true;
} else {
  canHabitateLife = false;
}

// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
