import Expression from "../Expressions/interface";
import Currency from "../Currency";

interface Rates {
  [index: string]: number;
}

export default class Bank {
  private rates: Rates = {};

  reduce(source: Expression, to: string): Currency {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }

    return this.rates[`${from}-${to}`];
  }

  addRate(from: string, to: string, rate: number) {
    this.rates[`${from}-${to}`] = rate;
  }
}
