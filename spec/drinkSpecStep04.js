describe("DrinkAbout", function () {
  describe("whatCanIDrink function", function () {
    it("should return 'Drink Toddy'", function () {
      expect(whatCanIDrink(13)).toBe("Drink Toddy");
    });
    it("should return 'Drink coke'", function () {
      expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
    it("should return 'Drink Beer'", function () {
      expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
    it("should return 'Drink Whisky'", function () {
      expect(whatCanIDrink(30)).toBe("Drink Whisky");
    });
    it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function () {
      expect(whatCanIDrink(140)).toBe(
        "Sorry. I can’t tell what drink because that age is incorrect!"
      );
    });
  });
});

// After adding all ages checked in Jasmine.
// 5 specs, 0 failures.
