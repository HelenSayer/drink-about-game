function whatCanIDrink(age) {
  if (age > 0 && age < 14) {
    return "Drink Toddy";
  } else if (age < 18 && age >= 14) {
    return "Drink Coke";
  } else if (age < 21 && age >= 18) {
    return "Drink Beer";
  } else if (age < 130 && age >= 21) {
    return "Drink Whisky";
  } else {
    return "Sorry. I can’t tell what drink because that age is incorrect!";
  }
}

// After adding all ages checked in Jasmine.
// 5 specs, 0 failures.
