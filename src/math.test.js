const { add, subtract, multiply, divide } = require("./math");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 4 - 1 to equal 3", () => {
  expect(subtract(4, 1)).toBe(3);
});

test("multiply 3 and 3 to equal 9", () => {
  expect(multiply(3,3)).toBe(9);
});

test("divide 3 and 1 to equal 1", () => {
  expect(divide(3,1)).toBe(1);
});