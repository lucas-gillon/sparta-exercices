import { getRandomUser } from "./index";

test("return premier element de l'array", () => {
  expect.assertions(2);

  const randomName = jest.spyOn(Math, "random");
  const users = ["james", "lars", "robert", "kirk"];

  randomName.mockImplementation(() => 0);
  const result = getRandomUser(users);

  expect(randomName).toHaveBeenCalled();
  expect(result).toBe(users[0]);

  randomName.mockRestore();
});
test("return dernier element de l'array", () => {
  expect.assertions(2);

  const randomName = jest.spyOn(Math, "random");
  const users = ["james", "lars", "robert", "kirk"];

  randomName.mockImplementation(() => 1);
  const result = getRandomUser(users);

  expect(randomName).toHaveBeenCalled();
  expect(result).toBe(users[users.length - 1]);

  randomName.mockRestore();
});
test("la fonction return toujouts qqch d'aléatoire", () => {
  const generatedNames = [];
  let isRandom = false;
  for (let i = 0; i < 500; i++) {
    generatedNames.push(getRandomUser(["james", "lars", "robert", "kirk"]));
  }
  for (let j = 0; j < generatedNames.length; j++) {
    if (generatedNames[j + 1] === generatedNames[j]) {
      isRandom = false;
    } else {
      isRandom = true;
    }
  }
  expect(isRandom).toBe(true);
});
