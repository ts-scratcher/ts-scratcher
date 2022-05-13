import "../index";
describe("firstOrDefault", () => {
  const arr = [0, 1, 2, 3];
  test("firstOrDefault test", () => {
    expect(arr.firstOrDefault()).toBe(0);
    expect(arr.firstOrDefault((x) => x === 1)).toBe(1);
    expect([].firstOrDefault()).toBeNull();
  });
});
