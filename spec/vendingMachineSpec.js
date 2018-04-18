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

  it("returns the currentBalance", function() {
    expect(vendingMachine.initialBalance).toBe(0);
  });

  it("returns the ammount of coins as an empty array", function() {
    expect(vendingMachine.ammountCoins).toEqual([]);
  });

  it("displays the products with the price", function() {
    expect(vendingMachine.displayProducts(cola, candy, chips)).toBe(
      "Products: cola = $1, candy = $0.5, chips = $0.65."
    );
  });

  it("returns current balance after choose a cola", function() {
    expect(vendingMachine.chooseCola(cola)).toBe(1);
  });

  it("returns current balance after choose a candy", function() {
    expect(vendingMachine.chooseCandy(candy)).toBe(0.65);
  });

  it("returns current balance after choose a chips", function() {
    expect(vendingMachine.chooseChips(chips)).toBe(0.5);
  });

  it("returns default balance after press reset", function() {
    expect(vendingMachine.reset()).toBe(0);
  });
});
