Object.defineProperty(Number.prototype, "toPercentZeroEmpty", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: number, option?: {
    locales: string;
    min: number;
    max: number;
  }) {
    if (!this) return "";
    return this.toPercent(option);
  },
});
