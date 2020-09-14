describe("DrinkAbout", function () {
  describe("whatCanIDrink function", function () {
    it("should return 'Drink Coke'", function () {
      expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
    it("should return 'Drink Whisky'", function () {
      expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
    it("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function () {
      expect(whatCanIDrink(140)).toBe(
        "Sorry. I can’t tell what drink because that age is incorrect!"
      );
    });
  });
});
