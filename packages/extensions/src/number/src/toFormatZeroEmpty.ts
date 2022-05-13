Object.defineProperty(Number.prototype, "toFormatZeroEmpty", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: number,
    locales: string = "ja-JP",
    options: Intl.NumberFormatOptions = { style: "decimal" }
  ) {
    if (!this) return "";
    return this.toFormat(locales, options);
  },
});
