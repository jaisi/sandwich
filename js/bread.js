//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {"wheat": 0.90, "italian": 1.50};
  
  // Augment the original object with another method
  maker.addBread = function(Topping) {
  	console.log("selectedtopping from bread.js", Topping);
  	var breadPrice = 0;
  	console.log("breadPrices", breadPrices);
  	for (i in breadPrices){
  		if(Topping==i){
  			breadPrice=breadPrices[i];
  			console.log("breadPrice", breadPrice);
  		}
  	}
    return breadPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);