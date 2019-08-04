import Currency from "../Currency";
import Bank from "../Bank";

export default interface Expression {
  reduce(bank: Bank, to: string): Currency;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}
