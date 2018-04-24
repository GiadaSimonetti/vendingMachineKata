describe("Products test", function() {
  var products;
  beforeEach(function() {
    products = new Products("kitKat", 1.5, 30);
  });

  it("returns the quantity less one", function() {
    products.decreaseQuantity();
    expect(products._quantity).toEqual(29);
  });

  it("returns a message if he product is soldOut", function() {
    expect(products.soldOut()).toBe("Sorry! kitKat is not longer available");
  });

  it("displays the products with the price", function() {
    expect(products.display()).toBe("kitKat: $1.5");
  });
});
