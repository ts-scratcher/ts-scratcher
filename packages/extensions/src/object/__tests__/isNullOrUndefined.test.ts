import "../index";
describe("isNullOrUndefined", () => {
  test("null or undefined test", () => {
    expect(Object.isNullOrUndefined(null)).toBe(true);
    expect(Object.isNullOrUndefined(undefined)).toBe(true);
  });

  test("value test", () => {
    expect(Object.isNullOrUndefined("")).toBe(false);
    expect(Object.isNullOrUndefined(0)).toBe(false);
    expect(Object.isNullOrUndefined(" ")).toBe(false);
    expect(Object.isNullOrUndefined(1)).toBe(false);
  });
});
