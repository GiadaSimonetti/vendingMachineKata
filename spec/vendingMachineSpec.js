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
    expect(vendingMachine.coinsAmmount).toEqual([]);
  });

  it("displays the products with the price", function() {
    expect(vendingMachine.displayProducts(cola, candy, chips)).toBe(
      "Products: cola = $1, candy = $0.5, chips = $0.65."
    );
  });

  it("returns current balance after choose a cola", function() {
    vendingMachine.chooseCola(cola);
    expect(vendingMachine.currentBalance).toBe(1);
  });

  it("returns current quantity after choose a cola", function() {
    vendingMachine.chooseChips(cola);
    expect(cola.currentQuantity).toBe(9);
  });

  it("returns current balance after choose a candy", function() {
    vendingMachine.chooseCandy(candy);
    expect(vendingMachine.currentBalance).toBe(0.65);
  });

  it("returns current quantity after choose a candy", function() {
    vendingMachine.chooseChips(candy);
    expect(candy.currentQuantity).toBe(9);
  });

  it("returns current balance after choose a chips", function() {
    vendingMachine.chooseChips(chips);
    expect(vendingMachine.currentBalance).toBe(0.5);
  });

  it("returns current quantity after choose a chips", function() {
    vendingMachine.chooseChips(chips);
    expect(chips.currentQuantity).toBe(9);
  });

  it("returns default balance after press reset", function() {
    expect(vendingMachine.returnMoney()).toBe(0);
  });
});
