describe("Feature test", function() {
  var products;
  beforeEach(function() {
    products = new Products();
  });
  it("returns the quantity less one", function() {
    products.buyProduct();
    expect(products.itemQuantity).toEqual(9);
  });
  it("returns a message if he product is soldOut", function() {
    expect(products.soldOut()).toBe(
      "Sorry! This product is not longer available"
    );
  });

  it("displays the products with the price", function() {
    spyOn(products, "display").and.returnValue("kitKat, 30, 1.5");
    expect(products.display()).toBe("kitKat = $1.5");
  });
});
