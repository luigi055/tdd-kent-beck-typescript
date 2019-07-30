export default class Dollar {
  constructor(private amount: number = 0) {}

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}