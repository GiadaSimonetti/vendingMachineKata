function Candy() {
  this.price = 0.65;
}

Candy.prototype.soldOut = function() {
  return "Sorry, candy is not longer available";
};
