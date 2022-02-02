import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  constructor(age: number, height: number, alive: boolean, oranges: string[]) {
    super(age);
    this.oranges = oranges;
  }
  oranges: string[] = [];

  ageOneYear(age: number): void {
    age += 1;
    this.growOranges();
  }
  isAlive(): boolean {

  }

  growOranges(): void {
    const solOrange: string = "🍊";
    if (this.age >= 5 && this.age <= 10) {
      this.oranges.push(solOrange.repeat(10));
    } else if (this.age >= 11 && this.age <= 20) {
      this.oranges.push(solOrange.repeat(20));
    } else if (this.age >= 21 && this.age <= 40) {
      this.oranges.push(solOrange.repeat(5));
    }
  }
  pickAnOrange(): void {
    console.log(this.oranges);
    this.oranges.shift();
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
