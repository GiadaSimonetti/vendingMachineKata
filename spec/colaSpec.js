describe("Feature test", function() {
  var cola;

  beforeEach(function() {
    cola = new Cola();
  });
  it("returns the price of the cola", function() {
    expect(cola.price).toBe(1.0);
  });
});
