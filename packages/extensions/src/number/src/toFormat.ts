Object.defineProperty(Number.prototype, "toFormat", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: number,
    locales: string = "",
    options: Intl.NumberFormatOptions = { style: "decimal" }
  ) {
    if (!locales) locales = Intl.DateTimeFormat().resolvedOptions().locale;
    return new Intl.NumberFormat(locales, options).format(this);
  },
});
