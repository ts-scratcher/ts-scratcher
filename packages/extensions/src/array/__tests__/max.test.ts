import "../index";
describe("max", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];

  const arr = [0, 1, 2, 3];
  test("max test", () => {
    expect(arr.max()).toBe(3);
    expect(hogeArr.max((x) => x.id)).toBe(3);
  });
});
