function Cola() {
  this.price = 1.0;
  this.maxQuantity = 10;
  this.currentQuantity = this.maxQuantity;
}

Cola.prototype.buy = function() {
  return (this.currentQuantity = this.currentQuantity - 1);
};

Cola.prototype.soldOut = function() {
  if (this.currentQuantity === 0) {
    return "Sorry, cola is not longer available";
  }
};
