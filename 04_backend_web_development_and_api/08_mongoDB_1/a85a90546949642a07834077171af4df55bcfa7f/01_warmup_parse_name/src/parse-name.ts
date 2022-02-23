type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const array = name.split(" ");
  // console.log(array);
  const object: Person = {
    firstName: array[0],
    lastName: array[1],
  };
  // console.log(object);
  return object;
}
