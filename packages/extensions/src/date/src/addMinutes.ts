import { addMinutes } from "date-fns";
Object.defineProperty(Date.prototype, "addMinutes", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addMinutes(this, amount);
  },
});
