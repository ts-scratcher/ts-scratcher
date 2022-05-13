import "../index";
describe("toNumberFormatZeroEmpty", () => {
  test("toNumberFormatZeroEmpty test", () => {
    expect("".toNumberFormatZeroEmpty()).toBe("");
    expect("".toNumberFormatZeroEmpty("de-DE")).toBe("");

    expect(" ".toNumberFormatZeroEmpty()).toBe("");
    expect(" ".toNumberFormatZeroEmpty("de-DE")).toBe("");

    expect("　".toNumberFormatZeroEmpty()).toBe("");
    expect("　".toNumberFormatZeroEmpty("de-DE")).toBe("");

    expect("0123456789.12".toNumberFormatZeroEmpty()).toBe("123,456,789.12");
    expect("0123456789.12".toNumberFormatZeroEmpty("de-DE")).toBe("123.456.789,12");
  });
});
