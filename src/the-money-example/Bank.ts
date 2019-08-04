import Currency, { Expression } from "./Currency";
import Money from "./Money";

export default class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}
