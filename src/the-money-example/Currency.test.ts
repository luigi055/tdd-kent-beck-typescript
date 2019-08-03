import Currency from "./Currency";
import Franc from "./Franc";
import Dollar from "./Dollar";

describe("Testing the money example", () => {
  it("Should double the amount of the money when use the times method by 2", () => {
    const five: Currency = new Currency(5);

    expect(five.times(2)).toEqual(new Currency(10));
  });

  it("Should always be 5 when you define Currency as 5", () => {
    const five: Currency = new Currency(5);

    expect(five.times(2)).toEqual(new Currency(10));
    expect(five.times(3)).toEqual(new Currency(15));
    expect(five).toEqual(new Currency(5));
  });

  it("should be true if 5 is equal to 5 and false when different than 5", () => {
    expect(new Currency(5).equals(new Currency(5))).toBeTruthy();
    expect(new Currency(5).equals(new Currency(6))).toBeFalsy();
  });

  test("5 Francs should be different to 5 Dollars", () => {
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });
});
