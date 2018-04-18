describe("Feature test", function() {
  var cola;

  beforeEach(function() {
    cola = new Cola();
  });
  it("returns the price of the cola", function() {
    expect(cola.price).toBe(1.0);
  });
  it("returns sold out", function() {
    spyOn(cola, "soldOut").and.returnValue(
      "Sorry, cola is not longer available"
    );
    expect(cola.soldOut()).toBe("Sorry, cola is not longer available");
  });
});
