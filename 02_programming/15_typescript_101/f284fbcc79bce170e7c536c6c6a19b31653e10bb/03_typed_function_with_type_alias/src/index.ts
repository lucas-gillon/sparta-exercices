type MyTuple = [string, number]

function handleTuple(patate: MyTuple): void {
  // Code the function here.
  if (typeof patate[0] === "string" && typeof patate[1] === "number") {
    console.log(`${patate[0]} is a string`);
    console.log(`${patate[1]} is a number`);
  }
}

handleTuple(["foo", 42]);
// Leave the line below for tests to work properly.
export { handleTuple };
