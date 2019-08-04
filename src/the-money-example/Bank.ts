import Expression from "./Expressions/interface";
import Currency from "./Currency";
import Sum from "./Expressions/Sum";

export default class Bank {
  reduce(source: Expression, to: string): Currency {
    const sum: Sum = source;
    return sum.reduce(to);
  }
}
