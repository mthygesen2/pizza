function Pizza(pizzaSize, howMany, toppings, fancyToppings) {
  this.pizzaSize = pizzaSize;
  this.howMany = howMany;
  this.toppings = toppings;
  this.fancyToppings = fancyToppings;
}

Pizza.prototype.pizzaFullPrice = function() {
  var price = 5
  // var numberToppings = this.toppings;
  var toppingPrice = 1 * this.toppings;
  var fancyPrice = 2 * this.fancyToppings;

  if(this.pizzaSize === "medium") {
    var sizePrice = (price + 3);
  } else if(this.pizzaSize === "large") {
    var sizePrice = (price + 5);
  } else {
    var sizePrice = price;
  }
  var onePizzaPrice = sizePrice + toppingPrice + fancyPrice;
  return onePizzaPrice * this.howMany
};

function resetFields() {
  $('input[name=size]').attr('checked',false);
  $('input[name=toppings]').attr('checked',false);
  $('#userInput').val("");
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSize = $('input[name=size]:checked').val();
    var inputToppings = $('input[name=toppings]:checked').length;
    var inputHowMany = $('#userInput').val();
    var newOrder = new Pizza (inputSize, inputHowMany, inputToppings);

    $(".priceShow").text(newOrder.pizzaFullPrice());
    $("#priceOutcome").show();

    resetFields();
  });
});
