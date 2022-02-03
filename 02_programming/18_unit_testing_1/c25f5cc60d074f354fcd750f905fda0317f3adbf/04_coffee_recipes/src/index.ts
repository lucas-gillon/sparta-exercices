export function giveRecipe(coffee: string): string {
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
  const coffeenames = ["espresso", "macchiato", "latte", "cappuccino", "americano"];
  if (coffeenames.includes(coffee) === false) {
    return `Sorry, ${coffee} does not exist on our list.`;
  } else {
    for (let i = 0; i < coffeeRecipes.length; i++) {
      if (coffee === coffeeRecipes[i].name) {
        return `${coffeeRecipes[i].name} ingredients:\n- ${coffeeRecipes[i].ingredients.join(",\n- ")}`;
      }
    }
  }
}
giveRecipe("macchiato");
