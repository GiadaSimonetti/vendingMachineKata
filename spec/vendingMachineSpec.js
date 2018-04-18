describe("Feature test", function() {
  // var cola;
  // var candy;
  // var chips;
  var vendingMachine;
  var products;

  beforeEach(function() {
    // cola = new Cola();
    // candy = new Candy();
    // chips = new Chips();
    products = new Products();
    vendingMachine = new VendingMachine(products);
  });
  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });
  it("displays the products with the price", function() {
    expect(vendingMachine.displayProducts(products)).toBe(
      "Products: cola = $1, candy = $0.5, chips = $0.65."
    );
  });
});
