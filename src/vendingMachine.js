function VendingMachine() {
  var cola = new Cola();
  var chips = new Chips();
  var candy = new Candy();
  this.initialBalance = 0;
  this.currentBalance = 0;
}

VendingMachine.prototype.displayProducts = function(cola, chips, candy) {
  return (
    "Products: cola" +
    " = $" +
    cola.price +
    ", candy = $" +
    candy.price +
    ", chips = $" +
    chips.price +
    "."
  );
};

VendingMachine.prototype.chooseCola = function(cola) {
  cola.buy();
  return (this.currentBalance += cola.price);
};

VendingMachine.prototype.chooseCandy = function(candy) {
  candy.buy();
  return (this.currentBalance += candy.price);
};

VendingMachine.prototype.chooseChips = function(chips) {
  chips.buy();
  return (this.currentBalance += chips.price);
};

VendingMachine.prototype.reset = function() {
  return this.initialBalance;
};

// VendingMachine.prototype.displaySoldOut = function(arguments) {};
