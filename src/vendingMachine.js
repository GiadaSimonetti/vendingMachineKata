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

VendingMachine.prototype.displayAllProducts = function() {
  var arr = [];
  for (i = 0; i < this.itemList.length; i++) {
    arr.push(this.itemList[i].display());
  }
  return arr.join(" \n");
};

// VendingMachine.prototype.selectItem = function(item) {
//   var itemIndex = this.itemList.findIndex(x => x._name == item);
//   if (amount.coinCounter >= this.itemList[itemIndex]._price) {
//     return "Thank you!";
//   } else {
//     return "You need to insert more coins!";
//   }
// };

VendingMachine.prototype.returnMoney = function() {
  return this.initialBalance;
};
