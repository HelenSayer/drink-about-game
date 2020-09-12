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
  });
});

// After adding all ages checked in Jasmine.
// 4 specs, 0 failures.
