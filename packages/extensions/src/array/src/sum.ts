Object.defineProperty(Array.prototype, "sum", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector?: (value: any) => number) {
    let value: number = 0;
    this.forEach((x) => {
      if (selector) {
        value += selector(x);
      } else {
        value += x;
      }
    });
    return value;
  },
});
