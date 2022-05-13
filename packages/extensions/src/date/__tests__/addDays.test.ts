import "../index";
describe("addDays", () => {
  test("addDays test", () => {
    const dt = new Date(2022, 4, 11);
    expect(dt.addDays(1)).toStrictEqual(new Date(2022, 4, 12));
  });
});
