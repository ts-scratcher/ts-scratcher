import "../index";
describe("orderBy", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(1, "aaa"),
    new Hoge(0, "bb"),
    new Hoge(3, "ccc"),
    new Hoge(2, "dd"),
  ];

  test("orderBy test", () => {
    const ordered1 = hogeArr.orderBy((x) => x.id);
    expect(ordered1[0]).toStrictEqual(new Hoge(0, "bb"));
    expect(ordered1[1]).toStrictEqual(new Hoge(1, "aaa"));
    expect(ordered1[2]).toStrictEqual(new Hoge(2, "dd"));
    expect(ordered1[3]).toStrictEqual(new Hoge(3, "ccc"));

    const ordered2 = hogeArr.orderBy((x) => x.name);
    expect(ordered2[0]).toStrictEqual(new Hoge(1, "aaa"));
    expect(ordered2[1]).toStrictEqual(new Hoge(0, "bb"));
    expect(ordered2[2]).toStrictEqual(new Hoge(3, "ccc"));
    expect(ordered2[3]).toStrictEqual(new Hoge(2, "dd"));    
  });


  test("orderByDescending test", () => {
    const ordered1 = hogeArr.orderByDescending((x) => x.id);
    expect(ordered1[3]).toStrictEqual(new Hoge(0, "bb"));
    expect(ordered1[2]).toStrictEqual(new Hoge(1, "aaa"));
    expect(ordered1[1]).toStrictEqual(new Hoge(2, "dd"));
    expect(ordered1[0]).toStrictEqual(new Hoge(3, "ccc"));

    const ordered2 = hogeArr.orderByDescending((x) => x.name);
    expect(ordered2[3]).toStrictEqual(new Hoge(1, "aaa"));
    expect(ordered2[2]).toStrictEqual(new Hoge(0, "bb"));
    expect(ordered2[1]).toStrictEqual(new Hoge(3, "ccc"));
    expect(ordered2[0]).toStrictEqual(new Hoge(2, "dd"));    
  });  
});
