// describe("My whatCanIDrink function", function () {
//   beforeEach(function () {
//     drink = new whatCanIDrink();
//   });

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
    it("should return an error if we don't supply a number", function () {
      spyOn(window, "alert");
      whatCanIDrink("twenty");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
  });
});
// });

// cannot understand the last part of exercise making the function an instance of the object = My whatCanIDrink function.
