Object.defineProperty(Array.prototype, "add", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, item: any) {
    const newMe = [...this];
    newMe.push(item);
    return newMe;
  },
});
Object.defineProperty(Array.prototype, "addRange", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, item: any[]) {
    const newMe = [...this];
    for (let i = 0; i < item.length; i++) {
      newMe.push(item[i]);
    }
    return newMe;
  },
});
