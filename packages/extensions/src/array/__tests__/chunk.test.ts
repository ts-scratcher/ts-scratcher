import "../index";
describe("chunk", () => {
  const arr = [0, 1, 2, 3];
  test("chunk test", () => {
    const c = arr.chunk(2);
    expect(c[0]).toStrictEqual([0, 1]);
    expect(c[1]).toStrictEqual([2, 3]);

    const c2 = arr.chunk(0);
    expect(c2[0]).toStrictEqual([0]);
    expect(c2[1]).toStrictEqual([1]);
    expect(c2[2]).toStrictEqual([2]);
    expect(c2[3]).toStrictEqual([3]);
  });
});
