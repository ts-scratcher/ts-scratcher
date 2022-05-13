Object.defineProperty(Array.prototype, "select", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    return this.map(x => selector(x));
  },
});