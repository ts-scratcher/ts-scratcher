import { format } from "date-fns";
Object.defineProperty(Date.prototype, "toFormat", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: Date, f: string) {
    return format(this, f);
  },
});
