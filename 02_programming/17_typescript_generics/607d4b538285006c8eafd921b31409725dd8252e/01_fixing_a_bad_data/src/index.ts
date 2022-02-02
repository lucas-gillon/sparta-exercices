type ReceivedObject = {
  a: string;
  b: number;
};
const receivedObject: ReceivedObject = {
  a: "somestring",
  b: 42,
};
function transformObject (receivedObject: ReceivedObject): (string | number)[] {
  return Object.values(receivedObject);
}
// Leave the line below for tests to work properly.
export { transformObject };
