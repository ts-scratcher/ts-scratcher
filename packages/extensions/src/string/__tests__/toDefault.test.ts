import "../index";
describe("toDefault", () => {
  test("toDefault test", () => {
    expect("".toDefault("empty")).toBe("empty");
    expect(" ".toDefault("empty")).toBe("empty");
    expect("　".toDefault("empty")).toBe("empty");
    expect("".toDefault()).toBe("－");
    expect(" ".toDefault()).toBe("－");
    expect("　".toDefault()).toBe("－");

    expect("a".toDefault()).toBe("a");
    expect("a".toDefault("empty")).toBe("a");
  });
});
