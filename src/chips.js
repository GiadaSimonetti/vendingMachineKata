function Chips() {
  this.price = 0.5;
}

Chips.prototype.soldOut = function() {
  return "Sorry, chips are not longer available";
};
