import "../index";
describe("isNullOrEmpty", () => {
  test("null or undefined or empty test", () => {
    const s1: string | null = null;
    expect(String.isNullOrEmpty(s1)).toBe(true);

    const s2: string | undefined = undefined;
    expect(String.isNullOrEmpty(s2)).toBe(true);

    const s3 = "";
    expect(String.isNullOrEmpty(s3)).toBe(true);
  });
});
describe("isNullOrEmpty", () => {
  test("space or string value test", () => {
    const s1: string = "null";
    expect(String.isNullOrEmpty(s1)).toBe(false);

    const s2: string = " ";
    expect(String.isNullOrEmpty(s2)).toBe(false);

    const s3 = "　";
    expect(String.isNullOrEmpty(s3)).toBe(false);
  });
});

describe("isNullOrWhiteSpace", () => {
  test("null or undefined or empty test", () => {
    const s1: string | null = null;
    expect(String.isNullOrWhiteSpace(s1)).toBe(true);

    const s2: string | undefined = undefined;
    expect(String.isNullOrWhiteSpace(s2)).toBe(true);

    const s3 = "";
    expect(String.isNullOrWhiteSpace(s3)).toBe(true);

    const s4 = " ";
    expect(String.isNullOrWhiteSpace(s4)).toBe(true);

    const s5 = "　";
    expect(String.isNullOrWhiteSpace(s5)).toBe(true);
  });
});

describe("isNullOrWhiteSpace", () => {
  test("string value test", () => {
    const s1: string = "null";
    expect(String.isNullOrWhiteSpace(s1)).toBe(false);

    const s2: string = " aaa";
    expect(String.isNullOrWhiteSpace(s2)).toBe(false);
  });
});

describe("split", () => {
  test("split test", () => {
    const s1: string = "a,b,c";
    expect(String.split(s1, ",")).toStrictEqual(["a", "b", "c"]);

    const s2: string | null = null;
    expect(String.split(s2, ",")).toStrictEqual([]);

    const s3: string = "a,b,c";
    expect(String.split(s3, ",", 1)).toStrictEqual(["a"]);
  });
});

describe("toBoolean", () => {
  test("toBoolean test", () => {
    const s1: string = "true";
    expect(String.toBoolean(s1)).toBe(true);

    const s2: string | null = null;
    expect(String.toBoolean(s2)).toBe(false);

    const s3: string = "false";
    expect(String.toBoolean(s3)).toBe(false);

    const s4: string = "aaa";
    expect(String.toBoolean(s4)).toBe(false);
    expect(String.toBoolean(s4, true)).toBe(true);
  });
});
