import { parse } from "date-fns";
Object.defineProperty(String.prototype, "toDate", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: string, format: string) {
    if (!this) return null;
    try {
      if (!this.isValid(format)) return null;

      const dt = parse(this, format, new Date());
      if (!dt) return null;

      return dt;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },
});
