function Pizza() {
  this.pizzaToppings = 0

  //this.pizzaSize = pizzaSize,
  //this.pizzaPrice = 0 // this.small, this.md, this. lrg??
}

Pizza.prototype.toppingPrice = function() {
  toppingQty.length;
      console.log(toppingQty.length);

     }
  //  }
  //   //return toppingCount + 1;
  //
  // }

  //use submit-topping, and loop to add $,
  // push qty as pizzaToppings $$


//Pizza.prototype.findPrice = function() {
  // use pizzaToppings $$,if toppings quantity = 1, price $, if topping qty = 2-4, price $$, topping qty 5+, price $$$
  // if size sm add $, md add $$, lrg add $$$

  // if sm add toppings... ad this.sm, etc
//}
//

//UI
//submit topping button- from checkboxes= submit-topping
// var toppings =[checkboxes];
//
var toppingQty = [];


$(document).ready(function(){

  $("form#topping-select-1").submit(function(event){
    event.preventDefault();
      $("input:checkbox[name=pizza-topping]:checked").each(function() {
      toppingQty.push($(this).val());
      console.log(toppingQty);
    })
   var pizzaOrder = new Pizza();
   //$("#selected-toppings").show();
    // var selectedToppings = $(".topping:checked").val();

     pizzaOrder.toppingPrice();

    // $("#total").text(pizaOrder.pizzaPrice);
    //


     //$('#selected-toppings').append(selectedToppings + "<br>");
    })
  })
//
