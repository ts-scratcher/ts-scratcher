Object.defineProperty(String.prototype, "toNumberFormat", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: string,
    locales?: string,
    options?: Intl.NumberFormatOptions
  ) {
    const me: number = Number(this);
    return me.toFormat(locales, options);
  },
});
