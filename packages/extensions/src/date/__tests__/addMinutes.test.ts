import "../index";
describe("addMinutes", () => {
  test("addMinutes test", () => {
    const dt = new Date(2022, 4, 11, 0, 0);
    expect(dt.addMinutes(1)).toStrictEqual(new Date(2022, 4, 11, 0, 1));
  });
});
