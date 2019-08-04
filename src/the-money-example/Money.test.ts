import Money from "./Money";
import Expression from "./Expressions/interface";
import Currency from "./Currency";

import Bank from "./Bank";
import Sum from "./Expressions/Sum";

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

  it("should return sum", () => {
    const five = Money.dollar(5);
    const result = five.plus(five);

    const sum = result as Sum;

    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it("should reduce sum", () => {
    const bank: Bank = new Bank();
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));

    const result: Currency = bank.reduce(sum, "USD");

    expect(Money.dollar(7)).toEqual(result);
  });

  it("should reduce Currency", () => {
    const bank: Bank = new Bank();
    const result: Currency = bank.reduce(Money.dollar(1), "USD");

    expect(Money.dollar(1)).toEqual(result);
  });

  it("should reduce money among different correncies", () => {
    const bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result: Currency = bank.reduce(Money.franc(2), "USD");

    expect(Money.dollar(1)).toEqual(result);
  });

  it("should sum two 5 dollars and 10 francs and return 10 dollars when the exchange USD-CHF is 2", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);

    const bank: Bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const result: Currency = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    expect(Money.dollar(10)).toEqual(result);
  });

  it("should test sum after to plus money", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();

    bank.addRate("CHF", "USD", 2);
    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result: Currency = bank.reduce(sum, "USD");

    expect(Money.dollar(15)).toEqual(result);
  });

  it("should sum 5$ and 10 francs and then multiply the value by 2", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();

    bank.addRate("CHF", "USD", 2);
    const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
    const result: Currency = bank.reduce(sum, "USD");

    expect(Money.dollar(20)).toEqual(result);
  });
});
