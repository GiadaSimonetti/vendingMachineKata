function VendingMachine() {
  var cola = new Cola();
  var chips = new Chips();
  var candy = new Candy();
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

// VendingMachine.prototype.displaySoldOut = function(arguments) {};
