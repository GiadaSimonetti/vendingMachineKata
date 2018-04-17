describe("Feature test", function() {
  var chips;

  beforeEach(function() {
    chips = new Chips();
  });
  it("returns the price of the cola", function() {
    expect(chips.price).toBe(0.5);
  });
});
