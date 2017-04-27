//This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"bacon": 0.90, "turkey": 1.50};
  
  // Augment the original object with another method
  maker.addMeat = function(Topping) {
  	console.log("selectedtopping from meat.js", Topping);
  	var meatPrice = 0;
  	console.log("meatPrices", meatPrices);
  	for (i in meatPrices){
  		if(Topping==i){
  			meatPrice=meatPrices[i];
  			console.log("meatPrice", meatPrice);
  		}
  	}
    return meatPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);