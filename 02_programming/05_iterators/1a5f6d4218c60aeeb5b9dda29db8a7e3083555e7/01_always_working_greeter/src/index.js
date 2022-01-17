function greeter(people) {
  people.forEach(people => console.log(`Hello ${people}!`));
}

greeter(["Vincent", "Nicolas", "Thomas"]);

// Do not remove the following lines, it is for tests
module.exports = greeter;
