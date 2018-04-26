class Balance{
  constructor() {
    this.coinSum = 0;
    this.coinsInserted = [];
  }

  insertCoins(coin){
    if (coin === 0.01) {
      return "No pennies, only  quarters, dimes and nickels";
    } else {
      this.coinsInserted.push(coin);
      this._sumCoins();
    }
  };

  emptyCoinsAmount(){
    return (this.coinsInserted = []);
  };

  _sumCoins(s){
    s = 0;
    for (var i = 0; i < this.coinsInserted.length; i++) {
      s = s + this.coinsInserted[i];
    }
    this.coinSum = s;
    return this.coinSum;
  };
}
