import "../index";
describe("toMoney", () => {
  test("toMoney test", () => {
    const num = 123456789.01;
    expect(num.toMoney("EUR1")).toBe("123.456.789,01 €");
    expect(num.toMoney("EUR2")).toBe("123 456 789,01 €");
    expect(num.toMoney("USD")).toBe("$123,456,789.01");
    expect(num.toMoney()).toBe("123,456,789円");
  });
});
