import Money from "./Money";
import Franc from "./Franc";
import Dollar from "./Dollar";

describe("Testing the money example", () => {
  it("Should double the amount of the money when use the times method by 2", () => {
    const five: Dollar = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
  });

  it("Should always be 5$ when you define it", () => {
    const five: Dollar = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
    expect(five).toEqual(Money.dollar(5));
  });

  it("should be true if 5$ is equal to 5$ and false when different than 5$", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });

  test("5 Francs should be different to 5 Dollars", () => {
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it("should return USD when you ask to Dollar what kind of currency it is", () => {
    expect(Money.dollar(5).currency()).toBe("USD");
  });

  it("should return CHF when you ask to Franc what is kind of currency it is", () => {
    expect(Money.franc(5).currency()).toBe("CHF");
  });
});
