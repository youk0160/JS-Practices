function pizzaOven(crust, sauce, cheez, tping) {
    var pizza={};
    pizza.crustType=crust;
    pizza.sauceType=sauce;
    pizza.cheeses=cheez;
    pizza.toppings=tping;
    return pizza;
}

var pizza1=pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3=pizzaOven("thin", "alfredo", ["mozzarella", "provolone"], ["mushrooms", "spinach"]);
var pizza4=pizzaOven("stuffed", "barbeque", ["mozzarella", "goat"], ["pineapple", "chicken", "onions"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
