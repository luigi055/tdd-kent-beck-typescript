import Currency from "../Currency";

export default class Franc extends Currency {
  public times(multiplier: number): Currency {
    return new Franc(this.amount * multiplier);
  }
}
