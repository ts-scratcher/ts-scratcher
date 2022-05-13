import { addMonths } from "date-fns";
Object.defineProperty(Date.prototype, "addMonths", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addMonths(this, amount);
  },
});
