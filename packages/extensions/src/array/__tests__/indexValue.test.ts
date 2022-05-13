import "../index";
describe("indexValue", () => {
  class Hoge {
    constructor(public name: string) {}
  }
  const arr = [
    new Hoge("aaa"),
    new Hoge("aaa"),
    new Hoge("bbb"),
    new Hoge("ccc"),
  ];
  test("indexValue test", () => {
    expect(arr.indexValue((x) => x.name === "aaa")).toStrictEqual({
      index: 0,
      value: new Hoge("aaa"),
    });

    const newArr = new Array<Hoge>();
    expect(newArr.indexValue((x) => x.name === "ccc")).toStrictEqual({
      index: -1,
    });
  });
});
