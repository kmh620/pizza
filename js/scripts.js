//Create Order
function PizzaOrder() {
  this.pizzas = []
  console.log(this.pizzas);
}

PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

PizzaOrder.prototype.selectPizza = function(id) {
  for (var i=0; i<this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}
PizzaOrder.prototype.deletePizza= function(id) {
  for (var i=0; i< this.contacts.length; i++){
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}
//End Create Order

//Create Pizza
function Pizza() {
  this.pizzaName = pizzaName, //user assigns number/name to pizza for multiples order
  this.pizzaToppings = 0,
  this.pizzaSize = 0,
  this.pizzaPrice = 0
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
//End Create Pizza

//UI
var newOrder = new PizzaOrder();
var toppingQty = [];
var size = [];
var pizzaName = "";
var pizzaInputName = $(".pizzaName").val();
$("#pizzaName").text(pizzaInputName);

function displayPizzaDetails(newOrderDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  newOrderDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + contact.pizzaName + "</li>";
  });
  pizzaList.html(htmlForPizzaInfo)
};

function showContact (pizzaId) {
  var pizzaDetail = newOrder.selectPizza(pizzaId);
  $("#show-detail").show();
  $(".name").html(pizza.pizzaName);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + pizza.id + ">Delete</button>");
}
function attachContactListeners() {
  $("ul#pizzas").on("click", "li", function(){
    selectPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function(){
    newOrder.deletePizza(this.id);
    $("#show-detail").hide();
    displayPizzaDetails(newOrder);
  });
};



$(document).ready(function(){
  attachContactListeners();

  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    size.push($("#size-select").val());
    console.log(size);
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      toppingQty.push($(this).val());
    })

   var newPizza = new Pizza();
     newPizza.findToppings();
     newPizza.findSize();
     newPizza.findPrice();
     $("#size-select option:selected").text();
     newOrder.addPizza(newPizza);
     console.log(newOrder.pizzas);

    // // $("#price").text(newPizza.pizzaPrice);
    //  $('#selected-toppings').append(toppingQty + "<br>");
    // $('#selected-size').append($("#size-select option:selected").text() + "<br>");
    //  $('#price').append("$" + newPizza.pizzaPrice + "<br>");
    })
  })
//
