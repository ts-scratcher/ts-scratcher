Object.defineProperty(Array.prototype, "indexValue", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, predicate: (value: any) => boolean) {
    const error = { index: -1 };
    for (let index = 0; index < this.length; index++) {
      const element = this[index];
      if (predicate(element)) {
        return { index: index, value: element };
      }
    }
    return error;
  },
});
