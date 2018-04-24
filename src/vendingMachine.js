function VendingMachine() {
  this.amount = new Amount();
  this.currentBalance = 5;
  this.itemList = [
    new Products("Cola", 1.2, 10),
    new Products("Candy", 1.6, 15),
    new Products("Chips", 1.8, 6)
  ];
}

VendingMachine.prototype.displayAllProducts = function() {
  var arr = [];
  for (i = 0; i < this.itemList.length; i++) {
    arr.push(this.itemList[i].display());
  }
  return arr.join(" \n");
};

VendingMachine.prototype.selectItem = function(item) {
  var itemIndex = this.itemList.findIndex(x => x._name == item);
  if (this.amount.coinCounter >= this.itemList[itemIndex]._price) {
    this.itemList[itemIndex].decreaseQuantity();
    this._addPriceToCurrentBalance(this.itemList[itemIndex]);
    this.amount.emptyCoinsAmount();
    return "Thank you!";
  } else {
    return "You need to insert more coins!";
  }
};

VendingMachine.prototype._addPriceToCurrentBalance = function(item) {
  return (this.currentBalance += item._price);
};

VendingMachine.prototype._returnMoney = function() {
  return this.amount.coinCounter;
};

VendingMachine.prototype._resetCoinCounter = function() {
  return (this.amount.coinCounter = 0);
};

VendingMachine.prototype.cancelPayment = function() {
  this._returnMoney();
  this.amount.emptyCoinsAmount();
  this._resetCoinCounter();
};
