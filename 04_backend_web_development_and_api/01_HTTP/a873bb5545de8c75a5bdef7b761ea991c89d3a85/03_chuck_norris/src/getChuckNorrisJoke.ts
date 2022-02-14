import request from "@fewlines-education/request";

function getChuckNorrisJoke(selectedCategory: string): void {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`, (error, body) => {
    if (error) {
      console.error(error);
    } else {
      const a = JSON.parse(body);
      console.log(a);
    }
  });
}

// getChuckNorrisJoke("travel");
// leave line below for tests to work properly
export { getChuckNorrisJoke };
