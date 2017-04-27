//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"provolone": 0.90, "swiss": 1.50};
  
  // Augment the original object with another method
  maker.addCheese = function(Topping) {
  	console.log("selectedtopping from cheese.js", Topping);
  	var cheesePrice = 0;
  	console.log("cheesePrices", cheesePrices);
  	for (i in cheesePrices){
  		if(Topping==i){
  			cheesePrice=cheesePrices[i];
  			console.log("cheesePrice", cheesePrice);
  		}
  	}
    return cheesePrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);