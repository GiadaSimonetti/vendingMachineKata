function Products(
  cola = new Cola(),
  chips = new Chips(),
  candy = new Candy()
) {}

Products.prototype.display = function(cola, chips, candy) {
  return (
    "Products: cola" +
    " = $" +
    cola.price +
    ", candy = $" +
    candy.price +
    ", chips = $" +
    chips.price +
    "."
  );
};
