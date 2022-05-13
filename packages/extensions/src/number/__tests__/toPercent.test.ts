import "../index";
describe("toPercent", () => {
  test("toPercent test", () => {
    const num = 0.523;
    expect(num.toPercent()).toBe("52%");
    expect(num.toPercent({ min: 2, max: 2 })).toBe("52.30%");

    const num2 = 12.5234;
    expect(num2.toPercent({ min: 2, max: 2 })).toBe("1,252.34%");
  });
});
