import "../index";
describe("selectMany", () => {
  class Hoge {
    constructor(public idList: number[]) {}
  }
  const hogeArr = [new Hoge([0, 1]), new Hoge([2, 3]), new Hoge([4, 5])];

  test("selectMany test", () => {
    expect(hogeArr.selectMany((x) => x.idList)).toStrictEqual([
      0, 1, 2, 3, 4, 5,
    ]);

    const arr = new Array<Hoge>();
    expect(arr.selectMany((x) => x.idList)).toStrictEqual([]);
  });
});
