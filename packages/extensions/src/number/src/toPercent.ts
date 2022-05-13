Object.defineProperty(Number.prototype, "toPercent", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: number,
    option?: {
      locales?: string;
      min?: number | undefined;
      max?: number | undefined;
    }
  ) {
    if (!option)
      option = {
        locales: Intl.DateTimeFormat().resolvedOptions().locale,
        min: undefined,
        max: undefined,
      };
    return new Intl.NumberFormat(
      option.locales ?? Intl.DateTimeFormat().resolvedOptions().locale,
      {
        style: "percent",
        minimumIntegerDigits: option.min,
        minimumFractionDigits: option.max,
      }
    ).format(this);
  },
});
