function Products(name, quantity, price) {
  this._name = name;
  this._price = price;
  this._quantity = quantity;
}

Products.prototype.buyProduct = function() {
  this._quantity--;
};

Products.prototype.soldOut = function() {
  return `Sorry! This ${this._name} is not longer available`;
};

Products.prototype.display = function() {
  return `${this._name}: $${this._quantity}`;
};
