//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {"ketchup": 0.90, "mustard": 1.50};
  
  // Augment the original object with another method
  maker.addCondiments = function(Topping) {
  	console.log("selectedtopping from condiments.js", Topping);
  	var condimentPrice = 0;
  	console.log("condimentsPrices", condimentPrices);
  	for (i in condimentPrices){
  		if(Topping==i){
  			condimentPrice=condimentPrices[i];
  			console.log("condimentPrice", condimentPrice);
  		}
  	}
    return condimentPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);