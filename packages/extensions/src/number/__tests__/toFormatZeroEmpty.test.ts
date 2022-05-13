import "../index";
describe("toFormatZeroEmpty", () => {
  test("toFormatZeroEmpty test", () => {
    const num = 0;
    expect(num.toFormatZeroEmpty()).toBe("");
    expect(num.toFormatZeroEmpty("de-DE")).toBe("");
    expect(num.toFormatZeroEmpty("en-US")).toBe("");
    expect(num.toFormatZeroEmpty("ja-JP")).toBe("");

    expect(num.toFormatZeroEmpty("de-DE", { style: "currency", currency: "EUR" })).toBe(
      ""
    );
    expect(num.toFormatZeroEmpty("en-US", { style: "currency", currency: "USD" })).toBe(
      ""
    );
    expect(num.toFormatZeroEmpty("ja-JP", { style: "currency", currency: "JPY" })).toBe(
      ""
    );
  });
});
