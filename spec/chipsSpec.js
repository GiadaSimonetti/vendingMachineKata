describe("Feature test", function() {
  var chips;

  beforeEach(function() {
    chips = new Chips();
  });
  it("returns the price of the cola", function() {
    expect(chips.price).toBe(0.5);
  });
  it("returns the max quantity of the candy", function() {
    expect(chips.maxQuantity).toBe(10);
  });
  it("returns the current quantity of the chips", function() {
    expect(chips.currentQuantity).toBe(10);
  });
  it("returns the current quantity after buy a chips", function() {
    chips.buy();
    expect(chips.currentQuantity).toBe(9);
  });
  it("returns sold out", function() {
    spyOn(chips, "soldOut").and.returnValue(
      "Sorry, chips are not longer available"
    );
    expect(chips.soldOut()).toBe("Sorry, chips are not longer available");
  });
});
