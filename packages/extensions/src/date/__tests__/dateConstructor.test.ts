import "../index";
describe("dateConstructor", () => {
  const nowMock = new Date(2022, 5, 12, 11, 30);

  Date.now = jest.fn(() => nowMock.getTime());

  // new Date() Mock
//   jest.useFakeTimers();
//   jest.setSystemTime(nowMock);  

  test("dtNow test", () => {
    const now = Date.dtNow();
    expect(now).toStrictEqual(nowMock);
  });

  test("dtNow test", () => {
    const now = Date.today();
    expect(now).toStrictEqual(new Date(2022, 5, 12, 0, 0, 0));
  });
});
