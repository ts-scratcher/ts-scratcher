Object.defineProperty(Array.prototype, "where", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, predicate: (value: any) => boolean) {
    return this.filter((value) => predicate(value));
  },
});
Object.defineProperty(Array.prototype, "whereNot", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, predicate: (value: any) => boolean) {
    return this.where((value) => !predicate(value));
  },
});

Object.defineProperty(Array.prototype, "whereNull", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    function predicateNullValue(v: any, selector: (value: any) => any) {
      const p = Object.getValue(v, selector);
      return Object.isNullOrUndefined(p);
    }
    return this.where((value) => predicateNullValue(value, selector));
  },
});
Object.defineProperty(Array.prototype, "whereNotNull", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    function predicateNullValue(v: any, selector: (value: any) => any) {
      const p = Object.getValue(v, selector);
      return Object.isNullOrUndefined(p);
    }
    return this.where((value) => !predicateNullValue(value, selector));
  },
});
