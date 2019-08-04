import Sum from "../Expressions/Sum";
import Expression from "../Expressions/interface";
import Bank from "../Bank";
export default class Currency implements Expression {
  constructor(public amount: number = 0, private currencyType: string) {}

  public reduce(bank: Bank, to: string): Currency {
    const rate: number = bank.rate(this.currencyType, to);
    return new Currency(this.amount / rate, to);
  }

  public times(multiplier: number): Expression {
    return new Currency(this.amount * multiplier, this.currencyType);
  }

  private isTheSameCurrency(currencyNameToCompare: string): boolean {
    return this.currencyType === currencyNameToCompare;
  }

  private isTheSameAmount(amount: number): boolean {
    return this.amount === amount;
  }

  public equals(money: Currency): boolean {
    return (
      this.isTheSameAmount(money.amount) &&
      this.isTheSameCurrency(money.currency())
    );
  }

  public plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  public currency(): string {
    return this.currencyType;
  }
}
