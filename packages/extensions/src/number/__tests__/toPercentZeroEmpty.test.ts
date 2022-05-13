import "../index";
describe("toPercentZeroEmpty", () => {
  test("toPercentZeroEmpty test", () => {
    const num = 0;
    expect(num.toPercentZeroEmpty()).toBe("");
    expect(num.toPercentZeroEmpty({ min: 2, max: 2 })).toBe("");
  });
});
