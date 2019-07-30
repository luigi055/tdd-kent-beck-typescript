import Franc from "./Franc";

describe("Testing the money example", () => {
  it("Should double the amount of Francs when use the times method by 2", () => {
    const five: Franc = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));
  });

  it("Should always be 5 when you define Franc as 5", () => {
    const five: Franc = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
    expect(five).toEqual(new Franc(5));
  });

  it("should be true if 5 Francs is equal to 5 Francs and false when different than 5$", () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
