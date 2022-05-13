import { addYears } from "date-fns";
Object.defineProperty(Date.prototype, "addYears", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addYears(this, amount);
  },
});
