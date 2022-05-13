import { parse, isValid, format } from "date-fns";
Object.defineProperty(String.prototype, "isValid", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (this: string, f: string = "yyyy.MM.dd") {
    const me: string = this;
    if (String.isNullOrWhiteSpace(me)) return false;
    try {
      const dt = parse(me, f, new Date());
      const hasError = !isValid(dt);
      if (hasError) return false;

      // It takes advantage of the Date constructor's willingness to interpret 2018-14-29 as 2019-03-01.
      const s = format(dt, f);
      return s === this;
    } catch (error) {
      console.warn(error);
      return false;
    }
  },
});
