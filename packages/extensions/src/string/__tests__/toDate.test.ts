import "../index";
describe("toDate", () => {
  test("toDate test", () => {
    expect("2022/05/11".toDate("yyyy/MM/dd")).toStrictEqual(
      new Date(2022, 4, 11)
    );

    expect("2022.05.11".toDate("yyyy.MM.dd")).toStrictEqual(
      new Date(2022, 4, 11)
    );

    expect("2022-05-11".toDate("yyyy-MM-dd")).toStrictEqual(
      new Date(2022, 4, 11)
    );

    expect("05-11-2022".toDate("MM-dd-yyyy")).toStrictEqual(
      new Date(2022, 4, 11)
    );
  });
});
