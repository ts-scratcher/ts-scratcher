Object.defineProperty(Date.prototype, "isValid", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date) {
    if (!this) return false;
    return this instanceof Date && !isNaN(this.getTime());
  },
});
