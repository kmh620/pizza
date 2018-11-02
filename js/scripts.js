function Pizza() {
  this.pizzaToppings = 0,
  this.pizzaSize = 0,
  this.pizzaPrice = 0 // this.small, this.md, this. lrg??
}

Pizza.prototype.findToppings = function() {
  toppingQty.length;
  this.pizzaToppings += toppingQty.length;
      console.log(toppingQty.length);
      console.log(this.pizzaToppings);

   }

   Pizza.prototype.findSize = function() {
     this.pizzaSize += parseInt(size);
     console.log(this.pizzaSize);
    }

Pizza.prototype.findPrice = function() {
  this.pizzaPrice += (this.pizzaToppings + this.pizzaSize)
  console.log(this.pizzaPrice)
}


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

    })
  //   $("input:checkbox[name=pizza-size]:checked").each(function() {
  //   size.push($(this).val());
  //   console.log(size);
  // })
   var pizzaOrder = new Pizza();
     pizzaOrder.findToppings();
     pizzaOrder.findSize();
     pizzaOrder.findPrice();

    // $("#total").text(pizaOrder.pizzaPrice);
    //


     //$('#selected-toppings').append(selectedToppings + "<br>");
    })
  })
//
