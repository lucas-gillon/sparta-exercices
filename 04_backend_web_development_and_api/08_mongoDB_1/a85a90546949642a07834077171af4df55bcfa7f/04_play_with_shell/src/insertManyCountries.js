// write your MongoDB shell command here
const france = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};
const belgique = {
  name: "Belgique",
  capital: "Bruxelles",
  continent: "Europe",
};
const islande = {
  name: "Iceland",
  capital: "Reykjavik",
  continent: "Europe",
};

db.worldAtlas.insertMany([france, belgique, islande]);
