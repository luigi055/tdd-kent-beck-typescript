export default abstract class Currency {
  constructor(protected amount: number = 0, protected kindOfCurrency: string) {}

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

  public currency(): string {
    return this.kindOfCurrency;
  }
}
