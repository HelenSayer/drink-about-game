function whatCanIDrink(age) {
  if (age < 18 && age >= 14) {
    return "Drink Coke";
  } else if (age < 21 && age >= 18) {
    return "Drink Beer";
  } else {
    return "Sorry. I can’t tell what drink because that age is incorrect!";
  }
}
