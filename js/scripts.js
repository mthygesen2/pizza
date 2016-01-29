function Pizza(pizzaSize, howMany, toppings) {
  this.pizzaSize = pizzaSize;
  this.howMany = howMany;
  this.toppings = toppings;
}

Pizza.prototype.pizzaFullPrice = function() {
  var price = 5
  var numberToppings = this.toppings;
  var toppingPrice = 1 * numberToppings;

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

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSize = $('input[name=size]:checked').val();
    var inputToppings = $('input[name=toppings]:checked').length;
    var inputHowMany = $('#userInput').val();
    var newOrder = new Pizza (inputSize, inputHowMany, inputToppings);

    $(".priceShow").text(newOrder.pizzaFullPrice());
    $(".priceOutcome").show();
  });
});
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
