import "../index";
describe("select", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];

  test("select test", () => {
    const arr: { id: number }[] = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
    expect(
      hogeArr.select((x) => {
        return { id: x.id };
      })
    ).toStrictEqual(arr);
  });
});
