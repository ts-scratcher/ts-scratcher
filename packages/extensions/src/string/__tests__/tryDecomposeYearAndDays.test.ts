import "../index";
describe("tryDecomposeYearAndDays", () => {
  test("tryDecomposeYearAndDays test", () => {
    expect("".tryDecomposeYearAndDays()).toStrictEqual({
      year: "－",
      month: "－",
      day: "－",
      valid: false,
    });

    expect("2022-02-29".tryDecomposeYearAndDays("yyyy-MM-dd")).toStrictEqual({
      year: "－",
      month: "－",
      day: "－",
      valid: false,
    });


    expect("2024-02-29".tryDecomposeYearAndDays("yyyy-MM-dd")).toStrictEqual({
      year: "2024",
      month: "2",
      day: "29",
      valid: true,
    });

    expect("2022.05.10".tryDecomposeYearAndDays()).toStrictEqual({
      year: "2022",
      month: "5",
      day: "10",
      valid: true,
    });

    expect("2022/05/10".tryDecomposeYearAndDays("yyyy/MM/dd")).toStrictEqual({
      year: "2022",
      month: "5",
      day: "10",
      valid: true,
    });

    expect("2022-05-10".tryDecomposeYearAndDays("yyyy-MM-dd")).toStrictEqual({
      year: "2022",
      month: "5",
      day: "10",
      valid: true,
    });

    expect("05-10-2022".tryDecomposeYearAndDays("MM-dd-yyyy")).toStrictEqual({
      year: "2022",
      month: "5",
      day: "10",
      valid: true,
    });
  });
});
