import "../index";
describe("addHours", () => {
  test("addHours test", () => {
    const dt = new Date(2022, 4, 11, 0);
    expect(dt.addHours(1)).toStrictEqual(new Date(2022, 4, 11, 1));
  });
});
