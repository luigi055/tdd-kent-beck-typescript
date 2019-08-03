import Currency from "./Currency";

export default class Money {
  static dollar = (amount: number): Currency => new Currency(amount, "USD");
  static franc = (amount: number): Currency => new Currency(amount, "CHF");
}
