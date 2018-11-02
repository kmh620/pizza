function Pizza(pizzaToppings, pizzaSize) {
  this.pizzaToppings = pizzaToppings,
  this.pizzaSize = pizzaSize,
  this.pizzaPrice = // this.small, this.md, this. lrg??
}

Pizza.prototype.toppingQuantity = function() {
  //toppings.forEach(function(count) {
  //add $ to this.pizzaToppings

  })
  //use submit-topping, and forEach loop to add $,
  // push qty as pizzaToppings $$
}

Pizza.prototype.findPrice = function() {
  // use pizzaToppings $$,if toppings quantity = 1, price $, if topping qty = 2-4, price $$, topping qty 5+, price $$$
  // if size sm add $, md add $$, lrg add $$$

  // if sm add toppings... ad this.sm, etc
}





//UI
//submit topping button- from checkboxes= submit-topping
// var toppings =[checkboxes];
//
$(document).ready(function(){
  $("form#topping-select-1").submit(function(event){
    event.preventDefault();
    $("#selected-toppings").show();
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var selectedToppings = $(this).val();
      $('#selected-toppings').append(selectedToppings + "<br>");
    });
    //$('#transportation_survey').hide();
  });
});
