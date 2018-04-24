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
  var product = this.itemList[itemIndex]
  if (this.amount.coinCounter == product._price) {
    this.itemList[itemIndex].decreaseQuantity();
    this._addPriceToCurrentBalance(product);
    this.amount.emptyCoinsAmount();
    return "Thank you!";
  } else if (this.amount.coinCounter > product._price){
    this.itemList[itemIndex].decreaseQuantity();
    this._addPriceToCurrentBalance(product);
    return this._returnChange(product)


  } else {
    return "You need to insert more coins!";
  }
};

VendingMachine.prototype._returnChange = function(item){
  var change = this.amount.coinCounter - item._price
  this.amount.emptyCoinsAmount();
  return `$${change} change dispensed`
}

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
