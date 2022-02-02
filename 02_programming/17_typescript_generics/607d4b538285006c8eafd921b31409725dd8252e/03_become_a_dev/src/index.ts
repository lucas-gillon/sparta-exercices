type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};
type Dev = Human & { knownLanguage: string };

function becomeADev(human: Human): Dev {
  return {
    ...human,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };
}

console.log(becomeADev({
  name: "lucas",
  age: 23,
  knowsDev: false,
}));

// Leave the line below for tests to work properly.
export { becomeADev };
