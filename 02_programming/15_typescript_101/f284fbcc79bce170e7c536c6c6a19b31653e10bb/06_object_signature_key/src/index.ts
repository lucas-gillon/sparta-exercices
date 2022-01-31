type Supplies = {
  // Write your code here.
  [key: string]: number,
};

const supplies: Supplies = {test: 42, monitor: 0};

// ↓ Uncomment the line below if you want to test it ↓
supplies.monitor = 10;
console.log(supplies)

// Leave the line below for tests to work properly.
export { supplies };
