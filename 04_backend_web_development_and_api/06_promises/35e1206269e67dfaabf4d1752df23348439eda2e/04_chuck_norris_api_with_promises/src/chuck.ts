import fetch from "node-fetch";

function getCategories(): Promise<void> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getJoke(category: string): Promise<any> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => joke.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
