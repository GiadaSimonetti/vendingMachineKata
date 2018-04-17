describe("Feature test", function() {
  var candy;

  beforeEach(function() {
    candy = new Candy();
  });
  it("returns the price of the cola", function() {
    expect(candy.price).toBe(0.65);
  });
  it("returns sold out", function() {
    expect(candy.soldOut()).toBe("Sorry, candy is not longer available");
  });
});
