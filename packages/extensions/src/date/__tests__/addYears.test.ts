import "../index";
describe("addYears", () => {
  test("addYears test", () => {
    const dt = new Date(2022, 4, 11);
    expect(dt.addYears(1)).toStrictEqual(new Date(2023, 4, 11));
  });
});
