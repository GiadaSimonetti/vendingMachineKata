function VendingMachine() {
  var cola = new Cola();
  var chips = new Chips();
  var candy = new Candy();
  this.initialBalance = 0;
  this.currentBalance = 0;
  this.coinsAmmount = [];
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
  if (cola.soldOut === true) {
    return cola.soldOut;
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
  if (candy.soldOut === true) {
    return candy.soldOut;
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
  if (chips.soldOut === true) {
    return chips.soldOut;
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

VendingMachine.prototype.counter = function(coin) {
  if (coin === 1) {
    return;
  } else {
    return coinsAmmount.push(coin);
  }
};

// VendingMachine.prototype.soldOutItem = function(cola, chips, candy) {
//   if (chips.soldOut) {
//     return chips.soldOut;
//   } else if (candy.soldOut) {
//     return candy.soldOut;
//   } else if (cola.soldOut) {
//     return cola.soldOut;
//   }
// };

// VendingMachine.prototype.displaySoldOut = function(arguments) {};
