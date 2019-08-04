import Money from "./Money";
import Currency, { Expression } from "./Currency";

import Bank from "./Bank";

describe("Testing the money example", () => {
  it("Should double the amount of the money when use the times method by 2", () => {
    const five: Currency = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
  });

  it("Should always be 5$ when you define it", () => {
    const five: Currency = Money.dollar(5);

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

  it("should return 10$ when sum 5$ plus 5$", () => {
    const five: Currency = Money.dollar(5);
    const sum: Expression = five.plus(Money.dollar(5));
    const bank: Bank = new Bank();
    const reduced = bank.reduce(sum, "USD");

    expect(Money.dollar(10)).toEqual(reduced);
  });
});
