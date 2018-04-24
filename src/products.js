class Products {
  constructor(name, price, quantity) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  decreaseQuantity(){
    this._quantity--;
  };

  soldOut(){
    return `Sorry! ${this._name} is not longer available`;
  };

  display(){
    return `${this._name}: $${this._price}`;
  };
}
