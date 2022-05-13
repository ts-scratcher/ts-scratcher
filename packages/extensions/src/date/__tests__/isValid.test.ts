import "../index";
describe("isValid", () => {
  test("isValid test", () => {
    expect(new Date("aaa").isValid()).toBe(false);
    expect(new Date("2022/02/28").isValid()).toBe(true);
  });
});
