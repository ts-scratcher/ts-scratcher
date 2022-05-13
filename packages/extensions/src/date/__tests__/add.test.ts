import "../index";
describe("add", () => {
  test("add test", () => {
    const dt = new Date(2022, 4, 11);
    expect(dt.add(1, 1, 1)).toStrictEqual(new Date(2023, 5, 12));
  });
});
