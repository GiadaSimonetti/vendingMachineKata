function Amount() {
  this.coinCounter = 0;
  this.coinsAmount = [];
}

Amount.prototype.insertCoins = function(coin) {
  if (coin === 0.01) {
    return "No pennies, only  quarters, dimes and nickels";
  } else {
    this.coinsAmount.push(coin);
    this._sumCoins();
  }
};

Amount.prototype._sumCoins = function() {
  s = 0;
  for (var i = 0; i < this.coinsAmount.length; i++) {
    s = s + this.coinsAmount[i];
  }
  this.coinCounter = s;
  return this.coinCounter;
};

Amount.prototype.emptyCoinsAmount = function() {
  return (this.coinsAmount = []);
};
