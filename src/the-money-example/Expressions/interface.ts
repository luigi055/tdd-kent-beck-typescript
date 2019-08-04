import Currency from "../Currency";
import Bank from "../Bank";

export default interface Expression {
  augend: Currency;
  addend: Currency;

  reduce(bank: Bank, to: string): Currency;
}
