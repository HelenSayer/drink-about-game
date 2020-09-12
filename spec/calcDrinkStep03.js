describe("DrinkAbout", function () {
  describe("whatCanIDrink function", function () {
    it("should return 'Drink Coke'", function () {
      expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
    it("should return 'Drink Whisky'", function () {
      expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
  });
});

// 2 specs, 0 Failures.
