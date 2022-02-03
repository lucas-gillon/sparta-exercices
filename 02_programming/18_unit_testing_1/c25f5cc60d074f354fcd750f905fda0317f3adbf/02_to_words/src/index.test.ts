import { toWords } from "./index";

test("toWords vide", () => {
  expect(toWords(" ")).toStrictEqual([]);
});
test("toWords mots simples", () => {
  expect(toWords("this is an awesome string")).toStrictEqual(["this", "is", "an", "awesome", "string"]);
});
test("toWords avec signes ", () => {
  expect(toWords("this.is!an,awesome s-tri_ng:yes")).toStrictEqual([
    "this",
    "is",
    "an",
    "awesome",
    "s",
    "tri",
    "ng",
    "yes",
  ]);
});
