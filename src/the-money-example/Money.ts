import Currency from "./Currency";

export default class MoneyFactory {
  static dollar = (amount: number): Currency => new Currency(amount, "USD");
  static franc = (amount: number): Currency => new Currency(amount, "CHF");
}
