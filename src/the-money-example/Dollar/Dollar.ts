import Currency from "../Currency";
import Money from "../Money";

export default class Dollar extends Currency {
  public times(multiplier: number): Currency {
    return Money.dollar(this.amount * multiplier);
  }
}
