function slice(ingredients) {
  const slicedIngredients = [];
  for (let i = 0; i < ingredients.length; i++) {
    slicedIngredients.push(`sliced ${ingredients[i]}`);
  }
  return slicedIngredients;
}
console.log(slice(["ham", "lettuce", "tomato"]));

function makeSandwich(ingredients) {
  let sandwichIngredients = "A tasty sandwich made of";
  for (let i = 0; i < ingredients.length; i++) {
    sandwichIngredients += ` ${ingredients[i]},`;
  }
  return sandwichIngredients;
}
console.log(makeSandwich(["ham", "lettuce", "tomato"]));

// Do not remove the following line, it is for tests
module.exports = {
  slice,
  makeSandwich,
};
