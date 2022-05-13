import "../index";
describe("any", () => {
  const arr = [0, 1, 2, 3];
  test("any test", () => {
    expect(arr.any((x) => x === 4)).toBe(false);
    expect(arr.any((x) => x === 3)).toBe(true);
    expect(arr.any((x) => x >= 1)).toBe(true);
    expect(arr.any()).toBe(true);
    expect([].any()).toBe(false);
  });
});
