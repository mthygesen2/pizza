describe("Pizza", function() {
  it("will create the Pizza object with these specification", function() {
    var testPizza = new Pizza("medium");
    expect(testPizza.pizzaSize).to.equal("medium");
  });
});
