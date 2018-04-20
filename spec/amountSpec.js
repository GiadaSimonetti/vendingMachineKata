describe("Feature test", function() {
  var amount;

  beforeEach(function() {
    amount = new Amount();
  });

  it("returns the currentBalance", function() {
    expect(amount.coinCounter).toBe(0);
  });

  it("returns the amount of coins as an empty array", function() {
    expect(amount.coinsAmount).toEqual([]);
  });

  it("check if the coin is a penny", function() {
    expect(amount.insertCoins(0.01)).toEqual(
      "No pennies, only  quarters, dimes and nickels"
    );
  });

  it("Add the coin to the coinsAmount array", function() {
    amount.insertCoins(0.25);
    expect(amount.coinsAmount).toEqual([0.25]);
  });

  it("returns the sum of the coin inserted", function() {
    amount.insertCoins(0.25);
    amount.insertCoins(0.1);
    expect(amount.sumCoins()).toEqual(0.35);
  });
});
