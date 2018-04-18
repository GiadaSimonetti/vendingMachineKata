describe("Feature test", function() {
  var vendingMachine;

  beforeEach(function() {
    vendingMachine = new VendingMachine();
  });
  it("returns the currentBalance", function() {
    expect(vendingMachine.currentBalance).toBe(0);
  });
});
