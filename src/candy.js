function Candy() {
  this.price = 0.65;
  this.maxQuantity = 10;
  this.currentQuantity = this.maxQuantity;
}

Candy.prototype.buy = function() {
  return (this.currentQuantity = this.currentQuantity - 1);
};

Candy.prototype.soldOut = function() {
  return "Sorry, candy is not longer available";
};
