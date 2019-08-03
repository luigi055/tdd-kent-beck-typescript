import Currency from "../Currency";
import Money from "../Money";
export default class Franc extends Currency {
  public times(multiplier: number): Currency {
    return Money.franc(this.amount * multiplier);
  }
}
