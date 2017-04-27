//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {"olives": 0.90, "cucumber": 1.50};
  
  // Augment the original object with another method
  maker.addVeggie = function(Topping) {
  	console.log("selectedtopping from veggies.js", Topping);
  	var veggiePrice = 0;
  	console.log("veggiePrices", veggiePrices);
  	for (i in veggiePrices){
  		if(Topping==i){
  			veggiePrice=veggiePrices[i];
  			console.log("veggiePrice", veggiePrice);
  		}
  	}
    return veggiePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);