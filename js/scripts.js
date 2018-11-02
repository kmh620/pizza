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

   var pizzaOrder = new Pizza();
     pizzaOrder.findToppings();
     pizzaOrder.findSize();
     pizzaOrder.findPrice();
     $("#size-select option:selected").text();
     console.log($("#size-select option:selected").text());

    // $("#price").text(pizzaOrder.pizzaPrice);
     $('#selected-toppings').append(toppingQty + "<br>");
    $('#selected-size').append($("#size-select option:selected").text() + "<br>");
     $('#price').append("$" + pizzaOrder.pizzaPrice + "<br>");
    })
  })
//
