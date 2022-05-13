Object.defineProperty(String.prototype, "contains", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: string, s: string) {
    const me: string = this;
    if (String.isNullOrWhiteSpace(me)) return false;
    return me.indexOf(s) !== -1;
  },
});
