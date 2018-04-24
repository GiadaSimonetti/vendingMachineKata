class Amount{
  constructor() {
    this.coinCounter = 0;
    this.coinsAmount = [];
  }

  insertCoins(coin){
    if (coin === 0.01) {
      return "No pennies, only  quarters, dimes and nickels";
    } else {
      this.coinsAmount.push(coin);
      this._sumCoins();
    }
  };

  emptyCoinsAmount(){
    return (this.coinsAmount = []);
  };

  _sumCoins(s){
    s = 0;
    for (var i = 0; i < this.coinsAmount.length; i++) {
      s = s + this.coinsAmount[i];
    }
    this.coinCounter = s;
    return this.coinCounter;
  };
}
