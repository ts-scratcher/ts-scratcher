import "../index";
describe("addSeconds", () => {
  test("addSeconds test", () => {
    const dt = new Date(2022, 4, 11, 0, 0, 0);
    expect(dt.addSeconds(1)).toStrictEqual(new Date(2022, 4, 11, 0, 0, 1));
  });
});
