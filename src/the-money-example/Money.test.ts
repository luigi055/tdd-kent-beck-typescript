import Money from "./Money";
import Currency from "./Currency";
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

  it("should be true if 5$ is equal to 5$", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  });

  it("should be false if compare 5$ to 6$", () => {
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

  it("should be equal to the franc instance if pass the same currency Code", () => {
    expect(new Currency(5, "CHF").equals(new Franc(5, "CHF")));
  });
});
