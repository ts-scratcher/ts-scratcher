Object.defineProperty(String.prototype, "toDefault", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string, de: string = "－") {
      const me: string = this;
      if (String.isNullOrWhiteSpace(me)) return de;
      return this;
    },
  });