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
    cola = jasmine.createSpyObj("products", { display: "Cola: $1.2 " });
    candy = jasmine.createSpyObj("products", { display: "Candy: $1.6 " });
    chips = jasmine.createSpyObj("products", { display: "Chips: $1.8 " });
    expect(vendingMachine.displayAllProducts()).toEqual(
      "Cola: $1.2 \nCandy: $1.6 \nChips: $1.8"
    );
  });

  // it("selects the items from the vending machine", function() {
  //   amount.amount.coinCounter;
  //   expect(vendingMachine.selectItem(item)).toBe("Thank you!");
  // });

  it("returns default balance after press return money", function() {
    expect(vendingMachine.returnMoney()).toBe(0);
  });
});
