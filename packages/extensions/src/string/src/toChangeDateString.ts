import { format, isValid } from "date-fns";
Object.defineProperty(String.prototype, "toChangeDateString", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function (
    this: string,
    f: string = "yyyy.MM.dd",
    defaultValue: string = "－"
  ) {
    let me: string = this;
    if (String.isNullOrWhiteSpace(me)) return defaultValue;
    try {
      if (me.length === 7) {
        me = me + "/01";
      }

      const date = new Date(me);
      const hasError = !isValid(date);
      if (hasError) {
        return defaultValue;
      }

      return format(date, f);
    } catch (error) {
      return defaultValue;
    }
  },
});
