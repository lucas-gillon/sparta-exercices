type ParamRest = string[];

export function greetEveryone(...people: ParamRest): void {
  // Code your function here
  for (let i = 0; i < people.length; i++) {
    console.log(`Welcome to ${people[i]}`);
  }
}
