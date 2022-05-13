import "../index";
describe("add", () => {
  const arr = [0, 1, 2, 3];
  test("add test", () => {
    expect(arr.add(4)).toStrictEqual([0, 1, 2, 3, 4]);
  });

  test("addRange test", () => {
    expect(arr.addRange([4, 5])).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });
});
