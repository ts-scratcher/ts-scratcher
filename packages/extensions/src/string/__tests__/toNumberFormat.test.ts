import "../index";
describe("toNumberFormat", () => {
  test("toNumberFormat test", () => {
    expect("0123456789".toNumberFormat()).toBe("123,456,789");
    expect("0123456789".toNumberFormat("de-DE")).toBe("123.456.789");

    expect("0123456789.12".toNumberFormat()).toBe("123,456,789.12");
    expect("0123456789.12".toNumberFormat("de-DE")).toBe("123.456.789,12");
  });
});
