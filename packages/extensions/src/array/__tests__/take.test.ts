import "../index";
describe("sum", () => {
  const arr = [0, 1, 2, 3];

  test("sum test", () => {
    expect(arr.take(1)).toStrictEqual([0]);
    expect(arr.take(2)).toStrictEqual([0, 1]);
    expect(arr.take(3)).toStrictEqual([0, 1, 2]);
    expect(arr.take(4)).toStrictEqual([0, 1, 2, 3]);
    expect(arr.take(999)).toStrictEqual([0, 1, 2, 3]);
  });
});
