describe("Feature test", function() {
  var candy;

  beforeEach(function() {
    candy = new Candy();
  });
  it("returns the price of the cola", function() {
    expect(candy.price).toBe(0.65);
  });
});
