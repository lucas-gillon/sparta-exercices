import { greet } from "./index";

describe("test greet() and greet(francis)", () => {
  test("test greet()", function() {
    // expect something
    expect(greet()).toBe("Hello WORLD!")
  });
  test("test greet(francis)", function() {
    // expect something else
    expect(greet("Francis")).toBe("Hello FRANCIS!")
  });
});
