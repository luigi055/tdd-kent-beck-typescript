import Currency from "../Currency";

export default class Dollar extends Currency {
  public times(multiplier: number): Currency {
    return new Dollar(this.amount * multiplier);
  }
}
