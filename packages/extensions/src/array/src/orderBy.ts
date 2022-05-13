Object.defineProperty(Array.prototype, "orderBy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    return this.sort((x, y) => {
      const xx = selector(x);
      const yy = selector(y);

      if (typeof xx === "string" && typeof yy === "string") {
        return yy === xx ? 0 : yy < xx ? 1 : -1;
      }
      return xx - yy;
    });
  },
});

Object.defineProperty(Array.prototype, "orderByDescending", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    return this.orderBy(selector).reverse();
  },
});
