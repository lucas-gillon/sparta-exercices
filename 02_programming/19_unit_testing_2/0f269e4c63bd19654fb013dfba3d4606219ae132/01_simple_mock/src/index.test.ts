import { helloSailor } from ".";

test("return console log", () => {
  expect.assertions(4);
  const fakelog = jest.spyOn(console, "log").mockImplementation();
  helloSailor("TEST");
  expect(fakelog).toHaveBeenCalled();
  expect(fakelog).toHaveBeenCalledWith("Howdy TEST!");
  fakelog.mockRestore();
  const fakelog2 = jest.spyOn(console, "log").mockImplementation();
  helloSailor("");
  expect(fakelog2).toHaveBeenCalled();
  expect(fakelog2).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  fakelog2.mockRestore();
});
