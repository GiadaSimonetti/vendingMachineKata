function Products(name, price, quantity) {
  this._name = name;
  this._price = price;
  this._quantity = quantity;
}

Products.prototype.decreaseQuantity = function() {
  this._quantity--;
};

Products.prototype.soldOut = function() {
  return `Sorry! ${this._name} is not longer available`;
};

Products.prototype.display = function() {
  return `${this._name}: $${this._price}`;
};
