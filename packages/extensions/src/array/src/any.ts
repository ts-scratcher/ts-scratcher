Object.defineProperty(Array.prototype, "any", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, predicate?: (value: any) => boolean) {
    if (!predicate) {
      return this.length !== 0;
    }
    return this.some((x) => predicate(x));
  },
});
