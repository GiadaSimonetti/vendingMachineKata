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
  this.itemList.forEach(function(item) {
    arr.push(`${item._name}: $${item._price}`);
  });
  return arr.join(" \n");
};

// VendingMachine.prototype.displayAllProducts = function() {
//   var item;
//   for (i = 0; i < this.itemList.length; i++) {
//     item = `${this.itemList[i]._name}: $${this.itemList[i]._price}`;
//     return item;
//   }
//   return item;
// };

VendingMachine.prototype.returnMoney = function() {
  return this.initialBalance;
};
