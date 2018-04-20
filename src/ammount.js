function Ammount() {
  this.coinCounter = 0;
  this.coinsAmmount = [];
}

Ammount.prototype.insertCoins = function(coin) {
  if (coin === 0.01) {
    return "No pennies, only  quarters, dimes and nickels";
  } else {
    this.coinsAmmount.push(coin);
    return;
  }
};

Ammount.prototype.sumCoins = function() {
  s = 0;
  for (var i = 0; i < this.coinsAmmount.length; i++) {
    s = s + this.coinsAmmount[i];
  }
  return s;
};
