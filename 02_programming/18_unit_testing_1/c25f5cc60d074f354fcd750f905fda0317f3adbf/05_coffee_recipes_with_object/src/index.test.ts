import { recipeMaker } from "./index";

type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const expectedCoffeeRecipes: CoffeeRecipe[] = [
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

describe("#recipeMaker", () => {
  describe("#coffeeRecipes", () => {
    test("is it equal to recipemaker ?", () => {
      expect.assertions(1);
      expect(expectedCoffeeRecipes).toEqual(recipeMaker.coffeeRecipes);
    });
  });

  describe("#giveRecipe", () => {
    test("check function type", () => {
      expect.assertions(2);
      expect(typeof recipeMaker.giveRecipe).toEqual("function");
      expect(recipeMaker.giveRecipe.length).toEqual(1);
    });

    test("input is a string", () => {
      expect.assertions(2);
      expect(typeof recipeMaker.giveRecipe("cappuccino")).toEqual("string");
      expect(typeof recipeMaker.giveRecipe("cola")).toEqual("string");
    });

    test("print error messages", () => {
      expect.assertions(3);
      expect(recipeMaker.giveRecipe("LATTE")).toEqual("Sorry, LATTE does not exist on our list.");
      expect(recipeMaker.giveRecipe("latt")).toEqual("Sorry, latt does not exist on our list.");
      expect(recipeMaker.giveRecipe("cola")).toEqual("Sorry, cola does not exist on our list.");
    });

    test("print recipe", () => {
      expect.assertions(5);
      recipeMaker.coffeeRecipes.forEach((coffee) => {
        const result = recipeMaker.giveRecipe(coffee.name);
        expect(result).toEqual(`${coffee.name} ingredients:\n- ${coffee.ingredients.join(",\n- ")}`);
      });
    });
  });
});
