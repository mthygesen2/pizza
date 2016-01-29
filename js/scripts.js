function Pizza(pizzaSize, howMany, toppings) {
  this.pizzaSize = pizzaSize;
  this.howMany = howMany;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSizePrice = function () {
  var price = 5
  if(this.pizzaSize === "medium") {
    var sizePrice = (price + 3);
  } else if(this.pizzaSize === "large") {
    var sizePrice = (price + 5);
  } else {
    var sizePrice = price;
  }
  return sizePrice;
};
