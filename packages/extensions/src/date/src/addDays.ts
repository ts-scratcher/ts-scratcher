import { addDays } from "date-fns";
Object.defineProperty(Date.prototype, "addDays", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addDays(this, amount);
  },
});
