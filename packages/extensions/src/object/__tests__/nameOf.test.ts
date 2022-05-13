import "../index";
describe("nameof", () => {
  test("path test", () => {
    expect(Object.nameOf<Fuga>((x) => x.piyo)).toBe("piyo");
  });
  test("nested path test", () => {
    expect(Object.nameOf<Hoge>((x) => x.fuga.piyo)).toBe("fuga.piyo");
  });
});

class Fuga {
  constructor() {
    this.piyo = "";
  }
  public piyo: string;
}

class Hoge {
  constructor() {
    this.fuga = new Fuga();
  }
  public fuga: Fuga;
}
