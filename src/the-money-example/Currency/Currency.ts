export default abstract class Currency {
  constructor(protected amount: number = 0) {}

  abstract times(multiplier: number): Currency;

  private isTheSameCurrency(currencyNameToCompare: string): boolean {
    return this.constructor.name === currencyNameToCompare;
  }

  public equals(currency: Currency): boolean {
    return (
      this.amount === currency.amount &&
      this.isTheSameCurrency(currency.constructor.name)
    );
  }
}
