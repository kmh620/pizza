function Pizza() {
  this.pizzaToppings = 0
  this.pizzaSize = pizzaSize,
  this.pizzaPrice = 0 // this.small, this.md, this. lrg??
}

Pizza.prototype.findToppings = function() {
  toppingQty.length;
  this.pizzaToppings += toppingQty.length;
      console.log(toppingQty.length);
      console.log(this.pizzaToppings);

   }

// Pizza.prototype.findPrice = function() {
//   use pizzaToppings $$,if toppings quantity = 1, price $, if topping qty = 2-4, price $$, topping qty 5+, price $$$
//   if size sm add $, md add $$, lrg add $$$
//
//   if sm add toppings... ad this.sm, etc
// }


//UI

var toppingQty = [];
var size = [];

$(document).ready(function(){

  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    //var sizeSelect = $("#size-select").val();
    size.push($("#size-select").val());
    console.log(size);
      $("input:checkbox[name=pizza-topping]:checked").each(function() {
      toppingQty.push($(this).val());
      console.log(toppingQty);
    })
  //   $("input:checkbox[name=pizza-size]:checked").each(function() {
  //   size.push($(this).val());
  //   console.log(size);
  // })
   var pizzaOrder = new Pizza();

     pizzaOrder.findPrice();

     $("#total").text(pizaOrder.pizzaPrice);
    //


     //$('#selected-toppings').append(selectedToppings + "<br>");
    })
  })
//
