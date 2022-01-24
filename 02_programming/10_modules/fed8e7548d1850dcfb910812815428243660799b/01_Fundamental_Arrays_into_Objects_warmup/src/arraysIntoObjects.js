const arraysIntoObjects = (keysArray, valuesArray) => {
  let object = {};
  for (let i = 0; i < keysArray.length; i++) {
    object[keysArray[i]] = valuesArray[i];
  }
  return object;
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
