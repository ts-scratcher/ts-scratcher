import "@ts-scratcher/object";
Object.defineProperty(Array.prototype, "sequenceEqual", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: Array<any>,
    target: Array<any>,
    predicate?: (x1: any, x2: any) => boolean
  ) {
    if (Object.isNullOrUndefined(this) || Object.isNullOrUndefined(target)) {
      return false;
    }

    if (this.length !== target.length) return false;

    let result = true;
    for (let i = 0; i < this.length; i++) {
      const x = this[i];
      const y = target[i];

      if (predicate) {
        if (!predicate(x, y)) {
          result = false;
          break;
        }
      } else {
        if (x !== y) {
          result = false;
          break;
        }
      }
    }
    return result;
  },
});
