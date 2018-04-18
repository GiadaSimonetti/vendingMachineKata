function Candy() {
  this.price = 0.65;
  this.maxQuantity = 10;
  this.currentQuantity = this.maxQuantity;
}

Candy.prototype.buy = function() {
  return this.currentQuantity--;
};

Candy.prototype.soldOut = function() {
  if ((this.currentQuantity = 0)) {
    return "Sorry, candy is not longer available";
  }
};
