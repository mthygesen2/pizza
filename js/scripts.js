function Pizza(pizzaSize, howMany, toppings) {
  this.pizzaSize = pizzaSize;
  this.howMany = howMany;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSizePrice = function() {
  var price = 5
  var numberToppings = this.toppings;
  var toppingPrice = 1 * numberToppings.length;
  
  if(this.pizzaSize === "medium") {
    var sizePrice = (price + 3);
  } else if(this.pizzaSize === "large") {
    var sizePrice = (price + 5);
  } else {
    var sizePrice = price;
  }
  var onePizzaPrice = sizePrice + toppingPrice
  return onePizzaPrice * this.howMany
};

// Pizza.prototype.pizzaTopppingsPrice = function() {
//   var numberToppings = this.toppings;
//   var toppingPrice = 1 * numberToppings.length;
//   return toppingPrice;
// };
//
// Pizza.prototype.pizzaFullPrice = function() {
//   var onePizzaPrice = sizePrice + toppingPrice
//   return onePizzaPrice * this.howMany
// };
