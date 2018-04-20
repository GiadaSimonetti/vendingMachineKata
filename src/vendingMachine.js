function VendingMachine() {
  // var cola = new Cola();
  // var chips = new Chips();
  // var candy = new Candy();
  var amount = new Amount();
  this.initialBalance = 0;
  this.currentBalance = 0;
  this.initialiseProducts([
    new Product("Cola", 10, 1.2),
    new Product("Candy", 15, 1.6),
    new Product("Chips", 6, 1.8)
  ]);
}
//
// VendingMachine.prototype.displayProducts = function(cola, chips, candy) {
//   return (
//     "Products: cola" +
//     " = $" +
//     cola.price +
//     ", candy = $" +
//     candy.price +
//     ", chips = $" +
//     chips.price +
//     "."
//   );
// };

VendingMachine.prototype.totalCoinsInserted = function() {
  return amount.sumCoins();
};

VendingMachine.prototype.chooseCola = function(cola) {
  if (cola.currentQuantity === 0) {
    return cola.soldOut();
  } else {
    if (this.totalCoinsInserted() === cola.price) {
      cola.buy();
      this.payCola(cola);
      return "Thank you!";
    } else if (this.totalCoinsInserted() < cola.price) {
      return "Not enough coins, insert more please";
    } else {
      return "CHANGE";
    }
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
