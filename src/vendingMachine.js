function VendingMachine() {
  var cola = new Cola();
  var chips = new Chips();
  var candy = new Candy();
  var ammount = new Ammount();
  this.initialBalance = 0;
  this.currentBalance = 0;
  // this.coinCounter = 0;
  // this.coinsAmmount = [];
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
  if (cola.currentQuantity === 0) {
    return cola.soldOut();
  } else {
    cola.buy();
    this.payCola(cola);
    return "Thank you!";
  }
};

VendingMachine.prototype.payCola = function(cola) {
  return (this.currentBalance += cola.price);
};

VendingMachine.prototype.chooseCandy = function(candy) {
  if (candy.currentQuantity === 0) {
    return candy.soldOut();
  } else {
    candy.buy();
    this.payCandy(candy);
    return "Thank you!";
  }
};

VendingMachine.prototype.payCandy = function(candy) {
  return (this.currentBalance += candy.price);
};

VendingMachine.prototype.chooseChips = function(chips) {
  if (chips.currentQuantity === 0) {
    return chips.soldOut();
  } else {
    chips.buy();
    this.payChips(chips);
    return "Thank you!";
  }
};

VendingMachine.prototype.payChips = function(chips) {
  return (this.currentBalance += chips.price);
};

VendingMachine.prototype.returnMoney = function() {
  return this.initialBalance;
};
