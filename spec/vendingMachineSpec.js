describe("Feature test", function() {
  var cola;
  var candy;
  var chips;
  var amount;
  var vendingMachine;

  beforeEach(function() {
    cola = new Cola();
    candy = new Candy();
    chips = new Chips();
    amount = new Amount();
    vendingMachine = new VendingMachine();
  });

  // it("returns the cola item", function() {
  //   expect(cola.price).toBe(1.0);
  // });

  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });

  it("returns the initialBalance", function() {
    expect(vendingMachine.initialBalance).toBe(0);
  });

  it("returns the total paid for a cola", function() {
    vendingMachine.payCola(cola);
    expect(vendingMachine.currentBalance).toBe(1);
  });

  it("returns current quantity after choose a cola", function() {
    vendingMachine.chooseCola(cola);
    expect(cola.currentQuantity).toBe(9);
  });

  it("returns 'Thank You!' after choose a cola", function() {
    vendingMachine.payCola(cola);
    cola.buy();
    expect(vendingMachine.chooseCola(cola)).toEqual("Thank you!");
  });

  it("returns the total paid for a candy", function() {
    vendingMachine.payCola(candy);
    expect(vendingMachine.currentBalance).toBe(0.65);
  });

  it("returns current quantity after choose a candy", function() {
    vendingMachine.chooseCandy(candy);
    expect(candy.currentQuantity).toBe(9);
  });

  it("returns 'Thank You!' after choose a candy", function() {
    // candy.currentQuantity = 9;
    vendingMachine.payCola(candy);
    candy.buy();
    expect(vendingMachine.chooseCandy(candy)).toEqual("Thank you!");
  });

  it("returns current quantity after choose chips", function() {
    vendingMachine.chooseChips(chips);
    expect(chips.currentQuantity).toBe(9);
  });

  it("returns the total paid for a chips", function() {
    vendingMachine.payCola(chips);
    expect(vendingMachine.currentBalance).toBe(0.5);
  });

  it("returns 'Thank You!' after choose a chips", function() {
    vendingMachine.payCola(chips);
    chips.buy();
    expect(vendingMachine.chooseChips(chips)).toEqual("Thank you!");
  });

  it("returns default balance after press return money", function() {
    expect(vendingMachine.returnMoney()).toBe(0);
  });
});
