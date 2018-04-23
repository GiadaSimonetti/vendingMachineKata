function VendingMachine() {
  var amount = new Amount();
  this.initialBalance = 0;
  this.currentBalance = 0;
  this.itemList = [
    new Products("Cola", 1.2, 10),
    new Products("Candy", 1.6, 15),
    new Products("Chips", 1.8, 6)
  ];
}

VendingMachine.prototype.totalCoinsInserted = function() {
  return amount.sumCoins();
};

VendingMachine.prototype.returnMoney = function() {
  return this.initialBalance;
};
