describe("VendingMachine test", function() {
  let amount;
  var vendingMachine;
  var cola;
  var chips;
  var candy;

  beforeEach(function() {
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

  it("vendingMachine balance starts at 5", function() {
    expect(vendingMachine.currentBalance).toBe(5);
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

  it("selects the items from the vending machine", function() {
    vendingMachine.amount.insertCoins(5);
    expect(vendingMachine.selectItem("Cola")).toBe("Thank you!");
  });

  it("returns error message when balance is too low", function() {
    expect(vendingMachine.selectItem("Cola")).toEqual(
      "You need to insert more coins!"
    );
  });

  it("reduce by 1 the quantity of the item", function() {
    vendingMachine.amount.insertCoins(5);
    vendingMachine.selectItem("Cola");
    expect(vendingMachine.itemList[0]._quantity).toEqual(9);
  });

  it("returns an ampty array after the purchase", function() {
    vendingMachine.amount.insertCoins(5);
    vendingMachine.selectItem("Cola");
    vendingMachine.amount.emptyCoinsAmount();
    expect(vendingMachine.amount.coinsAmount).toEqual([]);
  });

  it("returns inserted coins on cancelPayment", function() {
    vendingMachine.amount.insertCoins(2)
    vendingMachine.cancelPayment()
    expect(vendingMachine.amount.coinsAmount).toEqual([]);
  });
});
