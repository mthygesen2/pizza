describe("Pizza", function() {
  it("will create the Pizza object with these specification", function() {
    var testPizza = new Pizza("medium", 2, ["mushrooms", "olives"]);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.howMany).to.equal(2);
    expect(testPizza.toppings).to.eql(["mushrooms", "olives"])
  });
  it("will return the price of the pizza for the size", function() {
    var testPizza = new Pizza("medium");
    expect(testPizza.pizzaSizePrice()).to.equal(8);
  });
});
