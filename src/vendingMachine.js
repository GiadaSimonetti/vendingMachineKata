function VendingMachine() {
  this.cola = new Cola();
  this.chips = new Chips();
  this.candy = new Candy();
  // this.items = [];
  this.currentBalance = 0;
}

// VendingMachine.prototype.displayProducts = function(this.cola, this.candy, this.chips) {
//   return cola + ": $ " + this.cola.price;
// };
