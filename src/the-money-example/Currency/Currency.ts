import Sum from "../Expressions/Sum";
import Expression from "../Expressions/interface";
import Bank from "../Bank";
export default class Currency implements Expression {
  augend: Currency;
  addend: Currency;

  constructor(public amount: number = 0, protected kindOfCurrency: string) {}

  public reduce(bank: Bank, to: string) {
    const rate: number = bank.rate(this.kindOfCurrency, to);
    return new Currency(this.amount / rate, to);
  }

  public times(multiplier: number): Currency {
    return new Currency(this.amount * multiplier, this.kindOfCurrency);
  }

  private isTheSameCurrency(currencyNameToCompare: string): boolean {
    return this.kindOfCurrency === currencyNameToCompare;
  }

  public equals(money: Currency): boolean {
    return (
      this.amount === money.amount && this.isTheSameCurrency(money.currency())
    );
  }

  public plus(addend: Currency): Expression {
    return new Sum(this, addend);
  }

  public currency(): string {
    return this.kindOfCurrency;
  }
}
