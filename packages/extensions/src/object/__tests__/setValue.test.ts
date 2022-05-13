import "../index";
describe("setValue", () => {
  test("get value test", () => {
    const fuga = new Fuga();
    const ret = Object.setValue(fuga, (x) => x.piyo, "ccc");
    expect(ret).toBe(true);
    expect(fuga.piyo).toBe("ccc");
  });

  test("nested path value test", () => {
    const hoge = new Hoge();
    const ret = Object.setValue(hoge, (x) => x.fuga?.piyo, "eee");
    expect(ret).toBe(true);
    expect(hoge.fuga?.piyo).toBe("eee");
  });

  test("unable to reach nested paths test", () => {
    const hoge = new Hoge();
    hoge.fuga = undefined;

    const ret = Object.setValue(hoge, (x) => x.fuga?.piyo, "eee");
    expect(ret).toBe(false);
    expect(hoge.fuga).toBeUndefined();
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
  public fuga?: Fuga;
}
