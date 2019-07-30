export default class Dollar {
  constructor(public amount: number = 0) {}

  public times(multiplier: number) {
    this.amount *= multiplier;
  }
}
