Object.defineProperty(String.prototype, "toNumberFormatZeroEmpty", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: string,
    locales?: string,
    options?: Intl.NumberFormatOptions
  ) {
    if (String.isNullOrWhiteSpace(this)) return "";
    const me: number = Number(this);
    return me.toFormat(locales, options);
  },
});
