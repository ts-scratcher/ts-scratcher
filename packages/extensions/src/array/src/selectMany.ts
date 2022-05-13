Object.defineProperty(Array.prototype, "selectMany", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, select: (value: any) => any) {
    let newArray = new Array<any>();
    this.forEach((x) => {
      const arr = select(x) as Array<any>;
      if (arr) {
        newArray = [...newArray, ...arr];
      }
    });
    return newArray;
  },
});
