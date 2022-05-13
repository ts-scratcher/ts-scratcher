Object.defineProperty(Array.prototype, "max", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector?: (value: any) => number) {
    let value: number = 0;
    this.forEach((x) => {
      if (selector) {
        const each = selector(x);
        if (value < each) {
          value = each;
        }
      } else {
        if (value < x) {
          value = x;
        }
      }
    });
    return value;
  },
});
