import "../index";
describe("getValue", () => {
  test("get value test", () => {
    const fuga = new Fuga();
    expect(Object.getValue(fuga, (x) => x.piyo)).toBe("aaa");
  });
  test("nested path value test", () => {
    const hoge = new Hoge();
    hoge.fuga.piyo = "bbb";
    expect(Object.getValue(hoge, (x) => x.fuga.piyo)).toBe("bbb");
  });
});

class Fuga {
  constructor() {
    this.piyo = "aaa";
  }
  public piyo: string;
}

class Hoge {
  constructor() {
    this.fuga = new Fuga();
  }
  public fuga: Fuga;
}
