import "../index";
describe("toFormat", () => {
  test("toFormat test", () => {
    const num = 123456789.01;
    expect(num.toFormat()).toBe("123,456,789.01");
    expect(num.toFormat("de-DE")).toBe("123.456.789,01");
    expect(num.toFormat("en-US")).toBe("123,456,789.01");
    expect(num.toFormat("ja-JP")).toBe("123,456,789.01");

    expect(num.toFormat("de-DE", { style: "currency", currency: "EUR" })).toBe(
      "123.456.789,01 €"
    );
    expect(num.toFormat("en-US", { style: "currency", currency: "USD" })).toBe(
      "$123,456,789.01"
    );
    expect(num.toFormat("ja", { style: "currency", currency: "JPY" })).toBe(
      "￥123,456,789"
    );
  });
});
