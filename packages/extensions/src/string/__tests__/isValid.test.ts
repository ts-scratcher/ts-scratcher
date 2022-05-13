import "../index";
describe("isValid", () => {
  test("isValid test", () => {
    expect("2022.02.29".isValid()).toBe(false);
    expect("2022/02/29".isValid("yyyy/MM/dd")).toBe(false);
    expect("02-29-2022".isValid("MM-dd-yyyy")).toBe(false);

    expect("2024.02.29".isValid()).toBe(true);
    expect("2024/02/29".isValid("yyyy/MM/dd")).toBe(true);
    expect("02-29-2024".isValid("MM-dd-yyyy")).toBe(true);

    expect("a".isValid()).toBe(false);
    expect("".isValid()).toBe(false);
  });
});
