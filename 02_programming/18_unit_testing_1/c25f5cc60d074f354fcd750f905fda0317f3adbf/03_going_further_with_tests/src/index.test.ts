let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {
  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);
    mockArray = ["Into the wild", "Alien the 8th passenger"];
    expect(mockArray.length).toBe(2);
  });

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);
    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];
    expect(mockArray.includes("Alien the 8th passenger")).toBeTruthy();
  });

  // Create a test that fails if "Indiana Jones 4" is present in mockArray.
  test("Indiana Jones 4 is not present in mockArray", () => {
    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];
    expect(mockArray.includes("Indiana Jones 4")).toBeFalsy();
  });

  // Create a test fails if the list has less than 5 elements.
  test("The list has at least 5 elements", () => {
    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];
    expect(mockArray.length).toBeGreaterThanOrEqual(5);
  });

  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`.
  test("The array only contains strings", () => {
    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];
    for (let i = 0; i < mockArray.length; i++) {
      expect(typeof mockArray[i]).toBe("string");
    }
  });

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.
  test("LOTR is present", () => {
    function counter() {
      mockArray = [
        "Lord of the rings : the return of the king",
        "Into the wild",
        "Alien the 8th passenger",
        "Tombeau des lucioles",
        "fight club",
      ];
      let LOTRcounter = 0;
      for (let i = 0; i < mockArray.length; i++) {
        if (mockArray[i].includes("Lord of the rings") === true) {
          LOTRcounter++;
        }
      }
      return LOTRcounter;
    }
    expect(counter()).toBeGreaterThanOrEqual(1);
  });

  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
  test("Elements are in the same order", () => {
    mockArray = ["Blue", "Red", "Blue", "Yellow"];
    const solutionArray = ["Blue", "Red", "Blue", "Yellow"];
    for (let i = 0; i < mockArray.length; i++) {
      if (mockArray[i] === solutionArray[i]) {
        expect(mockArray[i]).toEqual(solutionArray[i]);
      }
    }
  });
});

describe("Let the tests on objects begin !", () => {
  // Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
  // You should do it with only one assertion.
  // Hint: we want our mock object to _match_ another smaller object (look at the documentation!)
  mockObject = {
    sauce: "Hannibal",
    fries: true,
    kebab: "Double",
    soda: "Sprite",
  };
  let command = {
    sauce: "Hannibal",
    fries: true,
    kebab: "poulet",
    soda: "seven up",
  };
  test("Ma commande a les caractéristiques souhaitées", () => {
    expect(command).toMatchObject(mockObject);
  });
});

//At the end, your file should contain 7 test (8 with the given example).
