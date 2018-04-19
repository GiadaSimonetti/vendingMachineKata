describe("Feature test", function() {
  var candy;

  beforeEach(function() {
    candy = new Candy();
  });
  it("returns the price of the cola", function() {
    expect(candy.price).toBe(0.65);
  });
  it("returns the max quantity of the candy", function() {
    expect(candy.maxQuantity).toBe(10);
  });
  it("returns the current quantity of the candy", function() {
    expect(candy.currentQuantity).toBe(10);
  });
  it("returns the current quantity after buy a candy", function() {
    candy.buy();
    expect(candy.currentQuantity).toBe(9);
  });
  it("returns sold out", function() {
    expect(candy.soldOut()).toBe("Sorry, candy is not longer available");
  });
});
