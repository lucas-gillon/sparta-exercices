type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};
export const recipeMaker = {
  coffeeRecipes: [
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
  ],
  giveRecipe: function giveRecipe(coffee: string): string {
    const coffeenames = ["espresso", "macchiato", "latte", "cappuccino", "americano"];
    if (coffeenames.includes(coffee) === false) {
      return `Sorry, ${coffee} does not exist on our list.`;
    } else {
      for (let i = 0; i < this.coffeeRecipes.length; i++) {
        if (coffee === this.coffeeRecipes[i].name) {
          return `${this.coffeeRecipes[i].name} ingredients:\n- ${this.coffeeRecipes[i].ingredients.join(",\n- ")}`;
        }
      }
    }
  },
};
