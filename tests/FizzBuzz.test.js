const fizzBuzz = require("../fizzBuzz");

test("A number divided by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
})

test("A number divided by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test("A number divided by 3 and 5", () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
})