	// Variable to hold the final price. Default to 0.
	var finalSandwichPrice = 0;

	// Variable to hold topping that the user selects
	var selectedTopping;

	// Get a reference to the <select> element that has all the meat options
	var meatChooser = document.getElementById("sel-meat");
	var breadChooser = document.getElementById("sel-bread");
	var cheeseChooser = document.getElementById("sel-cheese");
	var condimentChooser = document.getElementById("sel-condiments");
	var veggieChooser = document.getElementById("sel-veggies");
	var output = document.getElementById("final-order");

	/* 
	  A <select> element broadcasts a change event, so you listen for it
	  and get the value of the topping from your augmented IIFE
	*/
	meatChooser.addEventListener("change", function(event) {
	  // Get the value chosen from the DOM
	  selectedTopping = event.target.value;
	  console.log("selectedTopping", selectedTopping);

	  // Determine the price of the topping chosen
	  price = SandwichMaker.addMeat(selectedTopping, price);
	  

	  // Add the topping to the SandwichMaker to increase the total price
	finalSandwichPrice += price;

	console.log("finalSandwichPrice", finalSandwichPrice);
	SandwichMaker.addTopping(selectedTopping, price);
	});

	breadChooser.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	console.log("selectedTopping", selectedTopping);
	price = SandwichMaker.addBread(selectedTopping);
	finalSandwichPrice += price;
	console.log("finalSandwichPrice", finalSandwichPrice);	
	//output.HTML += selectedTopping +":"+"$"+price+"<br>";
	SandwichMaker.addTopping(selectedTopping, price);
});

	cheeseChooser.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	console.log("selectedTopping", selectedTopping);
	price = SandwichMaker.addCheese(selectedTopping);
	finalSandwichPrice += price;
	console.log("finalSandwichPrice", finalSandwichPrice);	
	output.HTML += selectedTopping +":"+"$"+price+"<br>";
	SandwichMaker.addTopping(selectedTopping, price);
});

	condimentChooser.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	console.log("selectedTopping", selectedTopping);
	price = SandwichMaker.addCondiments(selectedTopping);
	finalSandwichPrice += price;
	console.log("finalSandwichPrice", finalSandwichPrice);	
	output.HTML += selectedTopping +":"+"$"+price+"<br>";
	SandwichMaker.addTopping(selectedTopping, price);
});

	veggieChooser.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	console.log("selectedTopping", selectedTopping);
	price = SandwichMaker.addVeggie(selectedTopping);
	finalSandwichPrice += price;
	console.log("finalSandwichPrice", finalSandwichPrice);	
	output.HTML += selectedTopping +":"+"$"+price+"<br>";
	SandwichMaker.addTopping(selectedTopping, price);
});

















































