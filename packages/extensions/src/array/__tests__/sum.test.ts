import "../index";
describe("sum", () => {
  const arr = [0, 1, 2, 3];

  test("sum test", () => {
    expect(arr.sum()).toBe(6);
    expect(arr.sum((x) => x)).toBe(6);
  });
});
