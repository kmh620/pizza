//Create Order
function PizzaOrder() {
  this.pizzas = [],
  this.currentId = 0
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

PizzaOrder.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++){
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

//End Create Order

//Create Pizza
var pizzaName = "";
function Pizza(pizzaName, pizzaToppings, pizzaSize) {
  this.pizzaName = pizzaName,
  this.pizzaToppings = pizzaToppings,
  this.pizzaSize = pizzaSize,
  this.pizzaToppingsCost = 0,
  this.pizzaSizeCost = 0,
  this.pizzaPrice = 0
}

Pizza.prototype.findToppingsCost = function() {
  toppingQty.length;
  this.pizzaToppingsCost += toppingQty.length;
  }

Pizza.prototype.findSizeCost = function() {
  this.pizzaSizeCost += parseInt(size);
  }

Pizza.prototype.findPrice = function() {
  this.pizzaPrice += (this.pizzaToppingsCost + this.pizzaSizeCost)
}
//End Create Pizza

//UI
var newOrder = new PizzaOrder();
var toppingQty = [];
var toppingList = [];
var size = [];


function displayPizzaDetails(newOrderDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  newOrderDisplay.pizzas.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.pizzaName + "</li>";
  });
  pizzaList.html(htmlForPizzaInfo)
};

function showPizzaDetails (pizzaId) {
  var pizza = newOrder.selectPizza(pizzaId);
  $("#show-detail").show();
  $(".pizza-name").html(pizza.pizzaName);
  $(".pizza-size").html(pizza.pizzaSize);
  $(".pizza-toppings").html(pizza.pizzaToppings);
  $(".pizza-price").html("$" + pizza.pizzaPrice);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + pizza.id + ">Delete</button>");
}

function attachPizzaListeners() {
  $("ul#pizzas").on("click", "li", function() {
    showPizzaDetails(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    newOrder.deletePizza(this.id);
    $("#show-detail").hide();
    displayPizzaDetails(newOrder);
  });
};

$(document).ready(function() {
  attachPizzaListeners();
  $("form#new-pizza-order").submit(function(event){
    event.preventDefault();
    var inputPizzaToppings = [];
    var inputPizzaName = $("input#new-pizza-name").val();
    var inputPizzaSize = $("#size-select option:selected").text();
    size.push($("#size-select").val());
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      var toppingCheck = $(this).val();
      inputPizzaToppings.push(toppingCheck);
      toppingList.push(toppingCheck);
      toppingQty.push(toppingCheck);
      })

    $("input#new-pizza-name").val("");

   var newPizza = new Pizza(inputPizzaName, inputPizzaToppings, inputPizzaSize);
     newPizza.findToppingsCost();
     newPizza.findSizeCost();
     newPizza.findPrice();
     $("#size-select option:selected").text();
     $("input:checkbox[name=pizza-topping]:checked").text();
     newOrder.addPizza(newPizza);
     displayPizzaDetails(newOrder);
    })
})
