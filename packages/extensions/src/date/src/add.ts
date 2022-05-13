Object.defineProperty(Date.prototype, "add", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, years: number, months: number, days: number) {
    return this.addYears(years).addMonths(months).addDays(days);
  },
});
