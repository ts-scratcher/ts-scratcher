import "../index";
describe("toMoneyZeroEmpty", () => {
  test("toMoneyZeroEmpty test", () => {
    const num = 0;
    expect(num.toMoneyZeroEmpty("EUR1")).toBe("");
    expect(num.toMoneyZeroEmpty("EUR2")).toBe("");
    expect(num.toMoneyZeroEmpty("USD")).toBe("");
    expect(num.toMoneyZeroEmpty()).toBe("");
  });
});
