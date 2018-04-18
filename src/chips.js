function Chips() {
  this.price = 0.5;
  this.maxQuantity = 10;
  this.currentQuantity = this.maxQuantity;
}

Chips.prototype.buy = function() {
  return this.currentQuantity--;
};

Chips.prototype.soldOut = function() {
  if ((this.currentQuantity = 0)) {
    return "Sorry, chips are not longer available";
  }
};
