Object.defineProperty(Array.prototype, "lastOrDefault", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, predicate?: (x: any) => boolean) {
    let me: Array<any> = this;
    if (predicate) {
      me = me.filter((x) => predicate(x));
    }
    return 0 < me.length ? me[me.length - 1] : null;
  },
});
