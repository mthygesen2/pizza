describe("Pizza", function() {
  it("will create the Pizza object with these specification", function() {
    var testPizza = new Pizza("medium", 2, 2);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.howMany).to.equal(2);
    expect(testPizza.toppings).to.equal(2)
  });
  it("will return the price of the full pizza order", function() {
    var testPizza = new Pizza("medium", 2, 2);
    expect(testPizza.pizzaFullPrice()).to.equal(20);
  });
  it("will return the price of the full pizza order", function() {
    var testPizza = new Pizza("small", 1, 1);
    expect(testPizza.pizzaFullPrice()).to.equal(6);
  });
  // it("will return the price of the toppings on the pizza", function(){
  //   var testPizza = new Pizza("medium", 2, ["mushrooms", "olives"]);
  //   expect(testPizza.pizzaTopppingsPrice()).to.equal(2);
  // });
  // it("will return the price of all the pizzas", function() {
  //   var testPizza = new Pizza("medium", 2, ["mushrooms", "olives"]);
  //   expect(testPizza.pizzaFullPrice()).to.equal(20);
  // });
});
