export default class Currency {
  constructor(protected amount: number = 0, protected kindOfCurrency: string) {}

  public times(multiplier: number): Currency {
    return new Currency(this.amount * multiplier, this.kindOfCurrency);
  }

  private isTheSameCurrency(currencyNameToCompare: string): boolean {
    return this.kindOfCurrency === currencyNameToCompare;
  }

  public equals(money: Currency): boolean {
    return (
      this.amount === money.amount && this.isTheSameCurrency(money.currency())
    );
  }

  public currency(): string {
    return this.kindOfCurrency;
  }
}
