import "../index";
describe("toChangeDateString", () => {
  test("toChangeDateString test", () => {
    const s1: string = "";
    expect(s1.toChangeDateString("yyyy-MM-dd", "2022-05-10")).toBe("2022-05-10");

    const s2: string = "2022.05.10";
    expect(s2.toChangeDateString("yyyy-MM-dd")).toBe("2022-05-10");

    const s3: string = "05.10.2022";
    expect(s3.toChangeDateString("yyyy-MM-dd")).toBe("2022-05-10");    

    const s4: string = "2022.05";
    expect(s4.toChangeDateString("yyyy-MM-dd")).toBe("2022-05-01");
  });
});
