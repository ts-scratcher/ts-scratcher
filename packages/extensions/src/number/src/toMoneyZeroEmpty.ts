Object.defineProperty(Number.prototype, "toMoneyZeroEmpty", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: number,
    format: "JPY" | "USD" | "EUR1" | "EUR2" = "JPY"
  ) {
    if (!this) return "";
    return this.toMoney(format);
  },
});
