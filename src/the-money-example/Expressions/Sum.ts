import Currency from "../Currency";
import Expression from "./interface";
import Bank from "../Bank";

export default class Sum implements Expression {
  public augend: Currency;
  public addend: Currency;

  constructor(augend: Currency, addend: Currency) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Currency {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Currency(amount, to);
  }
}
