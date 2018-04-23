describe("VendingMachine test", function() {
  var amount;
  var vendingMachine;
  var cola;
  var colaPrice;
  var colaQuantity;
  var chips;
  var chipsPrice;
  var chipsQuantity;
  var candy;
  var candyPrice;
  var candyQuantity;

  beforeEach(function() {
    amount = new Amount();
    vendingMachine = new VendingMachine();
    cola = jasmine.createSpyObj("cola", { _name: "Cola" });
    colaPrice = jasmine.createSpyObj("cola", { _price: 1.2 });
    colaQuantity = jasmine.createSpyObj("cola", { _quantity: 10 });

    chips = jasmine.createSpyObj("chips", { _name: "Chips" });
    chipsPrice = jasmine.createSpyObj("chips", { _price: 1.8 });
    chipsQuantity = jasmine.createSpyObj("chips", { _quantity: 6 });

    candy = jasmine.createSpyObj("candy", { _name: "Candy" });
    candyPrice = jasmine.createSpyObj("candy", { _price: 1.6 });
    candyQuantity = jasmine.createSpyObj("candy", { _quantity: 15 });
  });

  it("returns the initialBalance", function() {
    expect(vendingMachine.initialBalance).toBe(0);
  });

  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });

  it("returns the itemList array", function() {
    console.log(cola);
    console.log(colaPrice);
    console.log(colaQuantity);
    expect(vendingMachine.itemList).toEqual([
    {      cola._name(),
        colaPrice._price(),
        colaQuantity._quantity()},
    {      chips._name(),
        chipsPrice._price(),
        chipsQuantity._quantity()},
    {      candy._name(),
        candyPrice._price(),
        candyQuantity._quantity()}
    ]);
  });

  it("returns default balance after press return money", function() {
    expect(vendingMachine.returnMoney()).toBe(0);
  });
});
