import { addHours } from "date-fns";
Object.defineProperty(Date.prototype, "addHours", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addHours(this, amount);
  },
});
