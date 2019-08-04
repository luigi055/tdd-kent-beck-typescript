import Sum from "../Expressions/Sum";
import Expression from "../Expressions/interface";
export default class Currency implements Expression {
  augend: Currency;
  addend: Currency;

  constructor(public amount: number = 0, protected kindOfCurrency: string) {}

  public reduce(to: string) {
    return this;
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
