import "../index";
describe("sequenceEqual", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];
  const fugaArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(9, "dd"),
  ];

  test("sequenceEqual test", () => {
    const copy = [...hogeArr];
    expect(hogeArr.sequenceEqual(copy)).toBe(true);
    expect(copy.sequenceEqual(hogeArr)).toBe(true);

    expect(hogeArr.sequenceEqual(fugaArr)).toBe(false);
    expect(fugaArr.sequenceEqual(hogeArr)).toBe(false);

    let nullArray: Hoge[] | null = new Array<Hoge>();
    nullArray = null;
    // @ts-ignore TS2345: Argument of type 'null' is not assignable to type 'Hoge[]'.
    expect(hogeArr.sequenceEqual(nullArray)).toBe(false);

    expect(hogeArr.sequenceEqual(fugaArr, (x, y) => x.name === y.name)).toBe(
      true
    );
    expect(fugaArr.sequenceEqual(hogeArr, (x, y) => x.name === y.name)).toBe(
      true
    );

    expect(hogeArr.sequenceEqual(fugaArr, (x, y) => x.id === y.id)).toBe(false);
    expect(fugaArr.sequenceEqual(hogeArr, (x, y) => x.id === y.id)).toBe(false);

    expect(
      hogeArr.take(1).sequenceEqual(fugaArr, (x, y) => x.id === y.id)
    ).toBe(false);
  });
});
