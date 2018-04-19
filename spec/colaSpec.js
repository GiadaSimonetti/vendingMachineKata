describe("Feature test", function() {
  var cola;

  beforeEach(function() {
    cola = new Cola();
  });
  it("returns the price of the cola", function() {
    expect(cola.price).toBe(1.0);
  });
  it("returns sold out", function() {
    expect(cola.soldOut()).toBe("Sorry, cola is not longer available");
  });
});
