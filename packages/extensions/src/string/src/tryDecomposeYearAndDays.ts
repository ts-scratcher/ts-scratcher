import { parse } from "date-fns";
Object.defineProperty(String.prototype, "tryDecomposeYearAndDays", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: string,
    f: string = "yyyy.MM.dd",
    defaultValue: { year: string; month: string; day: string; valid: boolean }
  ) {
    const me: string = this;
    const errorResult = defaultValue ?? {
      year: "－",
      month: "－",
      day: "－",
      valid: false,
    };
    try {
      const hasError = !me.isValid(f);
      if (hasError) return errorResult;

      const dt = parse(me, f, new Date());
      return {
        year: dt.getFullYear().toString(),
        month: (dt.getMonth() + 1).toString(),
        day: dt.getDate().toString(),
        valid: true,
      };
    } catch (error) {
      console.warn(error);
      return errorResult;
    }
  },
});
