Object.defineProperty(Array.prototype, "take", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, count: number) {
    if (this.length < count) count = this.length;
    const newArray: any = [];
    for (let i = 0; i < count; i++) {
      newArray.push(this[i]);
    }
    return newArray;
  },
});
