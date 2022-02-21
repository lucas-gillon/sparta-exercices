type ParamRest = string[];
type CallbackType = (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction: CallbackType, parameters: ParamRest): void {
  // Code your function here
  console.log("We now greet:");
  for (let i = 0; i < parameters.length; i++) {
    console.log(`Welcome to ${parameters[i]}`);
  }
}
