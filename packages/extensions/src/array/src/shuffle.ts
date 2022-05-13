Object.defineProperty(Array.prototype, "shuffle", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>) {
    return this.sort(() => Math.random() - 0.5);
  },
});

Object.defineProperty(Array.prototype, "shuffleSlice", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, length: number) {
    return this.shuffle().slice(0, length);
  },
});
