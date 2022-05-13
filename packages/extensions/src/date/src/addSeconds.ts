import { addSeconds } from "date-fns";
Object.defineProperty(Date.prototype, "addSeconds", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, amount: number) {
    return addSeconds(this, amount);
  },
});
