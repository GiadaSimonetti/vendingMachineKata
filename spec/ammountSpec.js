describe("Feature test", function() {
  var ammount;

  beforeEach(function() {
    ammount = new Ammount();
  });

  it("returns the currentBalance", function() {
    expect(ammount.coinCounter).toBe(0);
  });

  it("returns the ammount of coins as an empty array", function() {
    expect(ammount.coinsAmmount).toEqual([]);
  });

  it("check if the coin is a penny", function() {
    expect(ammount.insertCoins(0.01)).toEqual(
      "No pennies, only  quarters, dimes and nickels"
    );
  });

  it("Add the coin to the coinsAmmount array", function() {
    ammount.insertCoins(0.25);
    expect(ammount.coinsAmmount).toEqual([0.25]);
  });

  it("returns the sum of the coin inserted", function() {
    ammount.insertCoins(0.25);
    ammount.insertCoins(0.1);
    expect(ammount.sumCoins()).toEqual(0.35);
  });
});
