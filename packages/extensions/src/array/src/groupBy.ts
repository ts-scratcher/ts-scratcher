Object.defineProperty(Array.prototype, "groupBy", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Array<any>, selector: (value: any) => any) {
    const result = new Array<{ Key: any; Values: Array<any> }>();
    this.forEach((value, i) => {
      const groupKey = selector(value);

      if (!result.some((x) => x.Key === groupKey)) {
        result.push({ Key: groupKey, Values: new Array<any>() });
      }
      const item = result.firstOrDefault((x) => x.Key === groupKey);
      item.Values.push(value);
    });
    return result;
  },
});
