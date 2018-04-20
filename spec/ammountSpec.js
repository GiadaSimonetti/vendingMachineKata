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
    ammount.insertCoins(0.25);
    expect(ammount.coinsAmmount).toEqual([]);
  });

  it("returns the sum of the coin inserted", function() {
    expect(ammount.coinsAmmount).toEqual([]);
  });
});
