import "../index";
describe("min", () => {
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
  test("min test", () => {
    expect(arr.min()).toBe(0);
    expect(hogeArr.min((x) => x.id)).toBe(0);
  });
});
