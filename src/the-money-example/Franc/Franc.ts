export default class Franc {
  constructor(private amount: number = 0) {}

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(dollar: Franc): boolean {
    return this.amount === dollar.amount;
  }
}
