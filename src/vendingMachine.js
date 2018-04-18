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

VendingMachine.prototype.buyCola = function(cola) {
  return (this.currentBalance += cola.price);
};

VendingMachine.prototype.buyCandy = function(candy) {
  return (this.currentBalance += candy.price);
};

VendingMachine.prototype.buyChips = function(chips) {
  return (this.currentBalance += chips.price);
};

// VendingMachine.prototype.displaySoldOut = function(arguments) {};
