import "../index";
describe("toHiragana", () => {
  test("toHiragana test", () => {
    expect("今日は！今日は良い天気ですね".toHiragana()).toBe("ははいですね");
  });
});