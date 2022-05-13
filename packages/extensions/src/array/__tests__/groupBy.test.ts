import "../index";
describe("groupBy", () => {
  class Hoge {
    constructor(public name: string) {}
  }
  const arr = [
    new Hoge("aaa"),
    new Hoge("aaa"),
    new Hoge("bbb"),
    new Hoge("ccc"),
  ];
  test("groupBy test", () => {
    const group = arr.groupBy((x) => x.name);

    expect(group.firstOrDefault((x) => x.Key === "aaa").Values.length).toBe(2);
    expect(group.firstOrDefault((x) => x.Key === "bbb").Values.length).toBe(1);
    expect(group.firstOrDefault((x) => x.Key === "ccc").Values.length).toBe(1);
  });
});
