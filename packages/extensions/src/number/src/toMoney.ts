Object.defineProperty(Number.prototype, "toMoney", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: number,
    format: "JPY" | "USD" | "EUR1" | "EUR2" = "JPY"
  ) {
    if (format === "JPY") {
      return this.toFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
        currencyDisplay: "name",
      });
    }
    if (format === "USD") {
      return this.toFormat("en-US", { style: "currency", currency: "USD" });
    }
    if (format === "EUR1") {
      return this.toFormat("de-DE", { style: "currency", currency: "EUR" });
    }
    return this.toFormat("fr-FR", { style: "currency", currency: "EUR" });
  },
});
