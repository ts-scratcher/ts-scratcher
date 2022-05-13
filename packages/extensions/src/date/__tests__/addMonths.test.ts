import "../index";
describe("addMonths", () => {
  test("addMonths test", () => {
    const dt = new Date(2022, 4, 11);
    expect(dt.addMonths(1)).toStrictEqual(new Date(2022, 5, 11));
  });
});
