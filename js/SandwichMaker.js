console.log("i am here");

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(topping, toppingPrice) {
      var output = document.getElementById("final-order");
      //output.innerHTML += topping+":"+"$"+Math.round(toppingPrice * 100) / 100+"<br>";
      totalPrice += toppingPrice;
      totalPrice = Math.round(totalPrice * 100) / 100;
      output.innerHTML = "The final sandwich price is $" +totalPrice+"<br>";
    }
  };
})();