export default class Currency {
  constructor(protected amount: number = 0) {}

  public times(multiplier: number): Currency {
    return new Currency(this.amount * multiplier);
  }

  public equals(currency: Currency): boolean {
    return this.amount === currency.amount;
  }
}
