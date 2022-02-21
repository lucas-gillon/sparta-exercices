// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...people: ParamRest): void {
  for (let i = 0; i < people.length; i++) {
    console.log(`Welcome to ${people[i]}`);
  }
}
