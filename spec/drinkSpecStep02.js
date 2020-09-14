// I want to test the Drink About Game.
// I am going to test the whatCanIDrink function.
// I want to get the result "Drink Coke"
// So, I expect an age (greater than 14 and less than 18) to equal "Drink Coke".

describe("DrinkAbout", function () {
  describe("whatCanIDrink function", function () {
    it("should return 'Drink Coke'", function () {
      expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
  });
});

// When index.html is run get 1 spec, 0 Failures.
// now has content in drink.js.
