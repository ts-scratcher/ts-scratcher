import "../index";
describe("lastOrDefault", () => {
  const arr = [0, 1, 2, 3];
  test("lastOrDefault test", () => {
    expect(arr.lastOrDefault()).toBe(3);
    expect(arr.lastOrDefault((x) => x < 2)).toBe(1);
    expect([].lastOrDefault()).toBeNull();
  });
});
