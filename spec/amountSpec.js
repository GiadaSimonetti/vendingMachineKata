describe("Amount test", function() {
  var balance;

  beforeEach(function() {
    balance = new Balance();
  });

  it("returns the currentBalance", function() {
    expect(balance.coinSum).toBe(0);
  });

  it("returns the balance of coins as an empty array", function() {
    expect(balance.coinsInserted).toEqual([]);
  });

  it("check if the coin is a penny", function() {
    expect(balance.insertCoins(0.01)).toEqual(
      "No pennies, only  quarters, dimes and nickels"
    );
  });

  it("Add the coin to the coinsAmount array", function() {
    balance.insertCoins(0.25);
    expect(balance.coinsInserted).toEqual([0.25]);
  });

  it("returns the sum of the coin inserted", function() {
    balance.insertCoins(0.25);
    balance.insertCoins(0.1);
    expect(balance.coinSum).toEqual(0.35);
  });

  it("reset the balance of coins as an empty array", function() {
    balance.emptyCoinsAmount();
    expect(balance.coinsInserted).toEqual([]);
  });
});
