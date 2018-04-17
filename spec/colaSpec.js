describe("Feature test", function() {
  var cola;

  before(() => {
    cola = new Cola();
  });
  it("returns the price of the cola", function() {
    expect(cola.price).toBe(1.0);
  });
});
