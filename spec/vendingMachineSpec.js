describe("Feature test", function() {
  var cola;
  var candy;
  var chips;
  var vendingMachine;

  beforeEach(function() {
    cola = new Cola();
    candy = new Candy();
    chips = new Chips();
    vendingMachine = new VendingMachine();
  });
  it("returns the cola item", function() {
    expect(cola.price).toBe(1.0);
  });

  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });

  it("displays the products with the price", function() {
    expect(vendingMachine.displayProducts(cola, candy, chips)).toBe(
      "Products: cola = $1, candy = $0.5, chips = $0.65."
    );
  });
});
