import "../index";
describe("next_previous", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];
  
  test("next test", () => {
    const current = hogeArr.firstOrDefault((x) => x.id === 2);

    const next1 = hogeArr.next(current);
    expect(next1).toStrictEqual(new Hoge(3, "dd"));

    const next2 = hogeArr.next(next1);
    expect(next2).toStrictEqual(new Hoge(0, "aaa"));
    expect(hogeArr.next(next1, false)).toBeNull();
  });

  test("next irregular case", () => {
    const irregularData = new Hoge(3, "ddd");
    const next1 = hogeArr.next(irregularData);
    expect(next1).toBeNull();
  });

  
  test("previous test", () => {
    const current = hogeArr.firstOrDefault((x) => x.id === 1);

    const previous1 = hogeArr.previous(current);
    expect(previous1).toStrictEqual(new Hoge(0, "aaa"));

    const previous2 = hogeArr.previous(previous1);
    expect(previous2).toStrictEqual(new Hoge(3, "dd"));
    expect(hogeArr.previous(previous1, false)).toBeNull();
  });

  test("previous irregular case", () => {
    const irregularData = new Hoge(3, "ddd");
    const previous = hogeArr.previous(irregularData);
    expect(previous).toBeNull();
  });  
});
