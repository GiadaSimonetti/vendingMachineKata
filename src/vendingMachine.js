class VendingMachine{
  constructor(){
    this.balance = new Balance();
    this.currentBalance = 5;
    this.itemList = [
      new Products("Cola", 1.2, 10),
      new Products("Candy", 1.6, 15),
      new Products("Chips", 1.8, 6)
    ];
  }

  displayAllProducts(i){
    var arr = [];
    for (i = 0; i < this.itemList.length; i++) {
      arr.push(this.itemList[i].display());
    }
    return arr.join(" \n");
  };

  selectItem(item){
    var itemIndex = this.itemList.findIndex(x => x._name == item);
    var product = this.itemList[itemIndex];
    if (product._quantity > 0) {
      if (this.balance.coinSum >= product._price) {
        product.decreaseQuantity();
        this._addPriceToCurrentBalance(product);
        this.balance.emptyCoinsAmount();
        return this._returnChange(product);
      } else {
        return "You need to insert more coins!";
      }
    } else {
      return product.soldOut();
    }
  };

  cancelPayment() {
    this._returnMoney();
    this.balance.emptyCoinsAmount();
    this._resetCoinCounter();
  };

  _returnChange(item) {
    var change = this.balance.coinSum - item._price;
    this.balance.emptyCoinsAmount();
    return `Thank you! $${change} change dispensed.`;
  };

  _addPriceToCurrentBalance(item) {
    return (this.currentBalance += item._price);
  };

  _returnMoney() {
    return this.balance.coinSum;
  };

  _resetCoinCounter() {
    return (this.balance.coinSum = 0);
  };
}
