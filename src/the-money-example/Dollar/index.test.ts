import Dollar from "./Dollar";

describe("Testing the money example", () => {
  it("Should double the amount of dollars when use the times method by 2", () => {
    const five: Dollar = new Dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));
  });

  it("Should always be 5 when you define Dollar as 5", () => {
    const five: Dollar = new Dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
    expect(five).toEqual(new Dollar(5));
  });

  it("should be true if 5$ is equal to 5$ and false when different than 5$", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
