import Currency from "./Currency";
import Dollar from "./Dollar";
import Franc from "./Franc";

export default class Money {
  static dollar = (amount: number): Currency => new Dollar(amount, "USD");
  static franc = (amount: number): Currency => new Franc(amount, "CHF");
}
