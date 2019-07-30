import Dollar from "./Dollar";

describe("Testing the money example", () => {
  it("Should double the amount of dollars when use the times method by 2", () => {
    const five: Dollar = new Dollar(5);
    five.times(2);

    expect(five.amount).toBe(10);
  });
});
