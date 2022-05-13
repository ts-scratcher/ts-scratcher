import "../index";
describe("toDateWithJP", () => {
  test("toDateWithJP test", () => {
    expect("2022.05.11".toDateWithJP("yyyy.MM.dd")).toBe("令和4年5月11日");
  });
});
