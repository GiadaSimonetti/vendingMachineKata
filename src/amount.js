function Amount() {
  this.coinCounter = 0;
  this.coinsAmount = [];
}

Amount.prototype.insertCoins = function(coin) {
  if (coin === 0.01) {
    return "No pennies, only  quarters, dimes and nickels";
  } else {
    this.coinsAmount.push(coin);
    return;
  }
};

Amount.prototype.sumCoins = function() {
  s = 0;
  for (var i = 0; i < this.coinsAmount.length; i++) {
    s = s + this.coinsAmount[i];
  }
  return s;
};

Amount.prototype.emptyCoinsAmmount = function() {
  return (this.coinsAmount = []);
};
