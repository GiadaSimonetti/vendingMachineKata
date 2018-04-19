function Chips() {
  this.price = 0.5;
  this.maxQuantity = 10;
  this.currentQuantity = this.maxQuantity;
}

Chips.prototype.buy = function() {
  return (this.currentQuantity = this.currentQuantity - 1);
};

Chips.prototype.soldOut = function() {
  return "Sorry, chips are not longer available";
};
