Object.defineProperty(Array.prototype, "min", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector?: (value: any) => number) {
    let value: number = 999999999;
    this.forEach((x) => {
      if (selector) {
        const each = selector(x);
        if (value > each) {
          value = each;
        }
      } else {
        if (value > x) {
          value = x;
        }
      }
    });
    return value;
  },
});
