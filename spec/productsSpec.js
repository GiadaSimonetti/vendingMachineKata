describe("Features test", function() {
  var products;
  var cola;
  var candy;
  var chips;

  beforeEach(function() {
    products = new Products();
    cola = new Cola();
    candy = new Candy();
    chips = new Chips();
  });

  it("returns the cola item", function() {
    expect(cola.price).toBe(1.0);
  });

  it("displays the products with the price", function() {
    expect(products.display(cola, candy, chips)).toBe(
      "Products: cola = $1, candy = $0.5, chips = $0.65."
    );
  });
});
