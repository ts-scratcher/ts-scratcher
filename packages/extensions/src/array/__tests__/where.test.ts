import "../index";
describe("where", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];

  test("where test", () => {
    const arr = hogeArr.where((x) => x.id === 0);
    expect(arr).toStrictEqual([new Hoge(0, "aaa")]);
  });

  test("whereNot test", () => {
    const arr = hogeArr.whereNot((x) => x.id === 0);
    expect(arr).toStrictEqual([
      new Hoge(1, "bb"),
      new Hoge(2, "ccc"),
      new Hoge(3, "dd"),
    ]);
  });

  test("whereNull test", () => {
    // @ts-ignore TS2345
    hogeArr[1].name = null;
    const arr = hogeArr.whereNull((x) => x.name);
    // @ts-ignore TS2345
    expect(arr).toStrictEqual([new Hoge(1, null)]);
  });

  test("whereNull test", () => {
    // @ts-ignore TS2345
    hogeArr[0].name = null;
    // @ts-ignore TS2345
    hogeArr[1].name = null;
    // @ts-ignore TS2345
    hogeArr[2].name = null;

    const arr = hogeArr.whereNotNull((x) => x.name);
    expect(arr).toStrictEqual([new Hoge(3, "dd")]);
  });
});
