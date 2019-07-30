export default class Dollar {
  constructor(public amount: number = 0) {}

  public times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
