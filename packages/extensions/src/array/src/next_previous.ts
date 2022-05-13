Object.defineProperty(Array.prototype, "next", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, current: any, recursive: boolean = true) {
    let { index } = this.indexValue(
      (x) => JSON.stringify(x) === JSON.stringify(current)
    );
    if (index === -1) {
      return null;
    }
    if (this.length <= ++index) {
      if (recursive) {
        index = 0;
      } else {
        return null;
      }
    }
    return this[index];
  },
});
Object.defineProperty(Array.prototype, "previous", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, current: any, recursive: boolean = true) {
    let { index } = this.indexValue(
      (x) => JSON.stringify(x) === JSON.stringify(current)
    );
    if (index === -1) {
      return null;
    }
    if (--index < 0) {
      if (recursive) {
        index = this.length - 1;
      } else {
        return null;
      }
    }
    return this[index];
  },
});
