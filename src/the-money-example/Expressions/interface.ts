import Currency from "../Currency";

export default interface Expression {
  augend: Currency;
  addend: Currency;

  reduce(to: string): Currency;
}
