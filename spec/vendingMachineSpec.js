describe("VendingMachine test", function() {
  var amount;
  var vendingMachine;
  var cola;
  var chips;
  var candy;

  beforeEach(function() {
    amount = new Amount();
    vendingMachine = new VendingMachine();
    cola = jasmine.createSpyObj("cola", {
      _name: "Cola",
      _price: 1.2,
      _quantity: 10
    });

    chips = jasmine.createSpyObj("chips", {
      _name: "Chips",
      _price: 1.8,
      _quantity: 6
    });

    candy = jasmine.createSpyObj("candy", {
      _name: "Candy",
      _price: 1.6,
      _quantity: 15
    });
  });

  it("returns the initialBalance", function() {
    expect(vendingMachine.initialBalance).toBe(0);
  });

  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });

  it("returns the itemList array", function() {
    expect(vendingMachine.itemList).toContain(
      jasmine.objectContaining({
        _name: "Cola",
        _name: "Chips",
        _name: "Candy"
      })
    );
  });

  it("displays all the products", function() {
    var itemList = [cola, chips, candy];
    expect(vendingMachine.displayAllProducts()).toEqual(
      "Cola: $1.2 \nCandy: $1.6 \nChips: $1.8"
    );
  });

  it("returns default balance after press return money", function() {
    expect(vendingMachine.returnMoney()).toBe(0);
  });
});
