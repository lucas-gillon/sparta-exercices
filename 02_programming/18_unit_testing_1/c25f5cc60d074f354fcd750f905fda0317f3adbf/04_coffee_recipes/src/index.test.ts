import { giveRecipe } from "./index";

type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];

describe("#giveRecipe function", () => {
  test("check function type", () => {
    expect.assertions(2);
    expect(typeof giveRecipe).toEqual("function");
    expect(giveRecipe.length).toEqual(1);
  });

  test("check if input is a string", () => {
    expect.assertions(2);
    expect(typeof giveRecipe("latte")).toEqual("string");
    expect(typeof giveRecipe("anything else")).toEqual("string");
  });

  test("print recipe", () => {
    expect.assertions(5);
    coffeeRecipes.forEach((coffee) => {
      const result = giveRecipe(coffee.name);
      expect(result).toEqual(`${coffee.name} ingredients:\n- ${coffee.ingredients.join(",\n- ")}`);
    });
  });

  test("print error messages", () => {
    expect.assertions(3);
    expect(giveRecipe("LATTE")).toEqual("Sorry, LATTE does not exist on our list.");
    expect(giveRecipe("latt")).toEqual("Sorry, latt does not exist on our list.");
    expect(giveRecipe("cola")).toEqual("Sorry, cola does not exist on our list.");
  });
});
