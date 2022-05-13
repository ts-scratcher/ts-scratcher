import "../index";
describe("shuffle shuffleSlice", () => {
  class Hoge {
    constructor(public id: number, public name: string) {}
  }
  const hogeArr = [
    new Hoge(0, "aaa"),
    new Hoge(1, "bb"),
    new Hoge(2, "ccc"),
    new Hoge(3, "dd"),
  ];

  test("shuffle test", () => {
    const randomArray = hogeArr.shuffle();
    expect(
      randomArray[0].id === 0 &&
        randomArray[1].id === 1 &&
        randomArray[2].id === 2 &&
        randomArray[3].id === 3
    ).toBe(false);
  });

  test("shuffleSlice test", () => {
    const randomArray = hogeArr.shuffleSlice(3);
    expect(
      randomArray[0].id === 0 &&
        randomArray[1].id === 1 &&
        randomArray[2].id === 2
    ).toBe(false);
  });
});
